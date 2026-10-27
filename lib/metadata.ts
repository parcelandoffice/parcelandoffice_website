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
  about: "/about-us",
  blog: "/blog",
  contact: "/contact-us",
};

const DEFAULT_PAGE_METADATA: Record<PageSeoKey, Metadata> = {
  home: {
    title:
      "Parcel & Office Solutions | Shipping, Printing & Mailbox Rentals in Odenton, MD",
    description:
      "Authorized shipping center for FedEx, UPS, DHL, and USPS in Odenton, MD. Offering packing, mailbox rentals, digital printing, and notary services.",
  },
  blog: {
    title: "Blog & Shipping Insights | Parcel and Office",
    description:
      "Read the latest tips on courier drop-offs, sustainable packaging, private mailbox rentals, and small business fulfillment from Parcel and Office.",
  },
  about: {
    title: "About Us | Parcel & Office Solutions | Odenton, MD",
    description:
      "Learn about Parcel & Office Solutions in Odenton, MD — our story, mission, multi-carrier shipping services, and dedicated team.",
  },
  contact: {
    title: "Contact Us | Parcel & Office Solutions | Odenton, MD",
    description:
      "Get in touch with Parcel & Office Solutions in Odenton, MD for shipping, packing, printing, notary, and mailbox rental services.",
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
