import React from "react";
import {
  FileText,
  Briefcase,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

interface FeatureCardItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    title: "Personal Documents",
    description: "Ask about notarization for eligible personal paperwork.",
    icon: FileText,
  },
  {
    title: "Business Documents",
    description: "Get assistance with documents requiring notarial services.",
    icon: Briefcase,
  },
  {
    title: "Identification Requirements",
    description: "Confirm acceptable identification before your visit.",
    icon: ShieldCheck,
  },
  {
    title: "Convenient In-Store Service",
    description: "Contact the store to check notary availability.",
    icon: MapPin,
  },
];

export default function NotaryAbout() {
  return (
    <section aria-labelledby="about-notary-heading" className="relative">
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
            <span>ABOUT OUR SERVICES</span>
          </div>

          <h2
            id="about-notary-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Convenient Notary Services for Important Documents
          </h2>

          <div className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-muted font-normal max-w-3xl mx-auto">
            <p>
              Parcel &amp; Office Solutions offers notary public services in
              Odenton, MD, for individuals and businesses who need eligible
              documents notarized. Whether you are preparing legal paperwork,
              business documents, permission forms, or other documents requiring
              notarization, our team can help you understand the next steps.
            </p>
            <p>
              Notarization requirements depend on the document, the receiving
              organization, and applicable Maryland law. Contact the store to
              confirm availability, identification requirements, and whether an
              appointment is needed.
            </p>
          </div>
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
                  {/* Icon */}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-2xs">
                    <Icon className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                  </span>

                  {/* Title and Description */}
                  <h3 className="font-display mt-4 text-base font-extrabold text-primary-dark transition-colors group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

