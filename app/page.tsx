import { BUSINESS, SITE_NAME, STORE_HOURS } from "@/lib/site-data";
import ParcelHero from "@components/home/parcel-hero";
import HowItWorks from "@components/home/how-it-works";
import ServicesGrid from "@components/home/services-grid";
import TrackingAndPickup from "@components/home/tracking-and-pickup";
import WelcomeSection from "@components/home/welcome-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE_NAME} | FedEx, UPS, DHL & USPS Shipping in Odenton, MD`,
  description:
    "Ship, pack, print and track with Parcel & Office Solutions in Odenton, MD. FedEx, UPS, DHL & USPS shipping, professional packing, notary, mailbox rental, passport photos and more.",
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "8777 Piney Orchard Pkwy Ste B",
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* 1. Container-width sliding banners below navigation */}
      <ParcelHero />

      {/* 2. Live multi-carrier tracking & Today's pickups with proper alignment */}
      <TrackingAndPickup />

      {/* 3. Welcome & Story */}
      <WelcomeSection />

      {/* 4. Products & Services Directory */}
      <ServicesGrid />

      {/* 5. 3-Step Process */}
      <HowItWorks />
    </>
  );
}
