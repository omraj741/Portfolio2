export interface NavLink {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  description?: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}