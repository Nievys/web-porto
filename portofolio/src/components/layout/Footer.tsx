import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe2 } from 'lucide-react';
import { Container } from './Container';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-deep)',
        color: 'var(--color-text-inverse)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-xl)',
        borderTop: '2px solid var(--color-primary)'
      }}
    >
      <Container>
        {/* Top Tier: Brand & Navigation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Column 1: Monogram & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary-dark)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.15rem'
                }}
              >
                TI
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.1 }}>
                  {profile.name}
                </h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)' }}>
                  {profile.role}
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, maxWidth: '320px' }}>
              Building thoughtful digital interfaces, cryptographic solutions, and scalable web apps with React, Flutter, and Laravel.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Navigation
            </h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#about" style={{ color: 'rgba(255,255,255,0.8)' }}>01 / About</a></li>
              <li><a href="#projects" style={{ color: 'rgba(255,255,255,0.8)' }}>02 / Selected Works</a></li>
              <li><a href="#experience" style={{ color: 'rgba(255,255,255,0.8)' }}>03 / Experience</a></li>
              <li><a href="#skills" style={{ color: 'rgba(255,255,255,0.8)' }}>04 / Tech Stack</a></li>
              <li><a href="#approach" style={{ color: 'rgba(255,255,255,0.8)' }}>05 / Approach</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255,255,255,0.8)' }}>06 / Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Live Time & Local Zone */}
          <div>
            <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Location & Time
            </h5>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Globe2 size={15} color="var(--color-accent)" />
                <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>Jakarta, Indonesia</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                {currentTime || '00:00:00'} <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>WIB (UTC+7)</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>
                Currently available for selected projects & roles
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Scroll to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} Tyo Indra. Made with Love and Jasmine Blooming Tea (Less Sugar).
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--color-accent)',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
};
