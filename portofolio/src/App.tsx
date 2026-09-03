import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
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

      {/* Main Content Sections: Hero through Experience */}
      <main style={{ flex: 1, position: 'relative' }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        {/* <Approach /> */}
        {/* <Contact /> - Replaced by the interactive physics contact footer */}
      </main>

      {/* Dedicated Curtain Reveal Group: Skills holds stationary while Footer rises over it */}
      <div className="skills-footer-curtain-group">
        <div className="skills-curtain-item">
          <Skills />
        </div>
        <div className="footer-curtain-item">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
