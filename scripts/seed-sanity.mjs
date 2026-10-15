import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "llwc1pmf",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skIMzJPLLoUggZcZFlDOYViNBojwMhzX7UuypE1ptZ5ndgt8RAkkpvYYPAmOdVleLP4EsGLJK4bgTWqNG7VjgcRetB8qTsqpwjK66yrozURYBdRUCfwI22i5rRtH2C1E4Ty8TzKiOwVVXQTGqXgysxxejByW9oLdyviP8B5btpPuKDCzMeEY",
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity Studio initial content...");

  // 1. Seed Home Page Singleton
  const homeDoc = {
    _id: "homePage",
    _type: "homePage",
    title: "Home Page",

    // 1. Hero Slides
    heroSlides: [
      {
        _key: "slide-1",
        badge: "UPS Authorized Shipping Outlet",
        title: "Get 3 Months Free* Mailboxes",
        subtitle:
          "Choose secure mail and package deliveries at your neighborhood The UPS Store® location. Get started today.",
        ctaLabel: "GET OFFER*",
        ctaUrl: "/#services",
      },
      {
        _key: "slide-2",
        badge: "DHL Express International Courier",
        title: "Fast International Shipping",
        subtitle:
          "Reliable worldwide express courier and document delivery across 220+ countries and territories.",
        ctaLabel: "SHIP WORLDWIDE",
        ctaUrl: "/#services",
      },
      {
        _key: "slide-3",
        badge: "Air Cargo & Express Logistics",
        title: "Domestic & Global Freight",
        subtitle: "Seamless freight logistics and courier services for your business.",
        ctaLabel: "TRACK SHIPMENT",
        ctaUrl: "/#tracking",
      },
      {
        _key: "slide-4",
        badge: "Professional Printing & Copying",
        title: "Print & Marketing Materials",
        subtitle:
          "High-resolution color printing, flyers, brochures, and custom business stationery.",
        ctaLabel: "EXPLORE SERVICES",
        ctaUrl: "/#services",
      },
    ],

    // 2. Tracking & Cutoffs
    trackingEyebrow: "Carrier Operations & Logistics",
    trackingTitle: "Live Tracking & Daily Pick-Up Cutoffs",
    trackingDescription:
      "Track packages in real time across four major global carriers or drop off before today's cutoff time for guaranteed same-day transit.",

    trackingCardTitle: "Live Multi-Carrier Tracking",
    trackingCardSubtitle: "FedEx • UPS • DHL Express • USPS",
    trackingCardBadge: "Live Gateway",
    trackingCardDescription:
      "Select your carrier and enter the tracking number below to get official, up-to-date tracking milestones, transit history, and delivery confirmations.",
    trackingInputPlaceholder: "Enter your tracking number (FedEx, UPS, DHL, USPS)...",
    trackingButtonText: "Track Package",

    cutoffsCardTitle: "Today's Pick-Up Cutoffs",
    cutoffsCardSubtitle: "Odenton Store Daily Schedule",
    cutoffsCardBadge: "Scheduled",
    pickupCutoffs: [
      {
        _key: "cutoff-dhl",
        carrierName: "DHL",
        carrierBadge: "Express",
        slots: [{ label: "Express", time: "5:30 PM" }],
      },
      {
        _key: "cutoff-fedex",
        carrierName: "FedEx",
        carrierBadge: "ShipCenter",
        slots: [
          { label: "Express", time: "6:00 PM" },
          { label: "Ground", time: "4:00 PM" },
        ],
      },
      {
        _key: "cutoff-ups",
        carrierName: "UPS",
        carrierBadge: "Outlet",
        slots: [
          { label: "Air", time: "5:30 PM" },
          { label: "Ground", time: "5:00 PM" },
        ],
      },
      {
        _key: "cutoff-usps",
        carrierName: "USPS",
        carrierBadge: "Postal",
        slots: [{ label: "Postal", time: "4:00 PM" }],
      },
      {
        _key: "cutoff-delhivery",
        carrierName: "Delhivery",
        carrierBadge: "Partner",
        slots: [{ label: "Ground", time: "4:30 PM" }],
      },
    ],
    cutoffsFooterText: "Special or freight pickup requirements? Contact us",
    cutoffsFooterUrl: "/contact-us",

    // 3. Welcome / Story
    welcomeEyebrow: "About Us",
    welcomeTitle: "Parcel & Office Solutions — it's handled!",
    welcomeParagraphs: [
      "Located at 8777 Piney Orchard Pkwy Ste B beside Food Lion Supermarket, Odenton MD, we are the go-to resource for packing, shipping, printing and business service needs of the residents and businesses of Odenton. Our team of dedicated, professionally trained experts understands the meaning of super-star customer care — we focus on saving you time and money by ensuring you get the right products and services at the right price.",
      "We can pack and ship almost anything to almost anywhere in the world. In addition to our pack-and-ship services, we are also Odenton's premier copy, print and document services center. Your one-stop shop for dozens of business products and services — so you can do what you're good at while we take care of the \"other stuff\" you need to succeed.",
    ],
    welcomeHighlights: [
      {
        _key: "wh-1",
        text: "Pack & ship (almost) anything, anywhere in the world",
        icon: "boxes",
      },
      {
        _key: "wh-2",
        text: "Right product, right price — in a single, quick visit",
        icon: "zap",
      },
      {
        _key: "wh-3",
        text: "Professional packing for fragile & valuable items",
        icon: "shield-check",
      },
      {
        _key: "wh-4",
        text: "Print, copy, scan, notarize & more under one roof",
        icon: "badge-check",
      },
    ],
    welcomeStats: [
      {
        _key: "stat-1",
        value: 4,
        suffix: "",
        label: "Major carriers under one roof",
      },
      {
        _key: "stat-2",
        value: 15,
        suffix: "+",
        label: "Products & services",
      },
      {
        _key: "stat-3",
        value: 6,
        suffix: "",
        label: "Days a week open",
      },
      {
        _key: "stat-4",
        value: 100,
        suffix: "%",
        label: "Hassle-free handling",
      },
    ],

    // 4. Services Section
    servicesTitle: "Featured Products & Services",
    servicesCtaText: "Inquire About Custom Services",
    servicesCtaUrl: "/contact-us",

    // 5. 3-Step Process
    processEyebrow: "Simple 3-Step Process",
    processTitle: "Pack. Ship. Track.",
    processDescription:
      "Walk in with your items, walk out with complete peace of mind.",
    processSteps: [
      {
        _key: "step-1",
        stepNumber: 1,
        title: "Pack",
        text: "Our experts box, cushion and label your items using quality supplies.",
        icon: "package-open",
      },
      {
        _key: "step-2",
        stepNumber: 2,
        title: "Ship",
        text: "Pick the best carrier and price — FedEx, UPS, DHL or USPS.",
        icon: "send",
      },
      {
        _key: "step-3",
        stepNumber: 3,
        title: "Track",
        text: "Follow your shipment live with a single tracking number.",
        icon: "radar",
      },
    ],
  };

  await client.createOrReplace(homeDoc);
  console.log("Successfully created/updated Home Page singleton!");

  // 2. Seed 15 Services
  const initialServices = [
    { title: "FedEx Shipping", slug: "fedex-shipping", iconName: "plane", shortDescription: "Authorized ShipCenter for Express, Ground & International.", category: "shipping", orderRank: 1 },
    { title: "UPS Shipping", slug: "ups-shipping", iconName: "truck", shortDescription: "Authorized Shipping Outlet with daily drop-off pick-ups.", category: "shipping", orderRank: 2 },
    { title: "DHL Shipping", slug: "dhl-shipping", iconName: "package", shortDescription: "Fast, reliable worldwide express delivery.", category: "shipping", orderRank: 3 },
    { title: "US Postal Service", slug: "us-postal-service", iconName: "mail", shortDescription: "Stamps, priority mail and postal services in-store.", category: "shipping", orderRank: 4 },
    { title: "Return Pick & Drop", slug: "return-pick-drop", iconName: "rotate-ccw", shortDescription: "Hassle-free returns and drop-off processing for all carriers.", category: "shipping", orderRank: 5 },
    { title: "Print & Document Services", slug: "print-document-services", iconName: "printer", shortDescription: "Black & white or colour printing, large format too.", category: "printing", orderRank: 6 },
    { title: "Fax Services", slug: "fax-services", iconName: "file-text", shortDescription: "Send and receive faxes quickly and securely.", category: "business", orderRank: 7 },
    { title: "Document Shredding", slug: "document-shredding", iconName: "scissors", shortDescription: "Secure, confidential destruction of sensitive paperwork.", category: "business", orderRank: 8 },
    { title: "Mailbox Rental", slug: "mailbox-rental", iconName: "inbox", shortDescription: "Real street address & private mailbox for you.", category: "business", orderRank: 9 },
    { title: "Digital Fingerprinting", slug: "digital-fingerprinting", iconName: "fingerprint", shortDescription: "Fast, accurate electronic fingerprinting.", category: "business", orderRank: 10 },
    { title: "Document Scanning", slug: "document-scanning", iconName: "scan-line", shortDescription: "Digitize documents into crisp, shareable files.", category: "printing", orderRank: 11 },
    { title: "Professional Packing", slug: "professional-packing", iconName: "package-open", shortDescription: "Expert packing so fragile items arrive intact.", category: "packing", orderRank: 12 },
    { title: "Packaging Supplies", slug: "packaging-supplies", iconName: "shopping-bag", shortDescription: "Boxes, tape, bubble wrap and everything to pack.", category: "packing", orderRank: 13 },
    { title: "Shipping Box Sizes", slug: "shipping-box-sizes", iconName: "box", shortDescription: "Comprehensive selection of shipping boxes and cartons.", category: "packing", orderRank: 14 },
    { title: "Passport Photos", slug: "passport-photos", iconName: "camera", shortDescription: "Compliant passport & ID photos in minutes.", category: "business", orderRank: 15 },
  ];

  for (const s of initialServices) {
    const serviceDoc = {
      _id: `service-${s.slug}`,
      _type: "service",
      title: s.title,
      slug: { _type: "slug", current: s.slug },
      iconName: s.iconName,
      shortDescription: s.shortDescription,
      category: s.category,
      orderRank: s.orderRank,
      isFeatured: true,
      customUrl: "/#services",
    };
    await client.createOrReplace(serviceDoc);
  }
  console.log("Successfully created/updated 15 Services!");

  // 3. Seed Site Settings Singleton
  const siteSettingsDoc = {
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Parcel & Office Solutions",
    siteTagline: "Taking care of all your shipping needs",
    phone: "+1 (410) 519-3131",
    fax: "410.519.3535",
    email: "contact@parcelofficesolutions.com",
    addressLines: [
      "8777 Piney Orchard Pkwy Ste B",
      "Beside Food Lion Supermarket",
      "Odenton, MD 21113",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=8777+Piney+Orchard+Pkwy+Ste+B+Odenton+MD+21113",
    announcementText: "Mon-Sat Open: 09:00AM - 07:00PM",
    announcementButtonText: "Schedule with Us",
    announcementButtonUrl: "/contact-us",
    footerDescription:
      "Your one-stop neighborhood packing, shipping, and business services center in Odenton, MD. Dedicated to saving you time and money with star-quality service.",
    copyrightText: "© 2026 Parcel & Office Solutions. All rights reserved.",
    storeHours: [
      { day: "Sunday", short: "Sun", isClosed: true },
      { day: "Monday", short: "Mon", isClosed: false, openTime: "9:30 AM", closeTime: "6:30 PM" },
      { day: "Tuesday", short: "Tue", isClosed: false, openTime: "9:30 AM", closeTime: "6:30 PM" },
      { day: "Wednesday", short: "Wed", isClosed: false, openTime: "9:30 AM", closeTime: "6:30 PM" },
      { day: "Thursday", short: "Thu", isClosed: false, openTime: "9:30 AM", closeTime: "6:30 PM" },
      { day: "Friday", short: "Fri", isClosed: false, openTime: "9:30 AM", closeTime: "6:30 PM" },
      { day: "Saturday", short: "Sat", isClosed: false, openTime: "10:00 AM", closeTime: "3:30 PM" },
    ],
  };

  await client.createOrReplace(siteSettingsDoc);
  console.log("Successfully created/updated Site Settings singleton!");
  console.log("All seeding finished successfully!");
}

seed().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});
