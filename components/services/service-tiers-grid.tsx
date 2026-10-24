import React from "react";
import { Zap, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

export default function ServiceTiersGrid({ service }: { service: ServiceDetail }) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const sectionLabel = service.servicesOfferedLabel || "COMPREHENSIVE CARRIER SOLUTIONS";
  const ctaLabel = service.servicesCtaLabel || (isDHL ? "Explore DHL Shipping Options" : "Explore Shipping Options");
  const ctaHref = service.servicesCtaHref || BUSINESS.phoneHref;

  return (
    <section
      aria-labelledby="service-tiers-heading"
      className="mt-8 sm:mt-12 relative"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <Zap className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="service-tiers-heading"
          className="font-display mt-2 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {service.servicesOfferedTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {service.servicesOfferedSubtitle}
        </p>
      </div>

      {/* Grid of Service Tiers */}
      <div className="mt-7 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
        {service.servicesList.map((tier) => (
          <div
            key={tier.name}
            className="group relative flex flex-col justify-between rounded-2xl border border-accent/40 bg-gradient-to-b from-accent-soft/30 via-surface to-surface p-5 sm:p-5.5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-normal uppercase tracking-wider ${tier.featured
                    ? "bg-accent text-primary-dark shadow-2xs"
                    : "bg-primary-soft text-primary border border-primary/10"
                    }`}
                >
                  {tier.badge}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="font-display mt-3.5 text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                {tier.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                {tier.description}
              </p>
            </div>

            {/* Speed / Delivery Window Tag & Rate Link */}
            <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-1.5 font-bold text-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                <span className="text-[11.5px] font-extrabold text-primary-dark">{tier.speed}</span>
              </span>

              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-1 text-[11px] font-black text-primary group-hover:text-accent transition-colors"
                title="Call for specific rate quote"
              >
                <span>Get Rate</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Section CTA Action Bar */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface-muted/50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark mt-0.5">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs sm:text-sm font-bold text-primary-dark">
              Need rate estimates or customs assistance for your international destination?
            </p>
            <p className="text-xs text-muted mt-0.5">
              Call our Odenton counter or visit us in-store to compare delivery options and pricing.
            </p>
          </div>
        </div>

        <a
          href={ctaHref}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
