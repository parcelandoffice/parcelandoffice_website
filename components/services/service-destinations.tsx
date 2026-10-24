import React from "react";
import {
  Globe,
  Compass,
  Landmark,
  Building2,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Phone,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

const REGION_ICONS = [
  {
    name: "North America",
    icon: Compass,
    tagline: "Express Cross-Border Routes",
  },
  {
    name: "Europe",
    icon: Landmark,
    tagline: "Time-Critical European Delivery",
  },
  {
    name: "Asia-Pacific",
    icon: Building2,
    tagline: "Major Asian Trade Hubs",
  },
  {
    name: "Other International Destinations",
    icon: Globe2,
    tagline: "220+ Countries & Territories",
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
    "DHL Express connects shippers with international destinations through its global delivery network. Whether you're sending business paperwork, personal documents, or eligible parcels, destination availability and transit times depend on the selected service.";
  const ctaLabel =
    service.destinationsCtaLabel || "Get an International Shipping Quote";
  const ctaHref = service.ctaQuoteHref || BUSINESS.phoneHref;

  return (
    <section
      aria-labelledby="global-destinations-heading"
      className="mt-10 sm:mt-12 rounded-3xl border border-border/90 bg-gradient-to-br from-surface via-surface to-surface-muted/40 p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)] relative overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-accent-dark shadow-2xs">
          <Globe className="h-3 w-3 text-accent" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="global-destinations-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-[32px] lg:leading-snug"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* Suggested Country / Region Icons Grid */}
      <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
        {REGION_ICONS.map((region) => {
          const Icon = region.icon;
          return (
            <div
              key={region.name}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
            >
              <span className="flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary-dark group-hover:scale-105 shadow-2xs">
                <Icon className="h-6 w-6 stroke-[2.2]" />
              </span>

              <h3 className="font-display mt-3 text-sm sm:text-base font-extrabold text-primary-dark transition-colors group-hover:text-primary leading-snug">
                {region.name}
              </h3>

              <p className="mt-1 text-[11px] font-semibold text-muted">
                {region.tagline}
              </p>
            </div>
          );
        })}
      </div>

      {/* Action / CTA Bar */}
      <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark mt-0.5">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs sm:text-sm font-bold text-primary-dark">
              Fast, reliable courier delivery directly from our Odenton, MD counter.
            </p>
            <p className="text-xs text-muted mt-0.5">
              We assist with destination customs paperwork, packing, and declared value coverage.
            </p>
          </div>
        </div>

        <a
          href={ctaHref}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-xs sm:text-sm font-black text-primary-dark transition-all duration-200 hover:bg-accent-light hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 shadow-2xs group cursor-pointer"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
