import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDigitalMarketingService,
  DIGITAL_MARKETING_SERVICES,
  DIGITAL_MARKETING_SLUGS,
} from "@/lib/digital-marketing-data";
import { BUSINESS, SITE_NAME } from "@/lib/site-data";
import DigitalHero from "@components/digital-marketing/digital-hero";
import DigitalOverview from "@components/digital-marketing/digital-overview";
import DigitalServicesList from "@components/digital-marketing/digital-services-list";
import DigitalProcess from "@components/digital-marketing/digital-process";
import DigitalIndustries from "@components/digital-marketing/digital-industries";
import DigitalWhyChoose from "@components/digital-marketing/digital-why-choose";
import DigitalTestimonials from "@components/digital-marketing/digital-testimonials";
import DigitalFaq from "@components/digital-marketing/digital-faq";
import DigitalCta from "@components/digital-marketing/digital-cta";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return DIGITAL_MARKETING_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getDigitalMarketingService(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_NAME}`,
    };
  }

  const siteUrl = process.env.SITE_URL || "https://parcelandoffice.com";

  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.hero.description,
    alternates: {
      canonical: `${siteUrl}/digital-marketing-services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.hero.description,
      url: `${siteUrl}/digital-marketing-services/${service.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: service.hero.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${SITE_NAME}`,
      description: service.hero.description,
      images: [service.hero.heroImage],
    },
  };
}

export default async function DigitalMarketingServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getDigitalMarketingService(slug);

  if (!service) {
    notFound();
  }

  const siteUrl = process.env.SITE_URL || "https://parcelandoffice.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "8777 Piney Orchard Pkwy Ste B",
        addressLocality: "Odenton",
        addressRegion: "MD",
        postalCode: "21113",
        addressCountry: "US",
      },
    },
    description: service.hero.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Odenton, MD",
    },
    url: `${siteUrl}/digital-marketing-services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Section 1: Hero Section */}
        <DigitalHero service={service} />

        {/* Section 2: Service Overview */}
        <DigitalOverview service={service} />

        {/* Section 3: Our Social Media Marketing Services */}
        <DigitalServicesList service={service} />

        {/* Section 4: Our Social Media Marketing Process */}
        <DigitalProcess service={service} />

        {/* Section 5: Industries We Serve */}
        <DigitalIndustries service={service} />

        {/* Section 6: Why Choose Our Social Media Marketing Services? */}
        <DigitalWhyChoose service={service} />

        {/* Section 7: Client Testimonials */}
        <DigitalTestimonials service={service} />

        {/* Section 8: Frequently Asked Questions */}
        <DigitalFaq service={service} />

        {/* Section 9: Final Call to Action */}
        <DigitalCta service={service} />
      </main>
    </>
  );
}
