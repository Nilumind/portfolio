import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ansala Gunawardena for collaboration, job opportunities, or just to say hello.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ansalagunawardana@gmail.com",
    href: "mailto:ansalagunawardana@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ansala-gunawardena",
    href: "https://linkedin.com/in/ansala-gunawardena/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Nilumind",
    href: "https://github.com/Nilumind",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a question or want to work together? Drop me a message!"
      />

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">
            Contact Information
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I&apos;m always interested in hearing about new opportunities,
            collaborations, or just having a chat about technology. Feel free to
            reach out through any of the channels below or use the contact form.
          </p>
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <info.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <Link
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-xl border border-border bg-card p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
