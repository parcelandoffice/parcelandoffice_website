import React from "react";
import {
  Sparkles,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const CHECKLIST_ITEMS = [
  "The complete document requiring notarization",
  "Acceptable, current identification as required by Maryland law",
  "Any instructions provided by the receiving organization",
  "All required signers, when their presence is necessary",
];

export default function NotaryRequirements() {
  return (
    <section aria-labelledby="notary-checklist-heading" className="relative">
      <div className="rounded-3xl border border-border/90 bg-gradient-to-b from-surface via-surface-muted/30 to-surface p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs">
        {/* Subtle decorative background gradient */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-3xl rounded-full bg-primary-soft/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>WHAT TO BRING FOR NOTARIZATION</span>
            </div>

            <h2
              id="notary-checklist-heading"
              className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
            >
              Prepare Your Documents Before Visiting
            </h2>
          </div>

          {/* 4 Checklist Items Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CHECKLIST_ITEMS.map((item, index) => (
              <div
                key={item}
                className="group flex items-start gap-3.5 rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary font-bold text-sm transition-colors group-hover:bg-primary group-hover:text-white mt-0.5">
                  0{index + 1}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-bold text-primary-dark leading-snug">
                    {item}
                  </p>
                </div>

                <CheckCircle2
                  className="h-5 w-5 text-primary shrink-0 stroke-[2.2] mt-0.5"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* Advisory Notice Box */}
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent-soft/40 p-5 sm:p-6">
            <div className="flex items-start gap-3.5">
              <AlertCircle
                className="h-5 w-5 text-accent-dark shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                Do not sign the document in advance if the notary or receiving
                organization requires signing in the notary&apos;s presence. Notaries
                cannot provide legal advice or determine whether a document is
                legally appropriate for your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

