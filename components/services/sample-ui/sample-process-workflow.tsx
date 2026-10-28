import React from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function SampleProcessWorkflow({
  service,
}: {
  service: ServiceDetail;
}) {
  const label = service.processLabel || "HOW IT WORKS";
  const title = service.processTitle || "Our Simple Four-Step In-Store Process";
  const subtitle =
    service.processSubtitle ||
    "Fast, accurate, and completely stress-free service from our certified team in Odenton.";

  const defaultSteps = [
    {
      step: "01",
      title: "Visit Our Odenton Store",
      description: "Conveniently located beside Food Lion on Piney Orchard Parkway with plenty of free parking.",
    },
    {
      step: "02",
      title: "Consultation & Review",
      description: "Our experienced staff reviews your specific requirements, documents, or items to be handled.",
    },
    {
      step: "03",
      title: "Precision Execution",
      description: "We perform the service on commercial-grade equipment to meet strict quality and compliance standards.",
    },
    {
      step: "04",
      title: "Verified Receipt & Hand-Off",
      description: "Receive your completed documents, tracking confirmation, or official receipt immediately.",
    },
  ];

  const steps = service.processSteps && service.processSteps.length > 0 ? service.processSteps : defaultSteps;

  return (
    <section aria-labelledby="sample-process-heading" className="mt-14 sm:mt-18 relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{label}</span>
          </div>

          <h2
            id="sample-process-heading"
            className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((st, i) => (
            <div
              key={st.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-muted/50 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xs font-black text-white shadow-2xs group-hover:bg-accent group-hover:text-primary-dark transition-colors">
                    {st.step}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block h-4 w-4 text-muted/40 group-hover:text-accent transition-colors" />
                  )}
                </div>

                <h3 className="font-display mt-4 text-base font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                  {st.title}
                </h3>

                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted font-medium">
                  {st.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-bold text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Step {st.step} Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
