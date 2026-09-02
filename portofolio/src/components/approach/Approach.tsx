import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Reveal } from '../ui/Reveal';
import { approachSteps } from '../../data/approach';

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="section-wrapper" style={{ backgroundColor: 'var(--color-background-soft)' }}>
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Reveal direction="up" delay={50}>
            <SectionLabel number="05" label="Methodology & Approach" />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 700,
                color: 'var(--color-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em'
              }}
            >
              How I build software: <br />
              <span style={{ color: 'var(--color-primary-light)' }}>from system architecture to pixel refinement.</span>
            </h2>
          </Reveal>
        </div>

        {/* 4-Column Step Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {approachSteps.map((step, idx) => (
            <Reveal key={step.number} direction="up" delay={idx * 120 + 100} duration={650}>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-cream)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
                  boxShadow: 'var(--shadow-subtle)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  {/* Large Numeral & Phase Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '3.25rem',
                        fontWeight: 800,
                        lineHeight: 0.85,
                        color: 'var(--color-primary)',
                        letterSpacing: '-0.05em'
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-primary-dark)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--color-primary)'
                      }}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {step.summary}
                  </p>
                </div>

                {/* Bullet points */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                      <CheckCircle2 size={13} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
