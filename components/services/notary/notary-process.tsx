import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Confirm the Document",
    description:
      "Check what type of notarization the receiving organization requires.",
  },
  {
    step: "02",
    title: "Check Availability",
    description:
      "Contact the store about the service and appointment requirements.",
  },
  {
    step: "03",
    title: "Bring Identification",
    description:
      "Bring acceptable identification and the complete document.",
  },
  {
    step: "04",
    title: "Complete the Notarial Act",
    description:
      "Follow the notary's instructions and applicable legal requirements.",
  },
];

export default function NotaryProcess() {
  return (
    <section aria-labelledby="notary-process-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>HOW OUR NOTARY PROCESS WORKS</span>
          </div>

          <h2
            id="notary-process-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Get Ready for Your Notary Appointment
          </h2>
        </div>

        {/* 4 Process Step Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/90 bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:bg-surface-muted/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between gap-2 border-b border-border/70 pb-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-display text-base font-black shadow-2xs group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-200">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary">
                    Step {index + 1}
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
                <span>Stage {item.step} of 04</span>
                <ArrowRight
                  className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

