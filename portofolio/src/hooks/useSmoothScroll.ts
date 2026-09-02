import { useEffect } from 'react';

interface SmoothScrollOptions {
  /** Multiplier for distance scrolled per wheel tick (default: 1.05) */
  distanceFactor?: number;
  /** Responsive lerp factor (default: 0.18 for instant, snappy response) */
  ease?: number;
}

/**
 * Optimized smooth scrolling hook:
 * - Detects and bypasses trackpads / precision touchpads (which already have native hardware momentum).
 * - Suppresses CSS `scroll-behavior: smooth` during JS animation to eliminate frame drops and stutter.
 * - Uses responsive easing to prevent input lag.
 */
export function useSmoothScroll({
  distanceFactor = 1.05,
  ease = 0.18
}: SmoothScrollOptions = {}) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isRunning = false;
    let rafId: number | null = null;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const handleNativeScroll = () => {
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    const updateScroll = () => {
      const diff = targetY - currentY;
      currentY += diff * ease;

      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        // Restore CSS smooth scroll
        document.documentElement.style.scrollBehavior = '';
        isRunning = false;
        rafId = null;
        return;
      }

      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(updateScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      // If modal or dialog is open, do not intercept
      if (document.body.style.overflow === 'hidden') return;

      // Detect precision touchpads / trackpads (deltaMode 0 with small fractional or continuous values)
      // Trackpads already have buttery-smooth native momentum; intercepting them causes stutter.
      const isTrackpad = Math.abs(e.deltaY) < 15 && Number.isInteger(e.deltaY) === false;
      if (isTrackpad) return;

      // Check if scrolling inside a scrollable child container
      let element = e.target as HTMLElement | null;
      while (element && element !== document.body && element !== document.documentElement) {
        const style = window.getComputedStyle(element);
        const overflowY = style.overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && element.scrollHeight > element.clientHeight) {
          return;
        }
        element = element.parentElement;
      }

      e.preventDefault();

      // Temporarily set scrollBehavior to 'auto' so CSS doesn't fight RAF
      document.documentElement.style.scrollBehavior = 'auto';

      const delta = e.deltaY * distanceFactor;
      targetY = Math.max(0, Math.min(maxScroll(), targetY + delta));

      if (!isRunning) {
        isRunning = true;
        currentY = window.scrollY;
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleNativeScroll);
      document.documentElement.style.scrollBehavior = '';
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [distanceFactor, ease]);
}
