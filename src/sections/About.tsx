import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { GraduationCap, BookOpen, Kanban } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const iconMap = {
    'graduation-cap': GraduationCap,
    'book-open': BookOpen,
    'kanban': Kanban,
  };

  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-14 scroll-mt-16 border-b border-border bg-bg text-text-primary relative flex flex-col justify-center"
      aria-label="About Me"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <SectionHeading
          eyebrow="Profile Overview"
          title={about.heading}
          subtitle="Background in software engineering education, practical computing, and structured coordination"
        />

        {/* Narrative Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-6 sm:mb-8 md:mb-10 w-full"
        >
          {about.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-text-body leading-relaxed font-normal"
            >
              {p}
            </p>
          ))}
        </motion.div>

        {/* Three Factual Supporting Pillars using display:flex for phone & desktop */}
        <div className="flex flex-col md:flex-row gap-5 sm:gap-6 w-full">
          {about.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="flex-1 w-full p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-theme transition-colors duration-180 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-soft border border-border flex items-center justify-center text-accent mb-4 sm:mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-accent block mb-1 font-bold">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
