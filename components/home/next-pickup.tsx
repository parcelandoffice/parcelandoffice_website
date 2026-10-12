import { CalendarClock } from "lucide-react";
import RevealCss from "@components/ui/reveal-css";
import SectionHeading from "@components/ui/section-heading";
import { NEXT_PICKUPS } from "@/lib/site-data";

export default function NextPickup() {
  return (
    <section
      aria-labelledby="pickup-heading"
      className="relative z-10 mx-auto -mt-0 max-w-7xl px-4 pt-14 sm:px-6 lg:px-8"
    >
      <RevealCss>
        <SectionHeading
          markAs="h2"
          id="pickup-heading"
          eyebrow="Daily carrier schedule"
          title="Next Pick-Up"
          description="Drop off before the cut-off and your package leaves the same day."
        />
      </RevealCss>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {NEXT_PICKUPS.map((pickup, index) => (
          <RevealCss as="li" key={pickup.carrier} delay={index * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]">
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl font-extrabold text-secondary">
                  {pickup.carrier}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-500 group-hover:rotate-[360deg]">
                  <CalendarClock className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {pickup.slots.map((slot) => (
                  <li
                    key={slot.label}
                    className="flex items-center justify-between border-t border-border pt-2"
                  >
                    <span className="text-muted">
                      Today &middot; {slot.label}
                    </span>
                    <strong className="text-primary">{slot.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </RevealCss>
        ))}
      </ul>
    </section>
  );
}
