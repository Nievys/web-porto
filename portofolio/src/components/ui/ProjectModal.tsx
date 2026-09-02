import React, { useEffect } from 'react';
import { X, CheckCircle2, Award, ExternalLink, Download } from 'lucide-react';
import type { Project } from '../../data/projects';
import { Tag } from './Tag';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Normalizes external URLs to ensure:
 * 1. Missing protocols default to 'https://' (prevents browser resolving as relative localhost link).
 * 2. Accidental double protocols like 'https://https://' are collapsed cleanly.
 */
function formatExternalUrl(url?: string): string {
  if (!url) return '';
  let clean = url.trim();
  if (!clean) return '';
  // Collapse duplicate protocols like https://https:// or http://https://
  clean = clean.replace(/^(https?:\/\/)+/gi, (match) => {
    return match.toLowerCase().startsWith('http://') && !match.includes('https://') ? 'http://' : 'https://';
  });
  // If no protocol at all (e.g. "pms-staging.gamaintegrasi.id/"), prepend https://
  if (!/^https?:\/\//i.test(clean)) {
    clean = `https://${clean}`;
  }
  return clean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const liveDemoLink = formatExternalUrl(project.liveUrl);
  const downloadLink = formatExternalUrl(project.downloadUrl || project.downloadAppUrl);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'var(--color-overlay)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-surface-cream)',
          border: '2px solid var(--color-primary)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(19, 47, 60, 0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-surface-tint)',
            border: '1.5px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)',
            cursor: 'pointer',
            transition: 'background-color var(--transition-fast)'
          }}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            PROJECT {project.index}
          </span>
          <Tag variant="accent" size="sm">{project.category}</Tag>
          {project.patentId && (
            <Tag variant="patent" size="sm">
              <Award size={12} style={{ display: 'inline', marginRight: '4px' }} />
              PATENT: {project.patentId}
            </Tag>
          )}
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
          {project.title}
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          {project.subtitle}
        </p>

        {/* Visual Showcase */}
        {/* <div style={{ marginBottom: '1.75rem' }}>
          <ProjectIllustration type={project.previewType} title={project.title} />
        </div> */}

        {/* Challenge & Solution Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              The Challenge
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              {project.challenge}
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--color-surface-tint)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              Technical Solution
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-primary-dark)', lineHeight: 1.5 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Technical Features */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Key Features & Implementation
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.features.map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.map((tech) => (
              <Tag key={tech} variant="default" size="md">
                {tech}
              </Tag>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button variant="outline" size="sm" onClick={onClose}>
            Close Preview
          </Button>

          {downloadLink && (
            <Button
              variant="accent"
              size="sm"
              as="a"
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Download size={16} />}
              iconPosition="left"
            >
              Download App
            </Button>
          )}

          {liveDemoLink && (
            <Button
              variant="primary"
              size="sm"
              as="a"
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink size={16} />}
              iconPosition="right"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
