import type { ResolvedCoreValueItem } from "@/lib/types";
import {
  HeartHandshake,
  PackageCheck,
  Printer,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import RevealCss from "../ui/reveal-css";
import SectionHeading from "../ui/section-heading";

const DEFAULT_CORE_VALUES: (ResolvedCoreValueItem & { iconComponent?: LucideIcon })[] = [
  {
    title: "Speed & Reliability",
    description:
      "Daily scheduled carrier pickups with FedEx, UPS, DHL, and USPS ensure fast dispatch and on-time delivery across town or across the globe.",
    iconComponent: Truck,
  },
  {
    title: "Certified Protection",
    description:
      "Expert custom packaging, heavy-duty boxing, and tailored cushioning keep fragile, awkward, or high-value items completely secure.",
    iconComponent: ShieldCheck,
  },
  {
    title: "Multi-Carrier Choice",
    description:
      "Unbiased rate comparisons between leading carriers so you always secure the optimum combination of shipping speed and price.",
    iconComponent: PackageCheck,
  },
  {
    title: "Community Dedication",
    description:
      "Locally owned and proudly rooted in Odenton, MD — providing friendly, dependable support to families, military members, and local businesses.",
    iconComponent: HeartHandshake,
  },
  {
    title: "One-Stop Efficiency",
    description:
      "Complete courier and office services under one roof: notary public, mailbox rental, digital printing, copying, and live electronic fingerprinting.",
    iconComponent: Printer,
  },
];

type CoreValuesProps = {
  coreValuesTag?: string;
  coreValuesTitle?: string;
  coreValuesDescription?: string;
  coreValuesItems?: ResolvedCoreValueItem[];
};

function CoreValues({
  coreValuesTag,
  coreValuesTitle,
  coreValuesDescription,
  coreValuesItems,
}: CoreValuesProps) {
  // If user has custom sanity items, use them; otherwise use default parcel core values
  const hasSanityItems = coreValuesItems && coreValuesItems.length > 0;
  const values = hasSanityItems ? coreValuesItems : DEFAULT_CORE_VALUES;

  const defaultIcons = [Truck, ShieldCheck, PackageCheck, HeartHandshake, Printer];

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <RevealCss>
          <SectionHeading
            eyebrow={coreValuesTag ?? "What Drives Us"}
            title={coreValuesTitle ?? "Our Core Values"}
            description={
              coreValuesDescription ??
              "The logistical standards and customer-first principles that guide every package we handle and every service we provide."
            }
            align="left"
            markAs="h2"
          />
        </RevealCss>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => {
            const FallbackIcon = defaultIcons[index % defaultIcons.length];

            return (
              <RevealCss
                key={`${value.title}-${index}`}
                as="article"
                delay={index * 0.08}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Accent hover top line */}
                <div className="absolute left-6 right-6 top-0 h-1 rounded-b-md bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-accent/20 group-hover:text-accent-dark">
                    {value.iconUrl ? (
                      <Image
                        src={value.iconUrl}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                        aria-hidden="true"
                      />
                    ) : (
                      <FallbackIcon
                        className="h-6 w-6"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-secondary">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-border-subtle pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-light group-hover:text-accent">
                    Standard 0{index + 1}
                  </span>
                </div>
              </RevealCss>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
