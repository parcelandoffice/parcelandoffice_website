import BlogListing from "@/components/blog/BlogList";
import { getMetadata, getPosts, getTotalPostsCount } from "@/lib/apis";
import { BLOGS_PER_PAGE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactCtaSection = dynamic(
  () => import("@/components/home/contact-cta-section"),
);

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("blog");
}

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const resolvedSearchParams = await searchParams;
  const rawPage = parseInt(resolvedSearchParams?.page || "1", 10);
  const currentPage = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;
  const limit = BLOGS_PER_PAGE;
  const offset = (currentPage - 1) * limit;

  const [blogs, totalBlogs, metadata] = await Promise.all([
    getPosts({ limit, offset }),
    getTotalPostsCount(),
    getMetadata(),
  ]);

  const totalPages = Math.ceil(totalBlogs / limit);

  return (
    <div className="bg-background">
      <BlogListing
        blogs={blogs}
        currentPage={currentPage}
        totalPages={totalPages}
        totalBlogs={totalBlogs}
        blogHeroTitle={metadata?.blogHeroTitle}
        blogHeroDescription={metadata?.blogHeroDescription}
      />
      <ContactCtaSection />
    </div>
  );
};

export default BlogPage;

