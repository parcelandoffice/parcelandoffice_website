import React from "react";
import Link from "next/link";
import {
  Package,
  Boxes,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Phone,
  MessageSquare,
} from "lucide-react";
import { BUSINESS } from "@/lib/site-data";

interface CapabilityItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  idealFor: string;
  icon: React.ElementType;
  featured?: boolean;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "standard",
    name: "Standard Professional Packing",
    badge: "Everyday Shipping",
    description:
      "Packing assistance for everyday parcels, personal belongings, and items that need suitable protection during transit.",
    idealFor: "Personal packages, gifts, and general shipments.",
    icon: Package,
  },
  {
    id: "business",
    name: "Bulk and Business Packing",
    badge: "Commercial Solutions",
    description:
      "Practical packing support for businesses preparing multiple parcels, product samples, documents, or customer orders.",
    idealFor: "Small businesses, online sellers, and recurring shipments.",
    icon: Boxes,
    featured: true,
  },
  {
    id: "fragile",
    name: "Fragile Item Packing",
    badge: "Delicate & High-TLC",
    description:
      "Additional cushioning and suitable packing materials for eligible delicate items that need extra protection.",
    idealFor: "Breakable gifts, delicate household items, and selected valuables.",
    icon: ShieldAlert,
  },
];

export default function PackingCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="relative">
      <div className="rounded-3xl border border-border/90 bg-gradient-to-b from-surface via-surface-muted/40 to-surface p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs">
        {/* Subtle decorative background gradient */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-3xl rounded-full bg-primary-soft/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>COMPREHENSIVE PACKING SOLUTIONS</span>
            </div>

            <h2
              id="capabilities-heading"
              className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
            >
              Our Professional Packing Capabilities
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
              Everything you need to prepare your items for shipping, whether
              you&apos;re sending a personal package or handling business shipments.
            </p>
          </div>

          {/* 3 Capabilities Cards Grid */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              const isFeatured = cap.featured;

              return (
                <div
                  key={cap.id}
                  className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured
                      ? "border-primary/40 bg-surface shadow-md ring-2 ring-primary/20"
                      : "border-border/90 bg-surface hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute -top-3.5 right-6 rounded-full bg-primary px-3.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                      Popular for Business
                    </div>
                  )}

                  <div>
                    {/* Header: Icon & Category Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-200 ${
                          isFeatured
                            ? "bg-primary text-white group-hover:bg-accent group-hover:text-primary-dark"
                            : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                      </span>

                      <span className="rounded-full border border-primary/15 bg-primary-soft/50 px-3 py-1 text-[11px] font-bold text-primary">
                        {cap.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display mt-5 text-lg sm:text-xl font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                      {cap.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted font-normal">
                      {cap.description}
                    </p>
                  </div>

                  {/* Ideal For Callout Box */}
                  <div className="mt-6 pt-5 border-t border-border/70">
                    <div className="rounded-xl bg-surface-muted p-3.5 border border-border/80">
                      <span className="block text-[11px] font-extrabold uppercase tracking-wider text-primary">
                        Ideal for:
                      </span>
                      <p className="mt-1 text-xs sm:text-[13px] font-medium text-foreground leading-snug">
                        {cap.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple CTA Section */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              href="/contact-us?service=professional-packing"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-[1.02]"
            >
              <span>GET A PACKING QUOTE</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

