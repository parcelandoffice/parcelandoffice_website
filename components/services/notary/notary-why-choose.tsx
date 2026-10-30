import React from "react";
import {
  Sparkles,
  MapPin,
  FileCheck,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

interface WhyChooseItem {
  title: string;
  icon: React.ElementType;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Local access to notary services",
    icon: MapPin,
  },
  {
    title: "Support for eligible personal and business documents",
    icon: FileCheck,
  },
  {
    title: "Guidance on what to prepare before visiting",
    icon: HelpCircle,
  },
  {
    title: "Convenient contact options for service inquiries",
    icon: PhoneCall,
  },
];

export default function NotaryWhyChoose() {
  return (
    <section aria-labelledby="notary-why-choose-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>WHY CHOOSE PARCEL &amp; OFFICE SOLUTIONS?</span>
          </div>

          <h2
            id="notary-why-choose-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Convenient Notary Services in Odenton, MD
          </h2>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-md hover:-translate-y-1"
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

                  <h3 className="font-display mt-5 text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 pt-3.5 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-accent shrink-0"
                    aria-hidden="true"
                  />
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

