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

const BUSINESS_PERSONAL_REQUIREMENTS = [
  {
    text: "Valid, unexpired government-issued photo ID (Driver's License, State ID, or Passport)",
    icon: UserCheck,
  },
  {
    text: "All original, complete documents requiring notarization or official processing",
    icon: FileText,
  },
  {
    text: "All required signers present in person with valid identification",
    icon: UserCheck,
  },
  {
    text: "Any special instructions or reference documents provided by the receiving organization",
    icon: ClipboardCheck,
  },
];

export default function ServiceRequirementsSection({
  service,
}: {
  service: ServiceDetail;
}) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const sectionLabel =
    service.requirementsLabel ||
    (service.category === "Packing"
      ? "PACKING PREPARATION"
      : service.category === "Printing & Document Services"
        ? "FILE PREPARATION"
        : service.category === "Business & Personal Services"
          ? "WHAT TO BRING"
          : "SHIPMENT PREPARATION");
  const sectionTitle =
    service.requirementsTitle ||
    (isDHL
      ? "What You Need Before Shipping With DHL"
      : service.category === "Packing"
        ? "What You Need Before Packing & Shipping"
        : service.category === "Printing & Document Services"
          ? "Printing Options, File Preparation & Requirements"
          : service.category === "Business & Personal Services"
            ? "What You Need Before Your Visit"
            : "What You Need Before Your Visit");
  const sectionSubtitle =
    service.requirementsSubtitle ||
    (service.category === "Packing"
      ? "Helpful guidelines to make your packing and shipping visit as smooth as possible."
      : service.category === "Printing & Document Services"
        ? "Essential preparation details to ensure crisp, accurate print and document output."
        : service.category === "Business & Personal Services"
          ? "Essential checklist to ensure your documents can be signed and processed without delay."
          : "Prepare the essential shipment details before visiting the store.");
  const noticeText =
    service.requirementsNotice ||
    (service.category === "Packing"
      ? "Have fragile, delicate, or high-value items? Let our associates know upon arrival so we can select appropriate high-TLC cushioning."
      : service.category === "Printing & Document Services"
        ? "We accept PDF, DOCX, JPEG, and PNG files. For crisp results, high-resolution 300 DPI PDF files are recommended."
        : service.category === "Business & Personal Services"
          ? "Notaries are commissioned state officials and cannot give legal advice. Please bring valid government-issued photo identification."
          : "Our team can help you understand the shipping information and documentation needed for your shipment. Final acceptance and customs requirements are determined by the carrier and the destination country.");

  const defaultPoints =
    service.category === "Business & Personal Services"
      ? BUSINESS_PERSONAL_REQUIREMENTS
      : REQUIREMENTS_POINTS;

  const items =
    service.requirementsItems && service.requirementsItems.length > 0
      ? service.requirementsItems
          .filter((item) => Boolean(item))
          .map((item, idx) => ({
            text: typeof item === "string" ? item : item?.title || (item as any)?.description || "",
            icon: defaultPoints[idx % defaultPoints.length].icon,
            iconUrl: typeof item === "object" ? item?.iconUrl : undefined,
          }))
      : defaultPoints.map((pt) => ({
          text: pt.text,
          icon: pt.icon,
          iconUrl: undefined,
        }));

  return (
    <section
      aria-labelledby="shipping-requirements-heading"
      className="mt-10 sm:mt-18 relative"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <ClipboardCheck className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="shipping-requirements-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* Attractive Bullet Points List (No Cards) */}
      <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {items.map((item, idx) => {
          const Icon = item.icon || ClipboardCheck;
          return (
            <li
              key={idx}
              className="group flex items-center gap-3.5 py-1.5 cursor-pointer transition-all duration-200"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white group-hover:scale-105 group-hover:shadow-sm overflow-hidden p-2">
                {item.iconUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.iconUrl}
                    alt=""
                    className="h-3.5 w-3.5 object-contain transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                ) : (
                  <Icon className="h-3.5 w-3.5 stroke-[2.2] transition-colors duration-200 group-hover:text-white" aria-hidden="true" />
                )}
              </span>
              <span className="text-sm sm:text-[14.5px] font-bold text-primary-dark leading-snug group-hover:text-primary transition-colors">
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
