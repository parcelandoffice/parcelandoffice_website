import { PackageOpen, Send, Radar, type LucideIcon } from "lucide-react";
import Image from "next/image";
import RevealCss from "@components/ui/reveal-css";
import SectionHeading from "@components/ui/section-heading";
import { HOW_IT_WORKS } from "@/lib/site-data";
import { getImageUrl } from "@/lib/helpers";
import type { HomePageData } from "@/lib/types";

const DEFAULT_ICONS = [PackageOpen, Send, Radar];

const STEP_ICON_MAP: Record<string, LucideIcon> = {
  "package-open": PackageOpen,
  send: Send,
  radar: Radar,
};

export default function HowItWorks({ data }: { data?: HomePageData | null }) {
  const eyebrow = data?.processEyebrow || "Simple 3-Step Process";
  const title = data?.processTitle || "Pack. Ship. Track.";
  const description =
    data?.processDescription || "Walk in with your items, walk out with complete peace of mind.";

  const steps =
    data?.processSteps && data.processSteps.length > 0
      ? data.processSteps.map((s, idx) => {
          let customIconUrl: string | null = null;
          if (s.icon && typeof s.icon === "object") {
            customIconUrl = getImageUrl(s.icon);
          } else if (typeof s.icon === "string" && (s.icon.startsWith("http") || s.icon.startsWith("/"))) {
            customIconUrl = s.icon;
          }

          const fallbackIcon =
            typeof s.icon === "string" && STEP_ICON_MAP[s.icon]
              ? STEP_ICON_MAP[s.icon]
              : DEFAULT_ICONS[idx % DEFAULT_ICONS.length];

          return {
            title: s.title,
            text: s.text,
            customIconUrl,
            fallbackIcon,
          };
        })
      : HOW_IT_WORKS.map((s, idx) => ({
          title: s.title,
          text: s.text,
          customIconUrl: null,
          fallbackIcon: DEFAULT_ICONS[idx % DEFAULT_ICONS.length],
        }));

  return (
    <section
      aria-labelledby="how-heading"
      className="bg-surface py-16 text-foreground sm:py-20 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss>
          <SectionHeading
            markAs="h2"
            id="how-heading"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </RevealCss>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {/* subtle connecting route line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-[18%] hidden h-0.5 w-[64%] border-t-2 border-dashed border-border md:block"
          />

          {steps.map((step, index) => {
            const Icon = step.fallbackIcon;
            return (
              <RevealCss as="li" key={step.title} delay={index * 0.1}>
                <div className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-surface-muted/50 hover:bg-surface-muted transition-colors">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-xs">
                    {step.customIconUrl ? (
                      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden">
                        <Image
                          src={step.customIconUrl}
                          alt={step.title}
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                    ) : (
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    )}
                    <span className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-black text-white shadow-xs">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </RevealCss>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
