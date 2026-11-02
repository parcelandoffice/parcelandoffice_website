"use client";

import React, { useState } from "react";
import {
  Clock,
  Receipt,
  Search,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import { TRACKING_CARRIERS } from "@/lib/site-data";

export default function ServiceCutoffTracking({
  service,
}: {
  service: ServiceDetail;
}) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");

  const sectionLabel = service.cutoffTrackingLabel || "CUTOFF TIMES & TRACKING";
  const sectionTitle =
    service.cutoffTrackingTitle || "Know Your Shipping Cutoff and Track Your Package";
  const sectionSubtitle =
    service.cutoffTrackingSubtitle ||
    "Planning your shipment around the daily pickup schedule can help you prepare for dispatch. Actual pickup times, carrier acceptance, transit estimates, and delivery dates may vary.";
  const ctaLabel =
    service.cutoffTrackingCtaLabel || (isDHL ? "Track Your DHL Shipment" : "Track Your Shipment");
  const defaultTrackingUrl =
    service.cutoffTrackingCtaHref ||
    "https://www.dhl.com/us-en/home/tracking/tracking-express.html";

  const cutoffTime =
    service.todayCutoff?.expressTime ||
    (isDHL ? "5:30 PM (Mon – Fri)" : "Daily Scheduled Pickup");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNum = trackingNumber.trim();
    if (cleanNum) {
      const dhlCarrier = TRACKING_CARRIERS.find((c) => c.id === "dhl");
      const url = dhlCarrier
        ? `${dhlCarrier.url}${encodeURIComponent(cleanNum)}`
        : `https://www.dhl.com/us-en/home/tracking/tracking-express.html?submit=1&tracking-id=${encodeURIComponent(
          cleanNum,
        )}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(defaultTrackingUrl, "_blank", "noopener,noreferrer");
    }
  };

  const hasCustomCards = service.cutoffCards && service.cutoffCards.length > 0;

  return (
    <section
      aria-labelledby="cutoff-tracking-heading"
      className="relative pt-1 sm:pt-2"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <Clock className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="cutoff-tracking-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* 3 Information Cards Grid */}
      <div className="mt-8 grid gap-4.5 sm:grid-cols-3">
        {hasCustomCards ? (
          service.cutoffCards!.map((card, idx) => (
            <div
              key={card.title || idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-gradient-to-b from-surface via-surface to-surface-muted/30 p-5 sm:p-5.5 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  {card.iconUrl ? (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark shadow-2xs p-2 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={card.iconUrl} alt={card.title} className="h-full w-full object-contain" />
                    </span>
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark shadow-2xs">
                      {idx === 0 ? (
                        <Clock className="h-5 w-5 stroke-[2.2]" />
                      ) : idx === 1 ? (
                        <Receipt className="h-5 w-5 stroke-[2.2]" />
                      ) : (
                        <Search className="h-5 w-5 stroke-[2.2]" />
                      )}
                    </span>
                  )}
                  {card.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-light border border-border/60">
                      {idx === 0 && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                        </span>
                      )}
                      {card.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-3.5 text-base font-extrabold text-primary-dark">
                  {card.title}
                </h3>

                {card.highlight && (
                  <div className="mt-2 inline-flex items-baseline gap-1.5">
                    <span className="font-display text-2xl font-black text-primary-dark tracking-tight">
                      {card.highlight}
                    </span>
                  </div>
                )}

                {card.description && (
                  <p className="mt-2 text-xs sm:text-[13px] text-muted leading-relaxed font-medium">
                    {card.description}
                  </p>
                )}
              </div>

              {card.footerText && (
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-success">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{card.footerText}</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <>
            {/* Card 1: Daily Shipping Cutoff */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-gradient-to-b from-surface via-surface to-surface-muted/30 p-5 sm:p-5.5 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark shadow-2xs">
                    <Clock className="h-5 w-5 stroke-[2.2]" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-light border border-border/60">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                    </span>
                    Verified Schedule
                  </span>
                </div>

                <h3 className="font-display mt-3.5 text-base font-extrabold text-primary-dark">
                  Daily Shipping Cutoff
                </h3>

                <div className="mt-2 inline-flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-black text-primary-dark tracking-tight">
                    {cutoffTime.split(" ")[0]}
                  </span>
                  <span className="text-xs font-bold text-accent-dark">
                    {cutoffTime.replace(cutoffTime.split(" ")[0], "").trim()}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-[13px] text-muted leading-relaxed font-medium">
                  Drop off your items before our verified store cutoff time to ensure same-day departure on tonight&apos;s carrier route.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-success">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Guaranteed Same-Day Route</span>
              </div>
            </div>

            {/* Card 2: Shipment Receipt */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-gradient-to-b from-surface via-surface to-surface-muted/30 p-5 sm:p-5.5 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white shadow-2xs">
                    <Receipt className="h-5 w-5 stroke-[2.2]" />
                  </span>
                  <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-light border border-border/60">
                    Official Proof
                  </span>
                </div>

                <h3 className="font-display mt-3.5 text-base font-extrabold text-primary-dark">
                  Shipment Receipt
                </h3>

                <p className="mt-2 text-xs sm:text-[13px] text-muted leading-relaxed font-medium">
                  Keep your receipt and tracking number. We scan every parcel into the carrier network right at the counter and hand you an official receipt.
                </p>

              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>Proof of Acceptance Provided</span>
              </div>
            </div>

            {/* Card 3: Tracking Updates */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-gradient-to-b from-surface via-surface to-surface-muted/30 p-5 sm:p-5.5 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white shadow-2xs">
                    <Search className="h-5 w-5 stroke-[2.2]" />
                  </span>
                  <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-light border border-border/60">
                    24/7 Updates
                  </span>
                </div>

                <h3 className="font-display mt-3.5 text-base font-extrabold text-primary-dark">
                  Tracking Updates
                </h3>

                <p className="mt-2 text-xs sm:text-[13px] text-muted leading-relaxed font-medium">
                  Use the official carrier tracking service to check shipment progress across checkpoints, transit hubs, and door delivery.
                </p>

              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                <span>Full Milestone Visibility</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Interactive Quick-Track Bar & CTA */}
      <div className="mt-8 rounded-2xl border border-border/80 bg-surface-muted/60 p-5 sm:p-6">
        <form
          onSubmit={handleTrackSubmit}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4"
        >
          <div className="flex-1 min-w-0">
            <label
              htmlFor="tracking-input-field"
              className="block text-xs font-bold uppercase tracking-wider text-primary-dark mb-1.5"
            >
              Have a {service.shortTitle || "package"} tracking number?
            </label>
            <div className="relative">
              <input
                id="tracking-input-field"
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder={service.trackingPlaceholder || "Enter your tracking number..."}
                className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20 shadow-2xs"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-end">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{ctaLabel}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
