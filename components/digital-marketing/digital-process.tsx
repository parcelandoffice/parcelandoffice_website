import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalProcessProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalProcess({ service }: DigitalProcessProps) {
  const process = service.process;
  if (!process || !process.steps || process.steps.length === 0) return null;

  return (
    <section id="process" className="bg-surface py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{process.eyebrow}</span>
          </div>

          <h2 className="font-display mt-3.5 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[40px]">
            {process.heading}
          </h2>

          {process.subtitle && (
            <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              {process.subtitle}
            </p>
          )}
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 relative">
          {process.steps.map((stepItem, index) => {
            const isLast = index === process.steps.length - 1;

            return (
              <div
                key={stepItem.step}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-muted/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface hover:shadow-[var(--shadow-card-hover)]"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-2xl sm:text-3xl font-black text-accent tracking-tight group-hover:scale-105 transition-transform duration-200">
                      {stepItem.step}
                    </span>
                    {!isLast && (
                      <span className="hidden lg:block text-muted-light/40 group-hover:text-accent transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Bottom Step Status Indicator */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-bold text-muted uppercase tracking-wider">
                    Stage {stepItem.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
