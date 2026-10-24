import React from "react";
import {
  ClipboardCheck,
  UserCheck,
  Phone,
  Scale,
  PackageCheck,
  DollarSign,
  FileText,
  Info,
  ArrowRight,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

const REQUIREMENTS_POINTS = [
  {
    text: "Recipient's full name and complete delivery address",
    icon: UserCheck,
  },
  {
    text: "Recipient's phone number and other required contact details",
    icon: Phone,
  },
  {
    text: "Package weight and dimensions",
    icon: Scale,
  },
  {
    text: "Accurate description of the shipment contents",
    icon: PackageCheck,
  },
  {
    text: "Declared value and any required supporting documents",
    icon: DollarSign,
  },
  {
    text: "Commercial invoice or customs declaration, when applicable",
    icon: FileText,
  },
];

export default function ServiceRequirementsSection({
  service,
}: {
  service: ServiceDetail;
}) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const sectionLabel = service.requirementsLabel || "SHIPMENT PREPARATION";
  const sectionTitle =
    service.requirementsTitle ||
    (isDHL ? "What You Need Before Shipping With DHL" : "What You Need Before Shipping");
  const sectionSubtitle =
    service.requirementsSubtitle ||
    "Prepare the essential shipment details before visiting the store.";
  const noticeText =
    service.requirementsNotice ||
    "Our team can help you understand the shipping information and documentation needed for your shipment. Final acceptance and customs requirements are determined by DHL and the destination country.";

  return (
    <section
      aria-labelledby="shipping-requirements-heading"
      className="mt-10 sm:mt-12 rounded-3xl border border-border/90 bg-surface p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)] relative overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-accent-dark shadow-2xs">
          <ClipboardCheck className="h-3 w-3 text-accent" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="shipping-requirements-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-[32px] lg:leading-snug"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* Attractive Bullet Points List (No Cards) */}
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
        {REQUIREMENTS_POINTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li
              key={idx}
              className="group flex items-center gap-3 py-1 transition-colors"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-dark transition-all duration-200 group-hover:bg-accent group-hover:text-primary-dark shadow-2xs">
                <Icon className="h-3.5 w-3.5 stroke-[2.4]" aria-hidden="true" />
              </span>
              <span className="text-sm sm:text-[14px] font-bold text-primary-dark leading-snug group-hover:text-primary transition-colors">
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Advisory Callout */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-border/80 bg-surface-muted/60 p-4 sm:p-4.5 text-xs">
        <div className="flex items-start gap-2.5">
          <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-muted leading-relaxed sm:text-[12.5px] font-medium">
            {noticeText}
          </p>
        </div>

        <a
          href={BUSINESS.phoneHref}
          className="inline-flex shrink-0 items-center gap-1.5 font-bold text-primary hover:text-accent transition-colors self-start sm:self-center"
        >
          <span>Ask Our Specialists</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
