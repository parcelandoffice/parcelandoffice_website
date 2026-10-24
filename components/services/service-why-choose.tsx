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
      className="mt-10 sm:mt-12 rounded-3xl border border-border/90 bg-gradient-to-br from-surface via-surface to-surface-muted/50 p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)] relative overflow-hidden"
    >
      {/* Subtle ambient decorative glow matching universal theme */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-accent-dark shadow-2xs">
          <Award className="h-3 w-3 text-accent" aria-hidden="true" />
          <span>{label}</span>
        </div>

        <h2
          id="why-choose-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-[32px] lg:leading-snug"
        >
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* Feature Cards Grid with Universal Color Theme */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const IconComp = (item.icon && ICON_MAP[item.icon]) || Users;
          const isFifth = index === 4;

          return (
            <div
              key={item.title}
              className={`group relative flex flex-col justify-between rounded-3xl border border-border/90 bg-surface p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5 ${
                isFifth ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Top Row: Warm Amber Icon Container & Top-Right Pill Badge */}
                <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F8D8AD] text-primary-dark shadow-2xs transition-all duration-300 group-hover:bg-accent group-hover:text-primary-dark">
                    <IconComp className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border/70 bg-surface-muted px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-muted-light group-hover:border-accent/30 group-hover:text-accent-dark transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display mt-4 text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description with Warm Amber Checkmark Bullet */}
                <div className="mt-3 flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-dark mt-0.5">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-secondary/90 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom In-Store Tag */}
              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-bold text-muted-light">
                <span className="uppercase tracking-wider">In-Store Support</span>
                <span className="text-accent font-extrabold">&bull;&bull;&bull;</span>
              </div>
            </div>
          );
        })}
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
