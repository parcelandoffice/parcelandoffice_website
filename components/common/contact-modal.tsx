"use client";

import { useEffect, useRef } from "react";
import { Clock, Mail, MapPin, Phone, X, MessageSquare, ExternalLink } from "lucide-react";
import { BUSINESS, STORE_HOURS } from "@/lib/site-data";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const today = STORE_HOURS[new Date().getDay()];
  const todayHours = today.open ? `${today.open} – ${today.close}` : "Closed today";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-secondary/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-float)] transition-all sm:p-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="contact-modal-title"
                className="font-display text-xl font-extrabold text-foreground"
              >
                Query In Your Mind?
              </h2>
              <p className="text-xs text-muted">
                We&apos;re here to help with all your shipping &amp; office needs
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-1.5 text-muted hover:bg-surface-muted hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Contact Info Grid */}
        <div className="mt-6 space-y-4">
          {/* Mobile / Phone Card */}
          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-muted/60 p-4 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary shadow-xs">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Mobile / Phone Number
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="font-display text-base font-extrabold text-foreground hover:text-primary transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-on-primary transition-colors hover:bg-primary-dark"
            >
              Call Now
            </a>
          </div>

          {/* Email Card */}
          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-muted/60 p-4 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-badge-teal text-on-primary shadow-xs">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Email Address
                </p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="font-display text-sm font-bold text-foreground hover:text-primary transition-colors truncate block"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Send Email
            </a>
          </div>

          {/* Location & Hours summary */}
          <div className="grid grid-cols-1 gap-3 rounded-xl border border-border/80 bg-surface p-4 text-xs sm:grid-cols-2">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-foreground">Odenton Store</p>
                <p className="text-muted leading-tight mt-0.5">
                  {BUSINESS.addressLines[0]}<br />
                  {BUSINESS.addressLines[1]}, {BUSINESS.addressLines[2]}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-foreground">Today&apos;s Hours</p>
                <p className="text-muted leading-tight mt-0.5">{todayHours}</p>
                <a
                  href={BUSINESS.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline mt-1"
                >
                  Get Directions
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end border-t border-border pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border bg-surface px-5 py-2 text-xs font-bold text-muted hover:bg-surface-muted hover:text-foreground transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
