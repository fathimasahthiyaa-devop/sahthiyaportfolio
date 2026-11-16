import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { GraduationCap, Award, Calendar, BookMarked } from 'lucide-react';
import { motion } from 'motion/react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-8 sm:py-12 md:py-14 scroll-mt-16 border-b border-border bg-bg text-text-primary relative flex flex-col justify-center"
      aria-label="Education and Academic Credentials"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <SectionHeading
          eyebrow="Academic Background"
          title={education.heading}
          subtitle={education.subheading}
        />

        {/* Primary Degree Cards (Phone flex-col, Desktop flex-row) */}
        <div className="flex flex-col md:flex-row gap-5 sm:gap-6 mb-8 sm:mb-12 w-full">
          {education.primary.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="flex-1 w-full p-5 sm:p-7 rounded-2xl bg-surface border border-border shadow-theme transition-colors duration-180 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-soft border border-border flex items-center justify-center text-accent shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {item.grade && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accent bg-accent-soft border border-border">
                      <Award className="w-3.5 h-3.5 text-accent" />
                      <span>{item.grade}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-text-primary leading-snug">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-accent mt-1">
                  {item.institution}
                </p>

                {item.description && (
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-text-body leading-relaxed font-normal">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{item.period}</span>
                </span>
                <span className="text-accent font-bold">Graduated</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Diplomas & Certifications (Phone flex-col, Desktop flex-row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border shadow-theme p-5 sm:p-7 w-full flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-accent font-bold">
            <BookMarked className="w-4 h-4" />
            <span>Additional Diplomas & Professional Studies</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            {education.additional.map((qual, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="flex-1 w-full p-4 rounded-xl bg-bg-secondary border border-border flex flex-col justify-between transition-colors duration-180"
              >
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {qual.title}
                  </h4>
                  <p className="text-xs text-text-muted mb-2">
                    {qual.institution}
                  </p>
                </div>
                <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>{qual.period}</span>
                  {qual.grade && <span className="text-accent font-medium">{qual.grade}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
