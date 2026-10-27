"use client";

import type { HomeFaqItem } from "@/lib/types";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import RevealCss from "../ui/reveal-css";

const defaultFaqs: HomeFaqItem[] = [
  {
    question: "Which shipping carriers can I use at Parcel & Office Solutions?",
    answer:
      "We are an authorized shipping outlet offering services for FedEx, UPS, DHL Express, and the US Postal Service (USPS). You can compare delivery speeds, shipping rates, and drop off packages for all four major carriers in one convenient stop.",
  },
  {
    question: "Can I drop off pre-paid and pre-labeled packages here?",
    answer:
      "Yes! We gladly accept pre-paid and pre-labeled drop-offs for FedEx, UPS, DHL, and USPS. Simply bring your securely packaged, labeled box to our counter, and our associates will scan it and provide you with an official drop-off receipt.",
  },
  {
    question: "Do you offer professional packing services and packaging supplies?",
    answer:
      "Absolutely. We carry an extensive selection of corrugated boxes, padded bubble mailers, mailing tubes, bubble wrap, packing peanuts, and heavy-duty carton sealing tape. If you prefer, our certified packing experts can professionally pack your eligible items for you.",
  },
  {
    question: "Do I need an appointment for Notary Public services?",
    answer:
      "No appointment is necessary. We offer licensed Notary Public services on a walk-in basis during our regular business hours. Please bring a valid government-issued photo ID (driver's license, passport, or military ID) and your unsigned documents.",
  },
  {
    question: "Where is your store located and what are your operating hours?",
    answer:
      "We are located at 8777 Piney Orchard Parkway, Suite B, in Odenton, MD 21113—directly beside Food Lion Supermarket with ample free storefront parking. We are open Monday through Friday from 9:30 AM to 6:30 PM, and Saturday from 10:00 AM to 3:30 PM (Closed Sundays).",
  },
  {
    question: "How does private mailbox rental work with packages?",
    answer:
      "Our private mailbox rental provides you with a real physical street address (not a P.O. Box), allowing you to receive mail and packages from all carriers, including FedEx, UPS, DHL, USPS, and Amazon, with secure holding and arrival notifications.",
  },
];

type FaqProps = {
  faqTag?: string;
  faqTitle?: string;
  faqDescription?: string;
  faqCtaButtonText?: string;
  faqs?: HomeFaqItem[];
};

export default function Faq({
  faqTag = "Help & Answers",
  faqTitle = "Frequently Asked Questions",
  faqDescription = "Got questions about drop-offs, pickup deadlines, packing supplies, or private mailbox rentals? Here is what you need to know:",
  faqs = defaultFaqs,
}: FaqProps) {
  const items = faqs?.length ? faqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header - Same UI as Service Detail Page */}
        <RevealCss className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{faqTag}</span>
          </div>

          <h2
            id="faq-heading"
            className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl"
          >
            {faqTitle}
          </h2>

          {faqDescription && (
            <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
              {faqDescription}
            </p>
          )}
        </RevealCss>

        {/* Accordion FAQ Cards - Same UI as Service Detail Page */}
        <RevealCss className="mt-10 sm:mt-12 space-y-3.5">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const questionId = `faq-question-${idx}`;
            const answerId = `faq-answer-${idx}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
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
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                        isOpen
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
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
        </RevealCss>
      </div>
    </section>
  );
}
