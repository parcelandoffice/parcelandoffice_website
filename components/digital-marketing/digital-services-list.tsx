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
  Target,
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

        {/* Responsive High-Impact Solution Cards Grid */}
        <div
          className={`mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 ${
            solutions.items.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          {solutions.items.map((item: DigitalMarketingSolutionItem, index: number) => {
            const Icon = getSolutionIcon(item.icon);

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              >
                {/* Decorative Top Accent Gradient Bar - Blue by default, Yellow tone on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-light transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Card Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent-dark">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-3 py-1 text-xs font-extrabold text-primary-dark border border-border/80">
                      <BadgeCheck className="h-3.5 w-3.5 text-accent stroke-[2.5]" />
                      <span>Service {index < 9 ? `0${index + 1}` : index + 1}</span>
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
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent group/btn"
                  >
                    <span>Request Strategy Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 text-accent" />
                  </Link>

                  <span className="text-xs font-semibold text-muted">
                    Custom Tailored
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
