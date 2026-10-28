import React from "react";
import {
  PackageCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Briefcase,
  Heart,
  Palette,
  Laptop,
  Layers,
  ShieldCheck,
  Gift,
  Fingerprint,
  Printer,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

const ICON_MAP: Record<string, LucideIcon> = {
  heart: Heart,
  palette: Palette,
  laptop: Laptop,
  gift: Gift,
  briefcase: Briefcase,
  "file-text": FileText,
  layers: Layers,
  shield: ShieldCheck,
  fingerprint: Fingerprint,
  printer: Printer,
  package: PackageCheck,
};

export default function SampleFeaturesGrid({
  service,
}: {
  service: ServiceDetail;
}) {
  const label = service.shippableItemsLabel || "SERVICE CAPABILITIES";
  const title = service.shippableItemsTitle || "What We Handle & Prepare";
  const subtitle =
    service.shippableItemsSubtitle ||
    "Everything you need handled professionally right here at our Odenton center.";
  const notice = service.shippableImportantNotice;

  if (!service.shippableCategories || service.shippableCategories.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="sample-features-heading" className="mt-14 sm:mt-18 relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <PackageCheck className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{label}</span>
          </div>

          <h2
            id="sample-features-heading"
            className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
              {subtitle}
            </p>
          )}

          {notice && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-primary-dark shadow-2xs">
              <AlertCircle className="h-4 w-4 text-accent shrink-0" />
              <span>{notice}</span>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:gap-5">
          {service.shippableCategories.map((cat) => {
            const Icon = ICON_MAP[cat.icon.toLowerCase()] || PackageCheck;

            return (
              <div
                key={cat.categoryName}
                className="group relative flex flex-col rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-md"
              >
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-border/60 pb-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-accent group-hover:text-primary-dark shadow-2xs">
                    <Icon className="h-5 w-5 stroke-[2.2]" />
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-primary-dark group-hover:text-primary transition-colors">
                    {cat.categoryName}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="mt-3.5 grid gap-2.5">
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-secondary"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
