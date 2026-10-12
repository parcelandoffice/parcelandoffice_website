import Image from "next/image";
import type { HomePageData, WhyChooseUsItem } from "@/lib/types";
import SectionHeading from "../ui/section-heading";
import RevealCss from "../ui/reveal-css";
import { Check } from "lucide-react";

const defaultReasons: WhyChooseUsItem[] = [
  {
    title: "Experienced Legal Expertise",
    subtitle: "Practical solutions backed by strong legal knowledge.",
  },
  {
    title: "Client-Centric Approach",
    subtitle: "Every case receives personalized attention and strategic guidance.",
  },
  {
    title: "Transparent Communication",
    subtitle: "Clear advice and regular updates throughout your legal journey.",
  },
  {
    title: "Ethical & Professional Practice",
    subtitle: "Integrity, confidentiality, and honesty in every matter.",
  },
  {
    title: "Result-Oriented Representation",
    subtitle: "Focused advocacy to protect your rights and interests.",
  },
  {
    title: "Comprehensive Legal Services",
    subtitle:
      "Expertise across civil, commercial, corporate, family, property, GST, RERA, IBC, and High Court matters.",
  },
];

export default function WhyChooseUs({
  homePageData,
  whyChooseUsImageUrl,
}: {
  homePageData: HomePageData;
  whyChooseUsImageUrl: string;
}) {
  const reasons =
    homePageData.whyChooseUsItems && homePageData.whyChooseUsItems.length > 0
      ? homePageData.whyChooseUsItems
      : defaultReasons;

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealCss direction="right" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]">
              <Image
                src={whyChooseUsImageUrl}
                alt={
                  homePageData.whyChooseUsImage?.alt ||
                  "Professional legal team in discussion"
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </RevealCss>

          <div>
            <RevealCss direction="left">
              <SectionHeading
                eyebrow={
                  homePageData.whyChooseUsTag || "Why Choose RP Law Firm?"
                }
                title={
                  homePageData.whyChooseUsTitle ||
                  "Trusted Legal Partner. Proven Commitment."
                }
                description={
                  homePageData.whyChooseUsDescription ||
                  "We deliver strategic legal solutions backed by experience, integrity, and personalized attention—providing confident representation and practical guidance for every legal challenge."
                }
                align="left"
              />
            </RevealCss>

            <ul className="mt-10 space-y-8">
              {reasons.map((reason, index) => (
                <RevealCss
                  as="li"
                  key={reason.title}
                  direction="left"
                  delay={0.1 + index * 0.1}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check
                      className="h-4 w-4 text-accent"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {reason.title}
                    </div>
                    <p className="mt-1 text-muted">{reason.subtitle}</p>
                  </div>
                </RevealCss>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
