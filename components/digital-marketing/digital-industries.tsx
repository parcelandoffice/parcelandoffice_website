import React from "react";
import Image from "next/image";
import {
  ShoppingBag,
  HeartPulse,
  Building2,
  Briefcase,
  UtensilsCrossed,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalIndustriesProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalIndustries({ service }: DigitalIndustriesProps) {
  const industries = service.industries;
  if (!industries || !industries.items || industries.items.length === 0) return null;

  const getIndustryIcon = (iconName: string = "", title: string = "") => {
    switch (iconName.toLowerCase()) {
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
    }
    const combined = `${iconName} ${title}`.toLowerCase();
    if (combined.includes("shopping") || combined.includes("retail") || combined.includes("e-commerce") || combined.includes("ecommerce")) return ShoppingBag;
    if (combined.includes("heart") || combined.includes("health") || combined.includes("wellness") || combined.includes("medical")) return HeartPulse;
    if (combined.includes("building") || combined.includes("real estate") || combined.includes("property")) return Building2;
    if (combined.includes("briefcase") || combined.includes("professional") || combined.includes("corporate")) return Briefcase;
    if (combined.includes("utensils") || combined.includes("food") || combined.includes("hospitality") || combined.includes("restaurant")) return UtensilsCrossed;
    if (combined.includes("cpu") || combined.includes("tech") || combined.includes("software") || combined.includes("auto") || combined.includes("b2b")) return Cpu;
    return Layers;
  };

  return (
    <section id="industries" className="bg-surface-muted/60 py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            {service.iconUrl ? (
              <Image
                src={service.iconUrl}
                alt={service.title}
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
              />
            ) : (
              <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            )}
            <span>{industries.eyebrow}</span>
          </div>

          <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
            {industries.heading}
          </h2>

          {industries.description && (
            <p className="mt-3.5 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              {industries.description}
            </p>
          )}
        </div>

        {/* Compact Industry Cards Grid - Icon & Name Only */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {industries.items.map((item, idx) => {
            const IconComponent = getIndustryIcon(item.icon || "", item.title || "");

            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center text-center rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-accent group-hover:scale-105 overflow-hidden">
                  {item.iconUrl ? (
                    <Image
                      src={item.iconUrl}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <IconComponent className="h-7 w-7" aria-hidden="true" />
                  )}
                </div>

                <h3 className="font-display mt-3.5 text-sm sm:text-base font-bold text-primary-dark group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
