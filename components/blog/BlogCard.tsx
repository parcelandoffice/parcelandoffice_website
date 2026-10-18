import { formatDate } from "@/lib/helpers";
import type { Blog } from "@/lib/types";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
  isTitleH2?: boolean;
}

export default function BlogCard({ blog, isTitleH2 = true }: BlogCardProps) {
  const formattedDate = formatDate(blog.publishedAt);
  const categoryName = blog.category || "Shipping & Logistics";

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)] focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      <article className="flex flex-col h-full">
        {/* Card Header Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
          <Image
            src={blog.image}
            alt={blog.imageAlt || blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Card Content Body */}
        <div className="flex flex-1 flex-col p-6 sm:p-6.5">
          {/* Category & Published Date */}
          <div className="mb-3 flex items-center justify-between gap-3">
            {/* Category with horizontal accent bar (UPS gold / theme accent) */}
            <div className="flex items-center gap-2 min-w-0">
              <span
                aria-hidden="true"
                className="inline-block h-[3.5px] w-5 shrink-0 rounded-full bg-accent"
              />
              <span className="truncate text-xs font-bold uppercase tracking-wider text-foreground/80">
                {categoryName}
              </span>
            </div>

            {/* Published At Date */}
            <time
              dateTime={blog.publishedAt}
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted"
            >
              <Calendar className="h-3.5 w-3.5 text-muted-light" aria-hidden="true" />
              <span>{formattedDate}</span>
            </time>
          </div>

          {/* Title */}
          {isTitleH2 ? (
            <h2 className="mb-2.5 font-display text-xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary line-clamp-2">
              {blog.title}
            </h2>
          ) : (
            <div className="mb-2.5 font-display text-xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary line-clamp-2">
              {blog.title}
            </div>
          )}

          {/* Short Description */}
          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted">
            {blog.short_description}
          </p>

          {/* Bottom Action / Read More */}
          <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-3.5 text-xs font-bold text-primary transition-colors group-hover:text-accent">
            <span>Read full story</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}