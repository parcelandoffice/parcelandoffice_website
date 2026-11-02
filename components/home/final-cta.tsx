import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import RevealCss from "@components/ui/reveal-css";
import type { HomePageData } from "@/lib/types";

type FinalCtaProps = {
  data?: HomePageData | null;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export default function FinalCta({
  data,
  eyebrow: customEyebrow,
  title: customTitle,
  description: customDescription,
  primaryText: customPrimaryText,
  primaryHref: customPrimaryHref,
  secondaryText: customSecondaryText,
  secondaryHref: customSecondaryHref,
}: FinalCtaProps) {
  const eyebrow = customEyebrow || data?.finalCtaEyebrow || "Ready To Get Started?";
  const title =
    customTitle ||
    data?.finalCtaTitle ||
    "Stop By Our Odenton Store or Connect With Us Today";
  const description =
    customDescription ||
    data?.finalCtaDescription ||
    "From FedEx, UPS, DHL, and USPS shipping to professional packing, document printing, notary, and private mailboxes—our friendly team is here to take care of it all under one roof.";
  const primaryText = customPrimaryText || data?.finalCtaPrimaryText || "Explore All Services";
  const primaryHref = customPrimaryHref || "/#services";
  const secondaryText = customSecondaryText;
  const secondaryHref = customSecondaryHref;

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
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span className="text-accent font-extrabold tracking-wider">
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-dark px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_6px_20px_rgba(242,77,2,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{primaryText}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>

            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{secondaryText}</span>
              </Link>
            )}
          </div>
        </RevealCss>
      </div>
    </section>
  );
}
