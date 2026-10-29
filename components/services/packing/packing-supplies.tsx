import React from "react";
import Link from "next/link";
import {
  Box,
  ShieldCheck,
  Layers,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  CheckCircle,
  PackageCheck,
} from "lucide-react";

interface SupplyCardItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
  icon: React.ElementType;
}

const SUPPLY_CARDS: SupplyCardItem[] = [
  {
    id: "boxes",
    title: "Shipping Boxes",
    badge: "Available In-Store",
    description: "Options for different package sizes, where available.",
    highlight: "Standard, heavy-duty & specialty sizes",
    icon: Box,
  },
  {
    id: "cushioning",
    title: "Protective Cushioning",
    badge: "Impact Absorption",
    description:
      "Materials such as bubble wrap or other cushioning supplies, subject to availability.",
    highlight: "Bubble wrap, void-fill & padding",
    icon: ShieldCheck,
  },
  {
    id: "tape",
    title: "Packing Tape",
    badge: "Secure Closure",
    description: "Helps secure package seams and closures.",
    highlight: "Heavy-duty pressure-sensitive sealing",
    icon: Layers,
  },
  {
    id: "wrapping",
    title: "Protective Wrapping",
    badge: "Surface Defense",
    description:
      "Wrapping options for suitable items and shipment types.",
    highlight: "Scratch-resistant paper & protective wrap",
    icon: PackageCheck,
  },
];

export default function PackingSupplies() {
  return (
    <section aria-labelledby="supplies-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>PACKING SUPPLIES</span>
          </div>

          <h2
            id="supplies-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Choose Suitable Materials for Your Shipment
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
            The right packing materials can help cushion items, limit movement
            inside the box, and prepare packages for handling during transit. Our
            team can help you identify suitable options based on the item
            you&apos;re sending.
          </p>
        </div>

        {/* 4 Supply Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPLY_CARDS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon and Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                    </span>

                    <span className="rounded-full border border-primary/15 bg-primary-soft/50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display mt-4 text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="mt-5 pt-3.5 border-t border-border/70">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary">
                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                    <span>{item.highlight}</span>
                  </span>
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
    </section>
  );
}

