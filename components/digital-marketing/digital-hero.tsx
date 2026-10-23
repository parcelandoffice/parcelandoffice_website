import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Sparkles, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalHeroProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalHero({ service }: DigitalHeroProps) {
  const { hero } = service;

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-muted/70 via-surface to-surface pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
      {/* Background Decorative Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-48 right-10 -z-10 h-72 w-72 rounded-full bg-primary-soft/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
            </li>
            <li>
              <Link href="/digital-marketing-services" className="hover:text-primary transition-colors">
                Digital Marketing Services
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
            </li>
            <li>
              <span className="font-bold text-primary" aria-current="page">
                {service.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Copy & CTAs (7 Cols) */}
          <div className="lg:col-span-7">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
              <span className="text-xs font-black tracking-wide uppercase text-accent-dark">
                {hero.eyebrow}
              </span>
            </div>

            {/* Main Heading & Tagline */}
            <h1 className="font-display mt-4 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              {hero.tagline.split("Grow Your Business")[0]}
              <span className="bg-gradient-to-r from-accent-dark via-accent to-accent-light bg-clip-text text-transparent">
                Grow Your Business.
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted font-normal max-w-2xl">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href={hero.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-accent/25 transition-all duration-200 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 active:scale-[0.98]"
              >
                <span>{hero.ctaText}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href={hero.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm sm:text-base font-bold text-primary-dark shadow-2xs transition-all duration-200 hover:border-primary-light hover:bg-surface-muted active:scale-[0.98]"
              >
                <span>{hero.secondaryCtaText}</span>
              </Link>
            </div>

            {/* Key Trust / Highlight Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-border/80 pt-6">
              {hero.keyBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-surface-muted px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent stroke-[2.5]" aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase & Floating Metrics (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Outer Card Frame with subtle gradient border */}
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-2.5 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]">
                {/* Image Container with aspect ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-muted sm:aspect-[16/11]">
                  <Image
                    src={hero.heroImage}
                    alt={hero.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />

                  {/* Overlaid Bottom Banner inside Image */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-primary-dark/85 p-3.5 backdrop-blur-md text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-accent-light">
                          Performance Focus
                        </span>
                        <h2 className="font-display text-sm font-bold text-white">
                          Strategic Brand Impact
                        </h2>
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white shadow-2xs">
                        <TrendingUp className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge (Top Right) */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/90 bg-surface/95 px-3.5 py-2.5 shadow-[var(--shadow-float)] backdrop-blur-md">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
                    <Users className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-primary-dark">
                      Multi-Platform Reach
                    </span>
                    <span className="block text-[11px] font-semibold text-muted">
                      Facebook • IG • LinkedIn • X
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Metrics Cards Grid beneath Hero Visual */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {hero.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/90 bg-surface p-3 text-center shadow-2xs transition-colors hover:border-accent/40"
                  >
                    <span className="font-display block text-lg sm:text-xl font-black text-primary-dark">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 block text-[11px] font-bold text-foreground leading-tight line-clamp-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
