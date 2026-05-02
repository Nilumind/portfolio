export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "BuilderBid Platform",
    description:
      "Construction estimating, bidding, CRM, and project management platform with real-time collaboration features.",
    longDescription:
      "Contributed to a large-scale construction management platform featuring budget tracking with TanStack Table (virtual scrolling, hierarchical grouping, PDF/Excel export), serverless architecture using AWS Lambda/S3/CloudFront, and multiple third-party API integrations including Home Depot and WorkpackAI.",
    tech: [
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Redux Toolkit",
      "TanStack Table",
      "Tailwind CSS",
    ],
    live: "https://builderbid.com",
  },
  {
    title: "DermScan",
    description:
      "Mobile app leveraging machine learning and image processing to predict and diagnose skin diseases.",
    longDescription:
      "DermScan is a mobile application that leverages machine learning and image processing to predict and diagnose skin diseases. Features secure registration and login, image capture and upload functionality, and rapid disease predictions by analyzing key features and patterns.",
    tech: ["Python", "TensorFlow", "FastAPI", "Node.js", "MongoDB", "Flutter"],
    github: "https://github.com/Group-No-11",
  },
  {
    title: "Budget2Travel",
    description:
      "React app with AI-powered itinerary generation and travel insights using Google Maps and Gemini.",
    longDescription:
      "Built a React application using Firebase for authentication and data storage. Integrated Google Maps/Places and Gemini API to generate personalized itineraries and travel insights based on user budgets and preferences.",
    tech: ["React", "Firebase", "Google Maps API", "Gemini API", "JavaScript"],
    github: "https://github.com/Nilumind/Budget2Travel",
  },
];
