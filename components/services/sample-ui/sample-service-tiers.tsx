import React from "react";
import Link from "next/link";
import { Sparkles, Clock, Check, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

export default function SampleServiceTiers({
  service,
}: {
  service: ServiceDetail;
}) {
  const label = service.servicesOfferedLabel || "SERVICES OFFERED";
  const title = service.servicesOfferedTitle || "Available Service Options";
  const subtitle =
    service.servicesOfferedSubtitle ||
    "Choose the solution that best matches your personal or business requirements.";
  const ctaLabel = service.servicesCtaLabel || "Inquire About This Service";
  const ctaHref = service.servicesCtaHref || BUSINESS.phoneHref;

  if (!service.servicesList || service.servicesList.length === 0) return null;

  return (
    <section aria-labelledby="sample-tiers-heading" className="mt-14 sm:mt-18 relative">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-64 w-full max-w-4xl rounded-full bg-primary-soft/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{label}</span>
          </div>

          <h2
            id="sample-tiers-heading"
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

        {/* Tiers Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-6">
          {service.servicesList.map((tier) => {
            const isFeatured = tier.featured;

            return (
              <div
                key={tier.name}
                className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isFeatured
                    ? "border-accent/50 bg-gradient-to-b from-surface via-surface to-accent/5 shadow-md ring-1 ring-accent/20"
                    : "border-border/90 bg-surface hover:border-primary/40 shadow-xs"
                }`}
              >
                {/* Featured Ribbon Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary-dark shadow-xs">
                    Popular Choice
                  </div>
                )}

                <div>
                  {/* Header: Title and Type Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block rounded-md bg-primary-soft px-2.5 py-0.5 text-[11px] font-bold text-primary">
                        {tier.badge}
                      </span>
                      <h3 className="font-display mt-2 text-lg sm:text-xl font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                        {tier.name}
                      </h3>
                    </div>

                    {tier.price && (
                      <span className="shrink-0 rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-extrabold text-primary-dark shadow-2xs">
                        {tier.price}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted font-normal">
                    {tier.description}
                  </p>

                  {/* Turnaround / Speed Badge */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-secondary">
                    <Clock className="h-4 w-4 text-accent shrink-0" />
                    <span>
                      Turnaround: <strong className="text-primary-dark">{tier.speed}</strong>
                    </span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                    <ShieldCheck className="h-4 w-4 text-success" />
                    <span>In-Store Guaranteed</span>
                  </span>

                  <a
                    href={ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>Inquire Today</span>
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
