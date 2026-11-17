import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { TechChip } from '../components/TechChip';
import { Code2, Globe, Database, Cpu, Wrench, Kanban, CheckCircle2, Search, X, HardDrive, Network, Layers, FileText, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    'Business Analysis & Requirements': FileText,
    'Agile & Project Management': Kanban,
    'Data & Systems Analysis': Database,
    'Technical Literacy & Engineering': Code2,
    'Stakeholder & Professional Skills': Users,
    'Programming Languages': Code2,
    'Web Technologies': Globe,
    'Databases & Data Management': Database,
    'Development Practices': CheckCircle2,
    'Development Tools': Wrench,
    'Project Coordination Tools': Kanban,
  };

  const categories = useMemo(() => {
    return ['All', ...skills.categories.map((c) => c.title)];
  }, [skills.categories]);

  // Filter categories and skills based on search query and selected category tab
  const filteredCategories = useMemo(() => {
    return skills.categories
      .filter((cat) => selectedCategory === 'All' || cat.title === selectedCategory)
      .map((cat) => {
        const visibleSkills = cat.skills.filter((s) => s.visible !== false);
        const matchingSkills = searchQuery.trim()
          ? visibleSkills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
            )
          : visibleSkills;
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skills.categories, selectedCategory, searchQuery]);

  const getFoundationIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'computer systems':
        return <Cpu className="w-3.5 h-3.5 text-accent" />;
      case 'operating systems':
        return <HardDrive className="w-3.5 h-3.5 text-accent" />;
      case 'networking concepts':
        return <Network className="w-3.5 h-3.5 text-accent" />;
      case 'computer hardware':
        return <Layers className="w-3.5 h-3.5 text-accent" />;
      case 'technical documentation':
        return <FileText className="w-3.5 h-3.5 text-accent" />;
      default:
        return <Cpu className="w-3.5 h-3.5 text-accent" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-8 sm:py-12 md:py-14 scroll-mt-20 sm:scroll-mt-24 border-b border-border bg-bg text-text-primary relative flex flex-col justify-center"
      aria-label="Technical Skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <SectionHeading
          eyebrow="Competencies & Toolkit"
          title="Business Analysis & Technical Skills"
          subtitle="Core competencies spanning requirements engineering, Agile frameworks, data modeling, and technical stakeholder collaboration."
        />

        {/* User-Friendly Filter Controls (Search + Category Tabs) */}
        <div className="mb-8 sm:mb-10 flex flex-col gap-4 w-full">
          {/* Search bar */}
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Java, SQL, Jira, Scrum)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-focus focus:ring-1 focus:ring-focus shadow-xs transition-colors duration-180"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (Flex Wrap) */}
          <div className="flex flex-wrap gap-2 pt-1 w-full" role="tablist" aria-label="Skill categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-180 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                  selectedCategory === cat
                    ? 'bg-button-bg text-button-text font-bold shadow-theme'
                    : 'bg-surface text-text-body border border-border hover:text-text-primary hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Skill Categories (Phone flex-col, Desktop grid) */}
        {filteredCategories.length > 0 ? (
          <motion.div
            layout
            className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full"
          >
            <AnimatePresence>
              {filteredCategories.map((category) => {
                const Icon = categoryIcons[category.title] || Code2;
                return (
                  <motion.div
                    key={category.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -4 }}
                    className="w-full p-5 sm:p-6 rounded-2xl bg-surface border border-border shadow-theme transition-colors duration-180 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2 text-accent">
                        <Icon className="w-4 h-4" />
                        <h3 className="text-base font-bold text-text-primary">
                          {category.title}
                        </h3>
                      </div>

                      {category.description && (
                        <p className="text-xs text-text-muted mb-4 leading-normal">
                          {category.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 pt-1">
                        {category.skills.map((skill) => (
                          <TechChip
                            key={skill.name}
                            name={skill.name}
                            featured={skill.featured}
                            icon={skill.icon}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="p-8 text-center rounded-xl bg-surface border border-border shadow-theme w-full flex flex-col items-center">
            <p className="text-sm text-text-muted">
              No skills found matching &ldquo;<span className="text-accent font-medium">{searchQuery}</span>&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-accent underline hover:text-accent-hover cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Additional Foundations: Compact Secondary Area (display:flex) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-surface border border-border shadow-theme w-full flex flex-col"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Foundational Computing Concepts</span>
              </div>
              <p className="text-xs text-text-muted mt-1">
                Core academic and instructional topics taught in university-level lectures
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.foundations.map((foundation) => (
                <span
                  key={foundation}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-text-body bg-bg-secondary rounded-xl border border-border shadow-xs"
                >
                  {getFoundationIcon(foundation)}
                  <span>{foundation}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
