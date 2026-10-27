import React from "react";
import {
  MapPin,
  Target,
  Sparkles,
  TrendingUp,
  BarChart3,
  Compass,
  type LucideIcon,
} from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalLocalMarketingProps {
  service: DigitalMarketingServiceData;
}

function getPointIcon(iconName?: string): LucideIcon {
  switch (iconName) {
    case "map-pin":
      return MapPin;
    case "target":
      return Target;
    case "sparkles":
      return Sparkles;
    case "trending-up":
      return TrendingUp;
    case "bar-chart":
      return BarChart3;
    default:
      return Compass;
  }
}

export default function DigitalLocalMarketing({ service }: DigitalLocalMarketingProps) {
  const localMarketing = service.localMarketing;
  if (!localMarketing || !localMarketing.points || localMarketing.points.length === 0) return null;

  return (
    <section id="local-marketing" className="bg-surface py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Local Context (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            {localMarketing.eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
                <MapPin className="h-3.5 w-3.5 text-accent stroke-[2.5]" aria-hidden="true" />
                <span>{localMarketing.eyebrow}</span>
              </div>
            )}

            <h2 className="font-display mt-4 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[40px] lg:leading-[1.18]">
              {localMarketing.heading}
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted font-normal">
              {localMarketing.intro}
            </p>
          </div>

          {/* Right Column: Connected Strategic Approach Flow (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-primary">
                {localMarketing.approachTitle}
              </h3>
            </div>

            {/* Interconnected Vertical Approach Flow */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-5 sm:space-y-6">
              {localMarketing.points.map((point, index) => {
                const Icon = getPointIcon(point.icon);

                return (
                  <div key={point.title} className="group relative">
                    {/* Numbered node on the vertical track - perfectly centered with card and icon */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-6 sm:-left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-primary text-xs font-bold text-white shadow-2xs transition-colors duration-200 group-hover:bg-accent"
                    >
                      {index + 1}
                    </span>

                    <div className="rounded-2xl border border-border/80 bg-surface-muted/30 p-4 sm:p-5 transition-all duration-300 hover:border-accent hover:bg-surface hover:shadow-xs">
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="font-display text-base font-extrabold text-primary-dark leading-snug">
                            <span className="group-hover:text-accent transition-colors">{point.title}:</span>{" "}
                            <span className="font-normal text-muted text-sm sm:text-base leading-relaxed">
                              {point.description}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
