import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { ProjectModal } from '../ui/ProjectModal';
import { Reveal } from '../ui/Reveal';
import { projects, type Project } from '../../data/projects';
import { ArrowUpRight, Award } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   BENTO SIZE PATTERNS per project count
   Sizes: 'large' = 2 cols | 'small' = 1 col | 'wide' = 3 cols (full)
───────────────────────────────────────────────────────────────────────── */
const SIZE_PATTERNS: Record<number, Array<'large' | 'small' | 'wide'>> = {
  1: ['wide'],
  2: ['large', 'small'],
  3: ['large', 'small', 'wide'],
  4: ['large', 'small', 'small', 'large'],
  5: ['large', 'small', 'small', 'large', 'wide'],
};

function getSizes(count: number): Array<'large' | 'small' | 'wide'> {
  if (SIZE_PATTERNS[count]) return SIZE_PATTERNS[count];
  // fallback: alternate small/large
  return Array.from({ length: count }, (_, i) =>
    i % 3 === 0 ? 'large' : i % 3 === 1 ? 'small' : 'wide'
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   GRADIENT FALLBACK (when no image)
───────────────────────────────────────────────────────────────────────── */
const PALETTES: Record<string, { bg: string; accent: string }> = {
  // financial: { bg: 'linear-gradient(145deg,#1a4a5c,#285a71,#3a7d96)', accent: '#CFDA5A' },
  // iot:       { bg: 'linear-gradient(145deg,#0f3a2e,#1d6348,#2a8a62)', accent: '#64DC96' },
  // crypto:    { bg: 'linear-gradient(145deg,#1a1040,#2d1b69,#4a2fa0)', accent: '#A078F0' },
  // hr:        { bg: 'linear-gradient(145deg,#3a1a00,#7a3800,#c25e00)', accent: '#FAA03C' },
  // cms:       { bg: 'linear-gradient(145deg,#0a2a4a,#1a4a8a,#2a6ac0)', accent: '#5AB4FF' },
  financial: { bg: 'var(--color-primary)', accent: '#CFDA5A' },
  iot: { bg: 'var(--color-primary)', accent: '#64DC96' },
  crypto: { bg: 'var(--color-primary)', accent: '#A078F0' },
  hr: { bg: 'var(--color-primary)', accent: '#FAA03C' },
  cms: { bg: 'var(--color-primary)', accent: '#5AB4FF' },
};

/* ─────────────────────────────────────────────────────────────────────────
   SINGLE BENTO CARD
   - Image fills the ENTIRE card (no separate top/bottom sections)
   - Text overlaid at bottom with gradient
   - Arrow button top-right
───────────────────────────────────────────────────────────────────────── */
const BentoCard: React.FC<{
  project: Project;
  size: 'large' | 'small' | 'wide';
  onSelect: (p: Project) => void;
}> = ({ project, size, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const pal = PALETTES[project.previewType] || PALETTES.financial;

  return (
    <div
      className={`bc bc--${size}`}
      onClick={() => onSelect(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
      aria-label={`View ${project.title}`}
    >
      {/* ── Background: real image or gradient ── */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="bc-img"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
      ) : (
        <div className="bc-gradient" style={{ background: pal.bg }} />
      )}

      {/* ── Dark overlay gradient (for text readability) ── */}
      <div className="bc-overlay" />

      {/* ── Arrow button (top right) ── */}
      <button
        className={`bc-arrow${hovered ? ' bc-arrow--on' : ''}`}
        onClick={(e) => { e.stopPropagation(); onSelect(project); }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ArrowUpRight size={18} />
      </button>

      {/* ── Info (bottom, overlaid) ── */}
      <div className="bc-info">
        {/* Badges */}
        <div className="bc-badges">
          <span className="bc-badge bc-badge--cat">{project.category}</span>
          {project.patentId && (
            <span className="bc-badge bc-badge--patent">
              <Award size={10} />
              PATENT
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`bc-title bc-title--${size}`}>{project.title}</h3>

        {/* Description — only show on large/wide */}
        {size !== 'small' && (
          <p className="bc-desc">{project.description}</p>
        )}

        {/* Tech tags */}
        <div className="bc-tags">
          {project.technologies.slice(0, size === 'small' ? 2 : 4).map((t) => (
            <span key={t} className="bc-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};


/* ─────────────────────────────────────────────────────────────────────────
   PROJECTS SECTION
───────────────────────────────────────────────────────────────────────── */
export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Application', 'Mobile Application', 'IoT System', 'Enterprise Solution'];

  const filtered =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  const sizes = getSizes(filtered.length);

  return (
    <section id="projects" className="section-wrapper">
      <Container>

        {/* ── Section Header ── */}
        <div className="projects-header">
          <Reveal direction="up" delay={50}>
            <div>
              <SectionLabel number="02" label="Selected Projects" />
              <h2 className="projects-heading">
                Proven engineering across{' '}
                <span style={{ color: 'var(--color-primary-light)' }}>
                  web, mobile &amp; IoT systems.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <div className="projects-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-pill${selectedCategory === cat ? ' filter-pill--active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Bento Grid ── */}
        <div className="bento-grid">
          {filtered.map((project, i) => (
            <BentoCard
              key={project.id}
              project={project}
              size={sizes[i] ?? 'small'}
              onSelect={setActiveProject}
            />
          ))}
        </div>

        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      </Container>

      {/* ══════════════════════════════════════════════════
          STYLES
      ══════════════════════════════════════════════════ */}
      <style>{`
        /* ── Section header ── */
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.25rem;
        }
        .projects-heading {
          font-family: var(--font-display);
          font-size: clamp(1.65rem, 2.4vw, 2.65rem);
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-top: 0.5rem;
        }
        .projects-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .filter-pill {
          padding: 0.38rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          border: 1.5px solid var(--color-border);
          background: var(--color-surface-cream);
          color: var(--color-primary);
          cursor: pointer;
          transition: all 180ms ease;
          white-space: nowrap;
        }
        .filter-pill:hover { border-color: var(--color-primary-light); }
        .filter-pill--active {
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: var(--color-accent);
        }

        /* ════════════════════════════════════
           BENTO GRID (3-column base)
        ════════════════════════════════════ */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          align-items: start;
        }

        /* ── Card sizes (column spans) ── */
        .bc--large { grid-column: span 2; }
        .bc--small { grid-column: span 1; }
        .bc--wide  { grid-column: span 3; }

        /* ── Card heights ── */
        .bc--large { min-height: 370px; }
        .bc--small { min-height: 370px; }
        .bc--wide  { min-height: 270px; }

        @media (min-width: 1900px) {
          .bc--large { min-height: 440px; }
          .bc--small { min-height: 440px; }
          .bc--wide  { min-height: 320px; }
        }

        /* ════════════════════════════════════
           CARD BASE
        ════════════════════════════════════ */
        .bc {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          /* Full height of the cell */
          height: 100%;
          display: block;
          transition: transform 220ms ease, box-shadow 220ms ease;
          border: 1.5px solid rgba(255,255,255,0.12);
        }
        .bc:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 50px rgba(19,47,60,0.28);
        }
        /* The Reveal wrapper messes with height — fix */
        .bc--large > div,
        .bc--small > div,
        .bc--wide  > div { height: 100%; }

        /* ── Full-bleed image ── */
        .bc-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* ── Gradient fallback ── */
        .bc-gradient {
          position: absolute;
          inset: 0;
        }

        /* ── Dark overlay gradient (for text readability) ── */
        .bc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 25, 35, 0.92) 0%,
            rgba(8, 25, 35, 0.55) 45%,
            rgba(8, 25, 35, 0.10) 100%
          );
          pointer-events: none;
        }

        /* ── Arrow button (top right) ── */
        .bc-arrow {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.85) translateY(-4px);
          transition: opacity 200ms ease, transform 200ms ease, background 200ms ease, border-color 200ms ease;
          z-index: 2;
        }
        .bc:hover .bc-arrow,
        .bc-arrow--on {
          opacity: 1;
          transform: scale(1) translateY(0);
          background: rgba(207,218,90,0.9);
          border-color: rgba(207,218,90,0.5);
          color: var(--color-primary-dark);
        }

        /* ── Info block (bottom overlay) ── */
        .bc-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 1.5rem 1.4rem;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        /* ── Badges ── */
        .bc-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .bc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .bc-badge--cat {
          background: var(--color-accent);
          color: var(--color-primary-dark);
        }
        .bc-badge--patent {
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
        }

        /* ── Title ── */
        .bc-title {
          font-family: var(--font-display);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }
        .bc-title--large { font-size: clamp(1.15rem, 2vw, 1.55rem); }
        .bc-title--small { font-size: clamp(0.95rem, 1.5vw, 1.2rem); }
        .bc-title--wide  { font-size: clamp(1.2rem, 2.2vw, 1.65rem); }

        /* ── Description ── */
        .bc-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ── Tech tags ── */
        .bc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .bc-tag {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          backdrop-filter: blur(4px);
        }

        /* ════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════ */

        /* Tablet ≤ 900px: 2-column grid */
        @media (max-width: 900px) {
          .bento-grid     { grid-template-columns: repeat(2, 1fr); }
          .bc--large      { grid-column: span 2; }
          .bc--small      { grid-column: span 1; }
          .bc--wide       { grid-column: span 2; }
          .bc--large      { min-height: 360px; }
          .bc--small      { min-height: 280px; }
          .bc--wide       { min-height: 260px; }
          .projects-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
        }

        /* Mobile ≤ 640px: 1-column, all equal */
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bc--large,
          .bc--small,
          .bc--wide {
            grid-column: span 1;
            min-height: 280px;
          }
          .bc-info        { padding: 1.1rem 1.1rem 1rem; }
          .bc-title--large,
          .bc-title--small,
          .bc-title--wide { font-size: 1.05rem; }
          .bc-desc        { -webkit-line-clamp: 2; }
          .filter-pill    { font-size: 0.68rem; padding: 0.3rem 0.65rem; }
          .projects-heading { font-size: clamp(1.5rem, 6vw, 2rem); }
        }

        /* XS ≤ 380px */
        @media (max-width: 380px) {
          .bc--large,
          .bc--small,
          .bc--wide { min-height: 240px; }
          .bc-info  { padding: 1rem; gap: 0.4rem; }
        }
      `}</style>
    </section>
  );
};
