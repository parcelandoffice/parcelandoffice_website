import React from "react";
import {
  Laptop,
  FileText,
  Wrench,
  Palette,
  Gem,
  Gift,
  Package,
  ShoppingBag,
  Check,
  AlertTriangle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

const ICON_MAP: Record<string, LucideIcon> = {
  laptop: Laptop,
  "file-text": FileText,
  wrench: Wrench,
  palette: Palette,
  gem: Gem,
  gift: Gift,
  package: Package,
  "shopping-bag": ShoppingBag,
};

export default function ShippableItemsGrid({ service }: { service: ServiceDetail }) {
  const sectionLabel = service.shippableItemsLabel || "WHAT WE SHIP";
  const importantNotice =
    service.shippableImportantNotice ||
    (service.carrierType === "dhl" || service.slug.includes("dhl")
      ? "Important: Restricted items, dangerous goods, food, medicines, and certain electronic products may require special approval or may not be accepted. Confirm eligibility before shipping."
      : "Important: Certain high-value, hazardous, or restricted items may require special declared value protection or packaging compliance. Please confirm with our staff before shipping.");

  const gridColsClass =
    service.shippableCategories.length === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      aria-labelledby="shippable-items-heading"
      className="mt-10 sm:mt-12 rounded-3xl border border-border/90 bg-gradient-to-br from-surface via-surface to-surface-muted/50 p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft/80 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-accent-dark shadow-2xs">
          <Package className="h-3 w-3 text-accent" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="shippable-items-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-[32px] lg:leading-snug"
        >
          {service.shippableItemsTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {service.shippableItemsSubtitle}
        </p>
      </div>

      {/* Categorized Shippable Items Cards */}
      <div className={`mt-8 grid gap-5 ${gridColsClass}`}>
        {service.shippableCategories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Package;
          return (
            <div
              key={cat.categoryName}
              className="group relative rounded-2xl border border-border/90 bg-surface p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border/80 pb-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-primary-dark shadow-2xs">
                    <Icon className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-extrabold text-primary-dark">
                    {cat.categoryName}
                  </h3>
                </div>
                <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-light border border-border/60">
                  Eligible
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-secondary font-medium">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-dark mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Important Regulatory & Restrictions Notice Callout */}
      {importantNotice && (
        <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-amber-500/35 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-surface p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 mt-0.5">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs sm:text-[13px] font-bold text-primary-dark leading-relaxed">
                {importantNotice}
              </p>
              <p className="text-xs text-muted mt-1">
                Have questions regarding item eligibility, country prohibitions, or customs duties? Stop by our Odenton store or give us a call.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-amber-500/40 bg-surface px-4 py-2 text-xs font-bold text-primary-dark transition-colors hover:bg-amber-500/15 shadow-2xs self-start sm:self-center"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>Confirm Eligibility</span>
          </a>
        </div>
      )}
    </section>
  );
}
