import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently visible in the viewport.
 * Automatically updates activeSection ID (e.g., 'hero', 'about', 'projects', etc.)
 * Supports instant rechecking and manual overrides for modal drawers.
 */
export function useActiveSection(sectionIds: string[], offsetPercent = 0.35): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;

      // If user reached the very bottom of the page, activate last section (contact)
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isNearBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          // If the footer is currently opened as a fixed drawer overlay,
          // ignore its fixed viewport coordinates so it doesn't hijack page scroll detection
          if (element.classList.contains('physics-footer--drawer')) {
            continue;
          }

          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top - 20) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    // Event listener for manual active section override (e.g., when opening Contact drawer)
    const handleManualOverride = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveSection(customEvent.detail);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('recheck-active-section', handleScroll);
    window.addEventListener('set-active-section', handleManualOverride as EventListener);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('recheck-active-section', handleScroll);
      window.removeEventListener('set-active-section', handleManualOverride as EventListener);
    };
  }, [sectionIds, offsetPercent]);

  return activeSection;
}
