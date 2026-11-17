import { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 * Target Role: Associate Business Analyst
 */
export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Mohamed Roomy Fathima Sahthiya",
    displayName: "Fathima Sahthiya",
    targetRole: "Associate Business Analyst",
    location: "Eravur, Batticaloa, Sri Lanka",
    email: "fathimasahdia2k@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-roomy-fathima-sahthiya-11643632a/",
    githubUrl: "https://github.com/fathimasahthiyaa-devop",
    monogram: "FS",
    portraitPath: "/assets/fathima-sahthiya-nobg.png",
    publicCvUrl: null,
  },

  hero: {
    eyebrow: "BEng Software Engineering • Business Management (Distinction)",
    headline: "Associate Business Analyst",
    subheadline: "Bridging Business Requirements & Engineering Delivery with Agile Precision",
    supportingCopy: "Software Engineering graduate with a Diploma in Business Management (Distinction) and hands-on experience in IT project coordination and technical lecturing. Skilled in requirements elicitation, workflow mapping, user stories, Jira sprint boards, and aligning business stakeholders with development teams.",
    primaryCtaText: "Explore My Profile",
    secondaryCtaText: "View CV",
    quickFacts: [
      "Based in Sri Lanka",
      "BEng (Hons) Software Engineering (2024)",
      "Diploma in Business Management (Distinction)",
      "Focus: Requirements & Agile Systems Analysis",
    ],
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "I hold a BEng (Hons) in Software Engineering from London Metropolitan University (Second Class Upper) and a Diploma in Business Management achieved with Distinction from ESoft Metro Campus. This synergy of software engineering architecture and formal business management empowers me to effectively bridge the communication gap between business stakeholders and engineering teams.",
      "In my role as Project Manager at TechCodz (Jan 2024 – Feb 2025), I facilitated requirements gathering, sprint tracking in Jira and Trello, stakeholder alignment, and project documentation under Agile/Scrum frameworks. As an IT Lecturer teaching BIT students through January 2026, I honed strong skills in technical writing, systems analysis, and complex concepts breakdown. I am actively seeking an Associate Business Analyst opportunity where I can translate business needs into clear specifications and drive impactful digital solutions.",
    ],
    pillars: [
      {
        title: "Dual Tech & Business Acumen",
        subtitle: "BEng Software Engineering & Business Mgmt (Distinction)",
        description: "Solid engineering literacy in software architecture, SDLC, and databases combined with distinction-level business management principles.",
        icon: "graduation-cap",
      },
      {
        title: "Agile Project Coordination",
        subtitle: "TechCodz PVT LTD (2024–2025)",
        description: "Experience facilitating requirement sessions, managing sprint backlogs with Jira and Trello, running standups, and mitigating scope creep.",
        icon: "kanban",
      },
      {
        title: "Technical Communication & Analysis",
        subtitle: "IT Lecturer & Supervisor (2025–2026)",
        description: "Taught BIT students Technical Writing and Computer Systems, mastering analytical breakdown, client presentations, and documentation.",
        icon: "book-open",
      },
    ],
  },

  skills: {
    categories: [
      {
        title: "Business Analysis & Requirements",
        description: "Core competencies in elicitation, workflow modeling, and specifications",
        skills: [
          { name: "Requirements Gathering", featured: true, visible: true, icon: "file-text" },
          { name: "User Stories & Acceptance Criteria", featured: true, visible: true, icon: "check-square" },
          { name: "Process Mapping & Workflows", visible: true, icon: "workflow" },
          { name: "Functional Specifications", visible: true, icon: "file-text" },
          { name: "Gap Analysis", visible: true, icon: "target" },
          { name: "Technical Documentation", visible: true, icon: "file-text" },
        ],
      },
      {
        title: "Agile & Project Management",
        description: "Frameworks, sprint ceremonies, backlog grooming, and progress tracking",
        skills: [
          { name: "Jira", featured: true, visible: true, icon: "clipboard-list" },
          { name: "Trello", visible: true, icon: "columns" },
          { name: "Agile / Scrum", visible: true, icon: "kanban" },
          { name: "Sprint Planning", visible: true, icon: "calendar" },
          { name: "Microsoft Project", visible: true, icon: "calendar" },
          { name: "SDLC", visible: true, icon: "repeat" },
        ],
      },
      {
        title: "Data & Systems Analysis",
        description: "Relational querying, schema design, and analytical modeling",
        skills: [
          { name: "SQL", featured: true, visible: true, icon: "database" },
          { name: "Data Modelling", visible: true, icon: "network" },
          { name: "Database Design", visible: true, icon: "table" },
          { name: "Systems Analysis", visible: true, icon: "layers" },
          { name: "Basic Database Optimisation", visible: true, icon: "zap" },
        ],
      },
      {
        title: "Technical Literacy & Engineering",
        description: "Programming literacy to communicate seamlessly with software engineers",
        skills: [
          { name: "Java", visible: true, icon: "coffee" },
          { name: "Python", visible: true, icon: "terminal" },
          { name: "C#", visible: true, icon: "hash" },
          { name: "HTML", visible: true, icon: "code" },
          { name: "CSS", visible: true, icon: "palette" },
          { name: "Git / GitHub", visible: true, icon: "git-branch" },
          { name: "Software Testing", visible: true, icon: "shield-check" },
        ],
      },
      {
        title: "Stakeholder & Professional Skills",
        description: "Alignment, client consultation, and cross-functional facilitation",
        skills: [
          { name: "Stakeholder Communication", featured: true, visible: true, icon: "users" },
          { name: "Technical Writing", visible: true, icon: "file-text" },
          { name: "Client Coordination", visible: true, icon: "users" },
          { name: "Problem Solving", visible: true, icon: "zap" },
          { name: "Cross-Functional Collaboration", visible: true, icon: "users" },
        ],
      },
    ],
    foundations: [
      "Business Process Modeling",
      "SDLC & Agile Methodologies",
      "Technical Documentation",
      "Relational Data Structuring",
      "Computer Systems",
    ],
  },

  experience: {
    heading: "Professional Experience",
    subheading: "Project management, requirements coordination, and academic lecturing",
    items: [
      {
        id: "exp-lecturer",
        role: "IT Lecturer",
        company: "TechCodz PVT LTD",
        location: "Batticaloa, Sri Lanka",
        period: "Feb 2025 – Jan 2026",
        current: false,
        bullets: [
          "Conducted lectures and practical sessions for Bachelor of Information Technology (BIT) students through January 2026.",
          "Taught modules including Computer Systems, ICT Project Supervision, and Technical Writing.",
          "Guided undergraduate students in requirement definition, project planning, report writing, and final presentations.",
          "Cultivated advanced analytical breakdown, structured documentation, and technical communication skills.",
          "Contributed to curriculum development and academic assessment rubrics.",
        ],
      },
      {
        id: "exp-pm",
        role: "Project Manager",
        company: "TechCodz PVT LTD",
        location: "Batticaloa, Sri Lanka",
        period: "Jan 2024 – Feb 2025",
        coordinationOnly: true,
        bullets: [
          "Facilitated requirement gathering and discovery sessions with clients to define project scope and deliverables.",
          "Translated business and operational needs into user stories, technical tasks, and acceptance criteria.",
          "Managed sprint backlogs, task assignments, and progress tracking using Jira, Trello, and MS Project under Agile/Scrum.",
          "Served as communication bridge between clients and software engineering teams to ensure requirement alignment.",
          "Prepared functional specifications, status reports, sprint reviews, and risk assessments to prevent scope creep.",
        ],
      },
    ],
  },

  education: {
    heading: "Education & Qualifications",
    subheading: "Formal engineering degree and distinction-level business management qualification",
    primary: [
      {
        id: "edu-beng",
        degree: "Bachelor of Engineering (BEng) in Software Engineering",
        institution: "London Metropolitan University, UK",
        period: "Aug 2023 – Sep 2024",
        grade: "Second Class Upper",
        description: "Graduated with honours. Core coursework covered software development principles, systems architecture, relational database engineering, and computing systems.",
      },
      {
        id: "edu-hnd",
        degree: "Higher National Diploma (HND) in Computing – Software Engineering",
        institution: "ESoft Metro Campus, Batticaloa",
        period: "May 2022 – Sep 2023",
        grade: "Merit",
        description: "Two-year higher national diploma program covering object-oriented programming, data structures, systems analysis, and database management.",
      },
    ],
    additional: [
      {
        title: "Diploma in Business Management",
        institution: "ESoft Metro Campus, Batticaloa",
        period: "Aug 2022 – Feb 2023",
        grade: "Distinction",
      },
      {
        title: "Diploma in IT",
        institution: "ESoft Metro Campus, Batticaloa",
        period: "Feb 2019 – Sep 2019",
      },
      {
        title: "Diploma in English",
        institution: "ESoft Metro Campus, Batticaloa",
        period: "Feb 2019 – Sep 2023",
      },
    ],
  },

  projects: {
    heading: "Highlighted Projects",
    subheading: "Software solutions highlighting analytical logic, workflow mapping, and system modeling",
    items: [
      {
        id: "proj-racing",
        title: "Car Racing Event Management System",
        summary: "Analyzed event operations and engineered queue-based algorithmic logic to manage racer registration, multi-round elimination workflows, live leaderboard monitoring, and automated result auditing.",
        technologies: ["Java", "Data Structures", "Workflow Logic", "NetBeans IDE"],
        role: "Systems Analyst & Developer",
        status: "Desktop System",
        icon: "trophy",
        confirmed: true,
      },
      {
        id: "proj-hospital",
        title: "Hospital Management System - Arogya Health Care",
        summary: "Conducted healthcare workflow analysis to design and build an integrated web management platform, mapping patient appointment scheduling, doctor availability calendars, and payment processing.",
        technologies: ["PHP", "SQL", "HTML/CSS", "Bootstrap", "Process Mapping"],
        role: "Requirements & Web Development",
        status: "Web Application",
        icon: "heart-pulse",
        confirmed: true,
      },
      {
        id: "proj-crop",
        title: "Crop Diagnostic Mobile Application",
        summary: "Spearheaded user problem discovery and functional requirements formulation for an agricultural diagnostic app, specifying offline data synchronization, multilingual UI workflows, and symptom evaluation logic.",
        technologies: ["React Native", "Requirements Specification", "Mobile UI", "Offline Architecture"],
        role: "Functional Specification & Prototyping",
        status: "Mobile Concept",
        icon: "sprout",
        confirmed: true,
      },
    ],
  },

  contact: {
    heading: "Let's Connect",
    copy: "I am actively seeking an Associate Business Analyst role where I can bridge business requirements and engineering deliverables with agile precision. Feel free to reach out via email or LinkedIn.",
  },
};
