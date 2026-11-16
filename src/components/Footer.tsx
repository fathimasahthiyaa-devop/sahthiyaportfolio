import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t border-border bg-bg-secondary py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-text-body transition-colors duration-180 flex flex-col justify-center"
      aria-label="Site Footer"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <span className="font-bold text-text-primary tracking-tight text-base">
              {personal.displayName}
            </span>
            <span className="text-xs font-mono text-accent bg-accent-soft border border-border px-2 py-0.5 rounded-lg font-bold">
              BEng Graduate
            </span>
          </div>
          <p className="mt-1 text-xs text-text-muted max-w-md">
            Candidate for Associate Software Engineer roles. Bachelor of Engineering in Software Engineering (2024).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 text-text-muted hover:text-accent transition-colors duration-180 rounded-xl hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 text-text-muted hover:text-accent transition-colors duration-180 rounded-xl hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {personal.githubUrl && (
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 text-text-muted hover:text-accent transition-colors duration-180 rounded-xl hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 text-text-muted hover:text-accent transition-colors duration-180 rounded-xl hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-focus cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-2 text-center sm:text-left">
        <p>© {currentYear} {personal.fullName}. All rights reserved.</p>
        <div>
          Target Role: Associate Software Engineer • Based in {personal.location}
        </div>
      </div>
    </footer>
  );
};
