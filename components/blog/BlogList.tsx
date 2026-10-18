"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@components/blog/BlogCard";
import Pagination from "@components/common/pagination";
import { BLOG_CATEGORIES, STATIC_BLOGS } from "@/lib/static-blogs";
import type { Blog } from "@/lib/types";
import { BLOGS_PER_PAGE } from "@/lib/constants";
import Image from "next/image";
import { Sparkles, Layers } from "lucide-react";

interface Props {
  blogs?: Blog[];
  currentPage?: number;
  totalPages?: number;
  totalBlogs?: number;
  blogHeroTitle?: string;
  blogHeroDescription?: string;
  initialCategory?: string;
  allBlogs?: Blog[];
}

const DEFAULT_BLOG_HERO_TITLE = "Insights, Tips & Shipping Guides";
const DEFAULT_BLOG_HERO_DESCRIPTION =
  "Expert advice on courier drop-offs, sustainable packaging, private mailbox rentals, and small business fulfillment.";

export default function BlogListing({
  blogs,
  currentPage: initialCurrentPage = 1,
  totalPages: initialTotalPages,
  totalBlogs: initialTotalBlogs,
  blogHeroTitle,
  blogHeroDescription,
  initialCategory,
  allBlogs = STATIC_BLOGS,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Read initial category from prop or URL
  const urlCategory = searchParams.get("category");
  const urlPage = parseInt(searchParams.get("page") || "1", 10);

  const [activeCategory, setActiveCategory] = useState<string>(
    urlCategory || initialCategory || "All"
  );
  const [page, setPage] = useState<number>(
    Number.isInteger(urlPage) && urlPage > 0 ? urlPage : initialCurrentPage
  );

  const heroTitle = blogHeroTitle ?? DEFAULT_BLOG_HERO_TITLE;
  const heroDescription =
    blogHeroDescription ?? DEFAULT_BLOG_HERO_DESCRIPTION;

  // Calculate category counts dynamically from allBlogs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allBlogs.length };
    BLOG_CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = allBlogs.filter(
          (b) => b.category?.toLowerCase() === cat.toLowerCase()
        ).length;
      }
    });
    return counts;
  }, [allBlogs]);

  // Filter blogs based on active category
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return allBlogs;
    }
    return allBlogs.filter(
      (b) => b.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [allBlogs, activeCategory]);

  // Calculate pagination for the filtered list
  const limit = BLOGS_PER_PAGE;
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / limit));
  const validPage = Math.min(page, totalPages);
  const offset = (validPage - 1) * limit;
  const currentBlogs = filteredBlogs.slice(offset, offset + limit);

  // Sync URL when category or page changes
  const updateUrl = (newCategory: string, newPage: number) => {
    const params = new URLSearchParams();
    if (newCategory !== "All") {
      params.set("category", newCategory);
    }
    if (newPage > 1) {
      params.set("page", String(newPage));
    }

    const query = params.toString();
    const targetUrl = query ? `/blog?${query}` : "/blog";

    startTransition(() => {
      router.push(targetUrl, { scroll: false });
    });
  };

  const handleCategorySelect = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPage(1);
    updateUrl(category, 1);

    const section = document.getElementById("blog-listing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === page || newPage < 1 || newPage > totalPages) {
      return;
    }
    setPage(newPage);
    updateUrl(activeCategory, newPage);

    const section = document.getElementById("blog-listing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[44vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-parcels.jpg"
          alt="Parcel & Office Insights & Resources"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Brand Theme Overlay */}
        <div className="absolute inset-0 bg-primary/85" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:36px_36px]"
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-14 sm:px-10 lg:px-14">
          <div className="max-w-3xl text-center">
            {/* Top Pill Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-light backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Resource Center & Guides</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Listing Section with Category Filters */}
      <section
        id="blog-listing-section"
        className="container scroll-mt-20 py-14 sm:py-20"
      >
        {/* Category Filter Pills */}
        <div className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Layers className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Filter By Topic</span>
            </div>
            <div className="text-xs font-medium text-muted">
              Showing{" "}
              <span className="font-bold text-foreground">
                {filteredBlogs.length}
              </span>{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            role="tablist"
            aria-label="Blog categories"
          >
            {BLOG_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              const count = categoryCounts[category] ?? 0;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategorySelect(category)}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    isSelected
                      ? "bg-primary text-white shadow-sm ring-1 ring-primary"
                      : "border border-border bg-surface text-muted hover:border-primary/40 hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                      isSelected
                        ? "bg-accent text-primary-dark"
                        : "bg-surface-subtle text-muted group-hover:text-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blogs Grid */}
        {currentBlogs.length === 0 ? (
          <div className="rounded-2xl border border-border bg-surface-muted/50 py-16 text-center">
            <p className="text-xl font-bold text-foreground">
              No blog posts found
            </p>
            <p className="mt-2 text-sm text-muted">
              There are currently no articles in &ldquo;{activeCategory}&rdquo;.
              Try selecting another category.
            </p>
            <button
              type="button"
              onClick={() => handleCategorySelect("All")}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-primary-dark"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-200 ${
              isPending ? "opacity-60 pointer-events-none" : "opacity-100"
            }`}
          >
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div
            className={`mt-6 ${
              isPending ? "pointer-events-none opacity-60" : ""
            }`}
          >
            <Pagination
              currentPage={validPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>
    </>
  );
}