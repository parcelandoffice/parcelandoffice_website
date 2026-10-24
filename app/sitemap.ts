import type { MetadataRoute } from "next";
import { getAllPostSlugs, getAllDigitalMarketingSlugs } from "@/lib/apis";
import { getSiteUrl } from "@/lib/constants";
import { SERVICES } from "@/lib/site-data";

const STATIC_ROUTES = ["", "/about-us", "/blog", "/contact-us"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));

  const [posts, digitalSlugs] = await Promise.all([
    getAllPostSlugs().catch(() => []),
    getAllDigitalMarketingSlugs().catch(() => []),
  ]);

  const blogEntries: MetadataRoute.Sitemap = (posts || []).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt ?? post.publishedAt ?? now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const digitalMarketingEntries: MetadataRoute.Sitemap = (digitalSlugs || []).map((slug) => ({
    url: `${siteUrl}/${slug.replace(/-usa$/, "")}-usa`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const storeServiceEntries: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...digitalMarketingEntries, ...storeServiceEntries, ...blogEntries];
}
