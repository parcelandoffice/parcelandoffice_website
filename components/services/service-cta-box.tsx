import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, PackageSearch, ArrowRight, HelpCircle } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function ServiceCtaBox({ service }: { service: ServiceDetail }) {
  const serviceName = service.title.split(" in ")[0];

  return (
    <section className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-muted p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-card)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-accent">
            <HelpCircle className="h-4 w-4" />
            <span>Customer Assistance</span>
          </div>
          <h2 className="font-display mt-1 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl">
            Have A Question About {serviceName}?
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl leading-relaxed">
            Call <a href="tel:+14105193131" className="font-bold text-primary hover:underline">410.519.3131</a> to ask specific questions about {serviceName} rates, arrival estimates, or to get a free shipping quote. Not in a hurry? Send us a message and our team will get right back to you.
          </p>
        </div>

        {/* Primary Call Button */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href="tel:+14105193131"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md cursor-pointer"
          >
            <Phone className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
            <span>Call (410) 519-3131</span>
          </a>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Send Us a Message</span>
          </Link>
        </div>
      </div>

      {/* Secondary Quick Links Row */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-success" />
          <span>Need to track an existing shipment?</span>
          <Link href="/#tracking" className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
            <span>Visit Live Tracking Portal</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div>
          <span>Store Hours Today: <strong>9:30 AM – 6:30 PM</strong> (Odenton, MD)</span>
        </div>
      </div>
    </section>
  );
}
