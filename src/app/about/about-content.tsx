"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Code2 } from "lucide-react";
import type { SkillCategory } from "@/content/skills";

interface AboutContentProps {
  skillCategories: SkillCategory[];
}

const education = [
  {
    degree: "BSc (Hons) Computing Science in Software Engineering",
    school: "Kingston University (UK)",
    period: "2024 — 2025",
  },
  {
    degree: "NDT in Information Technology",
    school: "University of Moratuwa",
    period: "2021 — 2024",
  },
  {
    degree: "Physical Science",
    school: "Richmond College",
    period: "2019",
  },
];

const volunteering = [
  "Committee member of ITUM Computer Society",
  "Graphic designer at NDT Media Club",
  "Dedicated member of the university Karate team",
  "Member of the ITUM Sports Club editorial board",
];

export function AboutContent({ skillCategories }: AboutContentProps) {
  return (
    <div className="space-y-16">
      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-3"
      >
        {/* Photo placeholder */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element -- next/image fails to decode this JPEG in dev */}
            <img
              src="/images/ansala_dp.jpg"
              alt="Ansala Gunawardena"
              width={256}
              height={256}
              className="absolute inset-0 z-0 h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>

        {/* Bio text */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Code2 className="h-5 w-5 text-accent" />
            Who I Am
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a full-stack engineer with over 1 year of professional
            experience building and optimizing scalable web applications. I
            specialize in <strong className="text-foreground">React</strong>,{" "}
            <strong className="text-foreground">Angular</strong>,{" "}
            <strong className="text-foreground">Node.js</strong>, and{" "}
            <strong className="text-foreground">MongoDB</strong>, with hands-on
            experience in FastAPI, Firebase, AWS, and AI integrations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m driven by a focus on system design, performance
            optimization, and security. I utilize AI-powered tools to enhance
            productivity and code quality, and I&apos;m committed to delivering
            high-quality, reliable features with a strong emphasis on user
            experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently based in Sri Lanka, I hold a BSc (Hons) in Computing
            Science from Kingston University, UK, and an NDT from the University
            of Moratuwa. I&apos;m always looking for new challenges and
            opportunities to grow as a developer.
          </p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Code2 className="h-5 w-5 text-accent" />
          Technical Skills
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h4 className="text-sm font-semibold text-accent mb-3">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-accent" />
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
              <p className="mt-1 text-sm text-accent">{edu.school}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Volunteering */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Heart className="h-5 w-5 text-accent" />
          Volunteering & Activities
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {volunteering.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
