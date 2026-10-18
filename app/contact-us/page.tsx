import ContactCtaSection from "@/components/home/contact-cta-section";
import { BUSINESS, SITE_NAME, STORE_HOURS } from "@/lib/site-data";
import { getPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata("contact").catch(() => null);

  const titleStr =
    typeof metadata?.title === "string"
      ? metadata.title
      : metadata?.title && "default" in metadata.title
      ? metadata.title.default
      : "";

  // If the fetched metadata still has old defaults or is missing, use brand-accurate metadata
  if (!metadata || !titleStr || titleStr.includes("RP Law")) {
    return {
      title: `Contact Us | ${SITE_NAME} - Odenton, MD`,
      description: `Get in touch with ${SITE_NAME} in Odenton, MD. FedEx, UPS, DHL & USPS shipping, faxing, notary public, professional packing, and printing. Phone: ${BUSINESS.phone}, Fax: ${BUSINESS.fax}.`,
      alternates: {
        canonical: "/contact-us",
      },
    };
  }

  return metadata;
}

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact Us | ${SITE_NAME}`,
  description: `Store hours, physical address, phone, fax, and contact form for ${SITE_NAME} in Odenton, MD.`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: SITE_NAME,
    telephone: BUSINESS.phone,
    faxNumber: BUSINESS.fax,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addressLines[0],
      addressLocality: "Odenton",
      addressRegion: "MD",
      postalCode: "21113",
      addressCountry: "US",
    },
    openingHoursSpecification: STORE_HOURS.filter((h) => h.open).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
  },
};

export default function ContactUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactCtaSection isContactPage={true} />
    </>
  );
}