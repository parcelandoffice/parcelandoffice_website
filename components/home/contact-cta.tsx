"use client";

import dynamic from "next/dynamic";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactCtaData } from "@/lib/types";
import RevealCss from "../ui/reveal-css";
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  Send,
  Printer,
  Copy,
  Check,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Truck,
  MessageSquare,
  Navigation,
} from "lucide-react";
import { BUSINESS, SITE_NAME, STORE_HOURS } from "@/lib/site-data";
import Link from "next/link";

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
  const [faxCopied, setFaxCopied] = useState(false);

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

  const handleCopyFax = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(BUSINESS.fax);
      setFaxCopied(true);
      setTimeout(() => setFaxCopied(false), 2000);
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

  // Determine current day for hours highlight
  const currentDayIndex = new Date().getDay();
  const currentDaySchedule = STORE_HOURS[currentDayIndex];

  // Reusable Contact Form with reCAPTCHA
  const formContent = (
    <>
      {submitted ? (
        <div className="flex h-full min-h-72 flex-col items-center justify-center text-center p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary shadow-xs">
            <Send className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="font-display mt-5 text-xl font-bold text-secondary">
            Thank you for reaching out
          </h3>
          <p className="mt-2 text-sm text-muted max-w-sm">
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
            <div className="flex justify-center sm:justify-start max-w-full overflow-hidden">
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
    </>
  );

  // If this is the dedicated Contact Us page, render the full themed page layout
  if (isContactPage) {
    return (
      <div className="bg-surface text-foreground">
        {/* 1. Header Banner & Breadcrumbs */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-muted via-surface-muted/60 to-surface py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-1.5 text-xs text-muted">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-light/60" aria-hidden="true" />
                </li>
                <li>
                  <span className="font-bold text-primary" aria-current="page">
                    Contact Us
                  </span>
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                  {tag} • We&apos;re Here To Help
                </span>
              </div>

              {/* Page Name & Company Name */}
              <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
                Contact Us
              </h1>

              {/* <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted">
                Have questions about package tracking, shipping rates, notary services, mailbox
                rentals, or printing? Connect directly with the team at{" "}
                <strong className="text-secondary font-bold">{SITE_NAME}</strong> in Odenton, MD.
              </p> */}

              {/* Quick Perks / Trust Indicators */}
              {/* <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-secondary">
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 shadow-2xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span>FedEx, UPS, DHL &amp; USPS Authorized</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 shadow-2xs">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span>Open 6 Days a Week</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 shadow-2xs">
                  <Navigation className="h-3.5 w-3.5 text-success" />
                  <span>Beside Food Lion Supermarket</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* 2. Key Contact Cards Grid (Address, Fax, Phone, Email, Store Hours) */}
        <section className="relative -mt-6 sm:-mt-8 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Address & Company Name */}
            <div className="group rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-2xs transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(255,140,0,0.35)]">
                    <MapPin className="h-5 w-5 transition-transform duration-300" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    Location
                  </span>
                </div>
                <span className="block text-xs font-bold text-accent uppercase tracking-wider">
                  {SITE_NAME}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-secondary">
                  Store Address
                </h3>
                <address className="not-italic mt-2 text-xs text-muted leading-relaxed">
                  <span className="block font-medium text-foreground">{BUSINESS.addressLines[0]}</span>
                  <span className="block">{BUSINESS.addressLines[1]}</span>
                  <span className="block">{BUSINESS.addressLines[2]}</span>
                </address>
              </div>

              <a
                href={BUSINESS.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 2: Phone & Fax Number */}
            <div className="group rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-2xs transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(255,140,0,0.35)]">
                    <PhoneCall className="h-5 w-5 transition-transform duration-300" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    Phone &amp; Fax
                  </span>
                </div>
                <span className="block text-xs font-bold text-muted uppercase tracking-wider">
                  Call or Fax
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-secondary">
                  Direct Inquiries
                </h3>

                <div className="mt-2 space-y-2 text-xs">
                  <div>
                    <span className="text-[11px] font-semibold text-muted block">Phone Number:</span>
                    <a
                      href={phoneHref}
                      className="font-bold text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>

                  <div className="pt-1 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-muted block">Fax Number:</span>
                      <span className="font-bold text-foreground text-sm flex items-center gap-1.5">
                        <Printer className="h-3.5 w-3.5 text-muted" />
                        {BUSINESS.fax}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyFax}
                      aria-label="Copy Fax Number"
                      className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-muted px-2 py-1 text-[11px] font-semibold text-secondary hover:bg-surface-subtle transition-colors cursor-pointer"
                    >
                      {faxCopied ? (
                        <>
                          <Check className="h-3 w-3 text-success" />
                          <span className="text-success">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-border/60">
                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-whatsapp hover:brightness-110 transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp: (410) 519-3131</span>
                </a>
              </div>
            </div>

            {/* Card 3: Email Address */}
            <div className="group rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-2xs transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(255,140,0,0.35)]">
                    <Mail className="h-5 w-5 transition-transform duration-300" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    Email
                  </span>
                </div>
                <span className="block text-xs font-bold text-muted uppercase tracking-wider">
                  Electronic Mail
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-secondary">
                  Customer Support
                </h3>
                <div className="mt-2 text-xs">
                  <span className="text-[11px] font-semibold text-muted block mb-0.5">
                    Official Email Address:
                  </span>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="font-bold text-primary break-all hover:text-accent transition-colors"
                  >
                    {BUSINESS.email}
                  </a>
                  <p className="mt-2 text-[11px] text-muted leading-relaxed">
                    Send files for printing, request shipping quotes, or ask about mailbox rentals.
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors"
              >
                <span>Write to Us</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 4: Store Hours */}
            <div className="group rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-2xs transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(255,140,0,0.35)]">
                    <Clock className="h-5 w-5 transition-transform duration-300" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success uppercase">
                    {currentDaySchedule?.open ? "Open Today" : "Closed Today"}
                  </span>
                </div>
                <span className="block text-xs font-bold text-muted uppercase tracking-wider">
                  Store Hours
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-secondary">
                  Operating Schedule
                </h3>

                <div className="mt-2 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-foreground font-medium">
                    <span className="text-muted">Mon – Fri:</span>
                    <span className="font-bold">9:30 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground font-medium">
                    <span className="text-muted">Saturday:</span>
                    <span className="font-bold">10:00 AM – 3:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground font-medium">
                    <span className="text-muted">Sunday:</span>
                    <span className="font-bold text-muted-light">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-border/60">
                <span className="text-[11px] font-semibold text-accent block">
                  Today ({currentDaySchedule.short}):{" "}
                  {currentDaySchedule.open
                    ? `${currentDaySchedule.open} – ${currentDaySchedule.close}`
                    : "Closed"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Main Section: Google Map on Left, Contact Us Form on Right */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
              {/* Left Column: Google Map Card with Proper Alignment */}
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-accent">
                      Store Location
                    </span>
                    <a
                      href={BUSINESS.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* <h2 className="font-display mt-1 text-2xl font-black tracking-tight text-secondary sm:text-3xl">
                    Visit Our Odenton Store
                  </h2> */}

                  {/* <p className="mt-2 text-sm leading-relaxed text-muted">
                    Located conveniently inside Piney Orchard Marketplace right beside{" "}
                    <strong className="text-foreground font-semibold">Food Lion Supermarket</strong>.
                    Ample free storefront customer parking available directly out front.
                  </p> */}

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-muted px-3 py-1.5 font-semibold text-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span>{BUSINESS.addressLines[0]}, {BUSINESS.addressLines[2]}</span>
                    </span>
                  </div>
                </div>

                {/* Embedded Interactive Google Map with matched height */}
                <div className="mt-6 flex-1 min-h-[360px] sm:min-h-[420px] w-full overflow-hidden rounded-2xl border border-border shadow-xs">
                  <iframe
                    title="Parcel & Office Solutions Odenton Store Map"
                    src="https://maps.google.com/maps?q=8777+Piney+Orchard+Pkwy+Ste+B,+Odenton,+MD+21113&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[360px] sm:min-h-[420px]"
                  />
                </div>
              </div>

              {/* Right Column: Contact Us Form with reCAPTCHA (already integrated code preserved) */}
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)]">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-accent">
                    Direct Inquiry Form
                  </span>
                  <h2 className="font-display mt-1 text-2xl font-black tracking-tight text-secondary sm:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Have a question or need a quote? Complete the form below and our team at{" "}
                    <strong className="text-foreground font-semibold">{SITE_NAME}</strong> will get
                    back to you as soon as possible.
                  </p>
                </div>

                <div className="mt-6">
                  {/* Contact Us Form with reCAPTCHA (Already integrated code preserved) */}
                  {formContent}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Standard Compact CTA Section for Home, About, Blog pages
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
          <div className="font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            {title}
          </div>

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
          {formContent}
        </RevealCss>
      </div>
    </section>
  );
}
