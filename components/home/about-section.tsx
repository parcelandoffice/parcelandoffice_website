import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import RevealCss from "../ui/reveal-css";

type AboutSectionProps = {
  aboutImageUrl: string;
  imageAlt?: string;
  authorAvatarUrl: string;
  authorName: string;
  aboutTag?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  aboutCtaButtonText?: string;
};

export default function AboutSection({
  aboutImageUrl,
  imageAlt = "Professional Legal Experts in Ahmedabad, Gujarat",
  authorAvatarUrl,
  authorName,
  aboutTag = "About RP Law Firm",
  aboutTitle = "Professional Legal Experts in Ahmedabad, Gujarat",
  aboutDescription = "RP Law Firm is a trusted law firm based in Ahmedabad, Gujarat, providing practical, ethical, and result-oriented legal services to individuals, families, startups, and businesses. Led by Adv. Rinal Patel, we offer strategic legal advice, professional representation, and effective solutions across civil, commercial, corporate, family, property, GST, RERA, IBC, and High Court matters. Our commitment is to protect your rights through clear guidance, responsive communication, and dedicated legal support.",
  aboutCtaButtonText = "Learn More About Us",
}: AboutSectionProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <RevealCss direction="left">
              <SectionHeading
                eyebrow={aboutTag}
                title={aboutTitle}
                align="left"
                markAs="h2"
              />
            </RevealCss>

            <RevealCss direction="left" delay={0.1}>
              <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-muted">
                {aboutDescription}
              </p>
            </RevealCss>

            <RevealCss direction="left" delay={0.2}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                {aboutCtaButtonText}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </RevealCss>
          </div>

          <RevealCss direction="right" className="relative">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src={aboutImageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw-30px, 50vw-16px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>

              <div
                className="absolute -left-4 -top-4 h-20 w-20 rounded-2xl border-4 border-background bg-accent/20"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl border-4 border-background bg-primary/10"
                aria-hidden="true"
              />

              <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-surface p-5 shadow-xl sm:left-auto sm:right-6 sm:max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30">
                    <Image
                      src={authorAvatarUrl}
                      alt={authorName}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">
                      Led by {authorName}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealCss>
        </div>
      </div>
    </section>
  );
}
