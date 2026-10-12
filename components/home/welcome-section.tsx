import { BadgeCheck, Boxes, ShieldCheck, Zap } from "lucide-react";
import AnimatedCounter from "@components/ui/animated-counter";
import RevealCss from "@components/ui/reveal-css";
import SectionHeading from "@components/ui/section-heading";
import { HOME_STATS } from "@/lib/site-data";

const HIGHLIGHTS = [
  { icon: Boxes, text: "Pack & ship (almost) anything, anywhere in the world" },
  { icon: Zap, text: "Right product, right price — in a single, quick visit" },
  { icon: ShieldCheck, text: "Professional packing for fragile & valuable items" },
  { icon: BadgeCheck, text: "Print, copy, scan, notarize & more under one roof" },
];

export default function WelcomeSection() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8"
    >
      <RevealCss direction="right">
        <SectionHeading
          markAs="h2"
          id="welcome-heading"
          align="left"
          eyebrow="Welcome"
          title="Parcel & Office Solutions — it's handled!"
        />
        <p className="mt-5 leading-relaxed text-muted">
          Located at 8777 Piney Orchard Pkwy Ste B beside Food Lion Supermarket,
          Odenton MD, we are the go-to resource for packing, shipping, printing
          and business service needs of the residents and businesses of
          Odenton. Our team of dedicated, professionally trained experts
          understands the meaning of super-star customer care — we focus on
          saving you time and money by ensuring you get the right products and
          services at the right price.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          We can pack and ship almost anything to almost anywhere in the world.
          In addition to our pack-and-ship services, we are also Odenton&apos;s
          premier copy, print and document services center. Your one-stop shop
          for dozens of business products and services — so you can do what
          you&apos;re good at while we take care of the &ldquo;other stuff&rdquo;
          you need to succeed.
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 text-sm font-medium text-secondary transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </RevealCss>

      <RevealCss direction="left">
        <ul className="grid grid-cols-2 gap-4 sm:gap-5">
          {HOME_STATS.map((stat) => (
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
