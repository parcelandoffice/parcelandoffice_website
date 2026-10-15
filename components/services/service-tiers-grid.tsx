import React from "react";
import { Clock, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function ServiceTiersGrid({ service }: { service: ServiceDetail }) {
  return (
    <section className="mt-10 border-t border-border pt-8 sm:pt-10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-black uppercase tracking-wider text-accent">
          Comprehensive Carrier Solutions
        </span>
        <h2 className="font-display text-2xl font-black tracking-tight text-primary-dark sm:text-3xl">
          {service.servicesOfferedTitle}
        </h2>
        <p className="text-sm text-muted max-w-2xl">
          {service.servicesOfferedSubtitle}
        </p>
      </div>

      {/* Grid of Service Tiers */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {service.servicesList.map((tier) => (
          <div
            key={tier.name}
            className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] ${tier.featured
              ? "border-accent/40 bg-gradient-to-b from-accent-soft/40 via-surface to-surface shadow-[var(--shadow-card)]"
              : "border-border bg-surface shadow-[var(--shadow-card)] hover:border-primary/40"
              }`}
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${tier.featured
                    ? "bg-accent text-primary-dark shadow-2xs"
                    : "bg-primary-soft text-primary"
                    }`}
                >
                  <Clock className="h-3 w-3" />
                  {tier.badge}
                </span>

                {tier.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-accent-dark">
                    <Zap className="h-3 w-3 fill-accent text-accent" />
                    Popular
                  </span>
                )}
              </div>

              {/* Service Title */}
              <h3 className="font-display mt-3 text-base font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                {tier.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed text-muted font-medium">
                {tier.description}
              </p>
            </div>

            {/* Speed / Delivery Window Tag */}
            <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between gap-1 text-xs">
              <span className="flex items-center gap-1.5 font-bold text-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                <span className="text-[11px]">{tier.speed}</span>
              </span>

              <a
                href="tel:+14105193131"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-primary group-hover:text-accent transition-colors"
                title="Call for specific rate quote"
              >
                <span>Get Rate</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
