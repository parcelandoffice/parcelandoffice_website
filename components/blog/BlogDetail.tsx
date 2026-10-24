"use client";

import { formatDate, getImageUrl } from "@/lib/helpers";
import { Blog, SanityPost } from "@/lib/types";
import { getStaticBlogBySlug } from "@/lib/static-blogs";
import BlogArticleCta from "@components/blog/BlogArticleCta";
import RelatedBlogs from "@components/blog/RelatedBlogs";
import TableOfContents, { STATIC_TOC_ITEMS } from "@components/blog/TableOfContents";
import ArticleBody from "@components/blog/ArticleBody";
import AuthorInformation from "@components/blog/AuthorInformation";
import { extractTocHeadings } from "@/lib/portable-text";
import { SanityImageSource } from "@sanity/image-url";
import {
  Calendar,
  ChevronRight,
  Clock,
  Home,
  Share2,
  Check,
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
}: BlogDetailProps) {
  const [copied, setCopied] = useState(false);

  const staticItem = getStaticBlogBySlug(blogDetail?.slug);

  const headerImageUrl = blogDetail?.mainImage
    ? getImageUrl(blogDetail.mainImage as SanityImageSource)
    : staticItem?.image || "/images/hero-parcels.jpg";

  const readTime = staticItem?.readTime || "5 min read";
  const categoryName =
    blogDetail?.categories?.[0]?.title || staticItem?.category || "Shipping & Logistics";
  const authorName =
    blogDetail?.author?.name || staticItem?.authorName || "David Miller";
  const authorRole =
    blogDetail?.author?.additionalInfo || staticItem?.authorRole || "Logistics Specialist";

  let authorAvatar = "";
  if (blogDetail?.author?.image) {
    try {
      authorAvatar = getImageUrl(blogDetail.author.image as SanityImageSource);
    } catch {
      authorAvatar = "";
    }
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tocHeadings = blogDetail?.body ? extractTocHeadings(blogDetail.body) : [];

  return (
    <article className="min-h-screen bg-background">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-primary-dark pt-8 pb-12 lg:pb-16">
        {/* Subtle grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]"
        />

        {/* Large container matching home page (max-w-7xl) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          {/* Article Header Grid: Balanced columns with prominent image and well-proportioned title */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Left Column: Text & Meta */}
            <div className="lg:col-span-7 xl:col-span-6">
              {/* Category Pill, Read Time & Published Date */}
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
                  <time dateTime={blogDetail?.publishedAt}>
                    {blogDetail?.publishedAt ? formatDate(blogDetail.publishedAt) : ""}
                  </time>
                </span>
              </div>

              {/* Article Main Title (refined text size for optimal visual balance) */}
              <h1 className="font-display text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl sm:leading-tight lg:text-3xl lg:leading-snug xl:text-[34px]">
                {blogDetail?.title}
              </h1>

              {/* Subtitle / Short Description */}
              {blogDetail?.short_description && (
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
                  {blogDetail.short_description}
                </p>
              )}

              {/* Author Quick Attribution Bar & Share Button */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  {authorAvatar ? (
                    <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-accent/40">
                      <Image
                        src={authorAvatar}
                        alt={authorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent ring-2 ring-accent/40 font-bold text-sm">
                      {authorName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
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
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/15 cursor-pointer"
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

            {/* Right Column: Increased Height & Width Primary Image */}
            <div className="lg:col-span-5 xl:col-span-6">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] w-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[420px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
                <Image
                  src={headerImageUrl}
                  alt={blogDetail?.mainImage?.alt || blogDetail?.title || "Blog cover"}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ARTICLE BODY & TABLE OF CONTENTS ===================== */}
      <section className="py-12 sm:py-16">
        {/* Large container matching home page (max-w-7xl) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TableOfContents
            headings={STATIC_TOC_ITEMS}
            readTime={readTime}
            articleTitle={blogDetail?.title}
          >
            {/* Structured Article Body rendered via PortableText */}
            <ArticleBody blogDetail={blogDetail} staticItem={staticItem} />

            {/* Author Information Section */}
            <AuthorInformation
              author={blogDetail?.author}
              authorName={authorName}
              authorRole={authorRole}
            />
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
