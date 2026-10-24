import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/site-data";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalCtaProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalCta({ service }: DigitalCtaProps) {
  const finalCta = service.finalCta;
  if (!finalCta) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary py-16 sm:py-20 lg:py-24 text-white">
      {/* Decorative Background Elements */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-light/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-accent-light backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Strategic Consultation</span>
          </div>

          {/* Heading */}
          <h2 className="font-display mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            {finalCta.heading}
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            {finalCta.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={finalCta.ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/30 transition-all duration-200 hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{finalCta.ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-[0.98]"
            >
              <Phone className="h-4 w-4 text-accent-light" />
              <span>Call Us: (410) 519-3131</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>No Obligation Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Customized Multi-Platform Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Local Support in Odenton, MD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
