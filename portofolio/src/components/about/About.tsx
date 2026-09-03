import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { Reveal } from '../ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: 'var(--color-background-soft)' }}>
      <Container>
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <SectionLabel number="01" label="About & Background" />
        </Reveal>

        {/* Main Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Big Typographic Statement & Biography */}
          <Reveal direction="up" delay={150}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-primary)',
                  marginBottom: '1.75rem'
                }}
              >
                Turning ideas into interfaces that are <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--color-accent)', textUnderlineOffset: '6px' }}>clear, resilient</span>, and built to scale.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                <p>
                  I am a <strong>Mobile and Fronted Developer</strong> with a Bachelor's degree in Informatics Engineering from <strong>Universitas Budi Luhur</strong> (GPA 3.87/4.00). My development approach spans multiple layers of modern digital platforms from intuitive, responsive frontend interfaces to cross-platform mobile apps and secure backend API integrations.
                </p>
                <p>
                  Having worked on commercial products at <strong>CV Gamacom Tritama</strong>, faculty-led community IoT initiatives, and independent enterprise solutions, I emphasize Clean Code principles, modular component architecture, and cryptographic data security (AES-256 client decryption).
                </p>
                <p>
                  My background in <strong>graphic and motion design</strong> at the Directorate of Student Affairs (DKKA) gives me an eye for typography, visual hierarchy, and spatial rhythm ensuring every screen feels purposeful rather than arbitrarily assembled.
                </p>
              </div>

              {/* Quick Competency Badges */}
              <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Tag variant="teal">Clean Architecture</Tag>
                <Tag variant="default">Cross-Platform UI</Tag>
                {/* <Tag variant="default">Client Decryption (AES-256)</Tag> */}
                <Tag variant="accent">IoT Telemetry Integration</Tag>
                <Tag variant="default">API Contract Testing</Tag>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Credentials & Registered Patent Spotlight */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Education Card */}
            <Reveal direction="left" delay={320}>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem 1.75rem',
                  border: '1.5px solid var(--color-primary-dark)',
                  color: 'var(--color-primary-dark)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-primary)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-inverse)',
                    flexShrink: 0
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                      Universitas Budi Luhur
                    </h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-inverse)', backgroundColor: 'var(--color-primary)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                      GPA 3.87 / 4.00
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                    Bachelor of Informatics Engineering (2022 — 2026)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    Ciledug, Jakarta Selatan · Focus on Mobile & Web Application Engineering, Distributed Systems, and UI/UX Design.
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Patent Highlight Block */}
            <Reveal direction="left" delay={200}>
              <div
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  border: '2px solid var(--color-primary-dark)',
                  boxShadow: 'var(--shadow-card)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      backgroundColor: 'rgba(207,218,90,0.15)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '99px',
                      border: '1px solid var(--color-accent)'
                    }}
                  >
                    OFFICIAL PATENT & IP
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                    Oct 14, 2024
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '0.75rem' }}>
                  Aplikasi Keuangan Yayasan Pendidikan Islam Ece Hidayat
                </h3>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                  Registration No: EC002024205304
                </div>

                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                  Officially issued intellectual property by the Ministry of Law and Human Rights (Kemenkumham RI) for automated institutional ledger balance, expense monitoring, and fiscal audit reporting.
                </p>
              </div>
            </Reveal>

            {/* Design & Motion Graphic Experience Note */}
            {/* <Reveal direction="left" delay={440}>
              <div
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem 1.75rem',
                  border: '1.5px solid var(--color-primary-dark)',
                  color: 'var(--color-primary-dark)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Palette size={18} />
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700 }}>
                    Design Sensibility Meets Clean Engineering
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, opacity: 0.95 }}>
                  Having served as a Graphics & Motion Designer for Universitas Budi Luhur DKKA, I bridge the gap between Figma design systems and production-ready code with pixel precision and fluid responsiveness.
                </p>
              </div>
            </Reveal> */}
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
