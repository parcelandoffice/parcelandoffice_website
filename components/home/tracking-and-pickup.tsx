"use client";

import {
  Clock,
  ExternalLink,
  PackageCheck,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import TrackingForm from "@components/common/tracking-form";
import { NEXT_PICKUPS, TRACKING_CARRIERS } from "@/lib/site-data";
import { CarrierLogo } from "@components/common/carrier-logos";

type TrackingAndPickupProps = {
  data?: {
    trackingEyebrow?: string;
    trackingTitle?: string;
    trackingDescription?: string;
    trackingCardTitle?: string;
    trackingCardSubtitle?: string;
    trackingCardBadge?: string;
    trackingCardDescription?: string;
    cutoffsCardTitle?: string;
    cutoffsCardSubtitle?: string;
    cutoffsCardBadge?: string;
    pickupCutoffs?: Array<{
      carrierName: string;
      carrierBadge?: string;
      slots?: Array<{ label: string; time: string }>;
    }>;
    cutoffsFooterText?: string;
    cutoffsFooterUrl?: string;
  } | null;
};

export default function TrackingAndPickup({ data }: TrackingAndPickupProps) {
  const eyebrow = data?.trackingEyebrow || "Carrier Operations & Logistics";
  const title = data?.trackingTitle || "Live Tracking & Daily Pick-Up Cutoffs";
  const description =
    data?.trackingDescription ||
    "Track packages in real time across four major global carriers or drop off before today's cutoff time for guaranteed same-day transit.";

  const trackingCardTitle = data?.trackingCardTitle || "Live Multi-Carrier Tracking";
  const trackingCardSubtitle = data?.trackingCardSubtitle || "FedEx • UPS • DHL Express • USPS";
  const trackingCardBadge = data?.trackingCardBadge || "Live Gateway";
  const trackingCardDescription =
    data?.trackingCardDescription ||
    "Select your carrier and enter the tracking number below to get official, up-to-date tracking milestones, transit history, and delivery confirmations.";

  const cutoffsCardTitle = data?.cutoffsCardTitle || "Today's Pick-Up Cutoffs";
  const cutoffsCardSubtitle = data?.cutoffsCardSubtitle || "Odenton Store Daily Schedule";
  const cutoffsCardBadge = data?.cutoffsCardBadge || "Scheduled";

  const pickups =
    data?.pickupCutoffs && data.pickupCutoffs.length > 0
      ? data.pickupCutoffs.map((p) => ({
          carrier: p.carrierName,
          badge: p.carrierBadge,
          slots: p.slots || [],
        }))
      : NEXT_PICKUPS.map((p) => ({
          carrier: p.carrier,
          badge:
            p.carrier === "FedEx"
              ? "ShipCenter"
              : p.carrier === "UPS"
              ? "Outlet"
              : p.carrier === "DHL"
              ? "Express"
              : p.carrier === "USPS"
              ? "Postal"
              : "Partner",
          slots: p.slots,
        }));

  const footerText = data?.cutoffsFooterText || "Special or freight pickup requirements? Contact us";
  const footerUrl = data?.cutoffsFooterUrl || "/contact-us";

  return (
    <section
      id="tracking"
      aria-labelledby="tracking-and-pickup-heading"
      className="section-anchor bg-surface py-10 sm:py-14 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h2
            id="tracking-and-pickup-heading"
            className="font-display mt-1 text-2xl font-black uppercase tracking-tight text-primary-dark sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl">{description}</p>
        </div>

        {/* 2-Column Harmonious Grid */}
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Live Multi-Carrier Tracking Portal (7 cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-card)] lg:col-span-7">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-2xs">
                    <PackageCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-primary-dark">
                      {trackingCardTitle}
                    </h3>
                    <p className="text-xs text-muted">
                      {trackingCardSubtitle}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success border border-success/20">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  {trackingCardBadge}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {trackingCardDescription}
              </p>

              {/* Tracking Form Component */}
              <div className="mt-5">
                <TrackingForm variant="section" />
              </div>
            </div>

            {/* Carrier Direct Quick Links with Authentic Logos */}
            <div className="mt-8 border-t border-border pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                <span className="font-bold text-foreground">Official Carrier Portals:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {TRACKING_CARRIERS.map((c) => (
                    <a
                      key={c.id}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-bold text-primary transition-all duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent-dark shadow-2xs"
                    >
                      <CarrierLogo carrier={c.id} className="h-3.5 max-w-[42px] w-auto object-contain" />
                      <span>{c.label}</span>
                      <ExternalLink className="h-3 w-3 text-muted-light" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Today's Pick-Up Cutoffs Board (5 cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-card)] lg:col-span-5">
            <div>
              {/* Header with Theme Highlight */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-dark shadow-2xs">
                    <Clock className="h-5 w-5 text-accent-dark" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-primary-dark">
                      {cutoffsCardTitle}
                    </h3>
                    <p className="text-xs text-muted">
                      {cutoffsCardSubtitle}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary border border-primary/20">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {cutoffsCardBadge}
                </span>
              </div>

              {/* Carrier Schedule List with Delivery Partner Logos */}
              <div className="mt-4 space-y-3.5">
                {pickups.map((pickup) => (
                  <div key={pickup.carrier} className="pt-3.5 first:pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        {/* Delivery Partner Logo Badge */}
                        <div className="flex h-8 w-20 sm:w-22 items-center justify-center rounded-lg border border-border bg-surface px-1.5 shadow-2xs shrink-0">
                          <CarrierLogo carrier={pickup.carrier} className="h-4.5 max-w-full w-auto object-contain" />
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-display text-sm font-extrabold text-primary-dark">
                            {pickup.carrier}
                          </span>
                          {pickup.badge ? (
                            <span className="rounded bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent-dark border border-accent/20">
                              {pickup.badge}
                            </span>
                          ) : (
                            <>
                              {pickup.carrier === "FedEx" && (
                                <span className="rounded bg-carrier-fedex-light px-2 py-0.5 text-[10px] font-bold text-carrier-fedex border border-carrier-fedex/20">
                                  ShipCenter
                                </span>
                              )}
                              {pickup.carrier === "UPS" && (
                                <span className="rounded bg-carrier-ups-light px-2 py-0.5 text-[10px] font-bold text-carrier-ups border border-carrier-ups/20">
                                  Outlet
                                </span>
                              )}
                              {pickup.carrier === "DHL" && (
                                <span className="rounded bg-carrier-dhl-light px-2 py-0.5 text-[10px] font-bold text-carrier-dhl border border-carrier-dhl/20">
                                  Express
                                </span>
                              )}
                              {pickup.carrier === "USPS" && (
                                <span className="rounded bg-carrier-usps-light px-2 py-0.5 text-[10px] font-bold text-carrier-usps border border-carrier-usps/20">
                                  Postal
                                </span>
                              )}
                              {pickup.carrier === "Delhivery" && (
                                <span className="rounded bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent-dark border border-accent/20">
                                  Partner
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-success ring-2 ring-success/20 animate-pulse" />
                    </div>

                    {/* Pickup Cutoff Slots Styled with Theme Primary and Highlight Colors */}
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      {pickup.slots.map((slot) => (
                        <div
                          key={slot.label}
                          className="group/slot rounded-xl border border-border/80 bg-surface-muted/50 p-2 sm:p-2.5 text-center transition-all duration-200 hover:border-accent hover:bg-accent-soft/30 hover:shadow-2xs"
                        >
                          <span className="flex items-center justify-center gap-1 text-[11px] font-semibold text-muted">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {slot.label}
                          </span>
                          <strong className="mt-0.5 block font-display text-sm sm:text-base font-extrabold text-primary-dark">
                            {slot.time}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-6 border-t border-border pt-3.5 text-center">
              <Link
                href={footerUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-accent"
              >
                {footerText}
                <ChevronRight className="h-3.5 w-3.5 text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
