import { BadgeCheck, Boxes, ShieldCheck, Zap } from "lucide-react";
import AnimatedCounter from "@components/ui/animated-counter";
import RevealCss from "@components/ui/reveal-css";
import SectionHeading from "@components/ui/section-heading";
import { HOME_STATS } from "@/lib/site-data";
import Image from "next/image";
import { getImageUrl } from "@/lib/helpers";

import type { HomePageData } from "@/lib/types";

const HIGHLIGHTS = [
  { icon: Boxes, text: "Pack & ship (almost) anything, anywhere in the world" },
  { icon: Zap, text: "Right product, right price — in a single, quick visit" },
  { icon: ShieldCheck, text: "Professional packing for fragile & valuable items" },
  { icon: BadgeCheck, text: "Print, copy, scan, notarize & more under one roof" },
];

const ICON_MAP: Record<string, any> = {
  boxes: Boxes,
  zap: Zap,
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
};

export default function WelcomeSection({ data }: { data?: HomePageData | null }) {
  const eyebrow = data?.welcomeEyebrow || "About Us";
  const title = data?.welcomeTitle || "Parcel & Office Solutions — it's handled!";
  const paragraphs: string[] =
    typeof data?.welcomeParagraph === "string" && data.welcomeParagraph.trim()
      ? data.welcomeParagraph.split("\n\n").filter(Boolean)
      : data?.welcomeParagraphs && data.welcomeParagraphs.length > 0
      ? data.welcomeParagraphs
      : [
          "Located at 8777 Piney Orchard Pkwy Ste B beside Food Lion Supermarket, Odenton MD, we are the go-to resource for packing, shipping, printing and business service needs of the residents and businesses of Odenton. Our team of dedicated, professionally trained experts understands the meaning of super-star customer care — we focus on saving you time and money by ensuring you get the right products and services at the right price.",
          "We can pack and ship almost anything to almost anywhere in the world. In addition to our pack-and-ship services, we are also Odenton's premier copy, print and document services center. Your one-stop shop for dozens of business products and services — so you can do what you're good at while we take care of the \"other stuff\" you need to succeed.",
        ];

  const highlights =
    data?.welcomeHighlights && data.welcomeHighlights.length > 0
      ? data.welcomeHighlights.map((h, idx) => {
          let customIconUrl: string | null = null;
          if (h.icon && typeof h.icon === "object") {
            customIconUrl = getImageUrl(h.icon as any);
          } else if (typeof h.icon === "string" && (h.icon.startsWith("http") || h.icon.startsWith("/"))) {
            customIconUrl = h.icon;
          }

          const fallbackIcon =
            typeof h.icon === "string" && ICON_MAP[h.icon]
              ? ICON_MAP[h.icon]
              : HIGHLIGHTS[idx % HIGHLIGHTS.length]?.icon || Boxes;

          return {
            text: h.text,
            customIconUrl,
            fallbackIcon,
          };
        })
      : HIGHLIGHTS.map((h) => ({
          text: h.text,
          customIconUrl: null,
          fallbackIcon: h.icon,
        }));

  const stats =
    data?.welcomeStats && data.welcomeStats.length > 0
      ? data.welcomeStats.map((s) => {
          const rawVal = String(s.value ?? "");
          const numMatch = rawVal.match(/[\d.]+/);
          const parsedNum = numMatch ? parseFloat(numMatch[0]) : 0;
          const parsedSuffix = s.suffix || rawVal.replace(/[\d.\s]/g, "") || "";
          return {
            value: parsedNum,
            suffix: parsedSuffix,
            label: s.label,
          };
        })
      : HOME_STATS;

  return (
    <section
      aria-labelledby="welcome-heading"
      className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 overflow-hidden"
    >
      <RevealCss direction="right">
        <SectionHeading
          markAs="h2"
          id="welcome-heading"
          align="left"
          eyebrow={eyebrow}
          title={title}
        />
        {paragraphs.map((p, idx) => (
          <p key={idx} className="mt-4 first:mt-5 leading-relaxed text-muted">
            {p}
          </p>
        ))}

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {highlights.map(({ text, customIconUrl, fallbackIcon: Icon }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 text-sm font-medium text-secondary transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary overflow-hidden">
                {customIconUrl ? (
                  <Image
                    src={customIconUrl}
                    alt={text}
                    width={20}
                    height={20}
                    className="h-4 w-4 object-contain"
                  />
                ) : (
                  <Icon className="h-4 w-4" aria-hidden="true" />
                )}
              </span>
              {text}
            </li>
          ))}
        </ul>
      </RevealCss>

      <RevealCss direction="left">
        <ul className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] sm:p-8"
            >
              <span className="block h-1 w-10 rounded-full bg-primary mb-4 transition-colors duration-200 group-hover:bg-accent" />
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={1400}
                className="font-display text-4xl font-extrabold text-foreground sm:text-5xl transition-colors duration-200 group-hover:text-accent"
              />
              <p className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </RevealCss>
    </section>
  );
}
