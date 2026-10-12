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

export default function TrackingAndPickup() {
  return (
    <section
      id="tracking"
      aria-labelledby="tracking-and-pickup-heading"
      className="section-anchor bg-surface py-10 sm:py-14 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Carrier Operations &amp; Logistics
          </span>
          <h2
            id="tracking-and-pickup-heading"
            className="font-display mt-1 text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl"
          >
            Live Tracking &amp; Daily Pick-Up Cutoffs
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            Track packages in real time across four major global carriers or drop off before today&apos;s cutoff time for guaranteed same-day transit.
          </p>
        </div>

        {/* 2-Column Harmonious Grid */}
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Live Multi-Carrier Tracking Portal (7 cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-card)] lg:col-span-7">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <PackageCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-foreground">
                      Live Multi-Carrier Tracking
                    </h3>
                    <p className="text-xs text-muted">
                      FedEx &bull; UPS &bull; DHL Express &bull; USPS
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  Live Gateway
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Select your carrier and enter the tracking number below to get official, up-to-date tracking milestones, transit history, and delivery confirmations.
              </p>

              {/* Tracking Form Component */}
              <div className="mt-5">
                <TrackingForm variant="section" />
              </div>
            </div>

            {/* Carrier Direct Quick Links */}
            <div className="mt-8 border-t border-border pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                <span className="font-semibold text-foreground">Official Carrier Portals:</span>
                <div className="flex flex-wrap items-center gap-3">
                  {TRACKING_CARRIERS.map((c) => (
                    <a
                      key={c.id}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                    >
                      {c.label}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Today's Pick-Up Cutoffs Board (5 cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-card)] lg:col-span-5">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-badge-teal-light text-badge-teal">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-foreground">
                      Today&apos;s Pick-Up Cutoffs
                    </h3>
                    <p className="text-xs text-muted">
                      Odenton Store Daily Schedule
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Scheduled
                </span>
              </div>

              {/* Carrier Schedule List */}
              <div className="mt-4 divide-y divide-border space-y-3">
                {NEXT_PICKUPS.map((pickup) => (
                  <div key={pickup.carrier} className="pt-3 first:pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-extrabold text-foreground">
                          {pickup.carrier}
                        </span>
                        {pickup.carrier === "FedEx" && (
                          <span className="rounded bg-carrier-fedex-light px-2 py-0.5 text-[10px] font-bold text-carrier-fedex">
                            ShipCenter
                          </span>
                        )}
                        {pickup.carrier === "UPS" && (
                          <span className="rounded bg-carrier-ups-light px-2 py-0.5 text-[10px] font-bold text-carrier-ups">
                            Outlet
                          </span>
                        )}
                        {pickup.carrier === "DHL" && (
                          <span className="rounded bg-carrier-dhl-light px-2 py-0.5 text-[10px] font-bold text-carrier-dhl">
                            Express
                          </span>
                        )}
                        {pickup.carrier === "USPS" && (
                          <span className="rounded bg-carrier-usps-light px-2 py-0.5 text-[10px] font-bold text-carrier-usps">
                            Postal
                          </span>
                        )}
                      </div>
                      <span className="h-2 w-2 rounded-full bg-success" />
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {pickup.slots.map((slot) => (
                        <div
                          key={slot.label}
                          className="rounded-lg border border-border bg-surface-muted/60 p-2 text-center"
                        >
                          <span className="block text-[11px] font-medium text-muted">
                            {slot.label}
                          </span>
                          <strong className="block text-sm font-bold text-primary">
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
                href="/contact-us"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary-dark"
              >
                Special or freight pickup requirements? Contact us
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
