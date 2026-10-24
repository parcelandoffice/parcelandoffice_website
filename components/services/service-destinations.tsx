import React from "react";
import Image from "next/image";
import {
  Globe,
  ArrowRight,
  ShieldCheck,
  Phone,
  MapPin,
  Check,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

interface DestinationRegion {
  name: string;
  image: string;
  badge: string;
  popularDestinations: string[];
  description: string;
}

const DESTINATION_REGIONS: DestinationRegion[] = [
  {
    name: "North America",
    image: "/images/north_america_map.jpg",
    badge: "Direct Delivery",
    popularDestinations: ["Canada", "Mexico", "Puerto Rico", "US Territories"],
    description:
      "Reliable transborder shipping with fast ground and expedited air express options.",
  },
  {
    name: "Europe",
    image: "/images/europe_map.jpg",
    badge: "40+ Countries",
    popularDestinations: ["United Kingdom", "Germany", "France", "Italy", "Spain"],
    description:
      "Comprehensive coverage across the UK and European Union with customs assistance.",
  },
  {
    name: "Asia-Pacific",
    image: "/images/asia_pacific_map.jpg",
    badge: "Priority Routes",
    popularDestinations: ["India", "Japan", "Australia", "China", "South Korea"],
    description:
      "Direct air connections to major commercial, tech, and financial centers.",
  },
  {
    name: "Other International Destinations",
    image: "/images/world_map.jpg",
    badge: "220+ Countries",
    popularDestinations: ["Middle East", "Latin America", "Africa", "Caribbean"],
    description:
      "Worldwide door-to-door network connecting Odenton, MD to destinations across the globe.",
  },
];

export default function ServiceDestinationsSection({
  service,
}: {
  service: ServiceDetail;
}) {
  const sectionLabel = service.destinationsLabel || "GLOBAL SHIPPING";
  const sectionTitle =
    service.destinationsTitle || "Send Documents and Packages Around the World";
  const sectionSubtitle =
    service.destinationsSubtitle ||
    `${service.title || "International shipping"} connects shippers with global destinations through worldwide delivery networks. Whether you're sending business paperwork, personal documents, or eligible parcels, destination availability and transit times depend on the selected service.`;
  const ctaLabel =
    service.destinationsCtaLabel || "Get an International Shipping Quote";
  const ctaHref = service.ctaQuoteHref || BUSINESS.phoneHref;

  return (
    <section
      aria-labelledby="global-destinations-heading"
      className="mt-8 sm:mt-12 relative"
    >
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <Globe className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="global-destinations-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* 4 Continent / Region Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {DESTINATION_REGIONS.map((region) => (
          <div
            key={region.name}
            className="group flex flex-col rounded-2xl border border-border/80 bg-surface shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-surface-muted/40 border-b border-border/60">
              <Image
                src={region.image}
                alt={`${region.name} shipping map`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Badge overlay on top of image */}
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center rounded-full bg-primary-dark/85 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-xs border border-white/15">
                  {region.badge}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h3 className="font-display text-base font-bold text-primary-dark group-hover:text-primary transition-colors">
                {region.name}
              </h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed flex-1">
                {region.description}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* Centered CTA Section */}
      <div className="mt-10 flex flex-col items-center justify-center text-center gap-3.5">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-muted max-w-xl">
          <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
          <span>
            Fast, reliable courier delivery directly from our Odenton, MD counter.
          </span>
        </div>

        <a
          href={ctaHref}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
