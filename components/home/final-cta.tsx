import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import RevealCss from "@components/ui/reveal-css";
import type { HomePageData } from "@/lib/types";

type FinalCtaProps = {
  data?: HomePageData | null;
};

export default function FinalCta({ data }: FinalCtaProps) {
  const eyebrow = data?.finalCtaEyebrow || "Ready To Get Started?";
  const title =
    data?.finalCtaTitle || "Stop By Our Odenton Store or Connect With Us Today";
  const description =
    data?.finalCtaDescription ||
    "From FedEx, UPS, DHL, and USPS shipping to professional packing, document printing, notary, and private mailboxes—our friendly team is here to take care of it all under one roof.";
  const primaryText = data?.finalCtaPrimaryText || "Explore All Services";

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

          {/* Action CTA Button */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF8A00] hover:bg-[#E67A00] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_6px_20px_rgba(255,138,0,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{primaryText}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>
        </RevealCss>
      </div>
    </section>
  );
}
