"use client";

import React from "react";
import Link from "next/link";
import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS } from "@/lib/site-data";
import {
  Calculator,
  HelpCircle,
  MessageSquare,
  Phone,
} from "lucide-react";

export default function ServiceCustomerAssistance({
  service,
}: {
  service?: ServiceDetail;
}) {
  const carrierTitle =
    service?.shortTitle ||
    (service?.carrierType ? service.carrierType.toUpperCase() : "Shipping");

  return (
    <section
      aria-labelledby="customer-assistance-heading"
      className="mt-8 sm:mt-12 relative"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <HelpCircle className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>Customer Assistance</span>
        </div>

        <h2
          id="customer-assistance-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {service?.customerAssistanceTitle || "Customer Assistance"}
        </h2>

        <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {service?.customerAssistanceSubtitle ||
            "Need help preparing a shipment, understanding customs paperwork, or comparing available delivery options? Contact our team or visit our store in Odenton, MD."}
        </p>

        {/* CTA Buttons in attractive responsive row */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={BUSINESS.phoneHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md cursor-pointer"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Call Our Store</span>
          </a>

          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-surface px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary cursor-pointer shadow-2xs"
          >
            <MessageSquare className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
            <span>Send Us a Message</span>
          </Link>

          <a
            href={service?.ctaQuoteHref || BUSINESS.phoneHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md cursor-pointer"
          >
            <Calculator className="h-4 w-4 text-white transition-transform group-hover:rotate-12" />
            <span>{service?.ctaQuoteLabel || `Get a ${carrierTitle} Quote`}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
