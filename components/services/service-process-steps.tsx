import React from "react";
import {
  PackageOpen,
  SlidersHorizontal,
  FileText,
  Barcode,
  ArrowRight,
  Sparkles,
  MapPin,
  HelpCircle,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";
import Link from "next/link";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  badge?: string;
  icon?: typeof PackageOpen;
  iconUrl?: string;
};

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Bring Your Shipment",
    description:
      "Bring your documents or properly prepared package to our store for shipping assistance.",
    badge: "In-Store Drop-Off",
    icon: PackageOpen,
  },
  {
    step: "02",
    title: "Review Shipping Options",
    description:
      "Check the available service options, estimated delivery times, shipping charges, and destination requirements.",
    badge: "Compare & Select",
    icon: SlidersHorizontal,
  },
  {
    step: "03",
    title: "Complete Shipment Documentation",
    description:
      "Provide the required shipment details and customs paperwork, where applicable.",
    badge: "Customs Paperwork",
    icon: FileText,
  },
  {
    step: "04",
    title: "Drop Off and Track",
    description:
      "Complete your shipment at the counter and use your tracking number to follow eligible shipments.",
    badge: "Receipt & Tracking",
    icon: Barcode,
  },
];

const DEFAULT_ICONS = [PackageOpen, SlidersHorizontal, FileText, Barcode];

export default function ServiceProcessSteps({
  service,
}: {
  service: ServiceDetail;
}) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const sectionLabel = service.processLabel || "HOW IT WORKS";
  const sectionTitle =
    service.processTitle ||
    (isDHL ? "Ship With DHL in Four Simple Steps" : "Ship in Four Simple Steps");
  const sectionSubtitle =
    service.processSubtitle ||
    "Fast, transparent, and hassle-free shipping from our Odenton counter beside Food Lion.";

  const stepsToDisplay =
    service.processSteps && service.processSteps.length > 0
      ? service.processSteps.map((step, idx) => ({
          step: step.step || `0${idx + 1}`,
          title: step.title,
          description: step.description,
          badge: step.badge || `Step ${idx + 1}`,
          icon: DEFAULT_ICONS[idx % DEFAULT_ICONS.length],
          iconUrl: step.iconUrl,
        }))
      : DEFAULT_PROCESS_STEPS;

  return (
    <section
      aria-labelledby="shipping-process-heading"
      className="mt-10 sm:mt-18 relative"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="shipping-process-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* Linked 4-Step Interactive Stepper */}
      <div className="relative mt-14 sm:mt-20 mb-4 sm:mb-8">
        {/* Horizontal Connecting Link Line (Desktop & Tablet) */}
        <div
          className="hidden sm:block absolute top-10 left-[12%] right-[12%] h-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 -translate-y-1/2 z-0 rounded-full"
          aria-hidden="true"
        >
          {/* Subtle directional indicators on line */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,var(--accent)_50%,transparent_100%)] opacity-30 animate-pulse" />
        </div>

        {/* Step Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-3 relative z-10">
          {stepsToDisplay.map((step) => {
            const Icon = step.icon || PackageOpen;
            return (
              <div
                key={step.step}
                tabIndex={0}
                className="group relative flex flex-col items-center text-center focus-visible:outline-hidden"
              >
                {/* Floating Tooltip with Description (Positioned above the round node on desktop) */}
                <div
                  role="tooltip"
                  className="sm:absolute sm:bottom-[calc(100%+14px)] sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-60 p-3.5 rounded-2xl bg-primary-dark text-white shadow-xl border border-white/15 opacity-100 sm:opacity-0 sm:invisible sm:translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus:opacity-100 group-focus:visible group-focus:translate-y-0 transition-all duration-200 z-30 pointer-events-none mb-3 sm:mb-0"
                >
                  <span className="block text-[10px] font-black uppercase tracking-wider text-accent mb-1">
                    {step.badge}
                  </span>
                  <p className="text-xs text-white/95 leading-relaxed font-normal">
                    {step.description}
                  </p>
                  {/* Tooltip Caret Arrow */}
                  <div
                    className="hidden sm:block absolute left-1/2 -bottom-1.5 -translate-x-1/2 h-3 w-3 rotate-45 bg-primary-dark border-r border-b border-white/15"
                    aria-hidden="true"
                  />
                </div>

                {/* Round Circle Node with Icon */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-border/90 bg-surface shadow-md transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_24px_rgba(242,77,2,0.35)] group-hover:scale-110 cursor-pointer">
                  {step.iconUrl ? (
                    <span className="h-10 w-10 flex items-center justify-center p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.iconUrl} alt={step.title} className="h-full w-full object-contain" />
                    </span>
                  ) : (
                    <Icon className="h-8 w-8 text-primary transition-colors duration-200 group-hover:text-accent stroke-[2.2]" />
                  )}

                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-black text-white shadow-xs ring-2 ring-surface">
                    {step.step}
                  </span>
                </div>

                {/* Step Title Below Node */}
                <h3 className="font-display mt-4 text-sm sm:text-base font-bold text-primary-dark transition-colors group-hover:text-primary max-w-[200px]">
                  {step.title}
                </h3>

                {/* Mobile Description (Always visible on mobile for accessibility) */}
                <p className="block sm:hidden mt-1.5 text-xs text-muted max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helpful Hint Callout Below Stepper */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-muted text-center">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span>No carrier account required — walk in, ship, and get on with your day!</span>
      </div>
    </section>
  );
}
