import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and insights about web development, system design, AWS, and software engineering by Ansala Gunawardena.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        title="Blog"
        subtitle="Thoughts, tutorials, and insights from my journey as a software engineer"
      />

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No posts yet. Stay tuned!
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={{
                slug: post.slug,
                title: post.frontmatter.title,
                date: new Date(post.frontmatter.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                ),
                excerpt: post.frontmatter.excerpt,
                readingTime: post.readingTime,
                tags: post.frontmatter.tags,
              }}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  );
}
