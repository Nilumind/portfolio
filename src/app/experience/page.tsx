import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experiences } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Ansala Gunawardena as a software engineer at Efito Solutions, building scalable web applications.",
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey in software engineering"
      />

      <ExperienceTimeline experiences={experiences} />
    </section>
  );
}
