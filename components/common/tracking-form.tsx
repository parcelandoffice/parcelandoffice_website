"use client";

import { ArrowRight, Search } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { TRACKING_CARRIERS } from "@/lib/site-data";

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
      <div
        role="radiogroup"
        aria-label="Select carrier"
        className="flex flex-wrap gap-2"
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
              className={`rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 ${
                active
                  ? "border-primary bg-primary text-on-primary shadow-xs"
                  : "border-border bg-surface text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        className="mt-3 flex flex-col gap-2 rounded-2xl border border-border bg-surface p-1.5 shadow-[var(--shadow-card)] focus-within:border-primary sm:flex-row"
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
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-bold text-on-primary transition-all duration-200 hover:bg-primary-dark active:scale-95 shadow-xs"
        >
          Track Package
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
