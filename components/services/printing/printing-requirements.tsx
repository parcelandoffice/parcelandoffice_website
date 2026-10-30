import React from "react";
import {
  Sparkles,
  FolderOpen,
  Sliders,
  Briefcase,
  Copy,
  CheckCircle2,
} from "lucide-react";

interface RequirementGroup {
  id: string;
  title: string;
  icon: React.ElementType;
  points: string[];
}

const REQUIREMENT_GROUPS: RequirementGroup[] = [
  {
    id: "documents-and-files",
    title: "Documents and Files",
    icon: FolderOpen,
    points: [
      "Bring your documents or files in an accepted format.",
      "Check that the document content is complete and ready to print.",
      "Confirm that scanned or digital files are readable.",
    ],
  },
  {
    id: "printing-specifications",
    title: "Printing Specifications",
    icon: Sliders,
    points: [
      "Specify the number of copies required.",
      "Choose color or black-and-white printing, where available.",
      "Confirm the required paper size and paper type.",
      "Explain any finishing requirements, such as stapling or binding, if offered.",
    ],
  },
  {
    id: "business-printing",
    title: "For Business Printing",
    icon: Briefcase,
    points: [
      "Prepare the final artwork or document layout.",
      "Check business names, contact details, and other printed information.",
      "Confirm the required quantity and preferred completion date.",
    ],
  },
  {
    id: "copying-scanning-faxing",
    title: "For Copying, Scanning & Faxing",
    icon: Copy,
    points: [
      "Bring the original documents where necessary.",
      "Confirm any applicable file delivery or transmission options.",
      "Check the destination details before sending a fax.",
    ],
  },
];

export default function PrintingRequirements() {
  return (
    <section aria-labelledby="printing-requirements-heading" className="relative">
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
              <span>PREPARATION &amp; REQUIREMENTS</span>
            </div>

            <h2
              id="printing-requirements-heading"
              className="font-display mt-3.5 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
            >
              What to Prepare Before Requesting Printing Services
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted font-medium max-w-2xl mx-auto">
              Preparing your files and specifications in advance can help make the
              printing process more efficient.
            </p>
          </div>

          {/* 4 Category Checklist Cards in 2x2 Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {REQUIREMENT_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.id}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    {/* Header with Icon and Title */}
                    <div className="flex items-center gap-3.5 border-b border-border/70 pb-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-2xs">
                        <Icon className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                        {group.title}
                      </h3>
                    </div>

                    {/* Points Checklist */}
                    <ul className="mt-5 space-y-3">
                      {group.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-xs sm:text-[13px] text-foreground font-medium leading-relaxed"
                        >
                          <CheckCircle2
                            className="h-4 w-4 text-primary shrink-0 mt-0.5 stroke-[2.2]"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

