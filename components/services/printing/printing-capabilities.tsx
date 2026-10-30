import React from "react";
import Link from "next/link";
import {
  FileText,
  Printer,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface CapabilityItem {
  id: string;
  name: string;
  description: string;
  idealFor: string[];
  ctaText: string;
  ctaHref: string;
  icon: React.ElementType;
  featured?: boolean;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "standard",
    name: "Standard Print Document Services",
    description:
      "Print everyday documents, forms, reports, letters, and other paperwork for personal, educational, or professional use.",
    idealFor: [
      "Personal documents and applications",
      "Business reports and office paperwork",
      "Educational documents and assignments",
      "Forms, letters, and general correspondence",
    ],
    ctaText: "Get a Printing Quote",
    ctaHref: "/contact-us?service=print-document-services",
    icon: FileText,
  },
  {
    id: "bulk",
    name: "Bulk & Commercial Printing Solutions",
    description:
      "Prepare larger quantities of printed materials for business communication, marketing campaigns, events, and day-to-day operations.",
    idealFor: [
      "Business documents and reports",
      "Marketing and promotional materials",
      "Company handouts and informational sheets",
      "Printed materials for meetings and events",
    ],
    ctaText: "Get a Bulk Printing Quote",
    ctaHref: "/contact-us?service=print-document-services&type=bulk",
    icon: Printer,
    featured: true,
  },
];

export default function PrintingCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="relative">
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
              <span>COMPREHENSIVE PRINTING SOLUTIONS</span>
            </div>

            <h2
              id="capabilities-heading"
              className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
            >
              Our Print &amp; Document Services Capabilities
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
              From everyday document printing to professional business materials, we
              offer printing solutions for a range of personal and commercial
              needs.
            </p>
          </div>

          {/* 2 Capabilities Cards Grid */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              const isFeatured = cap.featured;

              return (
                <div
                  key={cap.id}
                  className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured
                      ? "border-primary/40 bg-surface shadow-md ring-1 ring-primary/20"
                      : "border-border/90 bg-surface hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Header: Icon */}
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
                    </div>

                    {/* Title */}
                    <h3 className="font-display mt-5 text-xl sm:text-2xl font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                      {cap.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted font-normal">
                      {cap.description}
                    </p>

                    {/* Ideal For Section */}
                    <div className="mt-6 pt-5 border-t border-border/70">
                      <span className="block text-xs font-extrabold uppercase tracking-wider text-primary mb-3">
                        Ideal For:
                      </span>
                      <ul className="space-y-2">
                        {cap.idealFor.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground font-medium"
                          >
                            <CheckCircle2
                              className="h-4 w-4 text-primary shrink-0 mt-0.5 stroke-[2.2]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card CTA Button */}
                  <div className="mt-8 pt-5 border-t border-border/70">
                    <Link
                      href={cap.ctaHref}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02]"
                    >
                      <span>{cap.ctaText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
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

