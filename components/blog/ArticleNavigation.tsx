import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Blog } from "@/lib/types";

interface ArticleNavigationProps {
  prevBlog: Blog | null;
  nextBlog: Blog | null;
}

export default function ArticleNavigation({
  prevBlog,
  nextBlog,
}: ArticleNavigationProps) {
  if (!prevBlog && !nextBlog) return null;

  return (
    <nav
      aria-label="Article navigation"
      className="mt-12 grid gap-6 border-t border-border/80 pt-10 sm:grid-cols-2"
    >
      {/* Previous Article */}
      {prevBlog ? (
        <Link
          href={`/blog/${prevBlog.slug}`}
          className="group relative flex items-center gap-4 rounded-2xl border border-border/80 bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
        >
          {/* Thumbnail */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
            <Image
              src={prevBlog.image}
              alt={prevBlog.imageAlt || prevBlog.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="64px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted">
              <ArrowLeft className="h-3 w-3 text-accent transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Previous Article</span>
            </div>
            <h4 className="mt-1 line-clamp-1 font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
              {prevBlog.title}
            </h4>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next Article */}
      {nextBlog ? (
        <Link
          href={`/blog/${nextBlog.slug}`}
          className="group relative flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface p-4 text-right transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted">
              <span>Next Article</span>
              <ArrowRight className="h-3 w-3 text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <h4 className="mt-1 line-clamp-1 font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
              {nextBlog.title}
            </h4>
          </div>

          {/* Thumbnail */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
            <Image
              src={nextBlog.image}
              alt={nextBlog.imageAlt || nextBlog.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="64px"
            />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
