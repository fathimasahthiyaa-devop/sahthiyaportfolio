import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'motion/react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const confirmedProjects = projects.items.filter((item) => item.confirmed === true);

  if (confirmedProjects.length === 0) {
    return null;
  }

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-14 scroll-mt-20 sm:scroll-mt-24 border-b border-border bg-bg text-text-primary relative flex flex-col justify-center"
      aria-label="Software Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <SectionHeading
          eyebrow="Practical Applications"
          title={projects.heading}
          subtitle={projects.subheading}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full"
        >
          {confirmedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
