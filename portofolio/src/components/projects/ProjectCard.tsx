import React from 'react';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../data/projects';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { ProjectIllustration } from '../ui/ProjectIllustration';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isSplitLeft = project.layoutVariant === 'split-left';
  const isFullHero = project.layoutVariant === 'full-hero';

  if (isFullHero) {
    return (
      <div
        className="project-card-full"
        style={{
          backgroundColor: 'var(--color-surface-cream)',
          border: '2px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          transition: 'border-color var(--transition-base), box-shadow var(--transition-base)',
          boxShadow: 'var(--shadow-subtle)'
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              PROJECT {project.index}
            </span>
            <Tag variant="accent">{project.category}</Tag>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            {project.role} · {project.period}
          </span>
        </div>

        {/* Big Title & Subtitle */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.15, marginBottom: '0.5rem' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '800px' }}>
            {project.description}
          </p>
        </div>

        {/* Visual Preview */}
        <div style={{ marginBottom: '1.75rem' }}>
          <ProjectIllustration type={project.previewType} title={project.title} />
        </div>

        {/* Bottom Actions & Tech */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.map((tech) => (
              <Tag key={tech} variant="default" size="sm">
                {tech}
              </Tag>
            ))}
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onSelect(project)}
            icon={<ArrowUpRight size={16} />}
          >
            View Project Details
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-card-split"
      style={{
        backgroundColor: 'var(--color-surface-cream)',
        border: '2px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2.5rem',
        alignItems: 'center',
        boxShadow: 'var(--shadow-subtle)',
        transition: 'border-color var(--transition-base)'
      }}
    >
      {/* Content Column */}
      <div style={{ order: isSplitLeft ? 2 : 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>
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

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Feature Highlights */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
              <CheckCircle2 size={14} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.technologies.map((tech) => (
            <Tag key={tech} variant="default" size="sm">
              {tech}
            </Tag>
          ))}
        </div>

        {/* Trigger Button */}
        <div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onSelect(project)}
            icon={<ArrowUpRight size={16} />}
          >
            Explore System Architecture
          </Button>
        </div>
      </div>

      {/* Visual Preview Column */}
      <div style={{ order: isSplitLeft ? 1 : 2 }}>
        <ProjectIllustration type={project.previewType} title={project.title} />
      </div>
    </div>
  );
};
