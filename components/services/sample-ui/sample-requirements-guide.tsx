import React from "react";
import { ClipboardCheck, CheckCircle2, AlertTriangle, FileText, ShieldAlert } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function SampleRequirementsGuide({
  service,
}: {
  service: ServiceDetail;
}) {
  const title =
    service.checklistTitle ||
    service.requirementsTitle ||
    "What You Need to Bring / Prepare";
  const subtitle =
    service.checklistSubtitle ||
    service.requirementsSubtitle ||
    "Please review these prerequisites before your visit to ensure a fast, seamless service.";

  const items =
    service.checklistItems ||
    (service.requirementsItems
      ? service.requirementsItems.map((r) => ({
          title: r.title,
          description: r.description,
          required: true,
        }))
      : null);

  if (!items || items.length === 0) return null;

  return (
    <section aria-labelledby="requirements-guide-heading" className="mt-14 sm:mt-18 relative">
      <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-6 sm:p-8 lg:p-10 text-white shadow-[var(--shadow-card)]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-accent">
            <ClipboardCheck className="h-3.5 w-3.5" />
            <span>CHECKLIST &amp; REQUIREMENTS</span>
          </div>

          <h2
            id="requirements-guide-heading"
            className="font-display mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Requirements Checklist Cards */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur-md transition-all hover:bg-white/15"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-primary-dark font-black text-xs">
                {idx + 1}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                  {item.required && (
                    <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-accent">
                      Required
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
