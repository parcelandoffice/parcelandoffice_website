import type { Blog, SanityPost } from "./types";

export interface StaticBlogItem extends Blog {
  readTime?: string;
  authorName?: string;
  authorRole?: string;
  contentParagraphs?: string[];
}

export const BLOG_CATEGORIES = [
  "All",
  "Sustainability",
  "Shipping & Logistics",
  "Packaging & Moving",
  "Office Solutions",
  "Small Business Tips",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const STATIC_BLOGS: StaticBlogItem[] = [
  {
    id: "blog-1",
    title: "Top takeaways from UPS's 2025 Sustainability and Community Impact Report",
    slug: "ups-2025-sustainability-community-impact-report",
    category: "Sustainability",
    publishedAt: "2025-05-18T09:00:00Z",
    short_description:
      "Delivering for our people, communities and planet with carbon-neutral transit options and innovative electric fleet solutions.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "UPS electric cargo delivery and sustainable logistics",
    readTime: "5 min read",
    authorName: "David Miller",
    authorRole: "Logistics Specialist",
    contentParagraphs: [
      "As consumer demand for rapid doorstep deliveries accelerates, commercial carriers have confronted a critical imperative: decoupling business growth from carbon emissions. In its recently published 2025 Sustainability and Community Impact Report, UPS detailed substantial milestones in electrifying last-mile fleets, deploying city-center cargo e-bikes, and scaling alternative aviation fuels.",
      "At Parcel and Office, we are proud to offer authorized UPS drop-off and pickup solutions that support these sustainability initiatives. Customers shipping domestically or internationally can now choose carbon-neutral shipping offsets directly at our counter, actively neutralizing the greenhouse emissions of their transit.",
      "Key takeaways from this year's landmark report include a 22% reduction in greenhouse gas intensity per package, the addition of thousands of zero-emission electric vans to urban corridors, and an expanding network of micro-fulfillment hubs that minimize neighborhood congestion.",
    ],
  },
  {
    id: "blog-2",
    title: "Mastering International Shipping: Customs, Duties & Documentation Guide",
    slug: "mastering-international-shipping-customs-duties-guide",
    category: "Shipping & Logistics",
    publishedAt: "2025-05-12T10:30:00Z",
    short_description:
      "A comprehensive handbook on export declarations, commercial invoices, and harmonized tariff codes for stress-free cross-border delivery.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "International air cargo freight and shipping containers",
    readTime: "7 min read",
    authorName: "Sarah Jenkins",
    authorRole: "International Courier Advisor",
    contentParagraphs: [
      "Navigating international customs regulations can feel overwhelming, whether you are sending family heirlooms abroad or shipping commercial inventory to global buyers. A single missing Harmonized System (HS) code or inaccurate item valuation can delay your package at borders for weeks.",
      "In this guide, we break down the vital documents required by major carriers including DHL Express, FedEx International, and UPS Worldwide. Our team at Parcel and Office verifies commercial invoices, packing lists, and export licenses on the spot, ensuring your shipments sail through clearance swiftly.",
      "Learn the differences between Delivered Duty Paid (DDP) and Delivered Duty Unpaid (DDU), how de minimis thresholds vary across continents, and top tips for avoiding unexpected surcharges.",
    ],
  },
  {
    id: "blog-3",
    title: "Eco-Friendly Packaging: Sustainable Materials That Protect Your Parcels",
    slug: "eco-friendly-packaging-sustainable-materials",
    category: "Sustainability",
    publishedAt: "2025-04-29T14:15:00Z",
    short_description:
      "Discover biodegradable cushioning, water-activated paper tapes, and corrugated shippers that protect both your cargo and the environment.",
    image:
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Biodegradable cardboard packaging and eco-friendly tape",
    readTime: "4 min read",
    authorName: "David Miller",
    authorRole: "Logistics Specialist",
    contentParagraphs: [
      "The days of messy plastic packing peanuts and excessive plastic wrap are swiftly coming to an end. Modern eco-packaging materials have advanced significantly, delivering military-grade shock absorption while breaking down naturally in standard compost facilities.",
      "Explore honeycomb kraft paper sleeves that flex around delicate glass bottles, starch-based packing peanuts that dissolve harmlessly in water, and reinforced kraft tape activated with water that bonds seamlessly with cardboard fibers.",
      "Visit Parcel and Office to explore our curated selection of 100% recycled shipping boxes and certified biodegradable void fillers tailored for every size parcel.",
    ],
  },
  {
    id: "blog-4",
    title: "Essential Freight & Parcel Packing Tips for Fragile Electronics",
    slug: "essential-parcel-packing-tips-fragile-electronics",
    category: "Packaging & Moving",
    publishedAt: "2025-04-20T11:00:00Z",
    short_description:
      "Avoid transit shock with the double-box technique, anti-static foam wraps, and optimal void-fill methods for delicate electronics.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Packaging bubble wrap and secure box cushioning",
    readTime: "6 min read",
    authorName: "Marcus Vance",
    authorRole: "Packaging Supervisor",
    contentParagraphs: [
      "Laptops, monitors, motherboards, and audio equipment are particularly vulnerable to vibration, static electricity, and impact shocks during transit. Standard parcel handling involves automated sorting conveyors and rapid shifts in orientation.",
      "To safeguard expensive electronics, implement the proven 'box-in-a-box' technique: wrap the device in anti-static shielding, surround it with at least two inches of high-density cushioning inside an inner carton, and place that inside a heavier corrugated outer shipper.",
      "Our certified packing associates at Parcel and Office stock specialized anti-static bubbles, rigid corner guards, and heavy-duty double-wall cartons to ensure your electronics arrive safely.",
    ],
  },
  {
    id: "blog-5",
    title: "How Private Mailbox Rentals Shield Your Privacy and Boost Professionalism",
    slug: "private-mailbox-rentals-privacy-professionalism"
    ,
    category: "Office Solutions",
    publishedAt: "2025-04-14T08:45:00Z",
    short_description:
      "Why remote business owners, consultants, and online sellers rely on a real physical street address for confidentiality and carrier package acceptance.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Modern corporate mailboxes and secure office lockers",
    readTime: "4 min read",
    authorName: "Elena Rostova",
    authorRole: "Office Services Manager",
    contentParagraphs: [
      "Running a business from home offers unmatched flexibility, but publishing your personal residential address on state filings, client contracts, and websites exposes your personal life to unwanted solicitations and privacy risks.",
      "Unlike a standard P.O. Box at the post office, a private mailbox rental at Parcel and Office gives you a prestigious physical street address (e.g., 8777 Piney Orchard Pkwy Suite B #101). More importantly, we accept signed deliveries from all commercial couriers—including FedEx, UPS, DHL, and private couriers—and store them securely until you pick them up.",
      "Enjoy 24/7 package safety, instant SMS notifications when mail arrives, and professional mail forwarding options tailored to busy entrepreneurs.",
    ],
  },
  {
    id: "blog-6",
    title: "FedEx vs. UPS vs. DHL vs. USPS: Choosing the Right Carrier for Your Needs",
    slug: "carrier-comparison-fedex-ups-dhl-usps",
    category: "Shipping & Logistics",
    publishedAt: "2025-04-05T16:20:00Z",
    short_description:
      "An honest side-by-side comparison of delivery speeds, daily drop-off cutoff times, pricing structures, and tracking capabilities.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Courier handling parcel delivery for customer",
    readTime: "8 min read",
    authorName: "Sarah Jenkins",
    authorRole: "International Courier Advisor",
    contentParagraphs: [
      "Every shipping carrier brings distinctive strengths to the table. Choosing the optimal service level depends on parcel dimensions, delivery urgency, destination geography, and budget constraints.",
      "While FedEx excels with time-definite domestic overnight delivery and specialized medical transport, UPS dominates ground freight efficiency and heavy package logistics. Meanwhile, DHL Express remains the unrivaled gold standard for fast worldwide cross-border customs clearance, and USPS offers cost-effective solutions for lightweight residential parcels.",
      "At Parcel and Office, you don't have to guess. Our unified rate comparison tool lets you review live delivery quotes and pickup cutoff times across all four major carriers in seconds.",
    ],
  },
  {
    id: "blog-7",
    title: "5 High-Volume Printing & Document Finishing Services Every Startup Needs",
    slug: "printing-and-document-finishing-services-startups",
    category: "Office Solutions",
    publishedAt: "2025-03-28T13:00:00Z",
    short_description:
      "From architectural blueprints and spiral-bound pitch decks to glossy marketing flyers—elevate your company's physical touchpoints.",
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "High-volume commercial printing and document binding",
    readTime: "5 min read",
    authorName: "Elena Rostova",
    authorRole: "Office Services Manager",
    contentParagraphs: [
      "In a digital-first era, tangible printed collateral commands undivided attention. Pitching investors, meeting corporate clients, or attending industry trade shows with professionally bound presentation booklets leaves an indelible impression.",
      "Discover the top document finishing techniques that make your work stand out: coil and comb binding, high-gloss UV coating, full-bleed color printing, precision lamination, and wide-format engineering print reproduction.",
      "Our commercial print center at Parcel and Office handles same-day turnaround on flyers, banners, business cards, and presentation decks with crisp color calibration.",
    ],
  },
  {
    id: "blog-8",
    title: "Optimizing Last-Mile Logistics for Local Retailers & E-Commerce",
    slug: "optimizing-last-mile-logistics-ecommerce",
    category: "Small Business Tips",
    publishedAt: "2025-03-22T09:15:00Z",
    short_description:
      "Practical strategies for reducing transit friction, managing returns cost-effectively, and exceeding customer expectations on delivery day.",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "E-commerce packing station and dispatch parcels",
    readTime: "6 min read",
    authorName: "Marcus Vance",
    authorRole: "Packaging Supervisor",
    contentParagraphs: [
      "The 'last mile' accounts for more than 50% of total shipping expenditure in modern retail fulfillment. Failed delivery attempts, porch piracy, and cumbersome return procedures can drain profit margins and erode consumer trust.",
      "Explore proactive strategies for simplifying local delivery: partnering with neighborhood parcel hubs for secure click-and-collect pick-ups, implementing QR-code based label-free returns, and batching outbound pickups with scheduled cutoff alignments.",
      "Learn how small e-commerce merchants leverage Parcel and Office as their local shipping department without taking on expensive warehouse leases.",
    ],
  },
  {
    id: "blog-9",
    title: "The Zero-Waste Office: Simple Steps to Modernize Business Mailing",
    slug: "zero-waste-office-modernize-business-mailing",
    category: "Sustainability",
    publishedAt: "2025-03-15T15:30:00Z",
    short_description:
      "Slash corrugated waste and paper excess by integrating digital mail receiving, batch forwarding, and reusable packaging bins.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Eco-friendly recyclable paper bags and circular packaging",
    readTime: "4 min read",
    authorName: "David Miller",
    authorRole: "Logistics Specialist",
    contentParagraphs: [
      "Every year, businesses discard thousands of pounds of paper envelopes, unnecessary packing peanuts, and single-use plastic mailers. Modernizing your office mailing practices reduces operating expenses while significantly shrinking your environmental footprint.",
      "We examine practical zero-waste workflows: utilizing digital scan-to-email mail services, shredding surplus cardboard on-site into custom void fill, and switching to 100% post-consumer recycled paper envelopes.",
      "Small changes compound into massive environmental wins. Discover how Parcel and Office supports local businesses in achieving certified eco-friendly mailing standards.",
    ],
  },
  {
    id: "blog-10",
    title: "The Ultimate Moving Box & Storage Packing Checklist",
    slug: "ultimate-moving-box-storage-packing-checklist",
    category: "Packaging & Moving",
    publishedAt: "2025-03-08T10:00:00Z",
    short_description:
      "Streamline residential or office relocations with standardized box sizing, color-coded labeling, and balanced weight distribution rules.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Moving boxes stacked with heavy-duty packing tape",
    readTime: "7 min read",
    authorName: "Marcus Vance",
    authorRole: "Packaging Supervisor",
    contentParagraphs: [
      "Relocating a home or commercial office is one of the most stressful operational tasks you can undertake. A lack of structural packing discipline leads to crushed boxes, lost essentials, and unmanageable clutter at your destination.",
      "Follow our comprehensive moving checklist: use heavy small boxes for dense items like books and dishware, reserve large cartons strictly for lightweight linens, label every box on top and two sides with destination room tags, and seal bottoms with an 'H' taping pattern.",
      "Stop by Parcel and Office for moving box bundles, wardrobe cartons, mattress bags, and industrial-grade packing tape.",
    ],
  },
  {
    id: "blog-11",
    title: "Notary Public & Certified Document Courier: What You Must Know",
    slug: "notary-public-certified-document-courier-guide",
    category: "Office Solutions",
    publishedAt: "2025-02-28T14:40:00Z",
    short_description:
      "How authorized same-day notarization and tracked overnight dispatch expedite real estate deeds, affidavits, and corporate power-of-attorney filings.",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Official document signing with notary seal",
    readTime: "5 min read",
    authorName: "Elena Rostova",
    authorRole: "Office Services Manager",
    contentParagraphs: [
      "Real estate closings, vehicle title transfers, living trusts, and international powers of attorney all require certified notarial acknowledgement before they carry legal weight. Coordinating with a notary and then locating a secure courier drop-off can waste hours of valuable time.",
      "At Parcel and Office, our licensed on-site Notary Public verifies signer identities, administers required oaths, and affixes official state embossing seals in minutes. Once notarized, we immediately process your documents into a tracked overnight courier service.",
      "Learn what valid government-issued photo IDs you need to bring, how to properly sign before the notary, and best practices for expedited legal document delivery.",
    ],
  },
  {
    id: "blog-12",
    title: "Scaling Your Micro-Business: Smart Inventory Storage and Drop-Shipping",
    slug: "scaling-micro-business-inventory-storage-shipping",
    category: "Small Business Tips",
    publishedAt: "2025-02-18T11:10:00Z",
    short_description:
      "Transform your spare room or studio into an efficient dispatch center with localized micro-hub fulfillment and scheduled carrier pickups.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Small business inventory boxes ready for distribution",
    readTime: "6 min read",
    authorName: "Sarah Jenkins",
    authorRole: "International Courier Advisor",
    contentParagraphs: [
      "As your boutique e-commerce shop expands from 5 orders a week to 50 orders a day, managing inventory boxes and waiting in long carrier lines becomes a bottleneck that drains time away from customer acquisition and product development.",
      "Discover how agile small businesses streamline logistics: establishing batch packaging routines, utilizing pre-printed return labels, taking advantage of automated carrier drop-boxes, and coordinating bulk pickups.",
      "Parcel and Office provides customized small business accounts with volume shipping discounts, commercial packing materials, and priority counter check-in.",
    ],
  },
];

export function getStaticBlogs(options?: {
  category?: string;
  limit?: number;
  offset?: number;
}): { blogs: StaticBlogItem[]; total: number } {
  const { category, limit = 6, offset = 0 } = options || {};

  let filtered = STATIC_BLOGS;

  if (category && category !== "All") {
    const normalizedCategory = category.toLowerCase().trim();
    filtered = STATIC_BLOGS.filter(
      (blog) =>
        blog.category &&
        blog.category.toLowerCase().trim() === normalizedCategory
    );
  }

  const paginated = filtered.slice(offset, offset + limit);

  return {
    blogs: paginated,
    total: filtered.length,
  };
}

export function getStaticBlogBySlug(slug: string): StaticBlogItem | undefined {
  return STATIC_BLOGS.find((b) => b.slug === slug);
}

export const AUTHOR_PROFILES: Record<
  string,
  {
    name: string;
    role: string;
    image: string;
    bio: string;
    credentials: string[];
    email?: string;
  }
> = {
  "David Miller": {
    name: "David Miller",
    role: "Senior Logistics Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "David has over 12 years of hands-on experience in commercial freight management, urban last-mile delivery, and eco-friendly packaging technologies. He advises small businesses and local entrepreneurs on cutting shipping costs while maintaining punctual delivery standards.",
    credentials: [
      "12+ Years Logistics Experience",
      "Certified Eco-Packaging Advisor",
      "UPS & Freight Solutions Lead",
    ],
    email: "david.miller@parcelofficesolutions.com",
  },
  "Sarah Jenkins": {
    name: "Sarah Jenkins",
    role: "International Courier Advisor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Sarah is a specialist in cross-border customs regulations, harmonized tariff codes (HS Codes), and international documentation. She oversees export-import documentation compliance for DHL Express, FedEx International, and UPS Worldwide shipments at Parcel & Office.",
    credentials: [
      "Cross-Border Customs Specialist",
      "Certified Export Documentation Advisor",
      "DHL Express International Certified",
    ],
    email: "sarah.jenkins@parcelofficesolutions.com",
  },
  "Marcus Vance": {
    name: "Marcus Vance",
    role: "Packaging & Fragile Freight Supervisor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bio: "Marcus has supervised fragile item crating and package engineering for over a decade. Having securely packaged more than 40,000 delicate shipments—from vintage heirlooms to sensitive electronic equipment—he is passionate about damage-free transit.",
    credentials: [
      "Certified Package Engineer",
      "Electronics & Fragile Goods Specialist",
      "Damage-Free Transit Advocate",
    ],
    email: "marcus.vance@parcelofficesolutions.com",
  },
  "Elena Rostova": {
    name: "Elena Rostova",
    role: "Office Services & Notary Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    bio: "Elena oversees private mailbox rentals, commercial digital printing, document finishing, and notary services. A commissioned Maryland Notary Public, she is dedicated to helping Odenton professionals and remote businesses thrive.",
    credentials: [
      "Commissioned Maryland Notary Public",
      "Commercial Print & Binding Director",
      "Private Mailbox Solutions Specialist",
    ],
    email: "elena.rostova@parcelofficesolutions.com",
  },
};

export const DEFAULT_AUTHOR_PROFILE = {
  name: "Parcel & Office Editorial Team",
  role: "Shipping & Office Solutions Specialists",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80",
  bio: "The Parcel & Office editorial team consists of certified shipping professionals, packaging experts, and business service advisors based in Odenton, MD. We share practical guides to help you ship smarter, pack securely, and manage business mailing effortlessly.",
  credentials: [
    "Authorized Carrier Specialists",
    "Odenton, MD Local Hub",
    "Customer Care Excellence",
  ],
  email: "contact@parcelofficesolutions.com",
};

export function getAdjacentBlogs(slug: string): {
  prevBlog: Blog | null;
  nextBlog: Blog | null;
} {
  const currentIndex = STATIC_BLOGS.findIndex((b) => b.slug === slug);
  if (currentIndex === -1) {
    return { prevBlog: null, nextBlog: null };
  }
  const prevBlog =
    currentIndex > 0
      ? STATIC_BLOGS[currentIndex - 1]
      : STATIC_BLOGS[STATIC_BLOGS.length - 1];
  const nextBlog =
    currentIndex < STATIC_BLOGS.length - 1
      ? STATIC_BLOGS[currentIndex + 1]
      : STATIC_BLOGS[0];
  return { prevBlog, nextBlog };
}

export function mapStaticBlogToSanityPost(item: StaticBlogItem): SanityPost {
  const authorProfile =
    (item.authorName && AUTHOR_PROFILES[item.authorName]) ||
    DEFAULT_AUTHOR_PROFILE;

  return {
    _id: item.id,
    title: item.title,
    slug: item.slug,
    publishedAt: item.publishedAt,
    short_description: item.short_description,
    metaTitle: `${item.title} | Parcel & Office Solutions`,
    metaDescription: item.short_description,
    body: (item.contentParagraphs || [item.short_description]).map(
      (para, idx) => ({
        _key: `p-${idx}`,
        _type: "block" as const,
        style: "normal",
        children: [
          {
            _key: `span-${idx}`,
            _type: "span" as const,
            text: para,
            marks: [],
          },
        ],
        markDefs: [],
      })
    ),
    author: {
      _id: `author-${item.authorName?.toLowerCase().replace(/\s+/g, "-")}`,
      name: authorProfile.name,
      slug: (item.authorName || "team").toLowerCase().replace(/\s+/g, "-"),
      bio: authorProfile.bio,
    },
    categories: [
      {
        _id: `cat-${item.category?.toLowerCase().replace(/\s+/g, "-")}`,
        title: item.category || "Shipping",
        description: `Articles about ${item.category}`,
      },
    ],
  };
}
