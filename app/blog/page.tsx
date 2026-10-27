import BlogListing from "@/components/blog/BlogList";
import {
  getBlogCategories,
  getMetadata,
  getPosts,
  getTotalPostsCount,
} from "@/lib/apis";
import { BLOGS_PER_PAGE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 180;

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const category = resolved?.category?.trim();
  const rawPage = parseInt(resolved?.page || "1", 10);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;
  const siteUrl = process.env.SITE_URL || "https://parcelandoffice-website.vercel.app";

  if (category && category !== "All") {
    const pageSuffix = page > 1 ? ` - Page ${page}` : "";
    return {
      title: `${category} Guides & Shipping Insights${pageSuffix} | Parcel and Office`,
      description: `Explore expert advice, tips, and practical guides on ${category} from Parcel & Office Solutions in Odenton, MD.`,
      alternates: {
        canonical: `${siteUrl}/blog?category=${encodeURIComponent(category)}${
          page > 1 ? `&page=${page}` : ""
        }`,
      },
      openGraph: {
        title: `${category} Articles | Parcel & Office Solutions`,
        description: `Read the latest articles on ${category} from Parcel & Office Solutions.`,
      },
    };
  }

  const baseMetadata = await getPageMetadata("blog");
  const pageSuffix = page > 1 ? ` (Page ${page})` : "";

  return {
    ...baseMetadata,
    title: `${baseMetadata.title}${pageSuffix}`,
    alternates: {
      canonical: `${siteUrl}/blog${page > 1 ? `?page=${page}` : ""}`,
    },
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const resolvedSearchParams = await searchParams;
  const rawPage = parseInt(resolvedSearchParams?.page || "1", 10);
  const currentPage = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;
  const activeCategory = resolvedSearchParams?.category?.trim() || "All";
  const limit = BLOGS_PER_PAGE;
  const offset = (currentPage - 1) * limit;
  const siteUrl = process.env.SITE_URL || "https://parcelandoffice-website.vercel.app";

  // Server-side parallel data fetching
  const [categories, blogs, totalBlogs, metadata] = await Promise.all([
    getBlogCategories(),
    getPosts({ limit, offset, category: activeCategory }),
    getTotalPostsCount(activeCategory),
    getMetadata().catch(() => null),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalBlogs / limit));

  // Breadcrumbs Schema JSON-LD for Search Engines
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      ...(activeCategory !== "All"
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: activeCategory,
              item: `${siteUrl}/blog?category=${encodeURIComponent(activeCategory)}`,
            },
          ]
        : []),
    ],
  };

  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <BlogListing
        blogs={blogs}
        categories={categories}
        currentPage={currentPage}
        totalPages={totalPages}
        totalBlogs={totalBlogs}
        activeCategory={activeCategory}
        blogHeroTitle={metadata?.blogHeroTitle}
        blogHeroDescription={metadata?.blogHeroDescription}
      />
    </div>
  );
};

export default BlogPage;
