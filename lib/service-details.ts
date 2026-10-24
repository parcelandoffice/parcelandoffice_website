export type ServiceDetail = {
  slug: string;
  carrierType?: "fedex" | "ups" | "dhl" | "usps" | "office";
  category: "Shipping & Mailing" | "Packing" | "Printing & Document Services" | "Business & Personal Services";
  title: string;
  shortTitle?: string;
  breadcrumbTitle?: string;
  headline: string;
  subheadline: string;
  eyebrow: string;
  heroImage: string;
  heroBadge: string;
  aboutLabel?: string;
  aboutTitle?: string;
  ctaQuoteLabel?: string;
  ctaQuoteHref?: string;
  ctaStoreLabel?: string;
  ctaStoreHref?: string;
  quickPerks?: string[];
  introParagraphs: string[];
  keyHighlights: {
    title: string;
    description: string;
    icon: string;
    badge?: string;
  }[];
  servicesOfferedLabel?: string;
  servicesOfferedTitle: string;
  servicesOfferedSubtitle: string;
  servicesCtaLabel?: string;
  servicesCtaHref?: string;
  servicesList: {
    name: string;
    badge: string;
    description: string;
    speed: string;
    featured?: boolean;
  }[];
  shippableItemsLabel?: string;
  shippableItemsTitle: string;
  shippableItemsSubtitle: string;
  shippableImportantNotice?: string;
  shippableCategories: {
    categoryName: string;
    icon: string;
    items: string[];
  }[];
  destinationsLabel?: string;
  destinationsTitle?: string;
  destinationsSubtitle?: string;
  destinationsCtaLabel?: string;
  requirementsLabel?: string;
  requirementsTitle?: string;
  requirementsSubtitle?: string;
  requirementsNotice?: string;
  processLabel?: string;
  processTitle?: string;
  cutoffTrackingLabel?: string;
  cutoffTrackingTitle?: string;
  cutoffTrackingSubtitle?: string;
  cutoffTrackingCtaLabel?: string;
  cutoffTrackingCtaHref?: string;
  whyChooseLabel?: string;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChooseNotice?: string;
  whyChooseItems?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  customerAssistanceLabel?: string;
  customerAssistanceTitle?: string;
  customerAssistanceSubtitle?: string;
  faqEyebrow?: string;
  faqHeading?: string;
  faqDescription?: string;
  packingCommitment: {
    title: string;
    quote: string;
    body: string;
    features: string[];
  };
  todayCutoff: {
    expressTime?: string;
    groundTime?: string;
    notice: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const SERVICES_DETAILS: Record<string, ServiceDetail> = {
  "fedex-shipping": {
    slug: "fedex-shipping",
    carrierType: "fedex",
    category: "Shipping & Mailing",
    title: "FedEx Shipping in Odenton, MD",
    shortTitle: "FedEx Shipping",
    breadcrumbTitle: "FedEx Shipping",
    headline: "FedEx Shipping in Odenton, MD",
    subheadline:
      "Your One Stop Shop For FedEx Express®, FedEx Ground® and International Shipping Solutions",
    eyebrow: "Officially Recognized FedEx Authorized ShipCenter®",
    heroImage: "/images/fedex-hero.jpg",
    heroBadge: "FedEx Authorized ShipCenter®",
    aboutLabel: "ABOUT OUR SERVICE",
    aboutTitle: "Fast, Reliable FedEx Shipping at Competitive Rates",
    ctaQuoteLabel: "Get a FedEx Shipping Quote",
    ctaQuoteHref: "tel:+14105193131",
    ctaStoreLabel: "Visit Our Store",
    ctaStoreHref: "/contact",
    quickPerks: [
      "Today's Express Cutoff: 6:00 PM",
      "Free Drop-Off Counter Scans",
      "Shipping and Packaging Assistance",
    ],
    introParagraphs: [
      "For fast, reliable service at competitive rates, FedEx delivers! Parcel & Office Solutions is an officially recognized FedEx Authorized ShipCenter and as such provides convenient access to FedEx Ground®, FedEx Express® and FedEx International products and service.",
      "As one of the world's most-recognized brands, FedEx delivers your shipments to almost any address in the US and to millions of addresses in over 200 countries worldwide.",
      "Parcel & Office Solutions schedules daily FedEx pick-ups so you can be certain your shipments receive the fast and efficient service you've come to expect from the FedEx brand.",
    ],
    keyHighlights: [
      {
        title: "Daily Scheduled Pickups",
        description: "Express departs at 6:00 PM • Ground departs at 4:00 PM Monday through Friday.",
        icon: "truck",
      },
      {
        title: "Free Drop-Off Scanning",
        description: "Bring your pre-labeled FedEx returns or drop-offs and receive an official scan receipt.",
        icon: "barcode",
      },
      {
        title: "Global Reach (220+ Countries)",
        description: "Worldwide express document and parcel delivery with customs paperwork assistance.",
        icon: "globe",
      },
      {
        title: "Expert Packing On-Site",
        description: "Over 30 box sizes, bubble wrap, and custom packaging tailored for FedEx transit.",
        icon: "package",
      },
    ],
    servicesOfferedTitle: "Parcel & Office Solutions Offers The Following FedEx Services:",
    servicesOfferedSubtitle:
      "Whether you need guaranteed morning delivery or cost-effective ground transit, we have the exact FedEx service for your schedule.",
    servicesList: [
      {
        name: "FedEx Priority Overnight®",
        badge: "Next Morning",
        description: "Next-business-day delivery by 10:30 a.m. to most US addresses, noon or 5 p.m. in remote areas.",
        speed: "Next Business Morning (10:30 AM)",
        featured: true,
      },
      {
        name: "FedEx Standard Overnight®",
        badge: "Next Afternoon",
        description: "Next-business-day delivery by 3:00 p.m. to businesses, 8:00 p.m. to residences.",
        speed: "Next Business Day (3:00 PM)",
      },
      {
        name: "FedEx 2 Day®",
        badge: "Popular Value",
        description: "Dependable 2-business-day delivery by 4:30 p.m. to businesses and 8:00 p.m. to residences throughout the US.",
        speed: "2 Business Days",
        featured: true,
      },
      {
        name: "FedEx Express Saver®",
        badge: "Economy Express",
        description: "Delivery by 4:30 p.m. on the 3rd business day to most business addresses, 8:00 p.m. to residences.",
        speed: "3 Business Days",
      },
      {
        name: "FedEx Ground®",
        badge: "Best Value",
        description: "Cost-effective, day-definite delivery in 1–5 business days to every business address in the 50 states.",
        speed: "1–5 Business Days",
        featured: true,
      },
      {
        name: "FedEx Ground-Home Delivery®",
        badge: "Residential 7 Days",
        description: "Convenient residential delivery 7 days a week, including Saturday and Sunday, with direct tracking alerts.",
        speed: "1–5 Days (Home)",
      },
      {
        name: "FedEx Priority International®",
        badge: "Global Express",
        description: "Time-definite delivery in 1–3 business days to more than 220 countries and territories with door-to-door customs clearance.",
        speed: "1–3 Days Worldwide",
        featured: true,
      },
      {
        name: "FedEx Priority Puerto Rico®",
        badge: "Island Express",
        description: "Fast expedited parcel and document delivery to Puerto Rico with morning arrival windows.",
        speed: "1–2 Business Days",
      },
      {
        name: "FedEx Economy Puerto Rico®",
        badge: "Island Economy",
        description: "Economical, dependable delivery service for non-urgent shipments and larger cartons heading to Puerto Rico.",
        speed: "3–4 Business Days",
      },
      {
        name: "FedEx Priority Canada®",
        badge: "Canada Express",
        description: "Expedited next-day or 2-day delivery across Canadian metropolitan and business centers.",
        speed: "1–2 Days Canada",
      },
      {
        name: "FedEx Ground Canada®",
        badge: "Canada Ground",
        description: "Cost-effective day-definite delivery across all Canadian provinces with seamless cross-border processing.",
        speed: "2–7 Days Canada",
      },
    ],
    shippableItemsTitle: "When It Comes To Shipping via FedEx In Odenton, MD, We Are Your Go-To Source...",
    shippableItemsSubtitle:
      "From delicate technology to irreplaceable family heirlooms, our certified packing experts safeguard your shipment every mile of the way.",
    shippableCategories: [
      {
        categoryName: "Computers & Technology",
        icon: "laptop",
        items: ["PC and laptop computers", "Medical devices & sensors", "Electronics & microchips", "Video consoles & gaming rigs"],
      },
      {
        categoryName: "Important Documents & Media",
        icon: "file-text",
        items: ["Urgent legal documents", "Contracts & notarized forms", "Architectural plans", "Passport & visa papers"],
      },
      {
        categoryName: "Auto Parts & Hardware",
        icon: "wrench",
        items: ["Auto parts & engine gear", "Office equipment & supplies", "Commercial product samples", "Industrial mechanical tools"],
      },
      {
        categoryName: "Fine Art & Antiques",
        icon: "palette",
        items: ["Framed artwork & paintings", "Fragile & delicate items", "Antiques & vintage decor", "Sculptures & pottery"],
      },
      {
        categoryName: "Jewelry & Valuables",
        icon: "gem",
        items: ["Precious jewelry & watches", "High-value heirlooms", "Delicate collectibles", "Designer goods & accessories"],
      },
      {
        categoryName: "Gifts & Celebrations",
        icon: "gift",
        items: ["Birthday presents & toys", "Graduation gifts & diplomas", "Clothing & household goods", "Care packages & seasonal items"],
      },
    ],
    packingCommitment: {
      title: "Packaging and Shipping Experts — It's Handled!",
      quote: "Don't forget, here at Parcel & Office Solutions we are packaging and shipping experts—bring us your delicate, valuable, time-sensitive and sentimental items.",
      body: "We have shipping boxes for virtually anything, and we'll pack it with TLC to make sure it arrives in perfect condition. We stock heavy-duty corrugated cartons, antistatic cushioning, bubble packaging, and custom-fit materials designed to withstand airline cargo and overland transit.",
      features: [
        "Certified carrier-grade packing guidelines",
        "Over 30 standard & specialized box sizes in stock",
        "Custom box re-sizing for unusual items",
        "Declared value & parcel protection documentation",
      ],
    },
    todayCutoff: {
      expressTime: "6:00 PM",
      groundTime: "4:00 PM",
      notice: "Packages brought in before today's cutoff are guaranteed to depart on tonight's FedEx route.",
    },
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: "Frequently Asked Questions About FedEx Shipping",
    faqDescription:
      "Got questions about drop-offs, pickup deadlines, or official packaging? Here is what you need to know:",
    faqs: [
      {
        question: "What are today's FedEx pickup cutoffs at your Odenton store?",
        answer:
          "Our daily FedEx Express cutoff is 6:00 PM and FedEx Ground is 4:00 PM Monday through Friday. Bring your package before these times to ensure same-day departure.",
      },
      {
        question: "Can I drop off pre-labeled FedEx packages at Parcel & Office Solutions?",
        answer:
          "Yes! We are an authorized drop-off location. Bring your pre-paid FedEx Express or Ground packages and we will scan them in and provide you with an official physical receipt for tracking.",
      },
      {
        question: "Do you supply FedEx boxes and packaging materials?",
        answer:
          "Yes! We stock official FedEx Express envelopes, paks, and boxes (free with FedEx Express shipments) as well as dozens of sturdy brown shipping boxes and packing materials for FedEx Ground and fragile items.",
      },
      {
        question: "Can you help me package fragile or high-value items?",
        answer:
          "Absolutely. Our staff are professionally trained in protective packaging for electronics, glassware, framed art, musical instruments, and gifts.",
      },
    ],
  },

  "ups-shipping": {
    slug: "ups-shipping",
    carrierType: "ups",
    category: "Shipping & Mailing",
    title: "UPS Shipping in Odenton, MD",
    shortTitle: "UPS Shipping",
    breadcrumbTitle: "UPS Shipping",
    headline: "UPS Authorized Shipping Outlet in Odenton, MD",
    subheadline: "Complete UPS Air, Ground, and International Shipping Services Under One Roof",
    eyebrow: "Authorized UPS Shipping Outlet (ASO)",
    heroImage: "/images/slider2.jpg",
    heroBadge: "Authorized UPS Shipping Outlet",
    aboutLabel: "ABOUT OUR SERVICE",
    aboutTitle: "Fast, Reliable UPS Shipping at Competitive Rates",
    ctaQuoteLabel: "Get a UPS Shipping Quote",
    ctaQuoteHref: "tel:+14105193131",
    ctaStoreLabel: "Visit Our Store",
    ctaStoreHref: "/contact",
    quickPerks: [
      "Today's Express Cutoff: 5:30 PM",
      "Free Drop-Off Counter Scans",
      "Shipping and Packaging Assistance",
    ],
    introParagraphs: [
      "Parcel & Office Solutions is your neighborhood UPS Authorized Shipping Outlet in Odenton, MD. Whether you need overnight delivery across the United States or reliable ground delivery for commercial packages, we have you covered.",
      "Drop off your UPS returns, ship outbound parcels, or let our staff professionally pack your fragile items for guaranteed transit safe arrival.",
    ],
    keyHighlights: [
      {
        title: "Daily UPS Pickup",
        description: "Air departs at 5:30 PM • Ground departs at 5:00 PM Monday through Friday.",
        icon: "truck",
      },
      {
        title: "UPS Drop-Off Station",
        description: "Free drop-off with printed receipt for all pre-labeled UPS packages and Amazon returns.",
        icon: "barcode",
      },
      {
        title: "UPS Next Day Air® & Ground",
        description: "Full suite of reliable domestic express and ground services.",
        icon: "clock",
      },
      {
        title: "Professional Packaging",
        description: "Certified materials designed to meet all UPS carrier guidelines.",
        icon: "package",
      },
    ],
    servicesOfferedTitle: "UPS Shipping Solutions Available In-Store:",
    servicesOfferedSubtitle: "Select the ideal speed and pricing for your domestic and global shipments.",
    servicesList: [
      {
        name: "UPS Next Day Air®",
        badge: "Next Morning",
        description: "Guaranteed next-business-day delivery by 10:30 a.m. or 12:00 noon depending on destination.",
        speed: "Next Business Morning",
        featured: true,
      },
      {
        name: "UPS 2nd Day Air®",
        badge: "2-Day Delivery",
        description: "Guaranteed 2-business-day delivery throughout the 50 US states and Puerto Rico.",
        speed: "2 Business Days",
        featured: true,
      },
      {
        name: "UPS 3 Day Select®",
        badge: "3-Day Value",
        description: "Guaranteed delivery by the end of the third business day throughout the contiguous 48 states.",
        speed: "3 Business Days",
      },
      {
        name: "UPS Ground®",
        badge: "Economical",
        description: "Day-definite ground delivery in 1–5 business days to businesses and homes.",
        speed: "1–5 Business Days",
        featured: true,
      },
      {
        name: "UPS Worldwide Express®",
        badge: "International",
        description: "Guaranteed delivery in 1–3 business days to over 140 countries and territories.",
        speed: "1–3 Days Worldwide",
      },
    ],
    shippableItemsTitle: "Ship With Confidence via UPS at Parcel & Office Solutions",
    shippableItemsSubtitle: "Bring in your everyday packages, e-commerce sales, business documents, and fragile shipments.",
    shippableCategories: [
      {
        categoryName: "Electronics & Tech",
        icon: "laptop",
        items: ["Laptops & PC monitors", "Smartphones & tablets", "Audio equipment", "Office technology"],
      },
      {
        categoryName: "E-Commerce & Merchandise",
        icon: "shopping-bag",
        items: ["Online retail returns", "Apparel & shoes", "Customer product shipments", "Trade samples"],
      },
      {
        categoryName: "Fragile & Gifts",
        icon: "gift",
        items: ["Holiday gifts & toys", "Glassware & ceramics", "Family keepsakes", "Kitchenware"],
      },
    ],
    packingCommitment: {
      title: "We Box It, Cushion It, and Ship It Right",
      quote: "Quality packing supplies make all the difference in delivering your goods safely.",
      body: "Our staff will inspect, cushion, and box your items according to strict UPS standards. Rest easy knowing your items are packed to withstand bumps and drops.",
      features: [
        "UPS Authorized Shipping Outlet counter scans",
        "Convenient drop-off for Amazon and retail returns",
        "Direct package tracking & signature options",
      ],
    },
    todayCutoff: {
      expressTime: "5:30 PM",
      groundTime: "5:00 PM",
      notice: "Daily UPS air and ground pickups arrive promptly every weekday evening.",
    },
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: "Frequently Asked Questions About UPS Shipping",
    faqDescription:
      "Got questions about pre-paid drop-offs, daily pickup times, or packing assistance? Here is what you need to know:",
    faqs: [
      {
        question: "Can I drop off pre-paid UPS packages here?",
        answer: "Yes! We accept all pre-labeled UPS packages and drop-offs at no charge, providing you with a scan receipt.",
      },
      {
        question: "What are your daily UPS pickup times?",
        answer: "UPS Air pickups are at 5:30 PM and UPS Ground pickups are at 5:00 PM, Monday through Friday.",
      },
    ],
  },

  "dhl-shipping": {
    slug: "dhl-shipping",
    carrierType: "dhl",
    category: "Shipping & Mailing",
    title: "DHL Shipping in Odenton, MD",
    shortTitle: "DHL Shipping",
    breadcrumbTitle: "DHL Shipping",
    headline: "DHL Express International Courier in Odenton, MD",
    subheadline:
      "Fast, Reliable Worldwide Courier and Document Delivery Across 220+ Countries and Territories.",
    eyebrow: "Authorized DHL Express ServicePoint",
    heroImage: "/images/slider3.jpg",
    heroBadge: "Authorized DHL Express ServicePoint",
    aboutLabel: "ABOUT OUR SERVICE",
    aboutTitle: "Fast, Reliable DHL Shipping at Competitive Rates",
    ctaQuoteLabel: "Get a DHL Shipping Quote",
    ctaQuoteHref: "tel:+14105193131",
    ctaStoreLabel: "Visit Our Store",
    ctaStoreHref: "/contact",
    quickPerks: [
      "Today's Express Cutoff: 5:30 PM",
      "Free Drop-Off Counter Scans",
      "Shipping and Packaging Assistance",
    ],
    introParagraphs: [
      "Need to send important documents or packages abroad? Parcel & Office Solutions offers DHL Express shipping services from Odenton, MD, helping individuals and businesses send shipments to international destinations.",
      "From urgent documents to business packages, our team can help you explore available shipping options, prepare your shipment, and understand applicable customs documentation.",
    ],
    keyHighlights: [
      {
        title: "Daily DHL Pickup",
        description:
          "Convenient drop-off with scheduled carrier pickup, subject to the confirmed pickup schedule.",
        icon: "truck",
        badge: "Scheduled Pickup",
      },
      {
        title: "International Shipping",
        description:
          "Access available DHL Express services for destinations around the world.",
        icon: "globe",
        badge: "220+ Countries",
      },
      {
        title: "Customs Documentation Assistance",
        description:
          "Get help understanding commercial invoices and other required shipping documents.",
        icon: "file-text",
        badge: "Paperwork Help",
      },
      {
        title: "Shipment Tracking",
        description:
          "Track eligible shipments using the tracking details provided by DHL.",
        icon: "barcode",
        badge: "Live Milestones",
      },
    ],
    servicesOfferedLabel: "COMPREHENSIVE CARRIER SOLUTIONS",
    servicesOfferedTitle: "DHL International Courier Services In-Store",
    servicesOfferedSubtitle:
      "Find a DHL shipping option that fits your delivery needs. Available services, delivery estimates, and rates depend on the destination, shipment details, and DHL service availability.",
    servicesCtaLabel: "Explore DHL Shipping Options",
    servicesCtaHref: "tel:+14105193131",
    servicesList: [
      {
        name: "DHL Express Worldwide",
        badge: "Top Global",
        description:
          "For international documents and packages requiring reliable express delivery.",
        speed: "1–3 Business Days",
        featured: true,
      },
      {
        name: "DHL Express 12:00",
        badge: "Midday Arrival",
        description:
          "A time-definite delivery option for eligible destinations where the service is available.",
        speed: "Next Business Day Midday",
      },
      {
        name: "DHL Document and Package Shipping",
        badge: "Customs Ready",
        description:
          "Send eligible documents and packages internationally with appropriate shipping labels and customs paperwork.",
        speed: "1–2 Days Worldwide",
        featured: true,
      },
    ],
    shippableItemsLabel: "WHAT WE SHIP",
    shippableItemsTitle: "International Items Commonly Shipped via DHL",
    shippableItemsSubtitle:
      "We can help you prepare eligible international shipments for personal, educational, and business purposes. Shipment acceptance depends on DHL rules, destination-country regulations, and customs requirements.",
    shippableImportantNotice:
      "Important: Restricted items, dangerous goods, food, medicines, and certain electronic products may require special approval or may not be accepted. Confirm eligibility before shipping.",
    shippableCategories: [
      {
        categoryName: "International Documents",
        icon: "file-text",
        items: [
          "Passports and immigration paperwork, where permitted",
          "University applications and transcripts",
          "Legal contracts and business documents",
          "Financial and commercial paperwork",
        ],
      },
      {
        categoryName: "Commercial Cargo and Goods",
        icon: "package",
        items: [
          "Business inventory and samples",
          "Apparel and textiles",
          "Eligible electronics and accessories",
          "Gifts and personal belongings",
        ],
      },
    ],
    destinationsLabel: "GLOBAL SHIPPING",
    destinationsTitle: "Send Documents and Packages Around the World",
    destinationsSubtitle:
      "DHL Express connects shippers with international destinations through its global delivery network. Whether you're sending business paperwork, personal documents, or eligible parcels, destination availability and transit times depend on the selected service.",
    destinationsCtaLabel: "Get an International Shipping Quote",
    requirementsLabel: "SHIPMENT PREPARATION",
    requirementsTitle: "What You Need Before Shipping With DHL",
    requirementsSubtitle:
      "Prepare the essential shipment details before visiting the store.",
    requirementsNotice:
      "Our team can help you understand the shipping information and documentation needed for your shipment. Final acceptance and customs requirements are determined by DHL and the destination country.",
    processLabel: "HOW IT WORKS",
    processTitle: "Ship With DHL in Four Simple Steps",
    cutoffTrackingLabel: "CUTOFF TIMES & TRACKING",
    cutoffTrackingTitle: "Know Your Shipping Cutoff and Track Your Package",
    cutoffTrackingSubtitle:
      "Planning your shipment around the daily pickup schedule can help you prepare for dispatch. Actual pickup times, carrier acceptance, transit estimates, and delivery dates may vary.",
    cutoffTrackingCtaLabel: "Track Your DHL Shipment",
    cutoffTrackingCtaHref:
      "https://www.dhl.com/us-en/home/tracking/tracking-express.html",
    whyChooseLabel: "WHY CHOOSE US",
    whyChooseTitle: "Convenient International Shipping Support in Odenton, MD",
    whyChooseSubtitle:
      "Why Choose Parcel & Office Solutions for DHL Shipping?",
    whyChooseNotice:
      "Avoid promising guaranteed delivery dates, the lowest rates, or specific insurance coverage unless these claims have been verified. Actual delivery dates and rates are determined by carrier transit schedules and customs clearance.",
    whyChooseItems: [
      {
        title: "In-Store Assistance",
        description: "Get help understanding the shipping process.",
        icon: "users",
      },
      {
        title: "Multiple Shipping Needs",
        description:
          "Explore options for eligible documents and packages.",
        icon: "package",
      },
      {
        title: "Customs Paperwork Guidance",
        description:
          "Understand common international shipping documentation requirements.",
        icon: "file-text",
      },
      {
        title: "Convenient Drop-Off",
        description:
          "Visit one location to prepare and submit your shipment.",
        icon: "map-pin",
      },
      {
        title: "Tracking Information",
        description:
          "Keep the shipment details needed to monitor delivery.",
        icon: "barcode",
      },
    ],
    customerAssistanceLabel: "CUSTOMER ASSISTANCE",
    customerAssistanceTitle: "Have a Question About DHL Express Shipping?",
    customerAssistanceSubtitle:
      "Need help preparing an international shipment, understanding customs paperwork, or comparing available delivery options? Contact our team or visit our store in Odenton, MD.",
    packingCommitment: {
      title: "Global Transit Requires High-Grade Protection",
      quote: "International flights and customs inspections demand secure, verified packaging.",
      body: "We provide reinforced cartons and proper sealing to protect your items on international routes.",
      features: [
        "Free official DHL Express envelopes and packaging",
        "Expert export declaration guidance",
        "Direct tracking and proof-of-delivery receipts",
      ],
    },
    todayCutoff: {
      expressTime: "5:30 PM",
      notice: "DHL Express departs Odenton daily at 5:30 PM Monday through Friday.",
    },
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: "Frequently Asked Questions About DHL Shipping",
    faqDescription:
      "Got questions about DHL Express international shipments, daily pickup cutoffs, or customs paperwork? Here is what you need to know:",
    faqs: [
      {
        question: "Do you help with international customs paperwork?",
        answer: "Yes! We help you fill out commercial invoices, describe contents accurately, and ensure customs compliance.",
      },
      {
        question: "When is the daily DHL pickup cutoff?",
        answer: "DHL pickups occur at 5:30 PM Monday through Friday.",
      },
    ],
  },
};

/**
 * Fallback generator for other services in site-data.ts
 */
export function getServiceDetail(slug: string): ServiceDetail {
  if (SERVICES_DETAILS[slug]) {
    return SERVICES_DETAILS[slug];
  }

  // Graceful generic generator for any other slug
  const titleFormatted = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    carrierType: "office",
    category: "Business & Personal Services",
    title: `${titleFormatted} in Odenton, MD`,
    headline: `${titleFormatted} in Odenton, MD`,
    subheadline: `Professional, Reliable ${titleFormatted} at Parcel & Office Solutions`,
    eyebrow: "Trusted Neighborhood Business & Shipping Center",
    heroImage: "/images/courier-associate-packing.jpg",
    heroBadge: "Odenton Premier Center",
    introParagraphs: [
      `At Parcel & Office Solutions in Odenton, MD, we offer complete and professional ${titleFormatted} tailored to individuals and local businesses alike.`,
      "Our trained team is dedicated to saving you time and money with attentive, five-star customer care right beside Food Lion Supermarket on Piney Orchard Parkway.",
    ],
    keyHighlights: [
      {
        title: "Fast Turnaround",
        description: "Quick in-and-out service with minimal wait times.",
        icon: "clock",
      },
      {
        title: "Experienced Team",
        description: "Professional staff ready to assist with all your questions and requirements.",
        icon: "shield-check",
      },
      {
        title: "Competitive Pricing",
        description: "Affordable rates with transparent pricing for all services.",
        icon: "tag",
      },
      {
        title: "One-Stop Convenience",
        description: "Combine shipping, printing, scanning, and business needs under one roof.",
        icon: "layers",
      },
    ],
    servicesOfferedTitle: `Our ${titleFormatted} Capabilities:`,
    servicesOfferedSubtitle: `Everything you need to get the job done right in Odenton, MD.`,
    servicesList: [
      {
        name: `Standard ${titleFormatted}`,
        badge: "In-Store",
        description: `High-quality, reliable ${titleFormatted.toLowerCase()} customized for your personal or commercial requirements.`,
        speed: "Same-Day / While You Wait",
        featured: true,
      },
      {
        name: `Bulk & Commercial Solutions`,
        badge: "Business",
        description: `Discounted volume rates and custom account options for local businesses and contractors.`,
        speed: "Tailored Turnaround",
      },
    ],
    shippableItemsTitle: `Common Uses for ${titleFormatted}`,
    shippableItemsSubtitle: `Serving residents, entrepreneurs, families, and organizations in Odenton and Anne Arundel County.`,
    shippableCategories: [
      {
        categoryName: "Personal & Family",
        icon: "heart",
        items: ["Personal records", "Family projects", "Special occasions", "Urgent paperwork"],
      },
      {
        categoryName: "Small Business & Corporate",
        icon: "briefcase",
        items: ["Client deliverables", "Marketing materials", "Official records", "Daily operations"],
      },
    ],
    packingCommitment: {
      title: "Quality You Can Count On",
      quote: "We take care of the details so you can focus on what matters most.",
      body: "Whether it is copying, notarizing, mailing, or packaging, we handle your items with top-tier care and precision.",
      features: [
        "Convenient location beside Food Lion Supermarket",
        "Ample free parking right in front of the store",
        "Friendly, neighborhood customer service",
      ],
    },
    todayCutoff: {
      notice: "Open Monday to Friday 9:30 AM – 6:30 PM, Saturday 10:00 AM – 3:30 PM.",
    },
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: `Frequently Asked Questions About ${titleFormatted}`,
    faqDescription: `Got questions about our ${titleFormatted.toLowerCase()} in Odenton, MD? Here is what you need to know:`,
    faqs: [
      {
        question: `How quickly can I get ${titleFormatted.toLowerCase()} done?`,
        answer: "Most services are completed while you wait or within the same business day. Feel free to call us at (410) 519-3131 to confirm timelines.",
      },
      {
        question: "Do I need an appointment?",
        answer: "No appointment needed! Walk-ins are always welcome during our normal business hours.",
      },
    ],
  };
}
