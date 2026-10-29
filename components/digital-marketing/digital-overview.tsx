import React from "react";
import Image from "next/image";
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
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalOverviewProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalOverview({ service }: DigitalOverviewProps) {
  const { overview } = service;

  const overviewImage =
    overview.image ||
    (service.slug.includes("web") || service.slug.includes("seo")
      ? "/images/web-development-overview.jpg"
      : service.slug.includes("ads") || service.slug.includes("lead")
        ? "/images/google-ads-overview.jpg"
        : "/images/social-media-overview.jpg");

  // Icon mapping for pillars (if present)
  const getPillarIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
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
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7">
              {/* Eyebrow Pill Badge */}
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
                <span>{overview.eyebrow}</span>
              </div>

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

            {/* Right Column: Visual Image */}
            <div className="lg:col-span-5">
              <div className="group relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Decorative background ambient glow */}
                <div
                  className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20 opacity-40 blur-xl transition duration-500 group-hover:opacity-75"
                  aria-hidden="true"
                />

                {/* Outer image frame */}
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface p-2 sm:p-2.5 shadow-md transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-muted sm:aspect-[16/11]">
                    <Image
                      src={overviewImage}
                      alt={overview.imageAlt || overview.heading || service.title}
                      fill
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/25 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
