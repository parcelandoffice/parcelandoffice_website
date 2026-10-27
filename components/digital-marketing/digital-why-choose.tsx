import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
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
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{whyChooseUs.eyebrow}</span>
            </div>

            <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
              {whyChooseUs.heading}
            </h2>

            {whyChooseUs.subtitle && (
              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                {whyChooseUs.subtitle}
              </p>
            )}


            <div className="mt-8">
              <Link
                href={`/contact-us?service=${service.slug}`}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request a Custom Proposal</span>
                <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2-Column Cards Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.points.map((point, index) => {
                const isLastOdd =
                  whyChooseUs.points.length % 2 !== 0 &&
                  index === whyChooseUs.points.length - 1;

                return (
                  <div
                    key={index}
                    className={`group flex items-start gap-3.5 rounded-2xl border border-border/80 bg-surface-muted/40 p-4 sm:p-5 transition-all duration-200 hover:border-accent hover:bg-surface hover:shadow-xs ${
                      isLastOdd ? "sm:col-span-2" : ""
                    }`}
                  >
                    {/* Custom Numbered Check Icon */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary font-bold text-xs transition-colors group-hover:bg-primary group-hover:text-accent mt-0.5">
                      0{index + 1}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                        {point.description}
                      </p>
                    </div>

                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent opacity-75 group-hover:opacity-100 transition-opacity stroke-[2.5] mt-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
