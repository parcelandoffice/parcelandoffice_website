import React from "react";
import {
  Clock,
  Award,
  Tag,
  PackageCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface FeatureCardItem {
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    title: "Fast Turnaround",
    description:
      "Get packing assistance based on your item's requirements and current store workload.",
    badge: "Prompt Service",
    icon: Clock,
  },
  {
    title: "Experienced Team",
    description:
      "Receive help selecting suitable packing methods and materials for different items.",
    badge: "Expert Staff",
    icon: Award,
  },
  {
    title: "Competitive Pricing",
    description:
      "Explore packing options based on package size, materials, and service needs.",
    badge: "Clear Value",
    icon: Tag,
  },
  {
    title: "One-Stop Convenience",
    description:
      "Combine packing assistance with available shipping and mailing services.",
    badge: "Pack & Ship",
    icon: PackageCheck,
  },
];

export default function PackingAbout() {
  return (
    <section aria-labelledby="about-packing-heading" className="relative">
      {/* Decorative ambient background blur */}
      <div
        className="pointer-events-none absolute -top-12 right-0 h-72 w-72 rounded-full bg-primary-soft/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>ABOUT OUR SERVICE</span>
          </div>

          <h2
            id="about-packing-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Fast, Reliable Packing Services at Competitive Rates
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted font-normal max-w-2xl mx-auto">
            At Parcel &amp; Office Solutions in Odenton, MD, we offer professional
            packing services tailored to individuals, families, and local
            businesses. Whether you&apos;re preparing a fragile item, a personal
            parcel, or a business shipment, our team can help you choose suitable
            packing materials and prepare your package for shipping.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-md hover:-translate-y-1"
              >
                {/* Top Subtle Border Highlight */}
                <div className="absolute top-0 inset-x-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-accent transition-all duration-300" />

                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-2xs">
                      <Icon className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-primary/15 bg-primary-soft/60 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary group-hover:border-accent/30 group-hover:text-accent-dark transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-display mt-4 text-base font-extrabold text-primary-dark transition-colors group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Footer Micro-indicator */}
                <div className="mt-4 pt-3.5 border-t border-border/70 flex items-center gap-1.5 text-[11px] font-bold text-primary group-hover:text-accent transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Available In-Store</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

