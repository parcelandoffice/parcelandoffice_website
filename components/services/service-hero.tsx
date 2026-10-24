import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  PackageCheck,
  Award,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CarrierLogo } from "@components/common/carrier-logos";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

export default function ServiceHero({ service }: { service: ServiceDetail }) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const isFedEx = service.carrierType === "fedex" || service.slug.includes("fedex");
  const isUPS = service.carrierType === "ups" || service.slug.includes("ups");
  const isUSPS = service.carrierType === "usps" || service.slug.includes("postal");

  const breadcrumbName =
    service.breadcrumbTitle ||
    service.shortTitle ||
    service.title.split(" in ")[0];

  const cutoffTime =
    service.todayCutoff.expressTime ||
    (isDHL ? "5:30 PM" : isFedEx ? "6:00 PM" : isUPS ? "5:30 PM" : "Confirmed Daily Cutoff");

  const quoteLabel =
    service.ctaQuoteLabel ||
    (isDHL
      ? "Get a DHL Shipping Quote"
      : isFedEx
        ? "Get a FedEx Shipping Quote"
        : isUPS
          ? "Get a UPS Shipping Quote"
          : "Get a Shipping Quote");

  const storeLabel = service.ctaStoreLabel || "Visit Our Store";
  const quoteHref = service.ctaQuoteHref || BUSINESS.phoneHref;
  const storeHref = service.ctaStoreHref || "/contact";

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-muted/70 via-surface to-surface py-7 sm:py-9 lg:py-12">
      {/* Subtle Carrier-Themed Ambient Lighting Glow */}
      <div
        className={`pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-35 ${isDHL
            ? "bg-[#FFCC00]/40"
            : isFedEx
              ? "bg-[#4D148C]/25"
              : isUPS
                ? "bg-[#FFB500]/30"
                : "bg-accent/20"
          }`}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-primary-soft/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-primary transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
            </li>
            <li>
              <span className="font-bold text-primary" aria-current="page">
                {breadcrumbName}
              </span>
            </li>
          </ol>
        </nav>

        {/* 2-Column Responsive Layout: Content on Left, Showcase Card on Right */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Headings, Badges, and CTAs */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface px-3.5 py-1.5 shadow-2xs">
              {isDHL ? (
                <div className="flex items-center gap-2">
                  <CarrierLogo carrier="dhl" className="h-4 w-auto object-contain" />
                  <div className="h-3.5 w-px bg-border" />
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D40511]" />
                </div>
              ) : isFedEx ? (
                <div className="flex items-center gap-2">
                  <CarrierLogo carrier="fedex" className="h-4 w-auto object-contain" />
                  <div className="h-3.5 w-px bg-border" />
                  <ShieldCheck className="h-3.5 w-3.5 text-[#4D148C]" />
                </div>
              ) : isUPS ? (
                <div className="flex items-center gap-2">
                  <CarrierLogo carrier="ups" className="h-4 w-auto object-contain" />
                  <div className="h-3.5 w-px bg-border" />
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                </div>
              ) : isUSPS ? (
                <div className="flex items-center gap-2">
                  <CarrierLogo carrier="usps" className="h-4 w-auto object-contain" />
                  <div className="h-3.5 w-px bg-border" />
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                </div>
              ) : (
                <Award className="h-3.5 w-3.5 text-accent" />
              )}
              <span className="text-[11px] font-black uppercase tracking-wider text-primary-dark">
                {service.eyebrow}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-display mt-3.5 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[42px] xl:text-[45px] lg:leading-[1.12]">
              {service.headline}
            </h1>

            {/* Subheading */}
            <p className="mt-3.5 text-base sm:text-lg font-medium text-muted leading-relaxed max-w-2xl">
              {service.subheadline}
            </p>

            {/* Quick Information Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-secondary">
              {/* Badge 1: Cutoff with live pulsing beacon */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-border/90 bg-surface px-3 py-1.5 shadow-2xs hover:border-accent/40 transition-colors">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                <Clock className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                <span>
                  Today&apos;s Express Cutoff:{" "}
                  <strong className="font-black text-primary-dark">{cutoffTime}</strong>
                </span>
              </div>

              {/* Badge 2: Free Drop-Off Counter Scans */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-border/90 bg-surface px-3 py-1.5 shadow-2xs hover:border-success/40 transition-colors">
                <PackageCheck className="h-3.5 w-3.5 text-success shrink-0" aria-hidden="true" />
                <span>Free Drop-Off Counter Scans</span>
              </div>

              {/* Badge 3: Shipping & Packaging Assistance */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-border/90 bg-surface px-3 py-1.5 shadow-2xs hover:border-primary/40 transition-colors">
                <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>Shipping and Packaging Assistance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href={quoteHref}
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{quoteLabel}</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <Link
                href={storeHref}
                id="hero-secondary-cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-xs sm:text-sm font-bold text-secondary transition-all duration-200 hover:bg-surface-muted hover:border-primary/40 hover:shadow-xs active:translate-y-0 cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span>{storeLabel}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-surface shadow-[var(--shadow-card-hover)] transition-all duration-300">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  src={service.heroImage}
                  alt={service.headline}
                  fill
                  priority
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 440px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/25 to-transparent" />

                {/* Official Carrier Floating Badge */}
                <div className="absolute top-4 left-4 z-10 sm:top-5 sm:left-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/50 bg-surface/95 px-4 py-2 shadow-lg backdrop-blur-md">
                    {isDHL ? (
                      <div className="flex items-center gap-2.5">
                        <CarrierLogo carrier="dhl" className="h-5 w-auto object-contain" />
                        <div className="h-5 w-px bg-border" />
                        <div>
                          <span className="block text-[11px] font-black uppercase tracking-wider text-[#D40511]">
                            Authorized ServicePoint
                          </span>
                          <span className="block text-[9.5px] font-semibold text-muted">
                            Official Express Partner
                          </span>
                        </div>
                      </div>
                    ) : isFedEx ? (
                      <div className="flex items-center gap-2.5">
                        <CarrierLogo carrier="fedex" className="h-5 w-auto object-contain" />
                        <div className="h-5 w-px bg-border" />
                        <div>
                          <span className="block text-[11px] font-black uppercase tracking-wider text-[#4d148c]">
                            Authorized ShipCenter®
                          </span>
                          <span className="block text-[9.5px] font-semibold text-muted">
                            Official Store Partner
                          </span>
                        </div>
                      </div>
                    ) : isUPS ? (
                      <div className="flex items-center gap-2.5">
                        <CarrierLogo carrier="ups" className="h-5 w-auto object-contain" />
                        <div className="h-5 w-px bg-border" />
                        <div>
                          <span className="block text-[11px] font-black uppercase tracking-wider text-[#351c15]">
                            Authorized Outlet
                          </span>
                          <span className="block text-[9.5px] font-semibold text-muted">
                            Official Store Partner
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs font-black uppercase tracking-wider text-primary">
                        {service.heroBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Overlay Card with Store Address & Route Tagline */}
                <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="rounded-2xl border border-white/20 bg-primary-dark/85 p-3.5 sm:p-4 text-white shadow-md backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-accent">
                        Scheduled Daily Pickups
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/90">
                        <Clock className="h-3 w-3 text-accent" />
                        <span>Departs Tonight</span>
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-[13px] font-bold text-white leading-snug">
                      Fast, reliable courier delivery directly from Odenton, MD.
                    </p>
                    <div className="mt-2 pt-2 border-t border-white/15 flex items-center justify-between text-[10.5px] text-white/80">
                      <span>8777 Piney Orchard Pkwy Ste B</span>
                      <span className="font-semibold text-accent-light">Beside Food Lion</span>
                    </div>
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
