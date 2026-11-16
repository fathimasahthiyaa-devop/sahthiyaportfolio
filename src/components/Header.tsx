import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { Menu, X, FileText, ArrowUpRight, Mail, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  hasConfirmedProjects: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hasConfirmedProjects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { personal } = portfolioData;

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    ...(hasConfirmedProjects ? [{ name: 'Projects', href: '#projects', id: 'projects' }] : []),
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, navLinks]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-b border-border transition-all duration-180 ${
        scrolled ? 'py-3 shadow-theme' : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-lg p-1"
            aria-label="Fathima Sahthiya - Return to top"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-accent-soft border border-border flex items-center justify-center text-accent font-bold font-mono text-base tracking-wider shadow-xs group-hover:border-accent transition-colors duration-180"
            >
              {personal.monogram}
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-180">
                {personal.displayName}
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                Software Engineering Graduate
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-xl transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                    isActive
                      ? 'text-accent font-bold bg-accent-soft border border-border'
                      : 'text-text-body hover:text-text-primary hover:bg-accent-soft/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {personal.publicCvUrl && (
              <a
                href={personal.publicCvUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-semibold text-text-primary bg-surface border border-border rounded-xl hover:text-accent hover:border-accent transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>View CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}

            {personal.githubUrl && (
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-1 p-2 text-text-muted hover:text-accent transition-colors duration-180 rounded-xl hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-button-text bg-button-bg hover:bg-accent-hover rounded-xl shadow-xs transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>

            {/* Segmented Theme Toggle */}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-text-primary hover:text-accent hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-surface border-t border-border z-50 p-6 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-lg font-semibold rounded-xl transition-colors duration-180 flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-accent bg-accent-soft border border-border'
                      : 'text-text-body hover:text-text-primary hover:bg-accent-soft/30'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </a>
              ))}

              {personal.publicCvUrl && (
                <a
                  href={personal.publicCvUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-text-primary bg-surface border border-border rounded-xl hover:text-accent hover:border-accent"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>View CV (PDF)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {personal.githubUrl && (
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-text-primary bg-surface border border-border rounded-xl hover:text-accent hover:border-accent"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              )}
            </nav>

            <div className="pt-6 border-t border-border text-xs text-text-muted">
              <p className="font-mono text-accent font-bold">{personal.displayName}</p>
              <p className="mt-1">{personal.targetRole} Candidate</p>
              <p>{personal.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
