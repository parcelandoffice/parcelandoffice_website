"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@components/blog/BlogCard";
import Pagination from "@components/common/pagination";
import type { Blog, BlogCategoryItem } from "@/lib/types";
import { Sparkles, Layers, Home, ChevronRight, Loader2 } from "lucide-react";

interface Props {
  blogs: Blog[];
  categories: BlogCategoryItem[];
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  activeCategory: string;
  blogHeroTitle?: string;
  blogHeroDescription?: string;
}

const DEFAULT_BLOG_HERO_TITLE = "Insights, Tips & Shipping Guides";
const DEFAULT_BLOG_HERO_DESCRIPTION =
  "Expert advice on courier drop-offs, sustainable packaging, private mailbox rentals, and small business fulfillment.";

export default function BlogListing({
  blogs = [],
  categories = [],
  currentPage = 1,
  totalPages = 1,
  totalBlogs = 0,
  activeCategory = "All",
  blogHeroTitle,
  blogHeroDescription,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const heroTitle = blogHeroTitle ?? DEFAULT_BLOG_HERO_TITLE;
  const heroDescription =
    blogHeroDescription ?? DEFAULT_BLOG_HERO_DESCRIPTION;

  const handleCategorySelect = (category: string) => {
    if (category.toLowerCase() === activeCategory.toLowerCase()) return;

    const params = new URLSearchParams();
    if (category !== "All") {
      params.set("category", category);
    }
    // Reset to page 1 on category change
    const targetUrl = params.toString() ? `/blog?${params.toString()}` : "/blog";

    startTransition(() => {
      router.push(targetUrl, { scroll: false });
    });

    const section = document.getElementById("blog-listing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) {
      return;
    }

    const params = new URLSearchParams();
    if (activeCategory !== "All") {
      params.set("category", activeCategory);
    }
    if (newPage > 1) {
      params.set("page", String(newPage));
    }

    const targetUrl = params.toString() ? `/blog?${params.toString()}` : "/blog";

    startTransition(() => {
      router.push(targetUrl, { scroll: false });
    });

    const section = document.getElementById("blog-listing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-primary-dark pt-8 pb-14 sm:pb-16 lg:pb-20">
        <Image
          src="/images/hero-parcels.jpg"
          alt="Parcel & Office Insights & Resources"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Brand Theme Overlay */}
        <div className="absolute inset-0 bg-primary/88" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:36px_36px]"
        />

        {/* Large container matching site standard (max-w-7xl) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation - aligned with the page container */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-white/75 sm:text-sm"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="inline-flex items-center">
                {activeCategory === "All" ? (
                  <span className="font-semibold text-accent" aria-current="page">
                    Blog
                  </span>
                ) : (
                  <Link
                    href="/blog"
                    className="text-white/75 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                  >
                    Blog
                  </Link>
                )}
              </li>
              {activeCategory !== "All" && (
                <>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </li>
                  <li className="inline-flex items-center">
                    <span
                      className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-accent backdrop-blur-sm"
                      aria-current="page"
                    >
                      {activeCategory}
                    </span>
                  </li>
                </>
              )}
            </ol>
          </nav>

          {/* Centered Hero Content */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Top Pill Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-light backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Resource Center & Guides</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {activeCategory !== "All" ? `${activeCategory} Guides` : heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MAIN LISTING SECTION ===================== */}
      <section
        id="blog-listing-section"
        className="container relative scroll-mt-20 py-12 sm:py-16"
      >
        {/* Subtle loading transition indicator */}
        {isPending && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent/20 overflow-hidden">
            <div className="h-full w-1/3 bg-accent animate-pulse" />
          </div>
        )}

        {/* Category Filter Navigation */}
        <div className="mb-10 sm:mb-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Layers className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Filter By Topic</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              {isPending && (
                <Loader2 className="h-3.5 w-3.5 animate-spin text-accent" />
              )}
              <span>
                Showing{" "}
                <span className="font-bold text-foreground">{totalBlogs}</span>{" "}
                {totalBlogs === 1 ? "article" : "articles"}
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            role="tablist"
            aria-label="Blog categories"
          >
            {categories.map((cat) => {
              const isSelected =
                activeCategory.toLowerCase() === cat.title.toLowerCase();

              return (
                <button
                  key={cat.title}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategorySelect(cat.title)}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    isSelected
                      ? "bg-primary text-white shadow-sm ring-1 ring-primary"
                      : "border border-border bg-surface text-muted hover:border-primary/40 hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  <span>{cat.title}</span>
                  <span
                    className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                      isSelected
                        ? "bg-accent text-primary-dark"
                        : "bg-surface-subtle text-muted group-hover:text-foreground"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blogs Grid */}
        {blogs.length === 0 ? (
          <div className="rounded-2xl border border-border bg-surface-muted/50 py-16 px-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Layers className="h-7 w-7" />
            </div>
            <p className="text-xl font-bold text-foreground">
              No blog posts found
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              There are currently no articles in &ldquo;{activeCategory}&rdquo;.
              Try selecting another category or view all guides.
            </p>
            <button
              type="button"
              onClick={() => handleCategorySelect("All")}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-primary-dark cursor-pointer"
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
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div
            className={`mt-10 ${
              isPending ? "pointer-events-none opacity-60" : ""
            }`}
          >
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