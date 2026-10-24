import BlogListing from "@/components/blog/BlogList";
import { getMetadata, getPosts, getTotalPostsCount } from "@/lib/apis";
import { BLOGS_PER_PAGE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";
import { STATIC_BLOGS } from "@/lib/static-blogs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactCtaSection = dynamic(
  () => import("@/components/home/contact-cta-section"),
);

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("blog");
}

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const resolvedSearchParams = await searchParams;
  const rawPage = parseInt(resolvedSearchParams?.page || "1", 10);
  const currentPage = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;
  const initialCategory = resolvedSearchParams?.category || "All";
  const limit = BLOGS_PER_PAGE;
  const offset = (currentPage - 1) * limit;

  const [blogs, totalBlogs, metadata] = await Promise.all([
    getPosts({ limit, offset, category: initialCategory }),
    getTotalPostsCount(undefined, initialCategory),
    getMetadata().catch(() => null),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalBlogs / limit));

  return (
    <div className="bg-background">
      <BlogListing
        blogs={blogs}
        allBlogs={STATIC_BLOGS}
        currentPage={currentPage}
        totalPages={totalPages}
        totalBlogs={totalBlogs}
        initialCategory={initialCategory}
        blogHeroTitle={metadata?.blogHeroTitle}
        blogHeroDescription={metadata?.blogHeroDescription}
      />
      {/* <ContactCtaSection /> */}
    </div>
  );
};

export default BlogPage;
