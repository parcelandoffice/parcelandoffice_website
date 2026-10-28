import { getServiceDetail } from "@/lib/service-details";
import { BUSINESS, SERVICES, SERVICES_MENU_CATEGORIES, SITE_NAME } from "@/lib/site-data";
import { ServiceTemplateDispatcher } from "@components/services/templates";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = new Set<string>();
  SERVICES.forEach((service) => slugs.add(service.slug));
  SERVICES_MENU_CATEGORIES.forEach((cat) =>
    cat.items.forEach((item) => slugs.add(item.slug))
  );
  return Array.from(slugs).map((slug) => ({
    slug,
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

      {/* Dynamic Service Template (Dispatched by service type/category) */}
      <ServiceTemplateDispatcher service={service} />
    </>
  );
}

