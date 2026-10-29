import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles, ShieldCheck } from "lucide-react";
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
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-light/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-accent-light backdrop-blur-md">
            {service.iconUrl ? (
              <Image
                src={service.iconUrl}
                alt={service.title}
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain brightness-0 invert"
              />
            ) : (
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span>{finalCta.eyebrow || "Strategic Consultation"}</span>
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
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary-dark shadow-md transition-all duration-200 hover:bg-accent-light hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{finalCta.ctaText}</span>
              <ArrowRight className="h-4 w-4 text-primary-dark transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href={finalCta.secondaryCtaHref || BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Phone className="h-4 w-4 text-accent-light" />
              <span>{finalCta.secondaryCtaText || "Call Us: (410) 519-3131"}</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          {finalCta.trustPoints && finalCta.trustPoints.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75 font-medium">
              {finalCta.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {idx === 0 ? (
                    <ShieldCheck className="h-4 w-4 text-accent" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
