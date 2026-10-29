import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  CheckCircle2,
  Share2,
  Layers,
  BarChart3,
  BadgeCheck,
  Target,
  ArrowRight,
} from "lucide-react";
import type { DigitalMarketingServiceData, DigitalMarketingSolutionItem } from "@/lib/digital-marketing-data";

interface DigitalServicesListProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalServicesList({ service }: DigitalServicesListProps) {
  const { solutions } = service;

  // Icon mapping from current static template
  const getSolutionIcon = (iconName: string = "", title: string = "", id: string = "") => {
    switch (iconName.toLowerCase()) {
      case "strategy":
        return Compass;
      case "content":
        return Sparkles;
      case "social":
      case "facebook":
      case "instagram":
        return Share2;
      case "campaign":
      case "advertising":
      case "ads":
        return Target;
      case "brand":
      case "awareness":
        return BadgeCheck;
      case "analytics":
      case "reporting":
      case "performance":
        return BarChart3;
    }
    const combined = `${iconName} ${title} ${id}`.toLowerCase();
    if (combined.includes("strategy") || combined.includes("plan")) return Compass;
    if (combined.includes("content") || combined.includes("creative")) return Sparkles;
    if (combined.includes("account") || combined.includes("management") || combined.includes("social") || combined.includes("share")) return Share2;
    if (combined.includes("paid") || combined.includes("ad") || combined.includes("campaign") || combined.includes("target")) return Target;
    if (combined.includes("community") || combined.includes("reputation") || combined.includes("brand")) return BadgeCheck;
    if (combined.includes("analytic") || combined.includes("report") || combined.includes("metric") || combined.includes("chart")) return BarChart3;
    return Layers;
  };

  return (
    <section id="solutions" className="bg-surface-muted/50 py-14 sm:py-20 lg:py-24 border-t border-border">
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
            <span>{solutions.eyebrow || "Our Solutions"}</span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            {solutions.heading}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-primary" />
          {solutions.description && (
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">{solutions.description}</p>
          )}
        </div>

        {/* Service Cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {solutions.items.map((item: DigitalMarketingSolutionItem, index: number) => {
            const Icon = getSolutionIcon(item.icon || "", item.title || "", item.id || "");

            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-card-hover)]"
              >
                {/* Left accent rail */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-primary transition-colors duration-300 group-hover:bg-accent" />

                {/* Index number badge in top right corner */}
                <span
                  aria-hidden="true"
                  className="font-display pointer-events-none absolute top-5 right-6 select-none text-4xl sm:text-5xl font-extrabold leading-none text-primary/10 transition-colors duration-300 group-hover:text-accent/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-accent-soft group-hover:text-accent-dark overflow-hidden">
                      {item.iconUrl ? (
                        <Image
                          src={item.iconUrl}
                          alt={item.title}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </div>
                    {/* Title with reserved right padding so it never overlaps the corner index digit */}
                    <div className="min-w-0 flex-1 pr-14 sm:pr-16">
                      <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-primary-dark leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-6 grid grid-cols-1 gap-2.5 rounded-2xl bg-surface-muted/70 p-4 sm:grid-cols-2 sm:p-5">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent stroke-[2.5]" aria-hidden="true" />
                          <span className="font-medium leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Primary CTA Button */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
          <Link
            href={solutions.ctaHref || service.hero.ctaHref || `/contact-us?service=${service.slug}-usa`}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{solutions.ctaText || "Request a Custom Proposal"}</span>
            <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
