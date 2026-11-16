export interface SocialLink {
  label: string;
  url: string;
  iconName: 'linkedin' | 'mail' | 'file-text' | 'github';
}

export interface SkillItem {
  name: string;
  featured?: boolean;
  requiresConfirmation?: boolean;
  visible?: boolean;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  coordinationOnly?: boolean;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface AdditionalQualification {
  title: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  personalContribution?: string;
  technologies: string[];
  status?: string;
  confirmed: boolean;
  featuredImage?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  role?: string;
  icon?: 'heart-pulse' | 'trophy' | 'sprout' | 'code';
}

export interface PortfolioData {
  personal: {
    fullName: string;
    displayName: string;
    targetRole: string;
    location: string;
    email: string;
    linkedinUrl: string;
    githubUrl?: string;
    monogram: string;
    portraitPath: string | null;
    publicCvUrl: string | null;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    supportingCopy: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    quickFacts: string[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    pillars: {
      title: string;
      subtitle: string;
      description: string;
      icon: 'graduation-cap' | 'book-open' | 'kanban';
    }[];
  };
  skills: {
    categories: SkillCategory[];
    foundations: string[];
  };
  experience: {
    heading: string;
    subheading: string;
    items: ExperienceItem[];
  };
  education: {
    heading: string;
    subheading: string;
    primary: EducationItem[];
    additional: AdditionalQualification[];
  };
  projects: {
    heading: string;
    subheading: string;
    items: ProjectItem[];
  };
  contact: {
    heading: string;
    copy: string;
  };
}
