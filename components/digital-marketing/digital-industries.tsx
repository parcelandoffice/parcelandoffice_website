import React from "react";
import {
  ShoppingBag,
  HeartPulse,
  Building2,
  Briefcase,
  UtensilsCrossed,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalIndustriesProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalIndustries({ service }: DigitalIndustriesProps) {
  const industries = service.industries;
  if (!industries || !industries.items || industries.items.length === 0) return null;

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "shopping-bag":
        return ShoppingBag;
      case "heart-pulse":
        return HeartPulse;
      case "building":
        return Building2;
      case "briefcase":
        return Briefcase;
      case "utensils":
        return UtensilsCrossed;
      case "cpu":
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section id="industries" className="bg-surface-muted/60 py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-accent">
            {industries.eyebrow}
          </span>

          <h2 className="font-display mt-2.5 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
            {industries.heading}
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {industries.description}
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((item, idx) => {
            const IconComponent = getIndustryIcon(item.icon);

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-accent">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="text-[11px] font-black uppercase tracking-wider text-muted-light group-hover:text-accent transition-colors">
                      Industry 0{idx + 1}
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="font-display mt-5 text-xl font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Industry Description */}
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary">
                    Tailored Content &amp; Ads
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-muted text-muted group-hover:bg-accent-soft group-hover:text-accent-dark transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
