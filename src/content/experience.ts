export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  duration: string;
  type: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "Efito Solutions (Pvt) Ltd — BuilderBid.com",
    companyUrl: "https://builderbid.com",
    period: "Dec 2024 — Present",
    duration: "Present",
    type: "Full-time",
    bullets: [
      "Architected an LLM cost-code classifier (FastAPI + OpenAI JSON-mode) to auto-map estimate line items to a company catalog via parallel async inference, with server-side ID validation and an Angular human-in-the-loop review UI.",
      "Built an end-to-end AI change-order drafting feature (React / Node.js BFF / FastAPI / OpenAI) that turns plain-English scope into a client-ready HTML narrative, supporting multi-turn refinement and instruction-based rewriting.",
      "Worked with Redux Toolkit in Angular to create reducers and actions for complex spreadsheet operations, drawing tools, and plan management features.",
      "Built responsive UI components using React, Angular, TypeScript, and Tailwind CSS with custom theming, including interactive modals, advanced data tables, and real-time data synchronization.",
      "Created high-performance budget tracking feature in React using TanStack Table with virtual scrolling, hierarchical row grouping, column visibility management, real-time filtering, and export functionality (PDF/Excel).",
      "Designed and implemented event-driven serverless architecture using AWS Lambda, API Gateway, S3, and CloudFront for automated SVG/thumbnail generation and file processing.",
      "Implemented automated email webhook handler using SendGrid Inbound Parse Webhook for AI-powered bill extraction workflow.",
      "Integrated multiple external APIs including Home Depot BigBox API, 1build API, WorkpackAI, and SendGrid with robust error handling and retry mechanisms.",
    ],
    tech: [
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "Python",
      "OpenAI API",
      "MongoDB",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "CloudFront",
      "Redux Toolkit",
      "TanStack Table",
      "Tailwind CSS",
      "SendGrid",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "Efito Solutions (Pvt) Ltd — BuilderBid.com",
    companyUrl: "https://builderbid.com",
    period: "May 2024 — Dec 2024",
    duration: "8 months",
    type: "Full-time",
    bullets: [
      "Contributed to large-scale web application development using Angular, React, TypeScript, Node.js/Express, and FastAPI (Python) across frontend, backend, and AI microservices.",
      "Implemented cloud file storage solution with presigned URL generation using AWS SDK for secure direct client-to-S3 uploads.",
      "Built responsive UI components using React, TypeScript, and Tailwind CSS, including modals, forms, and interactive widgets.",
      "Worked with MongoDB and Mongoose ODM to implement database schemas, data access layers, and CRUD operations.",
      "Developed RESTful API endpoints using Node.js and Express.js with authentication, validation, and error handling.",
      "Maintained strict TypeScript typing, error handling, logging, code reviews, and Git branching strategies.",
    ],
    tech: [
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "AWS S3",
      "Tailwind CSS",
      "Git",
    ],
  },
];
