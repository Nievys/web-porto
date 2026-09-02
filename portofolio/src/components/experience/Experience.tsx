import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { Reveal } from '../ui/Reveal';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper" style={{ backgroundColor: 'var(--color-background-soft)' }}>
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Reveal direction="up" delay={50}>
            <SectionLabel number="03" label="Professional Experience" />
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
              Track record in commercial products, <br />
              <span style={{ color: 'var(--color-primary-light)' }}>freelance delivery & institutional systems.</span>
            </h2>
          </Reveal>
        </div>

        {/* Experience Editorial Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {experiences.map((exp, idx) => (
            <Reveal key={exp.id} direction="up" delay={idx * 120 + 100} duration={650}>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-cream)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  transition: 'border-color var(--transition-fast)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        {exp.role}
                      </h3>
                      <Tag variant="accent" size="sm">{exp.employmentType}</Tag>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>
                      <span>{exp.organization}</span>
                      <span>•</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{exp.location}</span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      backgroundColor: 'var(--color-surface-tint)',
                      border: '1px solid var(--color-border)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                {/* Overview */}
                <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {exp.overview}
                </p>

                {/* Key Deliverables & Responsibilities */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
                    Key Contributions & Engineering Scope
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-text-primary)', lineHeight: 1.55 }}>
                        <CheckCircle2 size={15} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                  {exp.technologies.map((tech) => (
                    <Tag key={tech} variant="default" size="sm">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
