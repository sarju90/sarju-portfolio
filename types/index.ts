// Types for the portfolio
export interface Skill {
  name: string;
  icon?: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  longDescription?: string;
  features?: string[];
  isNDA?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
  type: 'work' | 'education';
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  project: string;
}

// Education Types
export interface AcademicEducation {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpi?: string;
  description: string;
  subjects?: string[];
  achievements?: string[];
  projects?: string[];
}

export interface ProfessionalCertification {
  title: string;
  provider: string;
  year: string;
  description: string;
  skills?: string[];
  credentialUrl?: string;
}

export interface LifelongLearning {
  title: string;
  source: string;
  duration: string;
  status: 'completed' | 'in-progress';
  description: string;
  topics?: string[];
  url?: string;
}

export interface Education {
  academic: AcademicEducation[];
  professional: ProfessionalCertification[];
  lifelong: LifelongLearning[];
}
