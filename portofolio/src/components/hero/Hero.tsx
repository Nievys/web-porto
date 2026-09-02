import React from 'react';
import { ArrowDownRight, ArrowUpRight, Award } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { HeroBackground } from './HeroBackground';
import { Reveal } from '../ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* 1. Animated Calm Geometric Background */}
      <HeroBackground />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Hero Poster Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
          className="hero-grid"
        >
          {/* Left Column: Big Editorial Typography & Narrative */}
          <Reveal direction="up" delay={100} duration={700}>
            <div
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-inverse)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '2px solid var(--color-primary-dark)'
              }}
            >
              {/* Top Eyebrow Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {/* <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-accent)'
                    }}
                  /> */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase'
                    }}
                  >
                    TYO INDRA — PORTFOLIO
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  JAKARTA, ID
                </span>
              </div>

              {/* Oversized Headline */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
                    fontWeight: 700,
                    lineHeight: 0.98,
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    marginBottom: '1.25rem'
                  }}
                >
                  Building interfaces <br />
                  <span style={{ color: 'var(--color-accent)' }}>that feel as good</span> <br />
                  as they work.
                </h1>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.5,
                    maxWidth: '560px',
                    fontWeight: 400
                  }}
                >
                  Mobile & Frontend Developer crafting high-performance web applications, responsive cross-platform mobile apps, and secure digital platforms.
                </p>
              </div>

              {/* Action Buttons & Tech Highlights */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
                  <Button
                    as="a"
                    href="#projects"
                    variant="accent"
                    size="lg"
                    icon={<ArrowDownRight size={18} />}
                  >
                    View Selected Works
                  </Button>
                  <Button
                    as="a"
                    href="#contact"
                    variant="outline"
                    size="lg"
                    style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
                    icon={<ArrowUpRight size={18} />}
                  >
                    Get in Touch
                  </Button>
                </div>

                {/* Bottom Micro Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(207,218,90,0.12)', borderRadius: '4px' }}>
                    Flutter
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FFFFFF', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                    React.js
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FFFFFF', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                    Next.js
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FFFFFF', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                    Laravel
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(207,218,90,0.12)', borderRadius: '4px' }}>
                    Clean Architecture
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Editorial Poster Composition Block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {/* Card 1: Geometric Lime Block */}
            <Reveal direction="left" delay={250} duration={700} style={{ flex: 1, display: 'flex' }}>
              <div
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary-dark)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  border: '2px solid var(--color-primary-dark)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    FOCUS / SPEC
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    TI©
                  </div>
                </div>

                <div style={{ margin: '1.5rem 0' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
                    ENGINEERING <br />
                    + CRAFT
                  </div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginTop: '0.5rem', opacity: 0.9 }}>
                    Translating design intent into resilient, maintainable codebases.
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid var(--color-primary-dark)', paddingTop: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }}>
                    #285A71 / #CFDA5A
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800 }}>
                    2026
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Academic & Registered Patent Pill */}
            <Reveal direction="left" delay={380} duration={700}>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-cream)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem',
                  border: '2px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>
                    ACADEMIC & CREDENTIALS
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    GPA 3.87 / 4.00
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary)', color: 'var(--color-accent)' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                      Universitas Budi Luhur
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>
                      Informatics, Faculty of Engineering
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
