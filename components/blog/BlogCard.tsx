import { formatDate } from "@/lib/helpers";
import type { Blog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, isTitleH2 = true }: { blog: Blog, isTitleH2?: boolean }) {
    return (
        <Link href={`/blog/${blog.slug}`} className="block">
        <article className="group cursor-pointer rounded-3xl border border-border bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* Image */}
          <div className="relative mb-5 h-60 overflow-hidden rounded-2xl">
            <Image
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
      
          {/* Content */}
          <div className="flex min-h-[180px] flex-col">
            {/* Category */}
            {/* <div className="mb-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {blog.category}
              </span>
            </div> */}
      
            {/* Title */}
            {isTitleH2 ? (
              <h2 className="mb-3 line-clamp-2 text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                {blog.title}
              </h2>
            ) : (
              <div className="mb-3 line-clamp-2 text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                {blog.title}
              </div>
            )}
      
            {/* Description */}
            <div className="mb-5 min-h-[72px]">
              <p className="line-clamp-3 text-sm leading-6 text-muted">
                {blog.short_description}
              </p>
            </div>
      
            {/* Date */}
            <div className="mt-auto pt-4">
              <span className="text-sm font-medium text-muted">
                {formatDate(blog.publishedAt)}
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
}