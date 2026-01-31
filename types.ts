export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  role: string;
  contact: string;
  email: string;
}

export interface SkillItem {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
