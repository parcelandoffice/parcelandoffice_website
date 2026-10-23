import React from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Share2,
  Layers,
  BarChart3,
  BadgeCheck,
} from "lucide-react";
import type { DigitalMarketingServiceData, DigitalMarketingSolutionItem } from "@/lib/digital-marketing-data";

interface DigitalServicesListProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalServicesList({ service }: DigitalServicesListProps) {
  const { solutions } = service;

  // Icon mapping
  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case "strategy":
        return Compass;
      case "content":
        return Sparkles;
      case "campaign":
        return Share2;
      default:
        return Layers;
    }
  };

  return (
    <section id="solutions" className="bg-surface-muted/50 py-12 sm:py-16 lg:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{solutions.eyebrow}</span>
          </div>

          <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
            {solutions.heading}
          </h2>

          {solutions.description && (
            <p className="mt-3.5 text-base sm:text-lg text-muted leading-relaxed font-normal">
              {solutions.description}
            </p>
          )}
        </div>

        {/* 2-Column High-Impact Solution Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {solutions.items.map((item: DigitalMarketingSolutionItem, index: number) => {
            const Icon = getSolutionIcon(item.icon);
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-surface p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
                  isFeatured
                    ? "border-accent/40 shadow-[var(--shadow-card)] ring-1 ring-accent/20"
                    : "border-border shadow-[var(--shadow-card)]"
                }`}
              >
                {/* Decorative Top Accent Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isFeatured
                      ? "bg-gradient-to-r from-accent via-accent-light to-accent"
                      : "bg-gradient-to-r from-primary to-primary-light"
                  }`}
                />

                <div>
                  {/* Card Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-3 py-1 text-xs font-extrabold text-primary-dark border border-border/80">
                      <BadgeCheck className="h-3.5 w-3.5 text-accent stroke-[2.5]" />
                      <span>Service 0{index + 1}</span>
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display mt-5 text-xl sm:text-2xl font-black tracking-tight text-primary-dark">
                    {item.title}
                  </h3>

                  {/* Core Description from user prompt */}
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                    {item.description}
                  </p>

                  {/* Key Service Highlights List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-border/70">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        What&apos;s Included:
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5 stroke-[2.5]" />
                            <span className="font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-border/70 flex items-center justify-between">
                  <Link
                    href={`/contact-us?service=${service.slug}&solution=${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent group"
                  >
                    <span>Request Strategy Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-accent" />
                  </Link>

                  <span className="text-xs font-semibold text-muted">
                    Custom Tailored
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar for Next Steps */}
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-6 sm:p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h4 className="font-display text-base sm:text-lg font-bold text-primary-dark">
              Need a personalized multi-platform strategy for your brand?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              We align our content production and campaign management directly with your business goals, target demographics, and local customer base.
            </p>
            <div className="mt-5">
              <Link
                href="/contact-us?service=social-media-marketing"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-primary-dark active:scale-[0.98]"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
