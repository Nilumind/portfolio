export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "Redux",
      "RxJS",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Table",
      "Konva.js",
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "Firebase",
      "AWS Lambda",
      "AWS S3",
      "CloudFront",
      "API Gateway",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Mongoose ODM"],
  },
  {
    category: "AI & Automation",
    skills: [
      "Gemini API",
      "TensorFlow",
      "AI Model Integrations",
      "SendGrid Webhooks",
      "PDF Processing",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Docker",
      "Agile",
      "Code Reviews",
    ],
  },
];
