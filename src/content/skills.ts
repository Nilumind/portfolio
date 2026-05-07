export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "Redux Toolkit",
      "RxJS",
      "TanStack Table",
      "Tailwind CSS",
      "Framer Motion",
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
      "WebSockets",
      "Firebase",
      "AWS Lambda",
      "AWS S3",
      "CloudFront",
      "API Gateway",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "AI & Automation",
    skills: [
      "OpenAI API",
      "LLM Integration",
      "Prompt Engineering",
      "Structured JSON Output",
      "Async Batched Inference",
      "Gemini API",
      "TensorFlow",
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
      "CI/CD",
      "Agile",
      "Code Reviews",
    ],
  },
];
