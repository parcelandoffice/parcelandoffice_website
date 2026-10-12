"use client";

import { ArrowRight, Search } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { TRACKING_CARRIERS } from "@/lib/site-data";
import { CarrierLogo } from "@components/common/carrier-logos";

type Carrier = (typeof TRACKING_CARRIERS)[number]["id"];

export default function TrackingForm({
  variant = "section",
}: {
  variant?: "hero" | "section";
}) {
  const inputId = useId();
  const [carrier, setCarrier] = useState<Carrier>("fedex");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const isHero = variant === "hero";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = number.trim();

    if (trimmed.length < 6) {
      setError("Please enter a valid tracking number.");
      return;
    }

    setError("");
    const selected = TRACKING_CARRIERS.find((item) => item.id === carrier)!;
    window.open(
      `${selected.url}${encodeURIComponent(trimmed)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Carrier Selection with Authentic Logos and Theme Primary & Highlight colors */}
      <div
        role="radiogroup"
        aria-label="Select carrier"
        className="flex flex-wrap gap-2.5"
      >
        {TRACKING_CARRIERS.map((item) => {
          const active = item.id === carrier;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setCarrier(item.id)}
              className={`group inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-extrabold tracking-wide transition-all duration-200 cursor-pointer ${
                active
                  ? "border-primary bg-primary text-white shadow-sm ring-2 ring-accent"
                  : "border-border bg-surface text-foreground hover:border-primary/50 hover:bg-surface-muted hover:text-primary"
              }`}
            >
              <div className="flex h-5 items-center justify-center rounded bg-white px-1.5 shadow-2xs">
                <CarrierLogo carrier={item.id} className="h-3.5 max-w-[48px] w-auto object-contain" />
              </div>
              <span>{item.label}</span>
              {active && (
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      <div
        className="mt-3.5 flex flex-col gap-2 rounded-2xl border border-border bg-surface p-1.5 shadow-[var(--shadow-card)] focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/25 sm:flex-row transition-all"
      >
        <label htmlFor={inputId} className="sr-only">
          Tracking number
        </label>
        <div className="flex flex-1 items-center gap-2 px-3">
          <Search className="h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
          <input
            id={inputId}
            type="text"
            inputMode="text"
            autoComplete="off"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            placeholder="Enter your tracking number (FedEx, UPS, DHL, USPS)"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className="h-12 w-full min-w-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-dark px-7 text-sm font-extrabold text-primary-dark transition-all duration-200 hover:shadow-md active:scale-95 shadow-xs shadow-accent/25 cursor-pointer"
        >
          <span>Track Package</span>
          <ArrowRight className="h-4 w-4 text-primary-dark" aria-hidden="true" />
        </button>
      </div>

      {error ? (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="mt-2 text-xs font-semibold text-accent"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
