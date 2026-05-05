import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ansala Gunawardena — Full-Stack Engineer",
    template: "%s | Ansala Gunawardena",
  },
  description:
    "Full-stack Engineer specializing in React, Angular, TypeScript, Node.js, and AWS. Building scalable web applications with modern technologies.",
  keywords: [
    "Ansala Gunawardena",
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Angular",
    "TypeScript",
    "Node.js",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Ansala Gunawardena" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ansala Gunawardena — Full-Stack Engineer",
    description:
      "Full-stack Engineer specializing in React, Angular, TypeScript, Node.js, and AWS.",
    siteName: "Ansala Gunawardena",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansala Gunawardena — Full-Stack Engineer",
    description:
      "Full-stack Engineer specializing in React, Angular, TypeScript, Node.js, and AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
