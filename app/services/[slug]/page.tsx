import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceDetail, SERVICES_DETAILS } from "@/lib/service-details";
import { BUSINESS, SITE_NAME, SERVICES } from "@/lib/site-data";
import ServiceHero from "@components/services/service-hero";
import ServiceSidebar from "@components/services/service-sidebar";
import ServiceTiersGrid from "@components/services/service-tiers-grid";
import ShippableItemsGrid from "@components/services/shippable-items-grid";
import PackingTlcSection from "@components/services/packing-tlc-section";
import ServiceCtaBox from "@components/services/service-cta-box";
import ServiceFaq from "@components/services/service-faq";
import { Truck, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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
              {/* Introduction Story Copy */}
              <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)]">
                <span className="text-xs font-black uppercase tracking-wider text-accent">
                  About Our Service
                </span>
                <h2 className="font-display mt-1 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl">
                  Fast, Reliable Service at Competitive Rates
                </h2>

                <div className="mt-4 space-y-3.5 text-sm sm:text-base leading-relaxed text-muted">
                  {service.introParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* 4 Key Highlight Benefit Cards */}
                <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {service.keyHighlights.map((hl) => (
                    <div
                      key={hl.title}
                      className="flex items-start gap-3 rounded-2xl border border-border/80 bg-surface-muted/50 p-4 transition-all duration-200 hover:border-accent/40 hover:bg-surface hover:shadow-xs"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <CheckCircle className="h-4.5 w-4.5 text-accent stroke-[2.5]" />
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-extrabold text-primary-dark">
                          {hl.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted leading-relaxed">
                          {hl.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Tiers Grid (e.g. 11 FedEx Tiers) */}
              <ServiceTiersGrid service={service} />

              {/* Categorized Shippable Items (What We Pack & Ship) */}
              <ShippableItemsGrid service={service} />

              {/* Packaging & TLC Guarantee */}
              {/* <PackingTlcSection service={service} /> */}

              {/* Have A Question / Callout CTA */}
              <ServiceCtaBox service={service} />

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
