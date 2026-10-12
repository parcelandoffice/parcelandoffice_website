import { Scale } from "lucide-react";
import Image from "next/image";
import RevealCss from "../ui/reveal-css";
import SectionHeading from "../ui/section-heading";
import PracticeAreasShell from "./practice-areas-shell";

export type ResolvedPracticeArea = {
  label: string;
  description: string;
  iconUrl?: string;
  iconAlt?: string;
};

const defaultPracticeAreas: ResolvedPracticeArea[] = [
  {
    label: "Gujarat High Court Matters",
    description:
      "Representation in writ petitions, civil and criminal appeals, constitutional matters, bail applications, commercial disputes, and other proceedings before the Gujarat High Court.",
  },
  {
    label: "District & Civil Court Litigation",
    description:
      "Legal representation in civil suits, recovery matters, injunctions, property disputes, family disputes, criminal trials, appeals, and execution proceedings before District and Civil Courts.",
  },
  {
    label: "RERA (Real Estate) Matters",
    description:
      "Legal assistance for homebuyers, developers, and builders in RERA complaints, delayed possession, refund claims, compensation, and real estate disputes.",
  },
  {
    label: "GST Litigation & Advisory",
    description:
      "Professional representation in GST notices, assessments, appeals, refunds, compliance, and indirect tax litigation before authorities and courts.",
  },
  {
    label: "Insolvency & Bankruptcy (IBC)",
    description:
      "Legal services for creditors, businesses, and corporate entities in insolvency proceedings, debt recovery, restructuring, and NCLT matters.",
  },
  {
    label: "Cheque Bounce (NI Act) Matters",
    description:
      "Comprehensive legal assistance in cheque dishonour cases, including legal notices, complaint filing, defence, recovery proceedings, and appeals.",
  },
  {
    label: "Divorce & Family Law",
    description:
      "Expert legal support in mutual consent divorce, contested divorce, child custody, maintenance, domestic violence, guardianship, and family settlements.",
  },
  {
    label: "Property Law Services",
    description:
      "Legal assistance in title verification, property disputes, partition suits, sale deeds, land matters, inheritance, documentation, and real estate transactions.",
  },
  {
    label: "Consumer Protection Matters",
    description:
      "Representation before Consumer Commissions for disputes involving defective products, deficient services, insurance, banking, medical negligence, and e-commerce.",
  },
  {
    label: "Company & Commercial Law",
    description:
      "Legal advisory for startups and businesses covering commercial contracts, shareholder disputes, corporate governance, compliance, business agreements, and commercial litigation.",
  },
  {
    label: "Legal Consultation & Documentation",
    description:
      "Professional legal opinions, contract drafting, legal notices, agreements, deeds, Power of Attorney, wills, affidavits, and business documentation.",
  },
  {
    label: "NRI Legal Services",
    description:
      "Dedicated legal support for Non-Resident Indians in property matters, inheritance, family disputes, documentation, Power of Attorney, and court representation across India.",
  },
];

type PracticeAreasProps = {
  practiceAreaTag?: string;
  practiceAreaTitle?: string;
  practiceAreaDescription?: string;
  practiceAreas?: ResolvedPracticeArea[];
};

export default function PracticeAreas({
  practiceAreaTag = "What We Do",
  practiceAreaTitle = "Our Practice Areas",
  practiceAreaDescription = "At RP Law Firm, we provide comprehensive legal services to individuals, businesses, startups, and corporate clients across Ahmedabad, Gujarat, and throughout India. Our firm is committed to delivering strategic legal advice, effective representation, and practical solutions across a wide range of legal matters.",
  practiceAreas = defaultPracticeAreas,
}: PracticeAreasProps) {
  const areas = practiceAreas.length > 0 ? practiceAreas : defaultPracticeAreas;

  return (
    <PracticeAreasShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="flex flex-col items-center">
          <SectionHeading
            eyebrow={practiceAreaTag}
            title={practiceAreaTitle}
            description={practiceAreaDescription}
            markAs="h3"
          />
        </RevealCss>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <RevealCss
              key={area.label}
              as="article"
              delay={(index % 3) * 0.1}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                {area.iconUrl ? (
                  <Image
                    src={area.iconUrl}
                    alt={area.iconAlt || area.label}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                ) : (
                  <Scale
                    className="h-6 w-6"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="text-xl font-bold text-primary">{area.label}</div>

              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </RevealCss>
          ))}
        </div>
      </div>
    </PracticeAreasShell>
  );
}
