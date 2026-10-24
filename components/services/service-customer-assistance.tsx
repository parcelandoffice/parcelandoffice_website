"use client";

import type { ServiceDetail } from "@/lib/service-details";
import { BUSINESS, STORE_HOURS } from "@/lib/site-data";
import {
  Calculator,
  HelpCircle,
  MessageSquare,
  Phone
} from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const ReCAPTCHAWidget = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

export default function ServiceCustomerAssistance({
  service,
}: {
  service?: ServiceDetail;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaResetKey, setRecaptchaResetKey] = useState(0);

  const formRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToForm = (prefillMessage?: string) => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (prefillMessage && messageInputRef.current) {
      messageInputRef.current.value = prefillMessage;
    }
    setTimeout(() => {
      messageInputRef.current?.focus();
    }, 400);
  };


  return (
    <section className="mt-12 rounded-3xl border border-border/80 bg-gradient-to-b from-surface via-surface to-surface-muted/40 p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Header with Badge, H2 Title, Subtitle */}
      <div className="border-b border-border/80 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Customer Assistance</span>
        </div>

        <h2 className="font-display mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {service?.customerAssistanceTitle || "Customer Assistance"}
        </h2>

        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Need help preparing an international shipment, understanding customs paperwork, or comparing available delivery options? Contact our team or visit our store in Odenton, MD.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md cursor-pointer"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Call Our Store</span>
          </a>

          <button
            type="button"
            onClick={() => scrollToForm()}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-surface px-5 py-3 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
            <span>Send Us a Message</span>
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToForm(
                "I would like to get a DHL shipping quote. Destination and package details: "
              )
            }
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/15 px-5 py-3 text-sm font-bold text-primary-dark transition-all duration-200 hover:bg-accent/25 hover:border-accent cursor-pointer"
          >
            <Calculator className="h-4 w-4 text-primary-dark transition-transform group-hover:rotate-12" />
            <span>Get a DHL Shipping Quote</span>
          </button>
        </div>
      </div>


    </section>
  );
}
