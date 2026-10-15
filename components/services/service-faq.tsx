"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function ServiceFaq({ service }: { service: ServiceDetail }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  if (!service.faqs || service.faqs.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-black uppercase tracking-wider text-accent">
          Help &amp; Answers
        </span>
        <h2 className="font-display text-2xl font-black tracking-tight text-primary-dark sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-muted">
          Got questions about drop-offs, pickup deadlines, or boxes? Here is what you need to know:
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {service.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const answerId = `service-faq-answer-${idx}`;
          const questionId = `service-faq-question-${idx}`;

          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border transition-colors duration-500 ease-in-out ${
                isOpen
                  ? "border-primary/40 bg-surface shadow-xs"
                  : "border-border bg-surface-muted/30 hover:border-border/80"
              }`}
            >
              <button
                type="button"
                id={questionId}
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-primary-dark cursor-pointer transition-colors hover:text-primary"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary text-xs font-black">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform duration-500 ease-in-out ${
                    isOpen ? "rotate-180 text-accent" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`faq-accordion-grid ${isOpen ? "open" : ""}`}
              >
                <div className="faq-accordion-inner">
                  <div className="border-t border-border/60 bg-surface px-5 pb-4 pt-3 text-xs sm:text-sm leading-relaxed text-muted font-medium">
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
