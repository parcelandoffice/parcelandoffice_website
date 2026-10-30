import React from "react";
import {
  Sparkles,
  Scale,
  FileCheck,
  Building,
  Users,
  FileSignature,
} from "lucide-react";

interface NotaryServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const NOTARY_SERVICES: NotaryServiceItem[] = [
  {
    id: "legal",
    title: "Legal Documents",
    description:
      "Ask about notarization for eligible legal paperwork requiring a notarial act.",
    icon: Scale,
  },
  {
    id: "business-contracts",
    title: "Business and Contract Documents",
    description:
      "Explore available notary services for eligible agreements and business documents.",
    icon: FileCheck,
  },
  {
    id: "real-estate",
    title: "Real Estate Documents",
    description:
      "Confirm whether the specific real estate document and required notarial act can be handled.",
    icon: Building,
  },
  {
    id: "personal-family",
    title: "Personal and Family Forms",
    description:
      "Ask about eligible school permission forms, medical release forms, and other personal paperwork.",
    icon: Users,
  },
  {
    id: "poa-vehicle",
    title: "Power of Attorney and Vehicle Documents",
    description:
      "Confirm the document's requirements and the notary's ability to perform the requested act before visiting.",
    icon: FileSignature,
  },
];

export default function NotaryServices() {
  return (
    <section aria-labelledby="notary-services-heading" className="relative">
      <div className="rounded-3xl border border-border/90 bg-gradient-to-b from-surface via-surface-muted/30 to-surface p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs">
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
              <span>OUR NOTARY SERVICES</span>
            </div>

            <h2
              id="notary-services-heading"
              className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
            >
              Notary Assistance for Common Document Needs
            </h2>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NOTARY_SERVICES.map((item, index) => {
              const Icon = item.icon;
              const isWideOnDesktop = index >= 3;

              return (
                <div
                  key={item.id}
                  className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/20 hover:shadow-md hover:-translate-y-1 ${
                    isWideOnDesktop ? "lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    {/* Header Icon */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-2xs">
                        <Icon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display mt-5 text-lg sm:text-xl font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

