import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/apis";
import { getSiteUrl } from "@/lib/constants";

const STATIC_ROUTES = ["", "/about", "/blog", "/contact-us"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));

  const posts = await getAllPostSlugs();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt ?? post.publishedAt ?? now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
