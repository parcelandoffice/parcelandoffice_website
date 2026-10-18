"use client";

import { formatDate, getImageUrl } from "@/lib/helpers";
import { Blog, SanityPost } from "@/lib/types";
import { getStaticBlogBySlug, getAdjacentBlogs } from "@/lib/static-blogs";
import BlogArticleCta from "@components/blog/BlogArticleCta";
import RelatedBlogs from "@components/blog/RelatedBlogs";
import TableOfContents from "@components/blog/TableOfContents";
import ArticleBody from "@components/blog/ArticleBody";
import AuthorInformation from "@components/blog/AuthorInformation";
import ArticleNavigation from "@components/blog/ArticleNavigation";
import { SanityImageSource } from "@sanity/image-url";
import {
  Calendar,
  ChevronRight,
  Clock,
  Home,
  Share2,
  Copy,
  Check,
  User,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogDetailProps {
  blogDetail: SanityPost;
  relatedBlogs?: Blog[];
  prevBlog?: Blog | null;
  nextBlog?: Blog | null;
}

export default function BlogDetail({
  blogDetail,
  relatedBlogs = [],
  prevBlog: propPrevBlog,
  nextBlog: propNextBlog,
}: BlogDetailProps) {
  const [copied, setCopied] = useState(false);

  const staticItem = getStaticBlogBySlug(blogDetail.slug);
  const adjacent = getAdjacentBlogs(blogDetail.slug);
  const prevBlog = propPrevBlog ?? adjacent.prevBlog;
  const nextBlog = propNextBlog ?? adjacent.nextBlog;

  const headerImageUrl = blogDetail?.mainImage
    ? getImageUrl(blogDetail.mainImage as SanityImageSource)
    : staticItem?.image || "/images/hero-parcels.jpg";

  const readTime = staticItem?.readTime || "5 min read";
  const categoryName =
    blogDetail.categories?.[0]?.title || staticItem?.category || "Shipping & Logistics";
  const authorName =
    staticItem?.authorName || blogDetail.author?.name || "David Miller";
  const authorRole =
    staticItem?.authorRole || "Logistics Specialist";

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-background">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-primary-dark pt-8 pb-16 lg:pb-20">
        {/* Subtle grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]"
        />
        {/* Warm accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/70 sm:text-sm"
          >
            <Link
              href="/"
              className="flex items-center gap-1 text-white/70 transition-colors hover:text-accent"
            >
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Home</span>
            </Link>

            <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />

            <Link
              href="/blog"
              className="text-white/70 transition-colors hover:text-accent"
            >
              Blog
            </Link>

            <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />

            <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-semibold text-accent">
              {categoryName}
            </span>
          </nav>

          {/* Article Header Content */}
          <div className="max-w-4xl">
            {/* Category Pill & Read Time */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                <Sparkles className="h-3 w-3" />
                {categoryName}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75">
                <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {readTime}
              </span>

              <span className="text-white/30">•</span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75">
                <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <time dateTime={blogDetail.publishedAt}>
                  {formatDate(blogDetail.publishedAt)}
                </time>
              </span>
            </div>

            {/* Article Main Title */}
            <h1 className="font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {blogDetail.title}
            </h1>

            {/* Subtitle / Short Description */}
            {blogDetail.short_description && (
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                {blogDetail.short_description}
              </p>
            )}

            {/* Author Quick Attribution Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent ring-2 ring-accent/40 font-bold text-sm">
                  {authorName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {authorName}
                  </div>
                  <div className="text-xs text-white/60">
                    {authorRole} • Parcel &amp; Office
                  </div>
                </div>
              </div>

              {/* Quick Share Link */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/15"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent" />
                    <span className="text-accent">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-accent" />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED IMAGE BANNER ===================== */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border-4 border-surface bg-surface shadow-[var(--shadow-float)] sm:aspect-[21/9]">
            <Image
              src={headerImageUrl}
              alt={blogDetail.mainImage?.alt || blogDetail.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </div>
        </div>
      </section>

      {/* ===================== ARTICLE BODY & TABLE OF CONTENTS ===================== */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <TableOfContents
            readTime={readTime}
            articleTitle={blogDetail.title}
          >
            {/* Structured Article Body with 6 TOC Anchors */}
            <ArticleBody blogDetail={blogDetail} staticItem={staticItem} />

            {/* Author Information Section */}
            <AuthorInformation
              author={blogDetail.author}
              authorName={authorName}
              authorRole={authorRole}
            />

            {/* Previous & Next Article Navigation */}
            <ArticleNavigation prevBlog={prevBlog} nextBlog={nextBlog} />
          </TableOfContents>
        </div>
      </section>

      {/* ===================== RELATED BLOGS ===================== */}
      <RelatedBlogs blogs={relatedBlogs} />

      {/* ===================== PARCEL & OFFICE CTA ===================== */}
      <BlogArticleCta />
    </article>
  );
}
