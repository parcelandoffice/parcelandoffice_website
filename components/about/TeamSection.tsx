import RevealCss from "@components/ui/reveal-css";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Marcus Vance",
    role: "Founder & Operations Director",
    image: "/images/small-biz-owner.jpg",
    quote:
      "Every package represents a promise to a customer, a loved one, or a growing business. We treat every single parcel with meticulous care and dedication.",
  },
  {
    name: "Elena Rostova",
    role: "Certified Packaging Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    quote:
      "From delicate glassware and vintage electronics to oversized freight, our custom cushioning and box construction ensures safe arrival anywhere on Earth.",
  },
  {
    name: "David Chen",
    role: "Multi-Carrier Logistics Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    quote:
      "By analyzing real-time schedules across FedEx, UPS, DHL, and USPS, we consistently save our customers both transit time and money.",
  },
  {
    name: "Sarah Jenkins",
    role: "Document & Notary Services Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    quote:
      "Whether it’s a quick certified notary, live digital fingerprinting, or passport photos, we strive to make everyday business tasks effortless.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Reference Image 4 */}
        <RevealCss className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-muted-light">
            Our Leadership &amp; Experts
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            The Team Behind <br />
            <span className="text-accent">Parcel &amp; Office&apos;s Success</span>
          </h2>
        </RevealCss>

        {/* 4 Team Member Cards Grid - Reference Image 4 */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <RevealCss
              key={member.name}
              delay={index * 0.08}
              className="group relative"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Team Member Photo */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Base Dark Gradient for Name Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Bottom Default Name & Role Banner */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-white transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-display text-lg font-bold">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-accent-light">
                    {member.role}
                  </p>
                </div>

                {/* Frosted Glassmorphic Hover Overlay with Leadership Quote - Reference Image 4 */}
                <div className="absolute inset-0 flex flex-col justify-between bg-primary-dark/85 p-6 text-left opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <div className="border-l-2 border-accent pl-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Leadership Philosophy
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-white/90 sm:text-sm">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h3 className="font-display text-base font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-accent-light">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealCss>
          ))}
        </div>
      </div>
    </section>
  );
}
