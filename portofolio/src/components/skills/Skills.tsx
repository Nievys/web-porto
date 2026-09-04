import React from 'react';
import { Container } from '../layout/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { Reveal } from '../ui/Reveal';
import { skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-wrapper">
      <Container>
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Reveal direction="up" delay={50}>
            <SectionLabel number="04" label="Skills & Technologies" />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.45rem, 1.8vw, 2.35rem)',
                fontWeight: 700,
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
              }}
            >
              Categorized technical stack <br />
              <span style={{ color: 'var(--color-primary-light)' }}>focused on modularity & performance.</span>
            </h2>
          </Reveal>
        </div>

        {/* 6 Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.categoryCode} direction="up" delay={idx * 80 + 100} duration={600}>
              <div
                style={{
                  backgroundColor: 'var(--color-surface-cream)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-light)' }}>
                      {cat.categoryCode}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                    {cat.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {cat.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                  {cat.skills.map((skill) => (
                    <Tag
                      key={skill.name}
                      variant={skill.highlight ? 'teal' : 'default'}
                      size="sm"
                    >
                      {skill.name}
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
