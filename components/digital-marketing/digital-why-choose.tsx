import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Target,
  Sparkles,
  ArrowRight,
  Layers,
  BarChart2,
} from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalWhyChooseProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalWhyChoose({ service }: DigitalWhyChooseProps) {
  const whyChooseUs = service.whyChooseUs;
  if (!whyChooseUs || !whyChooseUs.points || whyChooseUs.points.length === 0) return null;

  return (
    <section id="why-choose-us" className="bg-surface py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Value Proposition Banner (5 Cols) */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-black uppercase tracking-wider text-accent">
              {whyChooseUs.eyebrow}
            </span>

            <h2 className="font-display mt-2.5 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
              {whyChooseUs.heading}
            </h2>

            {whyChooseUs.subtitle && (
              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                {whyChooseUs.subtitle}
              </p>
            )}

            {/* Visual Value Highlight Card */}
            <div className="mt-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary-dark to-secondary p-7 text-white shadow-xl shadow-primary/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    Built for Real-World ROI
                  </h4>
                  <p className="text-xs text-white/80">
                    No vanity metrics. Every campaign is tied to business growth.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-accent-light font-bold">100% Transparency</span>
                <span className="text-white/80">Monthly Strategy Reports</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact-us?service=social-media-marketing"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 active:scale-[0.98]"
              >
                <span>Request a Custom Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Pillars / Why Choose Cards (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {whyChooseUs.points.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-surface-muted/40 p-5 transition-all duration-200 hover:border-accent/40 hover:bg-surface hover:shadow-xs"
                >
                  {/* Custom Numbered Check Icon */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary font-bold text-xs transition-colors group-hover:bg-primary group-hover:text-accent mt-0.5">
                    0{index + 1}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent opacity-75 group-hover:opacity-100 transition-opacity stroke-[2.5]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
