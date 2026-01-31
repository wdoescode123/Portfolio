import { ExperienceItem, EducationItem, ReferenceItem, SkillItem } from './types';

export const PERSONAL_INFO = {
  name: "Will Jackson",
  title: "Software Development and Data Science",
  bio: "I am a very hard working individual and certain I would do a great job working for your institute. I will make sure not to disappoint in any aspect of work ethics.",
  phone: "082 494 4248",
  email: "willjackson541@gmail.com",
  address: "Shirley Park, Bellville, Cape Town",
  linkedin: "https://www.linkedin.com/in/will-jackson"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: "Data Architect/Software Engineer Intern",
    company: "Topco Media and Communications",
    period: "June 2025 - December 2025",
    description: [
      "Participated in code reviews of fellow developers' work products prior to release into production environment.",
      "Collaborated with project teams to ensure that all changes are implemented properly according to best practices.",
      "Migrated databases from one platform to another while ensuring minimal disruption in service levels."
    ]
  },
  {
    id: '2',
    role: "Matric exam checker",
    company: "WCED",
    period: "December 2023, 2024, 2025",
    description: [
      "Assisted in marking and moderating national matric examination scripts, ensuring accuracy, fairness, and adherence to official marking guidelines.",
      "Worked under strict deadlines, maintained confidentiality, and contributed to quality assurance processes through consistent application of assessment standards."
    ]
  },
  {
    id: '3',
    role: "Sales assistant (Part time)",
    company: "Copy Express - Tygervalley",
    period: "December 2021 - December 2025",
    description: [
      "Assisted in store merchandising, stocking shelves and setting up displays.",
      "Handled cash register operations, including payments, returns, and exchanges.",
      "Arranged store products on shelves and promotional displays."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: '1',
    institution: "Stellenbosch University",
    degree: "Bachelor of Commerce: Information Systems Management and Business Analytics",
    period: "2022 - 2025"
  },
  {
    id: '2',
    institution: "The Settlers High School",
    degree: "High School Education",
    period: "2017 - 2021"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "R", "SQL"]
  },
  {
    category: "Tools & Automation",
    skills: ["n8n (Workflow Automation)", "Microsoft Word", "Excel", "PowerPoint", "Canva"]
  },
  {
    category: "Soft Skills",
    skills: ["Strong Interpersonal Skills", "Communication", "Work Ethics", "Time Management"]
  },
  {
    category: "Languages",
    skills: ["English", "Afrikaans", "French"]
  }
];

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    id: '1',
    name: "Ralf Fletcher",
    role: "Topco Media and Communications / CEO",
    contact: "(082) 651-4874",
    email: "ralf.fletcher@topco.co.za"
  },
  {
    id: '2',
    name: "Sam",
    role: "Copy Express / Store Manager",
    contact: "083 676 1669",
    email: "sam@copyexpress.co.za"
  }
];

// Data for Recharts visualization
export const CHART_DATA = [
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'Data Science', A: 85, fullMark: 100 },
  { subject: 'JavaScript/TS', A: 80, fullMark: 100 },
  { subject: 'SQL', A: 85, fullMark: 100 },
  { subject: 'R', A: 70, fullMark: 100 },
  { subject: 'Automation', A: 95, fullMark: 100 },
];
