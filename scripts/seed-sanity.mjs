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
      serviceType: "standard",
      iconName: s.iconName,
      shortDescription: s.shortDescription,
      category: s.category,
      orderRank: s.orderRank,
      isFeatured: true,
      customUrl: "/#services",
    };
    await client.createOrReplace(serviceDoc);
  }
  console.log("Successfully created/updated 15 Standard In-Store Services!");

  // 3. Seed Digital Marketing Services (for Digital Marketing Menu & /{slug}-usa template)
  const digitalServices = [
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing Services",
      iconName: "share-2",
      shortDescription: "Build Your Brand. Engage Your Audience. Grow Your Business through strategic social media marketing.",
      orderRank: 1,
      heroEyebrow: "Social Media Marketing Services",
      heroTagline: "Build Your Brand. Engage Your Audience. Grow Your Business.",
      heroDescription: "Connect with your target audience and strengthen your online presence through strategic social media marketing. From engaging content to targeted campaigns, we help businesses build brand awareness, increase engagement and reach potential customers.",
      heroCtaText: "Get a Free Consultation",
      heroCtaHref: "/contact-us?service=social-media-marketing-usa",
      heroSecondaryCtaText: "Explore Solutions",
      heroSecondaryCtaHref: "#solutions",
      heroStats: [
        { _key: "s1", value: "3.5x", label: "Average Engagement Boost", subtext: "Organic & paid interactions" },
        { _key: "s2", value: "240%+", label: "Reach & Visibility Growth", subtext: "Across targeted audiences" },
        { _key: "s3", value: "100%", label: "Tailored Brand Strategy", subtext: "Aligned with your goals" },
      ],
      heroKeyBadges: ["Brand Awareness Growth", "Targeted Campaign Strategy", "Data-Driven ROI"],
      overviewEyebrow: "Service Overview",
      overviewHeading: "Turn Your Social Media Presence Into a Business Opportunity",
      overviewParagraphs: [
        "Social media gives your business an opportunity to connect with customers, showcase your services and stay relevant in a competitive market.",
        "Our social media marketing services combine content planning, creative development, social media management and paid campaigns to help your business communicate effectively and work toward measurable marketing goals.",
      ],
      pillarsTitle: "Four Strategic Pillars of Our Social Media Marketing",
      pillars: [
        { _key: "p1", title: "Content Planning", description: "Data-backed editorial calendars, hashtag research, and content themes designed to spark audience conversations.", icon: "calendar" },
        { _key: "p2", title: "Creative Development", description: "High-impact brand visuals, video clips, stories, and carousel graphics tailored to captivate feeds.", icon: "palette" },
        { _key: "p3", title: "Social Media Management", description: "Daily profile maintenance, community replies, consistent scheduling, and authentic follower nurturing.", icon: "users" },
        { _key: "p4", title: "Paid Campaigns", description: "Precision-targeted paid social ads engineered to capture qualified leads, drive clicks, and maximize ROAS.", icon: "target" },
      ],
      solutionsEyebrow: "Our Social Media Marketing Services",
      solutionsHeading: "Social Media Solutions to Grow Your Business",
      solutionsDescription: "Comprehensive strategies engineered to expand your reach, foster customer trust, and generate continuous business opportunities across key social channels.",
      solutionItems: [
        {
          _key: "sol1",
          id: "strategy-management",
          title: "Social Media Strategy & Management",
          description: "Develop a clear social media strategy, maintain active profiles and publish content aligned with your business goals.",
          icon: "strategy",
        },
        {
          _key: "sol2",
          id: "content-creation",
          title: "Content Creation & Publishing",
          description: "Create engaging graphics, promotional posts and informative content that communicate your brand's value and connect with your audience.",
          icon: "content",
        },
        {
          _key: "sol3",
          id: "facebook-instagram",
          title: "Facebook & Instagram Marketing",
          description: "Strengthen your presence on Facebook and Instagram through platform-specific content, audience engagement and promotional campaigns.",
          icon: "social",
        },
        {
          _key: "sol4",
          id: "social-advertising",
          title: "Social Media Advertising",
          description: "Reach relevant audiences through paid campaigns designed to support brand awareness, website traffic and lead generation.",
          icon: "campaign",
        },
        {
          _key: "sol5",
          id: "brand-awareness",
          title: "Brand Awareness & Engagement",
          description: "Build brand recognition, encourage audience interaction and maintain a consistent brand identity across social media channels.",
          icon: "brand",
        },
        {
          _key: "sol6",
          id: "performance-tracking",
          title: "Performance Tracking & Reporting",
          description: "Monitor reach, engagement, clicks and campaign performance to identify opportunities for improvement.",
          icon: "analytics",
        },
      ],
      finalCtaHeading: "Ready to Grow Your Business on Social Media?",
      finalCtaDescription: "Build a stronger online presence with a social media strategy tailored to your business. Let's identify the right platforms, content and campaigns to help you reach your marketing goals.",
      finalCtaButtonText: "Let's Discuss Your Social Media Strategy",
      finalCtaButtonHref: "/contact-us?service=social-media-marketing-usa",
    },
    {
      slug: "lead-generation",
      title: "Lead Generation Services",
      iconName: "target",
      shortDescription: "Capture verified leads and high-intent customer inquiries for sustained business growth.",
      orderRank: 2,
      heroEyebrow: "Lead Generation Services",
      heroTagline: "Capture Verified Leads. Boost Conversions. Scale Revenue.",
      heroDescription: "Attract ready-to-buy prospects and fuel your sales pipeline with laser-targeted lead acquisition strategies and optimized conversion funnels.",
      heroCtaText: "Get a Free Consultation",
      heroCtaHref: "/contact-us?service=lead-generation-usa",
      heroSecondaryCtaText: "Explore Solutions",
      heroSecondaryCtaHref: "#solutions",
      heroStats: [
        { _key: "s1", value: "4.8x", label: "Pipeline Quality Increase", subtext: "Verified sales leads" },
        { _key: "s2", value: "45%+", label: "Lower Cost Per Acquisition", subtext: "Optimized funnels" },
        { _key: "s3", value: "24/7", label: "Automated Lead Capture", subtext: "Direct to your inbox" },
      ],
      heroKeyBadges: ["High-Intent Leads", "Custom Funnel Optimization", "Verified Inquiries"],
      overviewEyebrow: "Service Overview",
      overviewHeading: "Turn Clicks Into Committed Customers",
      overviewParagraphs: [
        "Consistent customer acquisition is the lifeblood of every growing business. Our lead generation solutions identify your highest-value prospects and motivate them to take direct action.",
        "We combine precision landing pages, compelling lead magnets, automated qualification, and multi-channel traffic to deliver qualified business opportunities directly to your team.",
      ],
      pillarsTitle: "Four Strategic Pillars of Our Lead Generation",
      pillars: [
        { _key: "p1", title: "Audience Profiling", description: "Targeting your ideal buyer persona with precision demographics and intent data.", icon: "target" },
        { _key: "p2", title: "High-Converting Pages", description: "Landing pages engineered with psychological triggers to maximize conversion rates.", icon: "palette" },
        { _key: "p3", title: "Nurturing Automations", description: "Automated follow-ups that turn inquiries into booked appointments.", icon: "users" },
        { _key: "p4", title: "Analytics & Tracking", description: "Full-funnel attribution tracking so you know exactly where your best leads come from.", icon: "trending-up" },
      ],
      finalCtaHeading: "Ready to Supercharge Your Sales Pipeline?",
      finalCtaDescription: "Start generating qualified, high-intent leads that turn into lasting revenue. Schedule your growth consultation today.",
      finalCtaButtonText: "Get Started with Lead Gen",
      finalCtaButtonHref: "/contact-us?service=lead-generation-usa",
    },
    {
      slug: "google-ads-ppc",
      title: "Google Ads & PPC Management",
      iconName: "trending-up",
      shortDescription: "High-ROI targeted search & display campaigns that place your brand right where customers are searching.",
      orderRank: 3,
      heroEyebrow: "Pay-Per-Click Advertising",
      heroTagline: "Dominate Search Results. Maximize Every Ad Dollar.",
      heroDescription: "Reach ready-to-buy customers at the precise moment they search for your products and services with ROI-focused Google Ads and PPC management.",
      heroCtaText: "Get a Free PPC Audit",
      heroCtaHref: "/contact-us?service=google-ads-ppc-usa",
      heroSecondaryCtaText: "Explore Solutions",
      heroSecondaryCtaHref: "#solutions",
      heroStats: [
        { _key: "s1", value: "5.2x", label: "Average Campaign ROAS", subtext: "Across active client campaigns" },
        { _key: "s2", value: "38%", label: "Average Cost-per-Click Reduction", subtext: "Through keyword refinement" },
        { _key: "s3", value: "100%", label: "Transparent Conversion Tracking", subtext: "Zero guesswork" },
      ],
      heroKeyBadges: ["Google Certified Specialists", "High-Intent Search Ads", "Conversion Rate Optimization"],
      overviewEyebrow: "PPC Expertise",
      overviewHeading: "Immediate Visibility Where Customers Search Most",
      overviewParagraphs: [
        "Pay-per-click advertising offers the fastest path to targeted website traffic and qualified phone calls. When managed with precision, every dollar invested drives measurable commercial return.",
        "We audit search queries, craft compelling ad copy, eliminate negative keywords, and continuously tune bidding strategies to outperform competitors in your geographic market.",
      ],
      pillarsTitle: "Our Four Core PPC Tenets",
      pillars: [
        { _key: "p1", title: "Keyword Economics", description: "Bidding on terms that convert into revenue rather than vanity impressions.", icon: "target" },
        { _key: "p2", title: "Conversion Copywriting", description: "Responsive ad variations that achieve top-tier Google Quality Scores.", icon: "palette" },
        { _key: "p3", title: "Smart Bidding Strategies", description: "Leveraging algorithmic Target CPA and Target ROAS optimization.", icon: "trending-up" },
        { _key: "p4", title: "Negative Keyword Pruning", description: "Shielding your ad spend from irrelevant and wasted search queries.", icon: "check-circle" },
      ],
      finalCtaHeading: "Stop Wasting Ad Spend. Start Maximizing ROAS.",
      finalCtaDescription: "Let our certified Google Ads managers build campaigns that reliably deliver phone calls, foot traffic, and online revenue.",
      finalCtaButtonText: "Request Your Free PPC Audit",
      finalCtaButtonHref: "/contact-us?service=google-ads-ppc-usa",
    },
    {
      slug: "seo-aeo-geo",
      title: "SEO, AEO & GEO Optimization",
      iconName: "globe",
      shortDescription: "Dominate traditional Google search, AI answer engines, and generative search algorithms.",
      orderRank: 4,
      heroEyebrow: "Next-Gen Search Optimization",
      heroTagline: "Be Found on Google, AI Engines & Generative Search.",
      heroDescription: "Future-proof your online discovery with Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).",
      heroCtaText: "Get a Free SEO Audit",
      heroCtaHref: "/contact-us?service=seo-aeo-geo-usa",
      heroSecondaryCtaText: "Explore Solutions",
      heroSecondaryCtaHref: "#solutions",
      heroStats: [
        { _key: "s1", value: "#1", label: "Page 1 Focus", subtext: "For target local keywords" },
        { _key: "s2", value: "10x", label: "Long-Term Traffic Value", subtext: "Compounding organic return" },
        { _key: "s3", value: "100%", label: "AI Answer Readiness", subtext: "ChatGPT, Perplexity & Gemini" },
      ],
      heroKeyBadges: ["Local & National SEO", "Generative AI Search (GEO)", "Rich Schema Markup"],
      overviewEyebrow: "Modern Search Engine Mastery",
      overviewHeading: "Capture Audiences Across Every Search Experience",
      overviewParagraphs: [
        "Search has evolved. Your customers now discover solutions not just through traditional Google SERPs, but via AI chatbots, voice assistants, and AI-generated snapshots.",
        "Our three-pronged optimization methodology ensures your business maintains commanding authority across search engines, answer platforms, and generative AI models.",
      ],
      pillarsTitle: "Three Pillars of Modern Search Dominance",
      pillars: [
        { _key: "p1", title: "Classic SEO", description: "Technical audits, Core Web Vitals, authoritative backlink building, and on-page keyword targeting.", icon: "trending-up" },
        { _key: "p2", title: "Answer Engine (AEO)", description: "Direct answer formatting and structured schema to win Google Featured Snippets and voice searches.", icon: "sparkles" },
        { _key: "p3", title: "Generative Engine (GEO)", description: "Authoritative entity modeling that positions your brand as a cited source in ChatGPT, Perplexity, and Gemini.", icon: "code" },
      ],
      finalCtaHeading: "Ready to Dominate Search and AI Answer Engines?",
      finalCtaDescription: "Establish sustainable organic visibility that outlasts algorithmic changes and drives continuous customer discovery.",
      finalCtaButtonText: "Claim Your Free Search Audit",
      finalCtaButtonHref: "/contact-us?service=seo-aeo-geo-usa",
    },
    {
      slug: "web-development",
      title: "Custom Web Development",
      iconName: "code",
      shortDescription: "Custom, responsive & high-converting websites built with modern web technologies.",
      orderRank: 5,
      heroEyebrow: "Digital Engineering & Design",
      heroTagline: "Fast. Responsive. Engineered to Convert.",
      heroDescription: "Transform visitors into paying clients with custom-engineered web experiences designed for blistering speed, accessibility, and measurable sales conversion.",
      heroCtaText: "Start Your Web Project",
      heroCtaHref: "/contact-us?service=web-development-usa",
      heroSecondaryCtaText: "Explore Solutions",
      heroSecondaryCtaHref: "#solutions",
      heroStats: [
        { _key: "s1", value: "<1s", label: "Average Page Load Speed", subtext: "Optimized Core Web Vitals" },
        { _key: "s2", value: "100%", label: "Mobile Responsive", subtext: "Flawless across all devices" },
        { _key: "s3", value: "45%+", label: "Average Conversion Uplift", subtext: "User experience engineering" },
      ],
      heroKeyBadges: ["Custom Web Engineering", "Ultra-Fast Performance", "Conversion Rate Optimization"],
      overviewEyebrow: "Modern Web Engineering",
      overviewHeading: "Your Most Powerful Commercial Asset",
      overviewParagraphs: [
        "Your website is the center of your digital marketing universe. We build lightning-fast, mobile-first websites designed to showcase your brand and generate measurable revenue.",
        "From corporate service center showcases to custom quote calculators and scheduling platforms, we engineer websites built on reliable, modern architectures.",
      ],
      pillarsTitle: "Our Four Engineering Benchmarks",
      pillars: [
        { _key: "p1", title: "Performance First", description: "Sub-second load times that keep visitors engaged and boost Google organic rankings.", icon: "code" },
        { _key: "p2", title: "Mobile Dominance", description: "Responsive fluid layouts optimized for handheld convenience and touch interactions.", icon: "palette" },
        { _key: "p3", title: "Conversion Architecture", description: "Strategic layout hierarchies and prominent calls-to-action that capture high-intent inquiries.", icon: "target" },
        { _key: "p4", title: "Enterprise Security", description: "SSL encryption, secure CMS integration, and reliable uptime infrastructure.", icon: "check-circle" },
      ],
      finalCtaHeading: "Ready to Build a Website That Drives Real Revenue?",
      finalCtaDescription: "Let's turn your vision into a lightning-fast, high-converting digital platform that sets your business apart.",
      finalCtaButtonText: "Schedule Your Project Discovery",
      finalCtaButtonHref: "/contact-us?service=web-development-usa",
    },
  ];

  for (const ds of digitalServices) {
    const digitalDoc = {
      _id: `service-${ds.slug}`,
      _type: "service",
      title: ds.title,
      slug: { _type: "slug", current: ds.slug },
      serviceType: "digital-marketing",
      iconName: ds.iconName,
      shortDescription: ds.shortDescription,
      category: "digital-marketing",
      orderRank: ds.orderRank,
      isFeatured: false,
      heroEyebrow: ds.heroEyebrow,
      heroTagline: ds.heroTagline,
      heroDescription: ds.heroDescription,
      heroCtaText: ds.heroCtaText,
      heroCtaHref: ds.heroCtaHref,
      heroSecondaryCtaText: ds.heroSecondaryCtaText,
      heroSecondaryCtaHref: ds.heroSecondaryCtaHref,
      heroStats: ds.heroStats,
      heroKeyBadges: ds.heroKeyBadges,
      overviewEyebrow: ds.overviewEyebrow,
      overviewHeading: ds.overviewHeading,
      overviewParagraphs: ds.overviewParagraphs,
      pillarsTitle: ds.pillarsTitle,
      pillars: ds.pillars,
      solutionsEyebrow: ds.solutionsEyebrow,
      solutionsHeading: ds.solutionsHeading,
      solutionsDescription: ds.solutionsDescription,
      solutionItems: ds.solutionItems,
      finalCtaHeading: ds.finalCtaHeading,
      finalCtaDescription: ds.finalCtaDescription,
      finalCtaButtonText: ds.finalCtaButtonText,
      finalCtaButtonHref: ds.finalCtaButtonHref,
    };
    await client.createOrReplace(digitalDoc);
  }
  console.log("Successfully created/updated 5 Digital Marketing Services!");

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
