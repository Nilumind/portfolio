# Ansala Gunawardena — Portfolio

A modern, SEO-optimized portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Blog**: MDX with next-mdx-remote
- **Contact Form**: Resend email API
- **Icons**: Lucide React
- **Theme**: Dark/Light mode via next-themes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section |
| `/about` | Bio, skills, education, volunteering |
| `/projects` | Project showcase with cards |
| `/experience` | Professional experience timeline |
| `/blog` | Blog listing from MDX files |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact form with email delivery |

## Adding Blog Posts

Create a new `.mdx` file in `src/blog/` with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-02-07"
excerpt: "A brief description of the post."
tags: ["Tag1", "Tag2"]
---

Your markdown content here...
```

## Contact Form Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

Without the API key, form submissions are logged to the console in development.

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Customization

- **Content**: Edit files in `src/content/` (projects, experience, skills)
- **Blog posts**: Add `.mdx` files to `src/blog/`
- **Theme colors**: Modify CSS variables in `src/app/globals.css`
- **Profile photo**: Replace the placeholder in `src/app/about/about-content.tsx`
- **Social links**: Update URLs in `src/components/hero.tsx` and `src/components/footer.tsx`

## License

MIT
