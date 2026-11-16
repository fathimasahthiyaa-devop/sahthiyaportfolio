import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Calendar, MapPin, Building2, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 md:py-14 scroll-mt-16 border-b border-border bg-bg text-text-primary relative flex flex-col justify-center"
      aria-label="Professional Experience"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <SectionHeading
          eyebrow="Career History"
          title={experience.heading}
          subtitle={experience.subheading}
        />

        <div className="relative pl-5 sm:pl-8 border-l border-border flex flex-col gap-6 sm:gap-10 w-full">
          {experience.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group w-full flex flex-col"
            >
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-colors duration-180 ${
                  item.current
                    ? 'bg-accent border-surface ring-4 ring-accent-soft'
                    : 'bg-surface border-border group-hover:border-accent'
                }`}
                aria-hidden="true"
              />

              <motion.div
                whileHover={{ y: -4 }}
                className="w-full p-5 sm:p-7 rounded-2xl bg-surface border border-border shadow-theme transition-colors duration-180 flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 w-full">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                        {item.role}
                      </h3>
                      {item.coordinationOnly && (
                        <span className="px-2.5 py-0.5 text-xs font-mono text-accent bg-accent-soft border border-border rounded-full font-semibold">
                          Project Coordination
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-xs sm:text-sm text-text-muted flex-wrap">
                      <span className="flex items-center gap-1.5 text-accent font-semibold">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1 text-text-muted">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted bg-bg-secondary px-3 py-1.5 rounded-xl border border-border self-start sm:self-auto shadow-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets directly verified from CV */}
                <ul className="mt-4 sm:mt-5 flex flex-col gap-2.5 text-sm text-text-body w-full">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
