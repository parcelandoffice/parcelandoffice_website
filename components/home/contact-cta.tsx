"use client";

import dynamic from "next/dynamic";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactCtaData } from "@/lib/types";
import RevealCss from "../ui/reveal-css";
import { Mail, PhoneCall, MapPin, Clock, Send } from "lucide-react";
import { BUSINESS, STORE_HOURS } from "@/lib/site-data";

const ReCAPTCHAWidget = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

const DEFAULT_TAG = "Get In Touch";
const DEFAULT_TITLE = "Have Questions About Shipping or Printing?";
const DEFAULT_DESCRIPTION =
  "Contact Parcel & Office Solutions in Odenton, MD. Whether you need an estimate, packing assistance, or notary service, our friendly staff is here to help.";

type ContactCtaProps = {
  contactCtaData?: ContactCtaData | null;
  isContactPage?: boolean;
};

export default function ContactCta({
  contactCtaData,
  isContactPage = false,
}: ContactCtaProps) {
  const [shouldLoadRecaptcha, setShouldLoadRecaptcha] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaResetKey, setRecaptchaResetKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const phoneHref = BUSINESS.phoneHref;
  const tag = contactCtaData?.tag ?? DEFAULT_TAG;
  const title = contactCtaData?.title ?? DEFAULT_TITLE;
  const description = contactCtaData?.description ?? DEFAULT_DESCRIPTION;

  const activeRecaptchaSiteKey =
    shouldLoadRecaptcha && recaptchaSiteKey ? recaptchaSiteKey : null;

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    setRecaptchaResetKey((key) => key + 1);
  };

  const activateRecaptcha = () => {
    if (recaptchaSiteKey) {
      setShouldLoadRecaptcha(true);
    }
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = event.currentTarget.value.replace(
      /(?!^\+)[^\d\s()-]|^\++/g,
      "",
    );
    let digitCount = 0;

    event.currentTarget.value = Array.from(sanitizedValue)
      .filter((character) => {
        if (!/\d/.test(character)) {
          return true;
        }

        if (digitCount >= 10) {
          return false;
        }

        digitCount += 1;
        return true;
      })
      .join("");
  };

  const contactDetails = useMemo(
    () => [
      {
        label: "Call us directly",
        value: BUSINESS.phone,
        href: phoneHref,
        icon: <PhoneCall className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
      },
      {
        label: "Email our team",
        value: BUSINESS.email,
        href: `mailto:${BUSINESS.email}`,
        icon: <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
      },
      {
        label: "Visit our store",
        value: `${BUSINESS.addressLines[0]}, ${BUSINESS.addressLines[2]}`,
        href: BUSINESS.mapHref,
        icon: <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
      },
    ],
    [phoneHref],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    activateRecaptcha();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    if (recaptchaSiteKey && !recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? "General Inquiry"),
      message: String(formData.get("message") ?? ""),
      recaptchaToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send your inquiry.");
      }

      setSubmitted(true);
      resetRecaptcha();
    } catch (submitError) {
      resetRecaptcha();
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to send your inquiry.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface-muted py-16 sm:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <RevealCss direction="right">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            {tag}
          </p>
          {isContactPage ? (
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              {title}
            </h1>
          ) : (
            <div className="font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              {title}
            </div>
          )}

          <p className="mt-4 max-w-md whitespace-pre-line text-base leading-relaxed text-muted">
            {description}
          </p>

          <ul className="mt-8 space-y-4">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <a
                  href={detail.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-on-primary">
                    {detail.icon}
                  </span>
                  <div>
                    <span className="block text-xs font-bold tracking-wide text-muted uppercase">
                      {detail.label}
                    </span>
                    <span className="block font-semibold text-secondary">
                      {detail.value}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </RevealCss>

        <RevealCss
          direction="left"
          className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          {submitted ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Send className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-display mt-5 text-xl font-bold text-secondary">
                Thank you for reaching out
              </h3>
              <p className="mt-2 text-sm text-muted">
                We&rsquo;ve received your message and will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-1 text-xs font-bold text-secondary">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="John"
                    className={fieldClass}
                    onFocus={activateRecaptcha}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 text-xs font-bold text-secondary">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Doe"
                    className={fieldClass}
                    onFocus={activateRecaptcha}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block mb-1 text-xs font-bold text-secondary">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className={fieldClass}
                    onFocus={activateRecaptcha}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 text-xs font-bold text-secondary">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={10}
                    placeholder="410-555-0199"
                    className={fieldClass}
                    onChange={handlePhoneChange}
                    onFocus={activateRecaptcha}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-xs font-bold text-secondary">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your shipping, packing, printing, or notary requirements..."
                  className={`${fieldClass} resize-none`}
                  onFocus={activateRecaptcha}
                />
              </div>

              {activeRecaptchaSiteKey ? (
                <div className="flex justify-center sm:justify-start">
                  <ReCAPTCHAWidget
                    key={recaptchaResetKey}
                    sitekey={activeRecaptchaSiteKey}
                    onChange={(token) => {
                      setRecaptchaToken(token);
                      setError(null);
                    }}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>
              ) : null}

              {error ? (
                <p
                  role="alert"
                  className="rounded-xl border border-primary/30 bg-primary-soft px-4 py-3 text-sm text-primary"
                >
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shine bg-gradient-brand inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-on-primary shadow-[var(--shadow-card)] transition-transform duration-300 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </RevealCss>
      </div>
    </section>
  );
}
