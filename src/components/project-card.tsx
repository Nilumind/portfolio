"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-card p-6",
        "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
        {project.longDescription}
      </p>

      {/* Tech tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
