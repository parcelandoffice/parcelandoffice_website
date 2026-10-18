import type { Metadata } from "next";
import { getPageSeoData } from "@/lib/apis";
import type { PageSeoData, PageSeoKey } from "@/lib/types";

const PAGE_SEO_FIELD_MAP: Record<
  PageSeoKey,
  keyof Pick<
    PageSeoData,
    "homePageSeo" | "blogPageSeo" | "aboutPageSeo" | "contactPageSeo"
  >
> = {
  home: "homePageSeo",
  blog: "blogPageSeo",
  about: "aboutPageSeo",
  contact: "contactPageSeo",
};

const PAGE_CANONICAL_PATHS: Record<PageSeoKey, string> = {
  home: "/",
  about: "/about",
  blog: "/blog",
  contact: "/contact-us",
};

const DEFAULT_PAGE_METADATA: Record<PageSeoKey, Metadata> = {
  home: {
    title: "RP Law Firm | Trusted Legal Excellence",
    description:
      "RP Law Firm provides expert legal counsel in corporate law, litigation, labor & employment, NRI services, and real estate.",
  },
  blog: {
    title: "Blog & Shipping Insights | Parcel and Office",
    description:
      "Read the latest tips on courier drop-offs, sustainable packaging, private mailbox rentals, and small business fulfillment from Parcel and Office.",
  },
  about: {
    title: "About Us | RP Law Firm",
    description:
      "Learn about RP Law Firm — our mission, vision, values, and the team behind our trusted legal services.",
  },
  contact: {
    title: "Contact Us | RP Law Firm",
    description:
      "Get in touch with RP Law Firm for expert legal counsel. Reach us by phone, email, or our contact form.",
  },
};

export async function getPageMetadata(page: PageSeoKey): Promise<Metadata> {
  const pageSeo = await getPageSeoData();
  const seoField = PAGE_SEO_FIELD_MAP[page];
  const seo = pageSeo?.[seoField];
  const defaults = DEFAULT_PAGE_METADATA[page];

  return {
    title: seo?.metaTitle || defaults.title,
    description: seo?.metaDescription || defaults.description,
    alternates: {
      canonical: `${process.env.SITE_URL}${PAGE_CANONICAL_PATHS[page]}`,
    },
  };
}
