import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ansala Gunawardena. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
