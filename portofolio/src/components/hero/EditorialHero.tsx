import React, { useEffect } from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { HeroBackground } from './HeroBackground';
import './EditorialHero.css';

export const EditorialHero: React.FC = () => {
  // Bi-directional one-step smooth scroll trigger between Hero and About
  useEffect(() => {
    let isTransitioning = false;

    const onWheel = (e: WheelEvent) => {
      if (isTransitioning) return;

      const aboutEl = document.getElementById('about');
      if (!aboutEl) return;

      const currentScrollY = window.scrollY;
      const aboutRect = aboutEl.getBoundingClientRect();

      // Case 1: Downward scroll from Hero to About
      if (currentScrollY < 40 && e.deltaY > 20) {
        isTransitioning = true;
        aboutEl.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isTransitioning = false;
        }, 850);
        return;
      }

      // Case 2: Upward scroll from top of About back to Hero
      if (aboutRect.top >= -25 && aboutRect.top <= 95 && e.deltaY < -20) {
        isTransitioning = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isTransitioning = false;
        }, 850);
        return;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section id="hero" className="editorial-hero">
      {/* 1. Animated Geometric Canvas Background */}
      <HeroBackground />

      {/* 2. Subtle Blueprint Grid Lines Overlay */}
      <div className="editorial-hero__grid-bg" aria-hidden="true" />

      {/* 3. Main Centered Editorial Content */}
      <div className="editorial-hero__content">
        {/* Top Metadata Row */}
        <div className="editorial-hero__meta-row">
          {/* <div className="editorial-hero__tagline-pill">
            <span className="editorial-hero__status-indicator" />
            <span>Jakarta, ID · Available for Select Work</span>
          </div> */}

          <div className="editorial-hero__coordinates">
            <span>[06°12′S 106°49′E] — PORTFOLIO 2026</span>
          </div>
        </div>

        {/* Centerpiece: Centered Big Typography Poster */}
        <div className="editorial-hero__centerpiece">
          {/* Giant Display Name: TYO INDRA. */}
          <div className="editorial-hero__giant-name-row">
            <h1 className="editorial-hero__giant-name">
              TYO <br /> INDRA<span className="editorial-hero__giant-name-dot">.</span>
            </h1>
          </div>

          {/* Role Narrative + Stamped Engineering & Craft Badge */}
          <div className="editorial-hero__role-row">
            <h2 className="editorial-hero__role-title">
              Frontend & Mobile Dev
            </h2>
          </div>
          <br />
          <div className="editorial-hero__craft-badge" title="Precision Engineering & Product Craftsmanship">
            <Sparkles size={14} className="editorial-hero__craft-symbol" />
            <span>Engineering + Craft</span>
          </div>
        </div>

        {/* Bottom Action Bar & Tech Capsules */}
        <div className="editorial-hero__bottom-row">
          {/* Action Capsule Buttons */}
          <div className="editorial-hero__actions">
            <a href="#projects" className="editorial-hero__btn editorial-hero__btn--primary">
              <span>Selected Works</span>
              <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="editorial-hero__btn editorial-hero__btn--outline">
              <span>Let's Talk</span>
              <ArrowDown size={15} />
            </a>
          </div>

          {/* Tech Stack Pills (Footer-styled tactile capsules) */}
          <div className="editorial-hero__stack-group">
            <span className="editorial-hero__stack-pill">Flutter</span>
            <span className="editorial-hero__stack-pill">React.js</span>
            <span className="editorial-hero__stack-pill">Next.js</span>
            <span className="editorial-hero__stack-pill">TypeScript</span>
            <span className="editorial-hero__stack-pill">Kotlin</span>
            <span className="editorial-hero__stack-pill">Clean Arch</span>
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#about"
            className="editorial-hero__scroll-cue"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <span>Scroll to explore</span>
            <ArrowDown size={14} className="editorial-hero__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};
