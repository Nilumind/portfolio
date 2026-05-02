import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/content/skills";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ansala Gunawardena — a full-stack engineer specializing in React, Angular, TypeScript, Node.js, and AWS.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        title="About Me"
        subtitle="A passionate developer who loves building things for the web"
      />

      <AboutContent skillCategories={skillCategories} />
    </section>
  );
}
