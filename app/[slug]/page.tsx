import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  getDigitalMarketingServiceBySlug,
  getAllDigitalMarketingSlugs,
} from "@/lib/apis";
import { DIGITAL_MARKETING_SERVICES } from "@/lib/digital-marketing-data";
import { BUSINESS, SITE_NAME } from "@/lib/site-data";
import DigitalHero from "@components/digital-marketing/digital-hero";
import DigitalOverview from "@components/digital-marketing/digital-overview";
import DigitalServicesList from "@components/digital-marketing/digital-services-list";
import DigitalPlatforms from "@components/digital-marketing/digital-platforms";
import DigitalProcess from "@components/digital-marketing/digital-process";
import DigitalIndustries from "@components/digital-marketing/digital-industries";
import DigitalLocalMarketing from "@components/digital-marketing/digital-local-marketing";
import DigitalWhyChoose from "@components/digital-marketing/digital-why-choose";
import DigitalTestimonials from "@components/digital-marketing/digital-testimonials";
import DigitalFaq from "@components/digital-marketing/digital-faq";
import DigitalCta from "@components/digital-marketing/digital-cta";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllDigitalMarketingSlugs();
  return slugs.map((slug) => ({
    slug: `${slug.replace(/-usa$/, "")}-usa`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-usa$/, "");
  const service = await getDigitalMarketingServiceBySlug(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_NAME}`,
    };
  }

  const siteUrl = process.env.SITE_URL || "https://parcelandoffice.com";
  const pageUrl = `${siteUrl}/${cleanSlug}-usa`;

  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.hero.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.hero.description,
      url: pageUrl,
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

export default async function DigitalMarketingServiceUsaPage({ params }: Props) {
  const { slug } = await params;

  // If accessed without '-usa', redirect to canonical USA format
  if (!slug.endsWith("-usa")) {
    const candidate = await getDigitalMarketingServiceBySlug(slug);
    if (candidate) {
      redirect(`/${slug}-usa`);
    }
  }

  const service = await getDigitalMarketingServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const siteUrl = process.env.SITE_URL || "https://parcelandoffice.com";
  const canonicalUrl = `${siteUrl}/${service.slug.replace(/-usa$/, "")}-usa`;

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
      name: "United States",
    },
    url: canonicalUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Section 1: Hero Section */}
        {service.showHero !== false && <DigitalHero service={service} />}

        {/* Section 2: Service Overview */}
        {service.showOverview !== false && <DigitalOverview service={service} />}

        {/* Section 3: Solutions / Services List */}
        {service.showSolutions !== false && <DigitalServicesList service={service} />}

        {/* Section 4: Platforms We Manage */}
        {service.showPlatforms !== false && <DigitalPlatforms service={service} />}

        {/* Section 5: Industries We Serve */}
        {service.showIndustries !== false && <DigitalIndustries service={service} />}

        {/* Section 6: Local Social Media Marketing in Odenton, MD */}
        {service.showLocalMarketing !== false && <DigitalLocalMarketing service={service} />}

        {/* Section 7: Marketing Process */}
        {service.showProcess !== false && <DigitalProcess service={service} />}

        {/* Section 8: Why Choose Us */}
        {service.showWhyChooseUs !== false && <DigitalWhyChoose service={service} />}

        {/* Section 9: Frequently Asked Questions */}
        {service.showFaqs !== false && <DigitalFaq service={service} />}

        {/* Client Testimonials (only if real approved feedback exists and switch is active) */}
        {service.showTestimonials !== false &&
          service.testimonials &&
          service.testimonials.items &&
          service.testimonials.items.some(
            (t) => t.approved && !t.quote.includes("[Insert")
          ) && <DigitalTestimonials service={service} />}

        {/* Section 10: Final Call to Action */}
        {service.showFinalCta !== false && <DigitalCta service={service} />}
      </main>
    </>
  );
}
