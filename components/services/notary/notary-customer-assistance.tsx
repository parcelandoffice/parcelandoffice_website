import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { BUSINESS } from "@/lib/site-data";

export default function NotaryCustomerAssistance() {
  return (
    <section aria-labelledby="notary-assistance-heading" className="relative">
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary-dark via-primary to-secondary-dark p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
        {/* Subtle background ambient glows */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>CUSTOMER ASSISTANCE</span>
          </div>

          {/* Heading */}
          <h2
            id="notary-assistance-heading"
            className="font-display mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Have a Question About Notary Services?
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85 max-w-2xl mx-auto font-normal">
            Contact Parcel &amp; Office Solutions to confirm notary availability,
            identification requirements, document eligibility, and applicable fees.
          </p>

          {/* 3 CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="tel:410-519-3131"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-primary-dark shadow-glow transition-all duration-200 hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call Our Store</span>
            </a>

            <Link
              href="/contact-us?service=notary-public"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Send Us a Message</span>
            </Link>

            <a
              href="https://www.google.com/maps/search/?api=1&query=8777+Piney+Orchard+Pkwy+Ste+B+Odenton+MD+21113"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 hover:scale-[1.02]"
            >
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Visit Our Store</span>
              <ExternalLink className="h-3.5 w-3.5 text-white/70" aria-hidden="true" />
            </a>
          </div>

          {/* Business Address & Phone Strip */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              <span>
                <strong>Business Address:</strong> 8777 Piney Orchard Pkwy, Ste B,
                Odenton, MD 21113
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              <span>
                <strong>Phone:</strong> 410-519-3131
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

