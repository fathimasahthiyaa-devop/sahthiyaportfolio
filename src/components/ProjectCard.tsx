import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { HeartPulse, Trophy, Sprout, Code2, Github, Layers, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getProjectIcon = () => {
    switch (project.icon) {
      case 'heart-pulse':
        return <HeartPulse className="w-6 h-6 text-accent" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-accent" />;
      case 'sprout':
        return <Sprout className="w-6 h-6 text-accent" />;
      default:
        return <Code2 className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface border border-border hover:border-accent transition-colors duration-180 shadow-theme"
    >
      <div>
        {/* Top Header with Project Icon and Status */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl border border-border bg-accent-soft flex items-center justify-center shadow-xs">
            {getProjectIcon()}
          </div>
          {project.status && (
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-bg-secondary border border-border text-text-muted">
              {project.status}
            </span>
          )}
        </div>

        {/* Role & Category */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-accent mb-2 font-medium">
          <Layers className="w-3.5 h-3.5" />
          <span>Role: {project.role || 'Software Developer'}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-180 leading-snug">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="mt-3 text-sm text-text-body leading-relaxed font-normal">
          {project.summary}
        </p>

        {project.personalContribution && (
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-xs text-text-muted">
              <strong className="text-text-primary font-medium">Contribution:</strong>{' '}
              {project.personalContribution}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack Chips & Links */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-text-muted px-2.5 py-1 rounded-lg bg-bg-secondary border border-border font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.repositoryUrl || project.demoUrl) && (
          <div className="mt-4 flex items-center gap-4 text-xs font-medium text-text-muted">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors duration-180"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors duration-180"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};
