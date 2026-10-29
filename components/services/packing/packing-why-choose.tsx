import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Package,
  Building,
  Truck,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface WhyChooseItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Personalized Assistance",
    description: "Packing options suited to your item's size and requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Suitable Packing Materials",
    description: "Access to packaging supplies based on current availability.",
    icon: Package,
  },
  {
    title: "Personal and Business Support",
    description: "Solutions for individual shipments and business packages.",
    icon: Building,
  },
  {
    title: "Shipping Convenience",
    description: "Access packing assistance and carrier shipping services at one location.",
    icon: Truck,
  },
  {
    title: "Local Service",
    description: "Convenient support for customers in Odenton and surrounding communities.",
    icon: MapPin,
  },
];

export default function PackingWhyChoose() {
  return (
    <section aria-labelledby="why-choose-packing-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2
            id="why-choose-packing-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Convenient Packing Support in Odenton, MD
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
            From single parcels to commercial dispatches, count on attentive service
            and reliable packaging care right in your neighborhood.
          </p>
        </div>

        {/* Feature Grid: Distinctive 5-Card Layout */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isFullWidthSpan = index === 4;

            return (
              <div
                key={item.title}
                className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-md hover:-translate-y-1 ${
                  isFullWidthSpan ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-accent">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span>Trusted In Odenton</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

