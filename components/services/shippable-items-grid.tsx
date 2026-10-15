import React from "react";
import {
  Laptop,
  FileText,
  Wrench,
  Palette,
  Gem,
  Gift,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

const ICON_MAP: Record<string, LucideIcon> = {
  laptop: Laptop,
  "file-text": FileText,
  wrench: Wrench,
  palette: Palette,
  gem: Gem,
  gift: Gift,
};

export default function ShippableItemsGrid({ service }: { service: ServiceDetail }) {
  return (
    <section className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-surface-muted/70 via-surface to-surface-muted/40 p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-card)]">
      <div className="max-w-3xl">
        <span className="text-xs font-black uppercase tracking-wider text-accent">
          What We Ship In Odenton
        </span>
        <h2 className="font-display mt-1 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl">
          {service.shippableItemsTitle}
        </h2>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {service.shippableItemsSubtitle}
        </p>
      </div>

      {/* Categorized Shippable Items Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {service.shippableCategories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Gift;
          return (
            <div
              key={cat.categoryName}
              className="group rounded-2xl border border-border bg-surface p-5 shadow-2xs transition-all duration-200 hover:border-accent/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3 border-b border-border/80 pb-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-accent">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-extrabold text-primary-dark">
                  {cat.categoryName}
                </h3>
              </div>

              <ul className="mt-3.5 space-y-2 text-xs text-secondary font-medium">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-dark">
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
    </section>
  );
}
