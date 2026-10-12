import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import RevealCss from "@components/ui/reveal-css";
import { SERVICES, getServiceHref } from "@/lib/site-data";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-anchor bg-surface py-16 sm:py-20 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Title Header */}
        <RevealCss>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-primary" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-primary">
                  All-in-One Center
                </span>
                <h2
                  id="services-heading"
                  className="font-display text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl"
                >
                  Featured Products &amp; Services
                </h2>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary-dark"
            >
              Inquire About Custom Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </RevealCss>

        {/* 15 Circular Service Badges Grid */}
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealCss
                as="li"
                key={service.slug}
                delay={(index % 5) * 0.04}
              >
                <Link
                  href={getServiceHref(service.slug)}
                  className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-border bg-surface p-5 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/50 hover:shadow-[var(--shadow-card-hover)]"
                >
                  {/* Circular Icon Container */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white sm:h-18 sm:w-18">
                    <Icon
                      className="h-7 w-7 transition-transform duration-200 group-hover:scale-105 sm:h-8 sm:w-8"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex-1">
                    <h3 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.label}
                    </h3>
                    <p className="mt-1.5 hidden text-xs leading-relaxed text-muted sm:line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="mt-3 flex items-center justify-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-muted text-muted transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight
                        className="h-3 w-3"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </RevealCss>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
