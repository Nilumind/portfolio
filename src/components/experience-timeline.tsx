"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Experience } from "@/content/experience";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2">
              <Briefcase className="h-4 w-4 text-accent" />
            </div>

            {/* Left: meta (on desktop) */}
            <div className="pl-12 md:pl-0 md:text-right md:pr-12">
              <h3 className="text-lg font-semibold text-foreground">
                {exp.title}
              </h3>
              <div className="mt-1 flex items-center gap-2 md:justify-end">
                <span className="text-sm text-accent font-medium">
                  {exp.company}
                </span>
                {exp.companyUrl && (
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {exp.period} &middot; {exp.duration}
              </p>
              <span className="mt-1 inline-block rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                {exp.type}
              </span>
            </div>

            {/* Right: bullets (on desktop) */}
            <div className="pl-12 md:pl-12">
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
