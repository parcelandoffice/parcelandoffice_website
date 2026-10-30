import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  FileText,
  CreditCard,
  Layers,
  Boxes,
} from "lucide-react";

interface BusinessOptionItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const BUSINESS_OPTIONS: BusinessOptionItem[] = [
  {
    title: "Business Documents",
    description:
      "Print reports, letters, forms, and other documents used in everyday business operations.",
    icon: FileText,
  },
  {
    title: "Business Cards",
    description:
      "Prepare printed cards featuring your business contact information for networking and customer communication.",
    icon: CreditCard,
  },
  {
    title: "Flyers & Brochures",
    description:
      "Create printed materials to communicate service details, promotions, and event information.",
    icon: Layers,
  },
  {
    title: "Bulk Document Printing",
    description:
      "Explore options for larger print quantities based on your project specifications and available services.",
    icon: Boxes,
  },
];

export default function PrintingBusinessSolutions() {
  return (
    <section aria-labelledby="business-printing-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>BUSINESS PRINTING SOLUTIONS</span>
          </div>

          <h2
            id="business-printing-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Professional Printing for Your Business Needs
          </h2>

          <div className="mt-4 space-y-2 text-sm sm:text-base leading-relaxed text-muted font-normal max-w-3xl mx-auto">
            <p>
              Clear, professionally prepared printed materials can help businesses
              communicate information, share contact details, and support everyday
              operations.
            </p>
            <p>
              Parcel &amp; Office Solutions offers printing options for businesses
              that need documents and promotional materials prepared for meetings,
              customer interactions, marketing activities, and internal use.
            </p>
          </div>
        </div>

        {/* Business Printing Options Label & Grid */}
        <div className="mt-10">
          <div className="mb-4 text-center sm:text-left">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary">
              Business Printing Options:
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_OPTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/90 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-md hover:-translate-y-1"
                >
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 inset-x-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-accent transition-all duration-300" />

                  <div>
                    {/* Icon */}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-2xs">
                      <Icon className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                    </span>

                    {/* Title */}
                    <h4 className="font-display mt-4 text-base sm:text-lg font-extrabold text-primary-dark transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Single Centered CTA Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="/contact-us?service=print-document-services&type=business"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-[1.02]"
          >
            <span>Discuss Your Printing Needs</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

