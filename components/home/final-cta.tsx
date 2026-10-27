import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { BUSINESS } from "@/lib/site-data";
import RevealCss from "@components/ui/reveal-css";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#091B36] via-[#0B2040] to-[#07152B] py-16 sm:py-20 lg:py-24 text-white">
      {/* Decorative Background Elements */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#FFA726]" aria-hidden="true" />
            <span className="text-[#FFA726] font-extrabold tracking-wider">
              Ready To Get Started?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Stop By Our Odenton Store or Connect With Us Today
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            From FedEx, UPS, DHL, and USPS shipping to professional packing, document printing, notary, and private mailboxes—our friendly team is here to take care of it all under one roof.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF8A00] hover:bg-[#E67A00] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_6px_20px_rgba(255,138,0,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-[#162E52]/90 hover:bg-[#1E3B68] px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer backdrop-blur-sm"
            >
              <Phone className="h-4 w-4 text-[#FFA726]" />
              <span>Call Us: (410) 519-3131</span>
            </a>

            <a
              href={BUSINESS.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-[#162E52]/90 hover:bg-[#1E3B68] px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer backdrop-blur-sm"
            >
              <MapPin className="h-4 w-4 text-[#FFA726]" />
              <span>Get Directions</span>
              <ExternalLink className="h-3.5 w-3.5 text-white/70" />
            </a>
          </div>
        </RevealCss>
      </div>
    </section>
  );
}
