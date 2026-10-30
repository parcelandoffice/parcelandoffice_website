import React from "react";
import {
  Users,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface UseCaseGroup {
  id: string;
  category: string;
  description: string;
  icon: React.ElementType;
  items: string[];
}

const USE_CASE_GROUPS: UseCaseGroup[] = [
  {
    id: "personal",
    category: "Personal & Family",
    description:
      "Printing and document services for everyday personal, educational, and administrative requirements.",
    icon: Users,
    items: [
      "Personal records and applications",
      "School and educational documents",
      "Forms and correspondence",
      "Copies of eligible personal paperwork",
    ],
  },
  {
    id: "business",
    category: "Small Business & Corporate",
    description:
      "Printing solutions for business communication, daily operations, and promotional activities.",
    icon: Building2,
    items: [
      "Business documents and reports",
      "Marketing and promotional materials",
      "Business cards and brochures",
      "Office paperwork and company handouts",
    ],
  },
];

export default function PrintingCommonUses() {
  return (
    <section aria-labelledby="common-uses-heading" className="relative">
      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>WHAT WE PRINT</span>
          </div>

          <h2
            id="common-uses-heading"
            className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
          >
            Common Uses for Print &amp; Document Services
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
            From personal paperwork to business communication, our printing and
            document solutions support a variety of needs across Odenton and the
            surrounding communities.
          </p>
        </div>

        {/* 2-Column Split Cards with Listing Style */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {USE_CASE_GROUPS.map((group) => {
            const GroupIcon = group.icon;
            const isBusiness = group.id === "business";

            return (
              <div
                key={group.id}
                className={`group relative rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
                  isBusiness
                    ? "border-primary/30 bg-gradient-to-br from-surface via-primary-soft/10 to-surface shadow-xs hover:border-primary/50"
                    : "border-border/90 bg-gradient-to-br from-surface via-surface-muted/40 to-surface shadow-xs hover:border-primary/40"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 border-b border-border/70 pb-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-2xs group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-200">
                    <GroupIcon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-primary-dark">
                    {group.category}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="mt-4 text-xs sm:text-sm text-muted font-normal leading-relaxed">
                  {group.description}
                </p>

                {/* Listing Items: Clean, simple, using the single same icon */}
                <ul className="mt-6 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/80 px-4 py-3 transition-all duration-200 hover:border-primary/40 hover:bg-surface hover:shadow-2xs"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-primary shrink-0 stroke-[2.2]"
                        aria-hidden="true"
                      />
                      <span className="text-xs sm:text-sm font-bold text-primary-dark">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

