"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function ServiceFaq({ service }: { service: ServiceDetail }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  if (!service.faqs || service.faqs.length === 0) return null;

  const eyebrow = service.faqEyebrow || "Help & Answers";
  const heading = service.faqHeading || "Frequently Asked Questions";
  const description =
    service.faqDescription ||
    "Got questions about drop-offs, pickup deadlines, or boxes? Here is what you need to know:";

  return (
    <section id="faqs" aria-labelledby="service-faq-heading" className="mt-10 sm:mt-18 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <HelpCircle className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>

        <h2
          id="service-faq-heading"
          className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl"
        >
          {heading}
        </h2>

        {description && (
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Accordion FAQ Items */}
      <div className="mt-10 sm:mt-12 space-y-3.5">
        {service.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const questionId = `service-faq-question-${idx}`;
          const answerId = `service-faq-answer-${idx}`;

          return (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                ? "border-primary/40 bg-surface shadow-[var(--shadow-card)]"
                : "border-border/80 bg-surface hover:border-accent/40"
                }`}
            >
              <button
                type="button"
                id={questionId}
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${isOpen
                      ? "bg-accent text-white"
                      : "bg-primary-soft text-primary"
                      }`}
                  >
                    Q
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-primary-dark">
                    {faq.question}
                  </span>
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border/60 px-6 pt-4 pb-6 text-sm sm:text-base leading-relaxed text-muted font-normal pl-16">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
