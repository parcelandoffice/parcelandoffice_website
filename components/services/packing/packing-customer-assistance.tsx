import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  HelpCircle,
} from "lucide-react";
import { BUSINESS } from "@/lib/site-data";

export default function PackingCustomerAssistance() {
  return (
    <section aria-labelledby="packing-customer-assistance-heading" className="relative mt-16 sm:mt-20">
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary-dark via-primary to-secondary-dark p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative background glows */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>CUSTOMER ASSISTANCE</span>
          </div>

          {/* Heading */}
          <h2
            id="packing-customer-assistance-heading"
            className="font-display mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Have a Question About Professional Packing?
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80 max-w-2xl mx-auto font-normal">
            Need help preparing a fragile item, choosing packing materials, or getting
            a package ready for shipping? Contact our team to discuss your requirements
            and available services.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us?service=professional-packing"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-primary-dark shadow-glow transition-all duration-200 hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Packing Quote</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:bg-white/20"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>

          {/* Store Info Micro-Badges */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>Beside Food Lion on Piney Orchard Pkwy</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>Walk-ins welcome during store hours</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

