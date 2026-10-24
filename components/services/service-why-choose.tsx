import React from "react";
import {
  Users,
  PackageCheck,
  FileText,
  MapPin,
  Barcode,
  Award,
  Check,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

const ICON_MAP: Record<string, LucideIcon> = {
  users: Users,
  package: PackageCheck,
  "file-text": FileText,
  "map-pin": MapPin,
  barcode: Barcode,
};

export default function ServiceWhyChoose({ service }: { service: ServiceDetail }) {
  const isDhl = service.carrierType === "dhl" || service.slug === "dhl-shipping";

  const label = service.whyChooseLabel || "WHY CHOOSE US";
  const title =
    service.whyChooseTitle ||
    (isDhl
      ? "Convenient International Shipping Support in Odenton, MD"
      : `Why Choose Parcel & Office Solutions for ${service.shortTitle || service.title}`);
  const subtitle =
    service.whyChooseSubtitle ||
    (isDhl
      ? "Why Choose Parcel & Office Solutions for DHL Shipping?"
      : "Convenient shipping, verified tracking, and neighborhood customer care right here in Anne Arundel County.");

  const defaultItems = [
    {
      title: "In-Store Assistance",
      description: "Get help understanding the shipping process.",
      icon: "users",
    },
    {
      title: "Multiple Shipping Needs",
      description: "Explore options for eligible documents and packages.",
      icon: "package",
    },
    {
      title: "Customs Paperwork Guidance",
      description: "Understand common international shipping documentation requirements.",
      icon: "file-text",
    },
    {
      title: "Convenient Drop-Off",
      description: "Visit one location to prepare and submit your shipment.",
      icon: "map-pin",
    },
    {
      title: "Tracking Information",
      description: "Keep the shipment details needed to monitor delivery.",
      icon: "barcode",
    },
  ];

  const items = service.whyChooseItems || defaultItems;

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="mt-8 sm:mt-12 relative"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <Award className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{label}</span>
        </div>

        <h2
          id="why-choose-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* Full-Length Badge Type Listing with Highlight Label */}
      <div className="mt-8 flex flex-col gap-3 sm:gap-3.5">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 rounded-2xl sm:rounded-full border border-border/80 bg-surface px-4 py-3 sm:px-5 sm:py-3 shadow-2xs transition-all duration-200 hover:border-accent/40 hover:bg-surface-muted/60 hover:shadow-xs"
          >
            {/* Left Check Indicator & Highlight Label Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-dark">
                <Check className="h-4 w-4 stroke-[3]" />
              </span>

              <span className="inline-flex items-center rounded-full bg-primary-soft border border-primary/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary group-hover:bg-accent group-hover:text-primary-dark group-hover:border-accent/40 transition-colors">
                {item.title}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] font-medium text-secondary leading-relaxed sm:pl-0 pl-9.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Service Notice */}
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border/80 bg-surface-muted/60 p-4 text-xs text-muted">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-primary-dark">Service Notice:</strong>{" "}
          Avoid promising guaranteed delivery dates, the lowest rates, or specific insurance coverage unless these claims have been verified. Final delivery schedules, rates, and coverage depend on carrier acceptance, destination country customs, and chosen service speed.
        </p>
      </div>
    </section>
  );
}
