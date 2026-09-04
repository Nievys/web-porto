import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { EditorialHero } from './components/hero/EditorialHero';
// import { Hero } from './components/hero/Hero'; // Previous Hero kept intact
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
// import { Approach } from './components/approach/Approach';
// import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Card 1 & Card 2: Hero + About Stacking Card Group */}
      <div className="hero-about-stack-group">
        <div className="hero-sticky-card">
          <EditorialHero />
        </div>
        <div className="about-stack-card">
          <About />
        </div>
      </div>

      {/* Main Content Flow: Projects, Experience, and Skills */}
      <main className="main-content-flow" style={{ flex: 1, position: 'relative', zIndex: 5, backgroundColor: 'var(--color-background)' }}>
        <Projects />
        <Experience />
        <Skills />
      </main>

      {/* Interactive Physics Contact Footer */}
      <Footer />
    </div>
  );
};

export default App;
