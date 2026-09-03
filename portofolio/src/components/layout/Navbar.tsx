import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useActiveSection } from '../../hooks/useActiveSection';

interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

function useScrollDirection() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll ke atas -> tampilkan
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scroll ke bawah -> sembunyikan
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showNavbar;
}

const navItems: NavItem[] = [
  { id: 'hero', number: '00', label: 'Intro', href: '#hero' },
  { id: 'about', number: '01', label: 'About', href: '#about' },
  { id: 'projects', number: '02', label: 'Projects', href: '#projects' },
  { id: 'experience', number: '03', label: 'Experience', href: '#experience' },
  { id: 'skills', number: '04', label: 'Stack', href: '#skills' },
  { id: 'contact', number: '05', label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const showNavbar = useScrollDirection();

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 0.3);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerEl = document.getElementById('contact');
      if (!footerEl) return;
      const rect = footerEl.getBoundingClientRect();
      setIsFooterInView(rect.top < window.innerHeight - 40);
    };

    const handleDrawerOpen = () => setIsDrawerOpen(true);
    const handleDrawerClose = () => setIsDrawerOpen(false);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    window.addEventListener('contact-drawer-open', handleDrawerOpen);
    window.addEventListener('contact-drawer-close', handleDrawerClose);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('contact-drawer-open', handleDrawerOpen);
      window.removeEventListener('contact-drawer-close', handleDrawerClose);
    };
  }, []);

  const isLifted = isDrawerOpen || isFooterInView || activeSection === 'contact';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#hero') {
      e.preventDefault();
      if (isDrawerOpen) {
        window.dispatchEvent(new CustomEvent('close-contact-drawer'));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileMenu();
      return;
    }
    if (href === '#contact') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-contact-drawer'));
      closeMobileMenu();
      return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      if (isDrawerOpen) {
        window.dispatchEvent(new CustomEvent('close-contact-drawer'));
      }
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <>
      {/* 1. TOP FLOATING CENTERED ROUNDED HEADER (DESKTOP & MOBILE) */}
      <header className={`top-navbar-capsule ${showNavbar ? '' : 'hidden-nav'}`}>
        {/* Logo Mark & Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: 'var(--nav-logo-size)',
              height: 'var(--nav-logo-size)',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-accent)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--nav-logo-font)',
              border: '1.5px solid var(--color-primary-dark)',
              boxShadow: '0 2px 8px rgba(40, 90, 113, 0.18)',
              flexShrink: 0
            }}
          >
            TI
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'var(--nav-title-font)',
                letterSpacing: '-0.02em',
                color: 'var(--color-primary)',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}
            >
              TYO INDRA
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--nav-subtitle-font)',
                letterSpacing: '0.08em',
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}
            >
              Mobile & Frontend Dev
            </span>
          </div>
        </a>

        {/* Right Status Indicator & Contact Button (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <div
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: 'var(--nav-status-padding)',
              backgroundColor: 'var(--color-surface-cream)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--nav-status-font)',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-primary)'
            }}
          >
            {/* <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 6px #10B981'
              }}
            /> */}
            <span>Jakarta, ID · Available</span>
          </div>

          <Button
            as="a"
            href="#contact"
            variant="accent"
            size="sm"
            className="hide-mobile"
            style={{
              padding: 'var(--nav-btn-padding)',
              fontSize: 'var(--nav-btn-font)'
            }}
            icon={<ArrowUpRight size={13} />}
          >
            Get in Touch
          </Button>
        </div>
      </header>

      {/* 2. SEPARATE FLOATING MOBILE HAMBURGER BUTTON (Khusus Mobile) */}
      <button
        className="hide-desktop"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          position: 'fixed',
          top: '14px',
          right: '14px',
          zIndex: 1001,
          width: '46px',
          height: '46px',
          boxSizing: 'border-box',
          padding: 0,
          backgroundColor: 'rgba(252, 228, 192, 0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-full)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(40, 90, 113, 0.20)',
          flexShrink: 0,
          transform: showNavbar ? 'translate(0, 0)' : 'translate(0, -150%)',
          transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1), background-color var(--transition-fast)'
        }}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* 3. VERTICAL SIDE NAVBAR (FLOATING IN THE MIDDLE SIDES - DESKTOP) */}
      <nav
        className={`hide-mobile side-navbar-container ${isLifted ? 'footer-lifted' : ''}`}
        style={{
          position: 'fixed',
          right: 'clamp(1rem, 1.5vw, 2rem)',
          zIndex: 950,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.55rem'
        }}
        aria-label="Side Navigation"
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 248, 235, 0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1.5px solid var(--color-border-strong)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--side-nav-wrapper-padding)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--side-nav-wrapper-gap)',
            boxShadow: '0 12px 35px rgba(40, 90, 113, 0.15)'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredIndex === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: 'var(--side-nav-link-padding)',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isActive ? 'var(--color-primary)' : isHovered ? 'var(--color-surface-tint)' : 'transparent',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-primary)',
                  transition: 'all var(--transition-fast)'
                }}
                aria-label={`Scroll to ${item.label}`}
              >
                {/* Floating Tooltip Label on Hover / Active */}
                {(isHovered || isActive) && (
                  <span
                    style={{
                      position: 'absolute',
                      right: '100%',
                      marginRight: '0.65rem',
                      backgroundColor: 'var(--color-primary-dark)',
                      color: isActive ? 'var(--color-accent)' : '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--side-nav-tooltip-font)',
                      fontWeight: 700,
                      padding: 'var(--side-nav-tooltip-padding)',
                      borderRadius: 'var(--radius-full)',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 15px rgba(19, 47, 60, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      pointerEvents: 'none',
                      animation: 'fadeInLeft 150ms ease'
                    }}
                  >
                    {item.number} · {item.label}
                  </span>
                )}

                {/* Number Badge / Indicator Dot */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 'var(--side-nav-badge-size)',
                    height: 'var(--side-nav-badge-size)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--side-nav-badge-font)',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {item.number}
                </div>
              </a>
            );
          })}
        </div>
      </nav>

      {/* 4. ANIMATED MOBILE NAVIGATION DRAWER & BACKDROP */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop-anim"
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(19, 47, 60, 0.45)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 990,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '4.75rem 1rem 1.5rem 1rem'
          }}
        >
          <div
            className="mobile-drawer-anim"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--color-surface-cream)',
              border: '2px solid var(--color-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.5rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              boxShadow: '0 20px 45px rgba(19, 47, 60, 0.35)',
              maxHeight: 'calc(100vh - 110px)',
              overflowY: 'auto'
            }}
          >
            {/* Header in Drawer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Navigation Menu
              </span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
            </div>

            {/* Links with staggered visual look */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--color-primary-dark)' : 'var(--color-primary)',
                      backgroundColor: isActive ? 'var(--color-accent)' : 'rgba(243, 222, 194, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: isActive ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                      boxShadow: isActive ? '0 4px 14px rgba(207, 218, 90, 0.35)' : 'none',
                      animation: `menuItemSlideIn 240ms ease ${idx * 40}ms forwards`,
                      opacity: 0
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.8 }}>
                      {item.number}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Bottom Action in Drawer */}
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Button
                as="a"
                href="#contact"
                variant="accent"
                size="md"
                onClick={closeMobileMenu}
                icon={<ArrowUpRight size={16} />}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
