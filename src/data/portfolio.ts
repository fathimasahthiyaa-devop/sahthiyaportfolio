import { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 */
export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Mohamed Roomy Fathima Sahthiya",
    displayName: "Fathima Sahthiya",
    targetRole: "Associate Software Engineer",
    location: "Eravur, Batticaloa, Sri Lanka",
    email: "fathimasahdia2k@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-roomy-fathima-sahthiya-11643632a/",
    githubUrl: "https://github.com/fathimasahthiyaa-devop",
    monogram: "FS",
    // Verified user portrait photo (transparent cutout)
    portraitPath: "/assets/fathima-sahthiya-nobg.png",
    publicCvUrl: null,
  },

  hero: {
    eyebrow: "BEng Software Engineering Graduate",
    headline: "Associate Software Engineer",
    subheadline: "Seeking opportunities focused on Java & Backend Systems",
    supportingCopy: "Software Engineering graduate with background in IT education and project coordination, seeking an associate software engineering opportunity with a focus on Java and backend development.",
    primaryCtaText: "Explore My Background",
    secondaryCtaText: "View CV",
    quickFacts: [
      "Based in Sri Lanka",
      "BEng (Hons) Software Engineering (2024)",
      "Focus: Java & Backend Development",
    ],
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "I graduated in Software Engineering from London Metropolitan University in 2024 with Second Class Upper honours. My experience in IT teaching and project coordination has involved explaining technical concepts, supporting learners, coordinating tasks, and communicating with stakeholders. I concluded my lecturing tenure in January 2026 and am now actively seeking an Associate Software Engineer opportunity where I can strengthen my software development skills and contribute to a collaborative engineering team.",
    ],
    pillars: [
      {
        title: "Software Engineering Education",
        subtitle: "BEng (Hons) & HND",
        description: "Solid theoretical foundation in software architecture, algorithms, database modelling, and engineering methodology.",
        icon: "graduation-cap",
      },
      {
        title: "IT Teaching & Mentorship",
        subtitle: "TechCodz PVT LTD (2025–2026)",
        description: "Conducted lectures for BIT students in Computer Systems, Technical Writing, and supervised student IT projects through January 2026.",
        icon: "book-open",
      },
      {
        title: "Project Coordination",
        subtitle: "Agile & Task Tracking",
        description: "Structured project tracking with Jira and Trello, milestone planning, and clear stakeholder communication.",
        icon: "kanban",
      },
    ],
  },

  skills: {
    categories: [
      {
        title: "Programming Languages",
        description: "Core languages used during degree studies and practical modules",
        skills: [
          { name: "Java", featured: true, visible: true, icon: "coffee" },
          { name: "C#", visible: true, icon: "hash" },
          { name: "C++", visible: true, icon: "cpu" },
          { name: "Python", visible: true, icon: "terminal" },
          { name: "JavaScript", visible: true, icon: "braces" },
        ],
      },
      {
        title: "Web Technologies",
        description: "Standard web standards and backend frameworks",
        skills: [
          { name: "HTML", visible: true, icon: "code" },
          { name: "CSS", visible: true, icon: "palette" },
          { name: "Bootstrap", visible: true, icon: "boxes" },
          { name: "ASP.NET", visible: true, icon: "server" },
          { name: "PHP", requiresConfirmation: true, visible: false, icon: "code" },
          { name: "React Native", requiresConfirmation: true, visible: false, icon: "smartphone" },
        ],
      },
      {
        title: "Databases & Data Management",
        description: "Relational database structuring and querying",
        skills: [
          { name: "SQL", visible: true, icon: "database" },
          { name: "Database Design", visible: true, icon: "table" },
          { name: "Data Modelling", visible: true, icon: "network" },
          { name: "Basic Database Optimisation", visible: true, icon: "zap" },
        ],
      },
      {
        title: "Development Practices",
        description: "Standard engineering methodologies and quality checks",
        skills: [
          { name: "SDLC", visible: true, icon: "repeat" },
          { name: "Agile / Scrum", visible: true, icon: "kanban" },
          { name: "Software Testing", visible: true, icon: "shield-check" },
          { name: "Debugging", visible: true, icon: "bug" },
        ],
      },
      {
        title: "Development Tools",
        description: "Environments and version control",
        skills: [
          { name: "Git / GitHub", visible: true, icon: "git-branch" },
          { name: "NetBeans IDE", visible: true, icon: "wrench" },
        ],
      },
      {
        title: "Project Coordination Tools",
        description: "Tools used for milestone tracking, task boards, and roadmaps",
        skills: [
          { name: "Jira", visible: true, icon: "clipboard-list" },
          { name: "Trello", visible: true, icon: "columns" },
          { name: "Microsoft Project", visible: true, icon: "calendar" },
        ],
      },
    ],
    foundations: [
      "Computer Systems",
      "Operating Systems",
      "Networking Concepts",
      "Computer Hardware",
      "Technical Documentation",
    ],
  },

  experience: {
    heading: "Professional Experience",
    subheading: "Academic lecturing and project coordination experience in technology",
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
          "Taught core modules including Computer Systems, ICT Project Supervision, and Technical Writing.",
          "Supported students in research, analytical, and communication skill development.",
          "Mentored learners on project planning, report writing, and presentations.",
          "Promoted practical learning through lab work, discussions, and real-world examples.",
          "Contributed to curriculum development and academic assessments.",
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
          "Coordinated IT and software development project tasks, timelines, and resource allocation from initiation to delivery.",
          "Coordinated team tasks, timelines, and resource allocation using tools like Trello, Jira, and MS Project.",
          "Communicated with clients and stakeholders to ensure alignment and satisfaction.",
          "Applied Agile/Scrum methodologies to enhance team coordination.",
          "Prepared project reports, documentation, and risk assessments.",
          "Conducted post-project reviews to improve project coordination practices.",
        ],
      },
    ],
  },

  education: {
    heading: "Education & Qualifications",
    subheading: "Formal engineering qualifications and vocational computing diplomas",
    primary: [
      {
        id: "edu-beng",
        degree: "Bachelor of Engineering (BEng) in Software Engineering",
        institution: "London Metropolitan University, UK",
        period: "Aug 2023 – Sep 2024",
        grade: "Second Class Upper",
        description: "Graduated with honours. Core coursework covered software development principles, software architecture, relational database engineering, and computing systems.",
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
    subheading: "Academic and practical software applications developed during degree and coursework",
    items: [
      {
        id: "proj-racing",
        title: "Car Racing Event Management System",
        summary: "Developed a queue-based software system for managing car racing events, handling tasks such as participant registration, round eliminations, result monitoring, and winner selection for up to six cars.",
        technologies: ["Java", "NetBeans IDE", "Data Structures"],
        role: "Java Programmer",
        status: "Desktop System",
        icon: "trophy",
        confirmed: true,
      },
      {
        id: "proj-hospital",
        title: "Hospital Management System - Arogya Health Care",
        summary: "Created a dynamic web system to enhance the hospital's online presence by showcasing services, doctors, and payment options, offering a user-friendly interface for patients and staff.",
        technologies: ["HTML", "PHP", "CSS", "JavaScript", "Bootstrap", "XAMPP"],
        role: "Web Developer",
        status: "Web Application",
        icon: "heart-pulse",
        confirmed: true,
      },
      {
        id: "proj-crop",
        title: "Crop Diagnostic Mobile Application",
        summary: "Developed a mobile application aimed at assisting farmers in diagnosing crop issues, featuring image symptom recognition, customized treatment recommendations, offline capability, and multilingual support.",
        technologies: ["React Native", "Mobile UI", "Offline Storage"],
        role: "Mobile Application Developer",
        status: "Mobile Concept",
        icon: "sprout",
        confirmed: true,
      },
    ],
  },

  contact: {
    heading: "Let’s Connect",
    copy: "I’m interested in Associate Software Engineer opportunities and conversations about early-career software development.",
  },
};
