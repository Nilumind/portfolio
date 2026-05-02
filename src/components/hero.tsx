"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const socials = [
  {
    href: "https://github.com/Nilumind",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/ansala-gunawardena/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:ansalagunawardana@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center py-20"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Ansala Gunawardena</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="mt-4 text-xl text-muted-foreground sm:text-2xl"
          >
            Associate Software Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed"
          >
            Full-stack engineer with 1+ years of experience building scalable
            web applications. Specialized in React, Angular, Node.js, and AWS
            with a passion for system design and performance optimization.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/projects"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground",
                "hover:opacity-90 transition-opacity",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground",
                "hover:bg-muted transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <Download className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-5"
          >
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-border bg-card text-muted-foreground",
                  "hover:text-accent hover:border-accent/50 transition-colors"
                )}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
