import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
// import { Approach } from './components/approach/Approach';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        {/* <Approach /> */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
