import {
  CalendarDays,
  Palette,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Code2,
} from "lucide-react";
import type { DigitalMarketingServiceData, DigitalMarketingPillar } from "@/lib/digital-marketing-data";

interface DigitalOverviewProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalOverview({ service }: DigitalOverviewProps) {
  const { overview } = service;

  // Icon mapping for pillars
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "calendar":
        return CalendarDays;
      case "palette":
        return Palette;
      case "users":
        return Users;
      case "target":
        return Target;
      case "code":
        return Code2;
      case "trending-up":
        return TrendingUp;
      case "check-circle":
        return CheckCircle;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="overview" className="bg-surface py-12 sm:py-12 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Card */}
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface via-surface-muted/30 to-surface-muted p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-black uppercase tracking-wider text-accent">
              {overview.eyebrow}
            </span>

            {/* Section Headline */}
            <h2 className="font-display mt-2 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl">
              {overview.heading}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="mt-5 space-y-4 text-base sm:text-lg leading-relaxed text-muted">
              {overview.paragraphs.map((para, idx) => (
                <p key={idx} className="font-normal text-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* 4 Pillars Grid (Content Planning, Creative Development, Social Media Management, Paid Campaigns) */}
          <div className="mt-10 pt-8 border-t border-border/80">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-primary-dark">
                {overview.pillarsTitle || "Our Integrated Approach"}
              </h3>
              <span className="hidden sm:inline-flex text-xs font-bold text-muted bg-surface px-3 py-1 rounded-full border border-border">
                4 Core Focus Areas
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {overview.pillars.map((pillar, idx) => {
                const IconComponent = getPillarIcon(pillar.icon);
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <div>
                      {/* Icon with Soft Background */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-accent">
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                      </div>

                      {/* Title */}
                      <h4 className="font-display mt-4 text-base font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h4>

                      {/* Description */}
                      <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-[11px] uppercase tracking-wider">Key Capability</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Value Delivery Banner */}
          <div className="mt-8 rounded-2xl bg-primary p-5 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-white">
                  Focused on Measurable Marketing Goals
                </h4>
                <p className="text-xs text-white/80">
                  Every post, graphic, and ad campaign is tracked with clear monthly performance metrics.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <span className="text-xs font-bold text-accent-light">Result-Driven Execution</span>
              <CheckCircle className="h-4 w-4 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
