import BlogCard from "@components/blog/BlogCard";
import type { Blog } from "@/lib/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedBlogsProps {
    blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
    if (blogs.length === 0) return null;

    return (
        <section className="bg-background py-20">
            <div className="container">
                <div className="mb-12 flex items-center flex-col gap-4 sm:flex-row md:items-end sm:justify-between">
                    <div>
                        <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Related Blogs
                        </div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                            More from our legal blog
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="text-xs font-bold uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-light flex items-center"
                    >
                        View All Blogs
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} isTitleH2={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
