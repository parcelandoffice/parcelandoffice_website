"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@components/blog/BlogCard";
import Pagination from "@components/common/pagination";
import type { Blog } from "@/lib/types";
import Image from "next/image";

interface Props {
    blogs: Blog[];
    currentPage: number;
    totalPages: number;
    totalBlogs?: number;
    blogHeroTitle?: string;
    blogHeroDescription?: string;
}

const DEFAULT_BLOG_HERO_TITLE = "Legal Insights & Resources";
const DEFAULT_BLOG_HERO_DESCRIPTION =
    "Explore expert-written blogs, practical legal guidance, and updates designed to simplify complex legal issues and keep you informed.";

export default function BlogListing({
    blogs,
    currentPage,
    totalPages,
    totalBlogs,
    blogHeroTitle,
    blogHeroDescription,
}: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const heroTitle = blogHeroTitle ?? DEFAULT_BLOG_HERO_TITLE;
    const heroDescription =
        blogHeroDescription ?? DEFAULT_BLOG_HERO_DESCRIPTION;

    const handlePageChange = (newPage: number) => {
        if (newPage === currentPage || newPage < 1 || (totalPages > 0 && newPage > totalPages)) {
            return;
        }

        const params = new URLSearchParams(searchParams.toString());
        if (newPage <= 1) {
            params.delete("page");
        } else {
            params.set("page", String(newPage));
        }

        const queryString = params.toString();
        const targetUrl = queryString ? `/blog?${queryString}` : "/blog";

        startTransition(() => {
            router.push(targetUrl);
            const section = document.getElementById("blog-listing-section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    };

    return (
        <>
            <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                    alt="Insights & Resources Listing Page"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/75" />

                {/* Content */}
                <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-10 sm:px-10 lg:px-14">
                    <div className="max-w-3xl text-center">

                        {/* Title */}
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            {heroTitle}
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                            {heroDescription}
                        </p>

                    </div>
                </div>
            </section>
            <section id="blog-listing-section" className="py-20 container scroll-mt-20">
                {blogs.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl font-medium text-foreground">No blog posts found.</p>
                        <p className="text-muted-foreground mt-2">Please check back later for new insights.</p>
                    </div>
                ) : (
                    <div
                        className={`grid gap-8 md:grid-cols-2 xl:grid-cols-3 transition-opacity duration-200 ${
                            isPending ? "opacity-50 pointer-events-none" : "opacity-100"
                        }`}
                    >
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>
                )}

                {totalPages > 1 && (
                    <div className={isPending ? "opacity-50 pointer-events-none" : ""}>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                )}
            </section>
        </>
    );
}