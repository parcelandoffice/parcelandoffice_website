import BlogCard from "@components/blog/BlogCard";
import type { Blog } from "@/lib/types";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface RelatedBlogsProps {
  blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (blogs.length === 0) return null;

  return (
    <section className="bg-surface-muted/60 py-20 border-t border-border/60">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Sparkles className="h-3 w-3" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Related Articles & Insights
              </p>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              Keep Reading
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary shadow-2xs transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            <span>View All Guides</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} isTitleH2={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
