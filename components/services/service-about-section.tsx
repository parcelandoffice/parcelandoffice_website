import React from "react";
import Link from "next/link";
import {
  Truck,
  Globe,
  FileText,
  Barcode,
  Plane,
  Clock,
  Sparkles,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Phone,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";

function getFeatureIcon(iconName: string): LucideIcon {
  const norm = iconName.toLowerCase();
  if (norm.includes("truck")) return Truck;
  if (norm.includes("globe")) return Globe;
  if (norm.includes("plane")) return Plane;
  if (norm.includes("file")) return FileText;
  if (norm.includes("barcode") || norm.includes("track")) return Barcode;
  if (norm.includes("clock")) return Clock;
  if (norm.includes("shield")) return ShieldCheck;
  if (norm.includes("check")) return CheckCircle2;
  return PackageCheck;
}

export default function ServiceAboutSection({
  service,
}: {
  service: ServiceDetail;
}) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const aboutLabel = service.aboutLabel || "ABOUT OUR SERVICE";
  const aboutTitle =
    service.aboutTitle ||
    `Fast, Reliable ${service.shortTitle || service.title.split(" in ")[0]} at Competitive Rates`;

  return (
    <section
      aria-labelledby="about-service-heading"
      className="mt-12 sm:mt-16 relative"
    >
      {/* Subtle ambient decorative glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-accent/10 via-primary-soft/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Section Label Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{aboutLabel}</span>
          </div>

          {/* Section Heading (H2) */}
          <h2
            id="about-service-heading"
            className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            {aboutTitle}
          </h2>
        </div>

        {/* Intro Story Paragraphs */}
        <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed text-muted font-normal max-w-4xl mx-auto text-center">
          {service.introParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.keyHighlights.map((hl) => {
            const IconComponent = getFeatureIcon(hl.icon);
            return (
              <div
                key={hl.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-gradient-to-b from-surface via-surface to-surface-muted/40 p-5 sm:p-5.5 transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-primary-dark shadow-2xs">
                      <IconComponent className="h-5 w-5 stroke-[2.2]" />
                    </span>
                    {hl.badge && (
                      <span className="rounded-full border border-border/70 bg-surface-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-light group-hover:border-accent/30 group-hover:text-accent-dark transition-colors">
                        {hl.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display mt-3.5 text-base font-extrabold text-primary-dark transition-colors group-hover:text-primary">
                    {hl.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                    {hl.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-bold text-primary group-hover:text-accent transition-colors">
                  <span>Available In-Store</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
