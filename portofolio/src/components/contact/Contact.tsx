import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { profile } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <Container>
        <Reveal direction="up" delay={100} duration={700}>
          <div
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.75rem, 3.5vw, 3rem)',
              border: '2px solid var(--color-primary-dark)',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Section Eyebrow */}
            <div style={{ marginBottom: '1.5rem' }}>
              <SectionLabel number="06" label="Get in Touch" variant="light" />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '2.5rem',
                alignItems: 'start'
              }}
              className="contact-grid"
            >
              {/* Left Column: Big Statement */}
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.85rem, 3vw, 3rem)',
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    marginBottom: '1.25rem'
                  }}
                >
                  Have an idea worth building? <br />
                  <span style={{ color: 'var(--color-accent)' }}>Let's work together.</span>
                </h2>

                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.6,
                    maxWidth: '520px',
                    marginBottom: '2rem'
                  }}
                >
                  Whether you're looking for a Frontend Developer, Software Engineer, or a cross-functional builder with mobile and backend experience, feel free to reach out.
                </p>

                {/* Status Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  <span>Available for Full-time, Hybrid & Contract Roles</span>
                </div>
              </div>

              {/* Right Column: Interactive Direct Contact Actions */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {/* Email Block with Copy */}
                <div
                  style={{
                    backgroundColor: 'var(--color-primary-dark)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    border: '1.5px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Direct Email
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', wordBreak: 'break-all', marginBottom: '1rem' }}>
                    {profile.email}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Button
                      as="a"
                      href={`mailto:${profile.email}`}
                      variant="accent"
                      size="sm"
                      icon={<ArrowUpRight size={15} />}
                    >
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
                      onClick={copyEmailToClipboard}
                      icon={copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                    >
                      {copied ? 'Copied to Clipboard!' : 'Copy Address'}
                    </Button>
                  </div>
                </div>

                {/* WhatsApp / Phone Block */}
                <div
                  style={{
                    backgroundColor: 'var(--color-primary-dark)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.25rem 1.5rem',
                    border: '1.5px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                      Phone / WhatsApp
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                      {profile.phone}
                    </div>
                  </div>
                  <Button
                    as="a"
                    href={`https://wa.me/6289516823435?text=Hello%20Tyo%20Indra,%20I%20saw%20your%20portfolio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    size="sm"
                    icon={<MessageSquare size={14} />}
                  >
                    WhatsApp Chat
                  </Button>
                </div>

                {/* Social & Professional Links */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background-color var(--transition-fast)'
                    }}
                  >
                    <span>GitHub</span>
                    <ExternalLink size={14} color="var(--color-accent)" />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background-color var(--transition-fast)'
                    }}
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={14} color="var(--color-accent)" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
