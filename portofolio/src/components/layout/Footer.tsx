import React, { useState, useEffect, useRef, useCallback } from 'react';
import Matter from 'matter-js';
import { ArrowUp, RotateCcw, Globe2, X } from 'lucide-react';
import { profile } from '../../data/profile';
import './PhysicsFooter.css';

interface PillConfig {
  id: string;
  label: string;
  variant: 'dark' | 'outlined' | 'light';
  url?: string;
  actionType: 'link' | 'scroll' | 'easteregg' | 'resume';
  scrollTarget?: string;
}

const PILL_ITEMS: PillConfig[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    variant: 'outlined',
    url: `https://www.linkedin.com/in/tyo-indra`,
    actionType: 'link'
  },
  {
    id: 'email',
    label: 'Email',
    variant: 'light',
    url: `mailto:tyoindra2504@gmail.com`,
    actionType: 'link'
  },
  {
    id: 'pigeon',
    label: 'Carrier Pigeon 🕊️',
    variant: 'outlined',
    actionType: 'easteregg'
  },
  {
    id: 'github',
    label: 'GitHub',
    variant: 'dark',
    url: `https://github.com/Nievys`,
    actionType: 'link'
  },
  {
    id: 'telephone',
    label: 'Telephone',
    variant: 'outlined',
    url: `https://wa.me/6289516823435`,
    actionType: 'link'
  },
  {
    id: 'resume',
    label: 'Resume / CV',
    variant: 'light',
    url: profile.resumeUrl,
    actionType: 'resume'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    variant: 'outlined',
    url: `https://www.instagram.com/tyoind25/`,
    actionType: 'link'
  },
  {
    id: 'works',
    label: 'Selected Works ↗',
    variant: 'dark',
    actionType: 'scroll',
    scrollTarget: 'projects'
  }
];

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Drawer state for keyframe-driven bottom-to-top slide transition
  const [isDrawerMounted, setIsDrawerMounted] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isDrawerClosing, setIsDrawerClosing] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const arenaRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLHeadingElement>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  // References to Matter.js instances
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const pillElementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const pillBodiesRef = useRef<Map<string, { body: Matter.Body; w: number; h: number }>>(new Map());
  const wallsRef = useRef<Matter.Body[]>([]);
  const hasInitializedRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const isInitialDropPhaseRef = useRef<boolean>(true);
  const wasOutOfViewRef = useRef<boolean>(false);

  // Live time ticker in Asia/Jakarta (WIB)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const showToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(msg);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate the invisible barrier separating "Let's Talk." from the right pill cluster (Desktop only)
  const getBarrierX = useCallback((width: number): number => {
    if (width < 768) return 0; // No barrier on mobile
    if (!arenaRef.current) return width * 0.58;
    const textEl = giantTextRef.current;
    if (!textEl) return width * 0.58;

    const textRect = textEl.getBoundingClientRect();
    const arenaRect = arenaRef.current.getBoundingClientRect();
    const measuredRight = textRect.right - arenaRect.left + 35;

    return Math.max(Math.min(measuredRight, width - 260), width * 0.52);
  }, []);

  // Drop / Respawn pills:
  // On Desktop: clustered strictly in the right zone.
  // On Mobile: drop from right to left full width across the text!
  const triggerDropAnimation = useCallback(() => {
    if (!arenaRef.current || pillBodiesRef.current.size === 0) return;
    const arena = arenaRef.current;
    const width = arena.clientWidth;
    const isMobile = width < 768;

    const barrierX = getBarrierX(width);
    const count = PILL_ITEMS.length;
    let idx = 0;

    isInitialDropPhaseRef.current = true;
    setTimeout(() => {
      isInitialDropPhaseRef.current = false;
    }, 2200);

    pillBodiesRef.current.forEach(({ body, w }) => {
      let targetX: number;

      if (isMobile) {
        // Mobile: Drop full width distributed from right to left
        const dropZoneWidth = Math.max(100, width - 40);
        const segmentWidth = dropZoneWidth / count;
        // idx = 0 starts from right side, cascading leftwards
        const computedX = width - 20 - (idx * segmentWidth) - (w / 2) + (Math.random() - 0.5) * 15;
        targetX = Math.max(w / 2 + 5, Math.min(width - w / 2 - 5, computedX));
      } else {
        // Desktop: Strictly bounded to the right of Let's Talk.
        const dropZoneStart = barrierX + 25;
        const dropZoneEnd = width - 25;
        const dropZoneWidth = Math.max(160, dropZoneEnd - dropZoneStart);
        const segmentWidth = dropZoneWidth / count;
        targetX = Math.max(
          barrierX + w / 2 + 10,
          Math.min(width - w / 2 - 10, dropZoneStart + idx * segmentWidth + (Math.random() - 0.5) * 20)
        );
      }

      // Staggered Y position above arena
      const targetY = -70 - idx * 55 - Math.random() * 60;
      // Random tilt between -15° and +15° (never upside-down)
      const targetAngle = (Math.random() - 0.5) * 0.45;

      Matter.Body.setPosition(body, { x: targetX, y: targetY });
      Matter.Body.setAngle(body, targetAngle);
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 1.5,
        y: Math.random() * 2 + 1
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.02);
      Matter.Sleeping.set(body, false);

      idx++;
    });
  }, [getBarrierX]);

  // Initialize Matter.js engine, boundaries, and bodies
  const initPhysics = useCallback(() => {
    if (!arenaRef.current || hasInitializedRef.current) return;
    const arena = arenaRef.current;
    const width = arena.clientWidth;
    const height = arena.clientHeight;

    if (width === 0 || height === 0) return;

    const isMobile = width < 768;

    // 1. Create Engine & Runner
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1.05, scale: 0.001 }
    });
    const runner = Matter.Runner.create();

    engineRef.current = engine;
    runnerRef.current = runner;

    // 2. Create Boundaries
    const wallOptions: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      restitution: 0.55,
      friction: 0.35
    };

    const leftWall = Matter.Bodies.rectangle(-25, height / 2, 50, height * 2.5, wallOptions);
    const rightWall = Matter.Bodies.rectangle(width + 25, height / 2, 50, height * 2.5, wallOptions);

    // On mobile: place floor above the two-line "Let's Talk & Connect." text so pills never cover it!
    const textHeight = giantTextRef.current ? giantTextRef.current.offsetHeight : 150;
    const floorY = isMobile ? height - textHeight - 25 : height - 15;
    const floor = Matter.Bodies.rectangle(width / 2, floorY, width * 2, 50, wallOptions);

    const barrierX = getBarrierX(width);
    // On desktop: barrier prevents entering text. On mobile: placed offscreen
    const textBarrier = Matter.Bodies.rectangle(
      isMobile ? -9999 : barrierX - 10,
      height / 2,
      20,
      height * 2.5,
      wallOptions
    );

    const boundaries = [leftWall, rightWall, floor, textBarrier];
    wallsRef.current = boundaries;
    Matter.Composite.add(engine.world, boundaries);

    // 3. Create Pill Bodies
    const count = PILL_ITEMS.length;
    isInitialDropPhaseRef.current = true;
    setTimeout(() => {
      isInitialDropPhaseRef.current = false;
    }, 2200);

    PILL_ITEMS.forEach((item, index) => {
      const el = pillElementsRef.current.get(item.id);
      const measuredWidth = el ? el.offsetWidth : 160;
      const measuredHeight = el ? el.offsetHeight : 46;

      const w = Math.max(120, measuredWidth);
      const h = Math.max(38, measuredHeight);

      let initialX: number;
      if (isMobile) {
        // Mobile: Drop full width from right to left
        const dropZoneWidth = Math.max(100, width - 40);
        const segmentWidth = dropZoneWidth / count;
        const computedX = width - 20 - (index * segmentWidth) - (w / 2) + (Math.random() - 0.5) * 15;
        initialX = Math.max(w / 2 + 5, Math.min(width - w / 2 - 5, computedX));
      } else {
        // Desktop: Right side only
        const dropZoneStart = barrierX + 25;
        const dropZoneEnd = width - 25;
        const dropZoneWidth = Math.max(160, dropZoneEnd - dropZoneStart);
        const segmentWidth = dropZoneWidth / count;
        initialX = Math.max(
          barrierX + w / 2 + 10,
          Math.min(width - w / 2 - 10, dropZoneStart + index * segmentWidth + (Math.random() - 0.5) * 20)
        );
      }

      const initialY = -80 - index * 60 - Math.random() * 70;
      const initialAngle = (Math.random() - 0.5) * 0.45;

      const body = Matter.Bodies.rectangle(initialX, initialY, w, h, {
        chamfer: { radius: h / 2 },
        restitution: 0.55,
        friction: 0.2,
        frictionAir: 0.015,
        density: 0.002,
        angle: initialAngle
      });

      Matter.Composite.add(engine.world, body);
      pillBodiesRef.current.set(item.id, { body, w, h });
    });

    // 4. Synchronization loop with requestAnimationFrame
    let animationFrameId: number;
    const syncLoop = () => {
      // Clamping angle during initial drop to ensure pills never end up upside-down
      if (isInitialDropPhaseRef.current) {
        pillBodiesRef.current.forEach(({ body }) => {
          const maxTilt = 0.65; // ~37 degrees max tilt
          if (body.angle > maxTilt) {
            Matter.Body.setAngle(body, maxTilt);
            Matter.Body.setAngularVelocity(body, Math.min(0, body.angularVelocity));
          } else if (body.angle < -maxTilt) {
            Matter.Body.setAngle(body, -maxTilt);
            Matter.Body.setAngularVelocity(body, Math.max(0, body.angularVelocity));
          }
        });
      }

      pillBodiesRef.current.forEach(({ body, w, h }, id) => {
        const el = pillElementsRef.current.get(id);
        if (el) {
          const x = body.position.x - w / 2;
          const y = body.position.y - h / 2;
          el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${body.angle}rad)`;
          el.style.visibility = 'visible';
        }
      });
      animationFrameId = requestAnimationFrame(syncLoop);
    };

    Matter.Runner.run(runner, engine);
    animationFrameId = requestAnimationFrame(syncLoop);
    hasInitializedRef.current = true;

    return () => {
      cancelAnimationFrame(animationFrameId);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      hasInitializedRef.current = false;
    };
  }, [getBarrierX]);

  // Viewport Intersection Observer: run physics when footer is visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasInitializedRef.current) {
              setTimeout(() => {
                initPhysics();
              }, 60);
            } else {
              if (runnerRef.current) {
                runnerRef.current.enabled = true;
              }
              // If footer comes into view after being out of view, drop the pills again!
              if (wasOutOfViewRef.current) {
                setTimeout(() => {
                  triggerDropAnimation();
                }, 100);
                wasOutOfViewRef.current = false;
              }
            }
          } else {
            if (runnerRef.current) {
              runnerRef.current.enabled = false;
            }
            wasOutOfViewRef.current = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [initPhysics, triggerDropAnimation]);

  // Window Resize handling: update boundaries dynamically
  useEffect(() => {
    const arena = arenaRef.current;
    if (!arena) return;

    const handleResize = () => {
      if (!arenaRef.current || !engineRef.current || wallsRef.current.length < 4) return;
      const width = arenaRef.current.clientWidth;
      const height = arenaRef.current.clientHeight;
      const isMobile = width < 768;

      const [, rightWall, floor, textBarrier] = wallsRef.current;
      const barrierX = getBarrierX(width);

      Matter.Body.setPosition(rightWall, { x: width + 25, y: height / 2 });
      const textHeight = giantTextRef.current ? giantTextRef.current.offsetHeight : 150;
      const floorY = isMobile ? height - textHeight - 25 : height - 15;
      Matter.Body.setPosition(floor, { x: width / 2, y: floorY });
      if (textBarrier) {
        Matter.Body.setPosition(textBarrier, {
          x: isMobile ? -9999 : barrierX - 10,
          y: height / 2
        });
      }

      // Keep pills within bounds
      pillBodiesRef.current.forEach(({ body, w }) => {
        if (!isMobile && body.position.x < barrierX + w / 2) {
          Matter.Body.setPosition(body, { x: barrierX + w / 2 + 10, y: body.position.y });
        } else if (body.position.x > width - 30) {
          Matter.Body.setPosition(body, { x: width - 50, y: body.position.y });
        }
      });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(arena);

    return () => resizeObserver.disconnect();
  }, [getBarrierX]);

  // Track scroll position to update --footer-reveal-progress for gradual soft blur
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const container = containerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height * 0.75)));

          const curtainGroup = container.closest('.skills-footer-curtain-group') as HTMLElement | null;
          if (curtainGroup) {
            curtainGroup.style.setProperty('--footer-reveal-progress', progress.toFixed(3));
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open Contact Drawer instantly with keyframe slide-up animation
  const openDrawer = useCallback(() => {
    // If mobile, smooth scroll to contact instead of drawer
    if (window.innerWidth < 768) {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Explicitly notify navigation that Contact is active while drawer is open
    window.dispatchEvent(new CustomEvent('set-active-section', { detail: 'contact' }));
    window.dispatchEvent(new CustomEvent('contact-drawer-open'));

    setIsDrawerMounted(true);
    setIsDrawerClosing(false);
    setIsDrawerOpen(true);

    setTimeout(() => {
      triggerDropAnimation();
    }, 180);
  }, [triggerDropAnimation]);

  // Close Drawer with smooth slide-down animation and instantly restore active section
  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
    setIsDrawerClosing(true);
    wasOutOfViewRef.current = true;
    window.dispatchEvent(new CustomEvent('contact-drawer-close'));

    // IMMEDIATELY restore active section to whatever is currently visible on screen
    window.dispatchEvent(new CustomEvent('recheck-active-section'));
    window.dispatchEvent(new Event('scroll'));

    setTimeout(() => {
      setIsDrawerMounted(false);
      setIsDrawerClosing(false);
      window.dispatchEvent(new CustomEvent('recheck-active-section'));
    }, 420);
  }, []);

  // Global listener: Open Contact Drawer instantly when clicking Contact from anywhere
  useEffect(() => {
    window.addEventListener('open-contact-drawer', openDrawer);
    window.addEventListener('close-contact-drawer', closeDrawer);

    // Intercept clicks on links pointing to #contact
    const handleContactLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href') === '#contact') {
        e.preventDefault();

        // On mobile: normal smooth scroll directly to contact
        if (window.innerWidth < 768) {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        // On desktop: if already viewing footer, re-drop. Otherwise slide up drawer!
        const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 350;
        if (isNearBottom) {
          triggerDropAnimation();
        } else {
          openDrawer();
        }
      }
    };

    document.addEventListener('click', handleContactLinkClick);

    return () => {
      window.removeEventListener('open-contact-drawer', openDrawer);
      window.removeEventListener('close-contact-drawer', closeDrawer);
      document.removeEventListener('click', handleContactLinkClick);
    };
  }, [openDrawer, closeDrawer, triggerDropAnimation]);

  // Execute Pill Action on Tap/Click
  const handlePillAction = useCallback((item: PillConfig) => {
    switch (item.actionType) {
      case 'link':
        if (item.url) {
          if (item.url.startsWith('mailto:') || item.url.startsWith('tel:')) {
            window.location.assign(item.url);
          } else {
            window.open(item.url, '_blank', 'noopener,noreferrer');
          }
        }
        break;

      case 'scroll':
        if (item.scrollTarget) {
          closeDrawer();
          const targetEl = document.getElementById(item.scrollTarget);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
        break;

      case 'easteregg':
        showToast('🕊️ Burung Merpati pos sedang membawa pesan Anda ke Tyo Indra di Jakarta!');
        break;

      case 'resume':
        if (item.url && item.url.trim() !== '') {
          window.open(item.url, '_blank', 'noopener,noreferrer');
        } else {
          showToast('📄 Link CV Google Drive sedang dipersiapkan oleh Tyo Indra. Silakan hubungi via Email / WhatsApp!');
        }
        break;
    }
  }, [closeDrawer, showToast]);

  // Handle Dragging and Clicking on Pills
  const handlePillPointerDown = useCallback((
    e: React.PointerEvent<HTMLDivElement>,
    item: PillConfig
  ) => {
    const arena = arenaRef.current;
    const bodyEntry = pillBodiesRef.current.get(item.id);
    if (!arena || !bodyEntry) return;

    // Immediately unlock full rotation once user interacts
    isInitialDropPhaseRef.current = false;

    const targetEl = e.currentTarget;
    targetEl.setPointerCapture(e.pointerId);
    targetEl.classList.add('is-dragging');
    isDraggingRef.current = true;

    const { body, w, h } = bodyEntry;
    Matter.Sleeping.set(body, false);

    const startX = e.clientX;
    const startY = e.clientY;
    const startTime = e.timeStamp;
    let hasMoved = false;

    let lastX = e.clientX;
    let lastY = e.clientY;
    let lastTime = e.timeStamp;
    let currentVelX = 0;
    let currentVelY = 0;

    const onPointerMove = (moveEvent: PointerEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      if (Math.hypot(dx, dy) > 6) {
        hasMoved = true;
      }

      const rect = arena.getBoundingClientRect();
      const isMobile = arena.clientWidth < 768;
      const barrierX = getBarrierX(arena.clientWidth);

      // On mobile: can drag anywhere full width. On desktop: bounded right of barrier
      const minX = isMobile ? w / 2 + 5 : barrierX + w / 2 + 5;
      const targetPosX = Math.max(minX, Math.min(arena.clientWidth - w / 2 - 5, moveEvent.clientX - rect.left));

      const textHeight = giantTextRef.current ? giantTextRef.current.offsetHeight : 150;
      const maxY = isMobile ? arena.clientHeight - textHeight - h / 2 - 25 : arena.clientHeight - h / 2 - 5;
      const targetPosY = Math.max(30, Math.min(maxY, moveEvent.clientY - rect.top));

      Matter.Body.setPosition(body, { x: targetPosX, y: targetPosY });

      const now = moveEvent.timeStamp;
      const dt = Math.max(1, now - lastTime);
      currentVelX = ((moveEvent.clientX - lastX) / dt) * 16;
      currentVelY = ((moveEvent.clientY - lastY) / dt) * 16;

      lastX = moveEvent.clientX;
      lastY = moveEvent.clientY;
      lastTime = now;
    };

    const onPointerUp = (upEvent: PointerEvent) => {
      try {
        targetEl.releasePointerCapture(upEvent.pointerId);
      } catch {
        // Ignored if already released
      }
      targetEl.classList.remove('is-dragging');
      isDraggingRef.current = false;

      targetEl.removeEventListener('pointermove', onPointerMove);
      targetEl.removeEventListener('pointerup', onPointerUp);
      targetEl.removeEventListener('pointercancel', onPointerUp);

      const elapsed = upEvent.timeStamp - startTime;

      if (!hasMoved && elapsed < 350) {
        handlePillAction(item);
      } else {
        const clampedVx = Math.max(-28, Math.min(28, currentVelX * 1.1));
        const clampedVy = Math.max(-28, Math.min(28, currentVelY * 1.1));
        Matter.Body.setVelocity(body, { x: clampedVx, y: clampedVy });
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);
      }
    };

    targetEl.addEventListener('pointermove', onPointerMove);
    targetEl.addEventListener('pointerup', onPointerUp);
    targetEl.addEventListener('pointercancel', onPointerUp);
  }, [getBarrierX, handlePillAction]);

  return (
    <>
      {/* Backdrop for Instant Drawer Pop-Up */}
      {isDrawerMounted && (
        <div
          className={`physics-footer__backdrop ${isDrawerOpen ? 'is-active' : ''}`}
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Main Footer & Contact Section */}
      <footer
        ref={containerRef}
        className={`physics-footer ${isDrawerMounted ? 'physics-footer--drawer' : ''} ${isDrawerOpen ? 'is-open' : ''} ${isDrawerClosing ? 'is-closing' : ''}`}
        id="contact"
      >
        {/* Toast Feedback */}
        {toastMessage && (
          <div className="physics-footer__toast">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Bar: Copyright, Time, Slogan & Quick Controls */}
        <div className="physics-footer__topbar">
          <div className="physics-footer__meta-group">
            <div className="physics-footer__copyright">
              <span>© {new Date().getFullYear()} {profile.name}</span>
            </div>

            <div className="physics-footer__time-pill" title="Current Local Time in Jakarta">
              <Globe2 size={13} />
              <span>Jakarta (WIB)</span>
              <span style={{ fontWeight: 700, marginLeft: '0.2rem' }}>
                {currentTime || '00:00:00'}
              </span>
            </div>
          </div>

          <div className="physics-footer__actions">
            <span className="physics-footer__slogan">Hit me up.</span>

            {/* Drop Again Physics Trigger */}
            <button
              onClick={triggerDropAnimation}
              className="physics-footer__btn"
              title="Drop items again from the top"
              aria-label="Drop items again"
            >
              <RotateCcw size={13} />
              <span>Drop Again</span>
            </button>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="physics-footer__btn"
              title="Scroll back to top"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>

            {/* Close Button when opened in Instant Drawer Mode */}
            {isDrawerMounted && (
              <button
                onClick={closeDrawer}
                className="physics-footer__close-btn"
                title="Close Contact Sheet"
                aria-label="Close Contact Sheet"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Physics Arena: Falling, Bouncing & Draggable Capsule Items */}
        <div ref={arenaRef} className="physics-footer__arena">
          {/* Giant Bottom Typography: Let's Talk. (Bold & Extra Large) */}
          <div className="physics-footer__giant-text-wrapper">
            <h1 ref={giantTextRef} className="physics-footer__giant-text">
              Let's Talk <br /> & Connect.
            </h1>
          </div>

          {/* DOM-rendered Pills Synced with Physics Bodies */}
          {PILL_ITEMS.map((item) => (
            <div
              key={item.id}
              ref={(node) => {
                if (node) {
                  pillElementsRef.current.set(item.id, node);
                } else {
                  pillElementsRef.current.delete(item.id);
                }
              }}
              className={`physics-pill physics-pill--${item.variant}`}
              onPointerDown={(e) => handlePillPointerDown(e, item)}
              style={{
                visibility: 'hidden',
                touchAction: 'none'
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${item.label}`}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};
