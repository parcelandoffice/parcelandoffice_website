import React from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Bring Your Item",
    description:
      "Visit our store with the item you need packed and explain your shipping or packaging requirements.",
  },
  {
    step: "02",
    title: "Review Packing Options",
    description:
      "Discuss suitable materials, package dimensions, handling needs, and estimated packing costs.",
  },
  {
    step: "03",
    title: "Prepare Your Package",
    description:
      "Our team assists with the agreed packing service, using appropriate materials based on the item and service selected.",
  },
  {
    step: "04",
    title: "Arrange Shipping",
    description:
      "Explore available carrier services and shipping options for your prepared package.",
  },
];

export default function PackingProcess() {
  return (
    <section aria-labelledby="packing-process-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>OUR PROCESS</span>
          </div>

          <h2
            id="packing-process-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Get Your Package Ready in Four Simple Steps
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
            Experience straightforward, professional packing assistance from our
            trained specialists at our Odenton center.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/90 bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Step Header with Circle & Tag */}
                <div className="flex items-center justify-between gap-2 border-b border-border/70 pb-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-display text-base font-black shadow-2xs group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-200">
                    {item.step}
                  </span>

                  <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary">
                    Stage {item.step}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-display mt-5 text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-muted font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Step Indicator */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-bold text-primary group-hover:text-accent transition-colors">
                <span>Step {index + 1} of 4</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

