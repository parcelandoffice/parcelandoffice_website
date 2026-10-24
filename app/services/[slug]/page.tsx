import { getServiceDetail } from "@/lib/service-details";
import { BUSINESS, SERVICES, SITE_NAME } from "@/lib/site-data";
import ServiceAboutSection from "@components/services/service-about-section";
import ServiceCustomerAssistance from "@components/services/service-customer-assistance";
import ServiceCutoffTracking from "@components/services/service-cutoff-tracking";
import ServiceDestinationsSection from "@components/services/service-destinations";
import ServiceFaq from "@components/services/service-faq";
import ServiceHero from "@components/services/service-hero";
import ServiceProcessSteps from "@components/services/service-process-steps";
import ServiceRequirementsSection from "@components/services/service-requirements";
import ServiceSidebar from "@components/services/service-sidebar";
import ServiceTiersGrid from "@components/services/service-tiers-grid";
import ServiceWhyChoose from "@components/services/service-why-choose";
import ShippableItemsGrid from "@components/services/shippable-items-grid";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_NAME}`,
    };
  }

  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.subheadline || service.introParagraphs[0],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.subheadline,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.headline,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

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
    description: service.subheadline,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Odenton, MD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Showcase Section */}
      <ServiceHero service={service} />

      {/* 2. Main 2-Column Responsive Body */}
      <div className="bg-surface py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Column: Interactive Store Services Directory Sidebar */}
            <ServiceSidebar currentSlug={slug} />

            {/* Right Column: In-Depth Service Content */}
            <main className="w-full flex-1 min-w-0">
              {/* 2. About Our Service Section */}
              <ServiceAboutSection service={service} />

              {/* Service Tiers Grid (e.g. 11 FedEx Tiers) */}
              <ServiceTiersGrid service={service} />

              {/* Categorized Shippable Items (What We Pack & Ship) */}
              <ShippableItemsGrid service={service} />

              {/* 5. International Shipping Destinations */}
              <ServiceDestinationsSection service={service} />

              {/* 6. Shipping Options and Requirements */}
              <ServiceRequirementsSection service={service} />

              {/* 7. How Our Shipping Process Works */}
              <ServiceProcessSteps service={service} />

              {/* 8. Shipping Cutoff Times and Tracking */}
              <ServiceCutoffTracking service={service} />

              {/* 9. Why Choose Parcel & Office Solutions */}
              <ServiceWhyChoose service={service} />

              {/* 10. Customer Assistance and Final CTA */}
              <ServiceCustomerAssistance service={service} />

              {/* Frequently Asked Questions */}
              <ServiceFaq service={service} />

              {/* Bottom Quick Navigation back to Services Grid */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface-muted/40 p-4 sm:p-5 text-xs">
                <span className="font-semibold text-muted">
                  Looking for other shipping options? Compare FedEx with UPS, DHL &amp; USPS:
                </span>
                <Link
                  href="/#services"
                  className="inline-flex shrink-0 items-center gap-1.5 font-bold text-primary hover:text-accent transition-colors"
                >
                  <span>Explore All Services Grid</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
