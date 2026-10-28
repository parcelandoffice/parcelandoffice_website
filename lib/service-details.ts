import { SERVICES_MENU_CATEGORIES } from "./site-data";

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
    price?: string;
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
  requirementsItems?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  processLabel?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: {
    step: string;
    title: string;
    description: string;
  }[];
  checklistTitle?: string;
  checklistSubtitle?: string;
  checklistItems?: {
    title: string;
    description: string;
    required?: boolean;
  }[];
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

  "professional-packing": {
    slug: "professional-packing",
    carrierType: "office",
    category: "Packing",
    title: "Professional Packing in Odenton, MD",
    shortTitle: "Professional Packing",
    breadcrumbTitle: "Professional Packing",
    headline: "Professional Packing Services in Odenton, MD",
    subheadline:
      "Expert Custom Packaging, Fragile Item Cushioning, and Heavy-Duty Corrugated Boxing for Guaranteed Transit Protection.",
    eyebrow: "Certified Packaging Specialists",
    heroImage: "/images/courier-associate-packing.jpg",
    heroBadge: "Certified Packing Center",
    aboutLabel: "ABOUT OUR PACKING SERVICE",
    aboutTitle: "We Pack It With TLC So It Arrives In Perfect Condition",
    ctaQuoteLabel: "Get a Packing Quote",
    ctaQuoteHref: "tel:+14105193131",
    ctaStoreLabel: "Visit Our Store",
    ctaStoreHref: "/contact-us",
    quickPerks: [
      "30+ Box Sizes in Stock",
      "Fragile & Sentimental TLC",
      "Carrier-Approved Transit Prep",
    ],
    introParagraphs: [
      "At Parcel & Office Solutions, we understand that what you are shipping is often irreplaceable. Whether it's delicate china, high-end electronics, family heirlooms, or original artwork, our certified packaging professionals use industry-leading techniques to protect your valuables.",
      "Don't risk heartbreak or shipping claims by packing fragile items yourself with recycled or worn boxes. We stock heavy-duty corrugated cartons, antistatic cushioning, bubble packaging, and custom-fit materials designed to withstand overland and airline cargo transit.",
      "Bring us your unwrapped items, and we'll take care of every layer — from inner cushioning to corner reinforcement and heavy-duty tape sealing.",
    ],
    keyHighlights: [
      {
        title: "Over 30 Box Sizes in Stock",
        description: "From small jewelry cubes to heavy-duty wardrobe and guitar cartons.",
        icon: "package",
        badge: "In Stock Daily",
      },
      {
        title: "TLC Fragile Cushioning",
        description: "Custom bubble wrap, foam wrap, packing peanuts, and anti-static electronics protection.",
        icon: "heart",
        badge: "Certified TLC",
      },
      {
        title: "Carrier Guidelines Compliant",
        description: "Packaged according to strict FedEx, UPS, DHL, and USPS transit standards.",
        icon: "shield",
        badge: "Carrier Approved",
      },
      {
        title: "Custom Box Re-Sizing",
        description: "Oddly shaped or oversized items? We custom-build cartons tailored to your item's dimensions.",
        icon: "scissors",
        badge: "Custom Fit",
      },
    ],
    servicesOfferedLabel: "SPECIALIZED PACKING TIERS",
    servicesOfferedTitle: "Comprehensive Packing Options Tailored to Your Goods",
    servicesOfferedSubtitle: "Select the level of packaging and protection designed for your items.",
    servicesList: [
      {
        name: "Standard Package Packing",
        badge: "Everyday Items",
        description: "Ideal for clothes, books, durable household goods, and everyday shipments in sturdy corrugated boxes.",
        speed: "5–10 Minutes",
        featured: false,
        price: "Affordable Standard Rates",
      },
      {
        name: "Fragile & Delicate TLC Packing",
        badge: "Double-Boxed",
        description: "Multi-layer bubble wrap, foam corner protectors, and double-boxing for glassware, pottery, and heirlooms.",
        speed: "10–15 Minutes",
        featured: true,
        price: "Premium Protection",
      },
      {
        name: "Electronics & Tech Gear Packaging",
        badge: "Anti-Static",
        description: "Anti-static bubble cushioning, monitor screen protection, and custom boxing for PCs, laptops, and consoles.",
        speed: "15–20 Minutes",
        featured: true,
        price: "Tech Shield Guard",
      },
      {
        name: "Artwork, Mirrors & Canvas Crating",
        badge: "Specialty Fit",
        description: "Telescoping picture boxes, acid-free surface wraps, and reinforced corner guards for framed art and mirrors.",
        speed: "Same-Day While You Wait",
        featured: false,
        price: "Specialty Sizes",
      },
    ],
    shippableItemsLabel: "WHAT WE COMMONLY PACK",
    shippableItemsTitle: "Items We Regularly Pack & Prepare for Transit",
    shippableItemsSubtitle: "Bring your unwrapped items to our Odenton counter and let our experts handle the rest.",
    shippableImportantNotice: "We supply all packaging materials on site so you never have to worry about buying tape or bubble wrap.",
    shippableCategories: [
      {
        categoryName: "Fragile China & Glassware",
        icon: "heart",
        items: [
          "Fine porcelain & china sets",
          "Glass vases & stemware",
          "Ceramic dishes & pottery",
          "Chandeliers & lighting fixtures",
        ],
      },
      {
        categoryName: "Fine Art & Framed Works",
        icon: "palette",
        items: [
          "Oil & acrylic canvas paintings",
          "Framed photography & diplomas",
          "Sculptures & statues",
          "Mirrors & decorative glass",
        ],
      },
      {
        categoryName: "Electronics & High-Tech",
        icon: "laptop",
        items: [
          "Desktop computers & monitors",
          "Laptops, tablets & phones",
          "Audio amps & speakers",
          "Gaming systems & consoles",
        ],
      },
      {
        categoryName: "Musical Instruments & Sports",
        icon: "gift",
        items: [
          "Guitars, violins & brass instruments",
          "Golf clubs & sports equipment",
          "Skateboards & snowboards",
          "Bicycles & accessories",
        ],
      },
    ],
    processLabel: "HOW IT WORKS",
    processTitle: "Our Four-Step Professional Packing Process",
    processSubtitle: "Experience effortless, stress-free packing from the moment you step through our doors.",
    processSteps: [
      {
        step: "01",
        title: "Bring In Your Unwrapped Items",
        description: "No need to pack or tape anything. Just bring your loose items into our store beside Food Lion.",
      },
      {
        step: "02",
        title: "Inspection & Box Selection",
        description: "Our certified specialist evaluates weight, fragility, and dimensions to select the optimal corrugated box.",
      },
      {
        step: "03",
        title: "TLC Layering & Sealing",
        description: "We apply multi-layer cushioning, void-fill, and heavy-duty 3-inch pressure-sensitive adhesive tape.",
      },
      {
        step: "04",
        title: "Carrier Hand-Off & Receipt",
        description: "Ship right away via FedEx, UPS, DHL, or USPS with tracking and declared value coverage.",
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
      groundTime: "5:00 PM",
      notice: "Have your items packed and shipped on the same visit before evening carrier pickups.",
    },
    whyChooseLabel: "WHY CHOOSE US",
    whyChooseTitle: "Why Entrust Your Packing to Parcel & Office Solutions?",
    whyChooseSubtitle: "Save hours of time, eliminate packing stress, and ensure your shipments arrive intact.",
    whyChooseItems: [
      {
        title: "Certified Packaging Specialists",
        description: "Trained in the science of impact protection, vibration dampening, and compression resistance.",
        icon: "shield",
      },
      {
        title: "30+ Heavy-Duty Box Sizes",
        description: "Always the right fit for your item, reducing excessive dimensional weight costs.",
        icon: "package",
      },
      {
        title: "Convenient One-Stop Shop",
        description: "Pack and immediately ship via FedEx, UPS, DHL, or USPS under one roof.",
        icon: "map-pin",
      },
      {
        title: "Declared Value Protection",
        description: "We document and verify packaging standards for high-value and insured parcels.",
        icon: "barcode",
      },
      {
        title: "Friendly Neighborhood Care",
        description: "Personalized attention from our Odenton team who treats your belongings like family.",
        icon: "users",
      },
    ],
    customerAssistanceLabel: "PACKING ASSISTANCE",
    customerAssistanceTitle: "Have Questions About Packing an Unusual or Fragile Item?",
    customerAssistanceSubtitle: "Give us a call or visit our store. We'll examine your item and recommend the best protective solution.",
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: "Frequently Asked Questions About Professional Packing",
    faqDescription: "Everything you need to know about packing materials, drop-offs, and custom box fitting:",
    faqs: [
      {
        question: "Can I bring items that aren't packed at all?",
        answer: "Yes! In fact, we prefer you bring items unwrapped so our trained specialists can inspect them, wrap them properly with the right cushioning, and fit them into the perfect box size.",
      },
      {
        question: "Do you sell boxes and packing supplies separately?",
        answer: "Yes, we sell corrugated boxes, bubble wrap, packing peanuts, tape dispensers, and padded mailers directly for DIY packers.",
      },
      {
        question: "What carriers do you pack for?",
        answer: "Our packing standards meet and exceed requirements for FedEx, UPS, DHL, and the US Postal Service. You can ship with any carrier directly after packing.",
      },
      {
        question: "How much does professional packing cost?",
        answer: "Packing pricing depends on the box size, amount of cushioning material required, and item complexity. We provide transparent upfront pricing before starting.",
      },
    ],
  },

  "print-document-services": {
    slug: "print-document-services",
    carrierType: "office",
    category: "Printing & Document Services",
    title: "Print & Document Services in Odenton, MD",
    shortTitle: "Print & Document Services",
    breadcrumbTitle: "Printing Services",
    headline: "High-Quality Print & Document Services in Odenton, MD",
    subheadline:
      "Vibrant Color Printing, Fast Digital Copying, Presentation Binding, Laminating, and Marketing Collateral for Businesses and Individuals.",
    eyebrow: "Full-Service Document Printing Center",
    heroImage: "/images/printed-menu-showcase.jpg",
    heroBadge: "Digital Print Center",
    aboutLabel: "ABOUT OUR PRINT SERVICES",
    aboutTitle: "State-of-the-Art Digital Printing with Flawless Color & Clarity",
    ctaQuoteLabel: "Get a Printing Quote",
    ctaQuoteHref: "tel:+14105193131",
    ctaStoreLabel: "Visit Our Store",
    ctaStoreHref: "/contact-us",
    quickPerks: [
      "High-Speed Color & B/W",
      "Heavy Cardstocks & Gloss Finishes",
      "No Minimum Quantities",
    ],
    introParagraphs: [
      "Whether you need ten color flyers for an upcoming event or five hundred bound presentations for an executive boardroom meeting, Parcel & Office Solutions delivers commercial-grade digital printing right here in Odenton, MD.",
      "We utilize modern high-resolution digital production presses that reproduce deep, rich blacks and crisp, vibrant colors on a wide selection of premium paper stocks, text weights, and heavy cardstocks.",
      "From basic copying and PDF printing to full document binding, custom folding, laminating, and cutting, our team handles every project with precision and quick turnarounds.",
    ],
    keyHighlights: [
      {
        title: "High-Resolution Digital Presses",
        description: "Pin-sharp text, rich color gamuts, and consistent tone for flyers, resumes, and corporate reports.",
        icon: "printer",
        badge: "Up to 2400 DPI",
      },
      {
        title: "Booklet Binding & Laminating",
        description: "Comb binding, spiral coil binding, clear covers, cardstock backings, and thermal lamination.",
        icon: "layers",
        badge: "Full Finishing",
      },
      {
        title: "Heavy Stocks & Custom Paper",
        description: "Choose from 28lb bright white, 80lb/100lb glossy cardstock, linen textures, and pastel colors.",
        icon: "tag",
        badge: "Paper Selection",
      },
      {
        title: "Fast Turnaround — No Minimums",
        description: "Print 1 copy or 1,000 copies. Email your files or bring a USB flash drive for while-you-wait service.",
        icon: "clock",
        badge: "Same-Day Service",
      },
    ],
    servicesOfferedLabel: "PRINTING SOLUTIONS",
    servicesOfferedTitle: "Full Spectrum of Print & Document Capabilities",
    servicesOfferedSubtitle: "Explore our versatile printing formats, paper stocks, and professional bindery options.",
    servicesList: [
      {
        name: "Full-Color & B/W Digital Copies",
        badge: "High-Speed",
        description: "High-speed sheet-fed copying for training manuals, legal briefs, packets, and everyday paperwork.",
        speed: "While You Wait",
        featured: true,
        price: "From Single Pages to Bulk",
      },
      {
        name: "Brochures, Flyers & Menus",
        badge: "Marketing",
        description: "Vibrant tri-fold, bi-fold, or flat marketing flyers on premium glossy or matte cardstocks.",
        speed: "Same-Day / Next-Day",
        featured: true,
        price: "Custom Quantities",
      },
      {
        name: "Comb & Spiral Coil Binding",
        badge: "Presentations",
        description: "Professional plastic comb or durable spiral coil binding with clear protective front and vinyl back covers.",
        speed: "15–30 Minutes",
        featured: false,
        price: "Per Booklet",
      },
      {
        name: "Laminating & Precision Cutting",
        badge: "Finishing",
        description: "Durable thermal encapsulation for menus, badges, ID cards, signs, and reference sheets.",
        speed: "While You Wait",
        featured: false,
        price: "All Standard Sizes",
      },
    ],
    shippableItemsLabel: "CAPABILITIES & FORMATS",
    shippableItemsTitle: "Popular Print Materials & Document Types",
    shippableItemsSubtitle: "Serving Odenton area contractors, schools, healthcare providers, and local businesses.",
    shippableImportantNotice: "We accept PDF, DOCX, JPG, PNG, and TIFF formats via USB, email, or direct walk-in.",
    shippableCategories: [
      {
        categoryName: "Corporate & Commercial",
        icon: "briefcase",
        items: [
          "Business reports & proposals",
          "Sales brochures & product sheets",
          "Employee handbooks & manuals",
          "Invoices, receipts & forms",
        ],
      },
      {
        categoryName: "Marketing & Promotional",
        icon: "file-text",
        items: [
          "Restaurant & takeout menus",
          "Event flyers & promotional hand-outs",
          "Postcards & mailers",
          "Real estate feature sheets",
        ],
      },
      {
        categoryName: "Personal & Academic",
        icon: "heart",
        items: [
          "Professional resumes & CVs",
          "Funeral programs & memorial booklets",
          "Church bulletins & newsletters",
          "School projects & thesis papers",
        ],
      },
      {
        categoryName: "Finishing & Bindery",
        icon: "layers",
        items: [
          "Lamination (Letter, Legal, Tabloid)",
          "Plastic comb & coil binding",
          "Saddle-stitch booklet stapling",
          "Precision machine cutting & scoring",
        ],
      },
    ],
    processLabel: "EASY ORDER WORKFLOW",
    processTitle: "How to Print Documents with Us in Four Easy Steps",
    processSubtitle: "Skip the complicated online setup — get your files printed quickly and accurately.",
    processSteps: [
      {
        step: "01",
        title: "Send or Bring Your Files",
        description: "Email your documents to us in advance or bring them on a USB flash drive to our store counter.",
      },
      {
        step: "02",
        title: "Select Paper & Finishing",
        description: "Choose your paper weight, color options, single/double sided, and any binding or lamination.",
      },
      {
        step: "03",
        title: "Proof & Digital Print",
        description: "We review a test proof before running the batch to guarantee razor-sharp resolution and color alignment.",
      },
      {
        step: "04",
        title: "Pickup or Ship Out",
        description: "Pick up your packaged prints in-store, or let us courier them directly to your client or office.",
      },
    ],
    packingCommitment: {
      title: "Commercial-Grade Quality Guarantee",
      quote: "Every page matters. We inspect every print job for sharpness, bleed accuracy, and color fidelity.",
      body: "Our high-speed digital printers ensure crisp text, vibrant photographs, and smudge-free laser output. Whether it's a single resume or 500 presentation booklets, you'll receive professional quality every time.",
      features: [
        "High-definition digital laser reproduction",
        "Wide selection of paper stocks in stock",
        "Precision finishing, folding, and trimming",
        "Direct email and walk-in flash drive support",
      ],
    },
    todayCutoff: {
      notice: "Most print jobs submitted before 4:00 PM are ready for same-day pickup.",
    },
    whyChooseLabel: "WHY CHOOSE US",
    whyChooseTitle: "Why Choose Parcel & Office Solutions for Printing?",
    whyChooseSubtitle: "Local convenience, commercial equipment, and attentive personal service right in Odenton.",
    whyChooseItems: [
      {
        title: "Commercial-Grade Equipment",
        description: "Faster and far higher quality than home desktop inkjet printers.",
        icon: "printer",
      },
      {
        title: "No Minimum Orders",
        description: "Order just 1 page or hundreds — pay only for what you actually need.",
        icon: "tag",
      },
      {
        title: "Complete In-House Finishing",
        description: "Binding, cutting, laminating, and folding all handled under one roof.",
        icon: "layers",
      },
      {
        title: "Same-Day Turnaround Available",
        description: "Fast turnaround times so you never miss an urgent deadline.",
        icon: "clock",
      },
      {
        title: "Print & Ship Under One Roof",
        description: "Print your documents and immediately mail them via FedEx, UPS, or USPS.",
        icon: "package",
      },
    ],
    customerAssistanceLabel: "PRINT ASSISTANCE",
    customerAssistanceTitle: "Have a Custom Print Project or Need a Quote?",
    customerAssistanceSubtitle: "Contact our printing team with your file details, page counts, and finishing requirements.",
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: "Frequently Asked Questions About Print & Document Services",
    faqDescription: "Answers to common questions regarding formats, turnarounds, and binding options:",
    faqs: [
      {
        question: "What file formats do you accept for printing?",
        answer: "We recommend saving your files as PDF for the highest fidelity. We also accept Microsoft Word, PowerPoint, Excel, JPG, PNG, and TIFF formats.",
      },
      {
        question: "Can I email my files before coming to the store?",
        answer: "Yes! You can email your files to contact@parcelofficesolutions.com with your instructions (color vs. B/W, quantity, paper type) and we will have them ready for pickup.",
      },
      {
        question: "Do you have cardstock and specialty papers in stock?",
        answer: "Yes, we stock various paper weights from 20lb standard copy paper up to 80lb and 100lb heavy cover cardstock in glossy, matte, and pastel finishes.",
      },
      {
        question: "Can you bind multi-page presentations and booklets?",
        answer: "Yes, we offer plastic comb and spiral coil binding complete with clear protective front covers and durable vinyl backings.",
      },
    ],
  },

  "digital-fingerprinting": {
    slug: "digital-fingerprinting",
    carrierType: "office",
    category: "Business & Personal Services",
    title: "Digital Fingerprinting in Odenton, MD",
    shortTitle: "Digital Fingerprinting",
    breadcrumbTitle: "Digital Fingerprinting",
    headline: "Certified Digital Fingerprinting in Odenton, MD",
    subheadline:
      "Fast, Inkless Live Scan Fingerprinting for State Background Checks, Licensing, Security Clearances, and Pre-Employment.",
    eyebrow: "Authorized Live Scan Fingerprint Provider",
    heroImage: "/images/small-biz-owner.jpg",
    heroBadge: "Certified Live Scan Provider",
    aboutLabel: "ABOUT OUR FINGERPRINTING SERVICE",
    aboutTitle: "State-Approved Electronic Fingerprint Capture with Instant Submission",
    ctaQuoteLabel: "Get Fingerprinting Info",
    ctaQuoteHref: "tel:+14105193131",
    ctaStoreLabel: "Visit Our Store",
    ctaStoreHref: "/contact-us",
    quickPerks: [
      "Walk-Ins Welcome — No Appt Needed",
      "Ink-Free Optical Scanning",
      "Instant Electronic CJIS/State Submission",
    ],
    introParagraphs: [
      "Need official fingerprinting for Maryland state licensing, security clearances, childcare certification, or pre-employment background checks? Parcel & Office Solutions provides authorized digital Live Scan fingerprinting right here in Odenton, MD.",
      "Our state-of-the-art optical scanners capture pristine, smudge-free digital fingerprint images without messy black ink. The system immediately checks image quality against strict state and federal forensic standards to ensure your prints will not be rejected.",
      "Once captured, your fingerprints are securely transmitted electronically to the Maryland Criminal Justice Information System (CJIS) and FBI, accelerating your background check turnaround.",
    ],
    keyHighlights: [
      {
        title: "State-Certified Live Scan System",
        description: "Official electronic capture authorized for Maryland CJIS and FBI criminal background checks.",
        icon: "fingerprint",
        badge: "CJIS Approved",
      },
      {
        title: "Inkless Optical Precision",
        description: "Clean, mess-free digital scanning that verifies roll quality and clarity in real time.",
        icon: "shield",
        badge: "Zero Mess",
      },
      {
        title: "Walk-Ins Always Welcome",
        description: "No need to schedule weeks in advance. Visit our Odenton center during normal business hours.",
        icon: "clock",
        badge: "No Appt Needed",
      },
      {
        title: "Fast 10-Minute Service",
        description: "Most fingerprinting sessions take less than 10 minutes from check-in to official receipt.",
        icon: "sparkles",
        badge: "Quick In & Out",
      },
    ],
    servicesOfferedLabel: "FINGERPRINTING SOLUTIONS",
    servicesOfferedTitle: "Official Fingerprinting for All Certification Needs",
    servicesOfferedSubtitle: "Approved for healthcare, education, real estate, security, and government applications.",
    servicesList: [
      {
        name: "Maryland State CJIS Background Check",
        badge: "State Level",
        description: "Electronic Live Scan submission directly to Maryland Criminal Justice Information System for state licensing.",
        speed: "10 Minutes In-Store",
        featured: true,
        price: "Official State Rates",
      },
      {
        name: "FBI Federal Background Check",
        badge: "Federal Level",
        description: "Combined CJIS and FBI electronic submission for federal security clearances, immigration, or multi-state licensing.",
        speed: "Instant Electronic Transfer",
        featured: true,
        price: "State + FBI Combined",
      },
      {
        name: "Standard FD-258 Ink Fingerprint Cards",
        badge: "Hardcopy Card",
        description: "Physical fingerprinting on official FBI FD-258 cards for out-of-state licensing, FINRA, or federal submissions.",
        speed: "While You Wait",
        featured: false,
        price: "Per Card Printed",
      },
      {
        name: "Employment & Volunteer Screening",
        badge: "Organizations",
        description: "Fingerprinting for teachers, daycares, healthcare workers, eldercare, and youth sports coaches.",
        speed: "Fast Group or Individual",
        featured: false,
        price: "Group Rates Available",
      },
    ],
    checklistTitle: "WHAT TO BRING FOR FINGERPRINTING",
    checklistSubtitle: "Ensure you have the required documents before your visit to ensure a smooth, compliant session.",
    checklistItems: [
      {
        title: "Valid Government-Issued Photo ID",
        description: "Current Driver's License, State ID Card, US Passport, or Military ID (must not be expired).",
        required: true,
      },
      {
        title: "Agency Authorization & ORI Number",
        description: "Your employer, licensing board, or state agency will provide an ORI number and Authorization code.",
        required: true,
      },
      {
        title: "Reason for Fingerprinting / Form",
        description: "Bring the specific Live Scan pre-registration form or agency instructions packet provided to you.",
        required: true,
      },
      {
        title: "Payment Method",
        description: "We accept Visa, MasterCard, Amex, Discover, and cash for state fees and rolling charges.",
        required: true,
      },
    ],
    shippableItemsLabel: "ELIGIBLE LICENSES & USES",
    shippableItemsTitle: "Common Reasons for Fingerprinting in Maryland",
    shippableItemsSubtitle: "Serving applicants across Odenton, Fort Meade, Crofton, Hanover, and Anne Arundel County.",
    shippableImportantNotice: "Remember to bring your agency's 7-digit Authorization Number and ORI code.",
    shippableCategories: [
      {
        categoryName: "Healthcare & Caregiving",
        icon: "heart",
        items: [
          "Nursing (RN, LPN, CNA) licensing",
          "Physicians & medical professionals",
          "Childcare & daycare workers",
          "Home healthcare & eldercare providers",
        ],
      },
      {
        categoryName: "Professional Licensing",
        icon: "briefcase",
        items: [
          "Real estate agents & brokers",
          "Security guards & private investigators",
          "Financial & FINRA registrations",
          "Cannabis commission licenses",
        ],
      },
      {
        categoryName: "Education & Public Service",
        icon: "file-text",
        items: [
          "Public & private school teachers",
          "Substitute teachers & aides",
          "Youth sports coaches & volunteers",
          "Government contractors (Fort Meade)",
        ],
      },
      {
        categoryName: "Legal & Personal",
        icon: "shield",
        items: [
          "Name change petitions",
          "Adoption & foster parenting",
          "Handgun Qualification License (HQL)",
          "Immigration & visa clearances",
        ],
      },
    ],
    processLabel: "SIMPLE IN-STORE PROCESS",
    processTitle: "Complete Your Fingerprinting in Four Quick Steps",
    processSubtitle: "Our certified technicians guide you through the process quickly and comfortably.",
    processSteps: [
      {
        step: "01",
        title: "Check In at Our Counter",
        description: "Provide your government ID and agency paperwork with your ORI and Authorization numbers.",
      },
      {
        step: "02",
        title: "Data Entry & Verification",
        description: "Our technician inputs your applicant demographics into the secure Live Scan terminal.",
      },
      {
        step: "03",
        title: "Inkless Optical Scanning",
        description: "We guide your fingers across the glass optical sensor for both four-finger slaps and individual rolls.",
      },
      {
        step: "04",
        title: "Instant Submission & Receipt",
        description: "Prints are transmitted electronically. You receive an official CJIS receipt with your Tracking Number.",
      },
    ],
    packingCommitment: {
      title: "Secure, CJIS-Compliant Protection",
      quote: "Your privacy and security are paramount. Fingerprint data is encrypted and transmitted directly to state repositories.",
      body: "We adhere strictly to state and federal data privacy standards. Your digital biometric data is never stored locally on our terminals after successful transmission.",
      features: [
        "Certified and background-checked technicians",
        "Direct encrypted transmission to CJIS & FBI",
        "Zero messy black ink or residue on hands",
        "Official receipt with Tracking ID provided on-site",
      ],
    },
    todayCutoff: {
      notice: "Live Scan fingerprinting is available Monday–Friday 9:30 AM–6:00 PM, Saturday 10:00 AM–3:00 PM.",
    },
    whyChooseLabel: "WHY CHOOSE US",
    whyChooseTitle: "Why Get Fingerprinted at Parcel & Office Solutions?",
    whyChooseSubtitle: "Save time with no long appointment waitlists, easy parking, and fast certified service.",
    whyChooseItems: [
      {
        title: "No Appointments Required",
        description: "Walk in at your convenience during our open hours Monday through Saturday.",
        icon: "clock",
      },
      {
        title: "Convenient Location Beside Food Lion",
        description: "Plenty of free parking right in front of our Odenton shopping center store.",
        icon: "map-pin",
      },
      {
        title: "Immediate Quality Verification",
        description: "Our Live Scan software tests print clarity instantly, eliminating rejected card delays.",
        icon: "shield",
      },
      {
        title: "Official Tracking Receipt",
        description: "Get a printed receipt with your CJIS Tracking Number immediately for proof to your employer.",
        icon: "barcode",
      },
      {
        title: "Full Business Services Under One Roof",
        description: "Combine fingerprinting with passport photos, notary public, and priority shipping in one trip.",
        icon: "layers",
      },
    ],
    customerAssistanceLabel: "FINGERPRINT ASSISTANCE",
    customerAssistanceTitle: "Questions About What Forms or Agency Codes You Need?",
    customerAssistanceSubtitle: "Give us a call at (410) 519-3131 and our team will help verify your paperwork before coming in.",
    faqEyebrow: "HELP & ANSWERS",
    faqHeading: "Frequently Asked Questions About Digital Fingerprinting",
    faqDescription: "Common questions regarding Live Scan, state fees, appointment policies, and processing times:",
    faqs: [
      {
        question: "Do I need to schedule an appointment for fingerprinting?",
        answer: "No! We accept walk-ins during our normal operating hours. Feel free to stop by whenever is most convenient for you.",
      },
      {
        question: "What should I bring to my fingerprinting session?",
        answer: "You must bring a valid, unexpired government-issued photo ID (Driver's License, State ID, or Passport) and your agency's Live Scan pre-registration form with the Authorization Number and ORI code.",
      },
      {
        question: "How long does the fingerprinting session take?",
        answer: "The entire process usually takes about 10 minutes from reviewing your paperwork to printing your official receipt.",
      },
      {
        question: "How long does it take for my employer or licensing agency to get results?",
        answer: "Because we submit electronically via Live Scan, Maryland CJIS typically processes background results within 48 to 72 business hours and sends them directly to your requesting agency.",
      },
      {
        question: "Can you print physical fingerprint cards (FD-258)?",
        answer: "Yes, if your agency requires hardcopy fingerprint cards, we can capture your prints digitally and print them directly onto official FBI FD-258 cards.",
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

  // Find category dynamically from SERVICES_MENU_CATEGORIES
  const foundCategory = SERVICES_MENU_CATEGORIES.find((cat) =>
    cat.items.some((item) => item.slug === slug)
  );
  const category = (foundCategory ? foundCategory.title : "Business & Personal Services") as ServiceDetail["category"];

  // Graceful generic generator for any other slug
  const titleFormatted = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    carrierType: "office",
    category,
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
