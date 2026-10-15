import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Clock, PackageCheck, Award } from "lucide-react";
import { CarrierLogo } from "@components/common/carrier-logos";
import type { ServiceDetail } from "@/lib/service-details";

export default function ServiceHero({ service }: { service: ServiceDetail }) {
  const isFedEx = service.carrierType === "fedex";

  return (
    <section className="border-b border-border bg-gradient-to-b from-surface-muted/60 via-surface to-surface py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
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
              <Link href="/#services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
            </li>
            {/* <li>
              <span className="text-muted font-medium">{service.category}</span>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
            </li> */}
            <li>
              <span className="font-bold text-primary" aria-current="page">
                {service.title.split(" in ")[0]}
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 shadow-2xs">
            {isFedEx ? (
              <span className="flex h-5 w-12 items-center justify-center">
                <CarrierLogo carrier="fedex" className="h-3.5 w-auto object-contain" />
              </span>
            ) : (
              <Award className="h-3.5 w-3.5 text-accent" />
            )}
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
              {service.eyebrow}
            </span>
          </div>

          <h1 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[42px] lg:leading-tight">
            {service.headline}
          </h1>

          <p className="mt-2.5 text-base sm:text-lg font-medium text-muted leading-relaxed">
            {service.subheadline}
          </p>

          {/* Quick Perks Bar */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-secondary">
            {service.todayCutoff.expressTime && (
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 shadow-2xs">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span>Today&apos;s Express Cutoff: <strong>{service.todayCutoff.expressTime}</strong></span>
              </div>
            )}
            <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 shadow-2xs">
              <PackageCheck className="h-3.5 w-3.5 text-success" />
              <span>Free Drop-Off Counter Scans</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Full Declared Value &amp; Packaging</span>
            </div>
          </div>
        </div>

        {/* Showcase Hero Banner Card */}
        <div className="relative mt-7 sm:mt-9 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
          <div className="relative aspect-[16/9] max-h-[380px] w-full sm:max-h-[440px]">
            <Image
              src={service.heroImage}
              alt={service.headline}
              fill
              priority
              sizes="(min-width: 1280px) 1150px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />

            {/* Official Carrier Floating Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-surface/95 px-4 py-2 sm:px-5 sm:py-2.5 shadow-lg backdrop-blur-md">
                {isFedEx ? (
                  <div className="flex items-center gap-2.5">
                    <CarrierLogo carrier="fedex" className="h-6 w-auto object-contain sm:h-7" />
                    <div className="h-6 w-[1px] bg-border" />
                    <div>
                      <span className="block text-[11px] font-black uppercase tracking-wider text-[#4d148c]">
                        Authorized ShipCenter®
                      </span>
                      <span className="block text-[10px] font-semibold text-muted">
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

            {/* Bottom Overlay Info Tagline */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-accent">
                  Daily Scheduled Pick-Ups
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  Fast, reliable Express, Ground &amp; International shipping directly from Odenton, MD.
                </p>
              </div>

              {/* <a
                href="tel:+14105193131"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-primary-dark transition-all hover:bg-accent-light shadow-xs cursor-pointer"
              >
                <span>Call Store: (410) 519-3131</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
