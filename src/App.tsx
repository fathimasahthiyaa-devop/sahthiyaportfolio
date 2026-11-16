import React from 'react';
import { portfolioData } from './data/portfolio';
import { ThemeProvider } from './context/ThemeContext';
import { SkipLink } from './components/SkipLink';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export const AppContent: React.FC = () => {
  const hasConfirmedProjects = portfolioData.projects.items.some(
    (item) => item.confirmed === true
  );

  return (
    <div
      id="portfolio-root"
      className="min-h-screen flex flex-col font-sans bg-bg text-text-body"
    >
      <SkipLink />
      <ScrollProgress />
      <Header hasConfirmedProjects={hasConfirmedProjects} />

      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <FloatingNav />
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
