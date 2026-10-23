export interface DigitalMarketingStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface DigitalMarketingPillar {
  title: string;
  description: string;
  icon: "calendar" | "palette" | "users" | "target" | "trending-up" | "sparkles" | "check-circle" | "code";
}

export interface DigitalMarketingSolutionItem {
  id: string;
  title: string;
  description: string;
  icon: "strategy" | "content" | "target" | "analytics" | "campaign" | "code";
  highlights: string[];
}

export interface DigitalMarketingProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface DigitalMarketingIndustry {
  title: string;
  description: string;
  icon: "shopping-bag" | "heart-pulse" | "building" | "briefcase" | "utensils" | "cpu";
}

export interface DigitalMarketingWhyChoosePoint {
  title: string;
  description: string;
}

export interface DigitalMarketingTestimonial {
  quote: string;
  clientName: string;
  company: string;
  role?: string;
  rating?: number;
  approved?: boolean;
}

export interface DigitalMarketingFaq {
  question: string;
  answer: string;
}

export interface DigitalMarketingFinalCta {
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface DigitalMarketingServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    heroImage: string;
    stats: DigitalMarketingStat[];
    keyBadges: string[];
  };
  overview: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pillarsTitle?: string;
    pillars: DigitalMarketingPillar[];
  };
  solutions: {
    eyebrow: string;
    heading: string;
    description?: string;
    items: DigitalMarketingSolutionItem[];
  };
  process?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    steps: DigitalMarketingProcessStep[];
  };
  industries?: {
    eyebrow: string;
    heading: string;
    description: string;
    items: DigitalMarketingIndustry[];
  };
  whyChooseUs?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    points: DigitalMarketingWhyChoosePoint[];
  };
  testimonials?: {
    eyebrow: string;
    heading: string;
    description?: string;
    items: DigitalMarketingTestimonial[];
  };
  faqs?: {
    eyebrow: string;
    heading: string;
    description?: string;
    items: DigitalMarketingFaq[];
  };
  finalCta?: DigitalMarketingFinalCta;
}

export const DIGITAL_MARKETING_SERVICES: Record<string, DigitalMarketingServiceData> = {
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing Services",
    shortDescription: "Build Your Brand. Engage Your Audience. Grow Your Business through strategic social media marketing.",
    hero: {
      eyebrow: "Social Media Marketing Services",
      title: "Social Media Marketing Services",
      tagline: "Build Your Brand. Engage Your Audience. Grow Your Business.",
      description:
        "Connect with your target audience and strengthen your online presence through strategic social media marketing. From engaging content to targeted campaigns, we help businesses build brand awareness, increase engagement and reach potential customers.",
      ctaText: "Get a Free Consultation",
      ctaHref: "/contact-us?service=social-media-marketing",
      secondaryCtaText: "Explore Solutions",
      secondaryCtaHref: "#solutions",
      heroImage: "/images/social-media-hero.jpg",
      stats: [
        { value: "3.5x", label: "Average Engagement Boost", subtext: "Organic & paid interactions" },
        { value: "240%+", label: "Reach & Visibility Growth", subtext: "Across targeted audiences" },
        { value: "100%", label: "Tailored Brand Strategy", subtext: "Aligned with your goals" },
      ],
      keyBadges: [
        "Brand Awareness Growth",
        "Targeted Campaign Strategy",
        "Data-Driven ROI",
      ],
    },
    overview: {
      eyebrow: "Service Overview",
      heading: "Turn Your Social Media Presence Into a Business Opportunity",
      paragraphs: [
        "Social media gives your business an opportunity to connect with customers, showcase your services and stay relevant in a competitive market.",
        "Our social media marketing services combine content planning, creative development, social media management and paid campaigns to help your business communicate effectively and work toward measurable marketing goals.",
      ],
      pillarsTitle: "Four Strategic Pillars of Our Social Media Marketing",
      pillars: [
        {
          title: "Content Planning",
          description: "Data-backed editorial calendars, hashtag research, and content themes designed to spark audience conversations.",
          icon: "calendar",
        },
        {
          title: "Creative Development",
          description: "High-impact brand visuals, video clips, stories, and carousel graphics tailored to captivate feeds.",
          icon: "palette",
        },
        {
          title: "Social Media Management",
          description: "Daily profile maintenance, community replies, consistent scheduling, and authentic follower nurturing.",
          icon: "users",
        },
        {
          title: "Paid Campaigns",
          description: "Precision-targeted paid social ads engineered to capture qualified leads, drive clicks, and maximize ROAS.",
          icon: "target",
        },
      ],
    },
    solutions: {
      eyebrow: "Our Social Media Marketing Services",
      heading: "Social Media Solutions to Grow Your Business",
      description:
        "Comprehensive strategies engineered to expand your reach, foster customer trust, and generate continuous business opportunities across key social channels.",
      items: [
        {
          id: "strategy-management",
          title: "Social Media Strategy & Management",
          description:
            "Develop a clear social media strategy, maintain active profiles and publish content aligned with your business goals.",
          icon: "strategy",
          highlights: [
            "Comprehensive competitor & audience market research",
            "Consistent multi-platform profile optimization & branding",
            "Proactive community engagement & comment moderation",
            "Monthly analytics reporting, insights & strategy calibration",
          ],
        },
        {
          id: "content-creation",
          title: "Content Creation & Publishing",
          description:
            "Create engaging graphics, promotional posts and informative content that communicate your brand's value and connect with your audience.",
          icon: "content",
          highlights: [
            "Custom-branded graphic design & eye-catching promotional banners",
            "Persuasive copywriting that drives comments, saves, and shares",
            "Short-form video, story, and carousel post creative assets",
            "Pre-scheduled publishing calendars for consistent brand presence",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Our Social Media Marketing Process",
      heading: "From Strategy to Results",
      subtitle: "A proven, structured approach designed to build momentum and deliver sustained audience growth.",
      steps: [
        {
          step: "01",
          title: "Discovery & Research",
          description: "Understand your business, target audience, competitors and marketing objectives.",
        },
        {
          step: "02",
          title: "Strategy & Planning",
          description: "Select relevant platforms, define content themes and develop a social media calendar.",
        },
        {
          step: "03",
          title: "Content Creation",
          description: "Develop branded creatives, captions and promotional content aligned with your strategy.",
        },
        {
          step: "04",
          title: "Publishing & Campaign Management",
          description: "Publish planned content and manage agreed social media advertising campaigns.",
        },
        {
          step: "05",
          title: "Performance Analysis",
          description: "Review key metrics and refine content and campaigns based on performance insights.",
        },
      ],
    },
    industries: {
      eyebrow: "Industries We Serve",
      heading: "Social Media Marketing for Different Industries",
      description: "We tailor content and campaign strategies to your industry, audience and business objectives.",
      items: [
        {
          title: "Retail & E-commerce",
          description: "Showcase products with high-converting reels, promotional seasonal drops, and shoppable storefront posts.",
          icon: "shopping-bag",
        },
        {
          title: "Healthcare & Wellness",
          description: "Build patient trust with educational health content, doctor spotlights, wellness tips, and clinic updates.",
          icon: "heart-pulse",
        },
        {
          title: "Real Estate",
          description: "Promote new property listings, neighborhood guides, video walkthroughs, and client success stories.",
          icon: "building",
        },
        {
          title: "Professional Services",
          description: "Establish industry authority, showcase client testimonials, and generate qualified corporate inquiries.",
          icon: "briefcase",
        },
        {
          title: "Food & Hospitality",
          description: "Drive foot traffic and bookings through vibrant dish photos, behind-the-scenes stories, and local offers.",
          icon: "utensils",
        },
        {
          title: "B2B & Technology",
          description: "Drive lead generation with informative infographics, case studies, product feature highlights, and thought leadership.",
          icon: "cpu",
        },
      ],
    },
    whyChooseUs: {
      eyebrow: "Why Choose Our Social Media Marketing Services?",
      heading: "A Strategic Approach to Social Media Growth",
      subtitle: "We combine strategic thinking with creative execution to deliver marketing that drives genuine business results.",
      points: [
        {
          title: "Customized Strategies",
          description: "Marketing activities tailored to your business goals.",
        },
        {
          title: "Consistent Branding",
          description: "Maintain a recognizable identity across social platforms.",
        },
        {
          title: "Relevant Content",
          description: "Share content that informs, engages and promotes your business.",
        },
        {
          title: "Data-Driven Decisions",
          description: "Use performance insights to refine campaigns.",
        },
        {
          title: "Business-Focused Marketing",
          description: "Align social media activities with awareness, traffic and enquiry goals.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Client Testimonials",
      heading: "What Our Clients Say",
      description: "Build trust with authentic feedback from businesses we've worked with.",
      // Set approved: false until genuine social media-specific testimonials are collected,
      // per instructions: "If social media-specific testimonials are unavailable, omit this section until suitable feedback is collected."
      items: [],
    },
    faqs: {
      eyebrow: "Frequently Asked Questions",
      heading: "Everything You Need to Know",
      description: "Answers to common questions about our social media management, content production, and campaign workflows.",
      items: [
        {
          question: "Which social media platforms should my business be on?",
          answer:
            "We analyze your target audience demographics, competitors, and industry to select the platforms where your potential customers spend the most time. For B2C and local retail, Instagram, Facebook, and TikTok typically generate strong engagement. For B2B and professional services, LinkedIn and X are prioritized.",
        },
        {
          question: "How frequently will you post content on our profiles?",
          answer:
            "Posting frequency is customized to your strategy and package. Typically, we schedule 3 to 5 high-quality feed posts per week per platform, accompanied by active story updates and community engagement.",
        },
        {
          question: "Do we need to supply our own photos and videos?",
          answer:
            "Not necessarily! We design custom graphics, infographics, promotional creatives, and motion assets from scratch. If you have existing product photos, store images, or team clips, we seamlessly incorporate them into your brand's content calendar.",
        },
        {
          question: "How do you measure marketing success and ROI?",
          answer:
            "We track key performance indicators aligned with your specific goals, such as engagement rate, audience reach, follower growth, website clicks, and direct customer enquiries. You receive transparent monthly reports detailing performance insights.",
        },
        {
          question: "Can we combine organic social media with paid advertising?",
          answer:
            "Yes! Combining organic content (which establishes credibility and builds community) with targeted paid ad campaigns (which reach new customers and drive immediate enquiries) is the most effective way to scale your digital presence.",
        },
        {
          question: "How soon can we expect to see measurable results?",
          answer:
            "Initial reach and engagement improvements are typically evident within the first 30 days. Compounding organic audience growth, customer trust, and steady inbound enquiries typically build over 60 to 90 days of consistent execution.",
        },
      ],
    },
    finalCta: {
      heading: "Ready to Grow Your Business on Social Media?",
      description:
        "Build a stronger online presence with a social media strategy tailored to your business. Let's identify the right platforms, content and campaigns to help you reach your marketing goals.",
      ctaText: "Let's Discuss Your Social Media Strategy",
      ctaHref: "/contact-us?service=social-media-marketing",
    },
  },

  // Supporting routes for other digital marketing items in header/navigation
  "lead-generation": {
    slug: "lead-generation",
    title: "Lead Generation Services",
    shortDescription: "Capture verified leads and high-intent customer inquiries for sustained business growth.",
    hero: {
      eyebrow: "Lead Generation Services",
      title: "Lead Generation Services",
      tagline: "Capture Verified Leads. Boost Conversions. Scale Revenue.",
      description:
        "Attract ready-to-buy prospects and fuel your sales pipeline with laser-targeted lead acquisition strategies and optimized conversion funnels.",
      ctaText: "Get a Free Consultation",
      ctaHref: "/contact-us?service=lead-generation",
      secondaryCtaText: "Explore Solutions",
      secondaryCtaHref: "#solutions",
      heroImage: "/images/social-media-hero.jpg",
      stats: [
        { value: "4.8x", label: "Pipeline Quality Increase", subtext: "Verified sales leads" },
        { value: "45%+", label: "Lower Cost Per Acquisition", subtext: "Optimized funnels" },
        { value: "24/7", label: "Automated Lead Capture", subtext: "Direct to your inbox" },
      ],
      keyBadges: ["High-Intent Leads", "Custom Funnel Optimization", "Verified Inquiries"],
    },
    overview: {
      eyebrow: "Service Overview",
      heading: "Turn Clicks Into Committed Customers",
      paragraphs: [
        "Consistent customer acquisition is the lifeblood of every growing business. Our lead generation solutions identify your highest-value prospects and motivate them to take direct action.",
        "We combine precision landing pages, compelling lead magnets, automated qualification, and multi-channel traffic to deliver qualified business opportunities directly to your team.",
      ],
      pillars: [
        { title: "Audience Profiling", description: "Targeting your ideal buyer persona with precision demographics and intent data.", icon: "target" },
        { title: "High-Converting Pages", description: "Landing pages engineered with psychological triggers to maximize conversion rates.", icon: "palette" },
        { title: "Nurturing Automations", description: "Automated follow-ups that turn inquiries into booked appointments.", icon: "users" },
        { title: "Analytics & Tracking", description: "Full-funnel attribution tracking so you know exactly where your best leads come from.", icon: "trending-up" },
      ],
    },
    solutions: {
      eyebrow: "Our Lead Generation Services",
      heading: "Scalable Customer Acquisition Systems",
      description: "Proven inbound and outbound lead acquisition funnels customized for your business.",
      items: [
        {
          id: "funnel-strategy",
          title: "Inbound Funnel Strategy & Capture",
          description: "Build high-converting landing pages and lead magnets that capture prospective buyer interest seamlessly.",
          icon: "strategy",
          highlights: ["Conversion-focused landing page design", "Interactive quote calculators & lead magnets", "CRM & email integration"],
        },
        {
          id: "targeted-outreach",
          title: "Multi-Channel Paid Lead Acquisition",
          description: "Target high-intent customers actively searching for your services across search and social channels.",
          icon: "campaign",
          highlights: ["Precision geo-targeting", "Instant lead notification alerts", "A/B split testing for best ROI"],
        },
      ],
    },
  },

  "google-ads-ppc": {
    slug: "google-ads-ppc",
    title: "Google Ads & PPC Services",
    shortDescription: "High-ROI targeted search, display, and local service ad campaigns.",
    hero: {
      eyebrow: "Google Ads & PPC Services",
      title: "Google Ads & PPC Management",
      tagline: "Be Found First. Drive Clicks. Maximize Ad Spend Return.",
      description:
        "Put your business at the very top of Google search results right when local customers need your products and services most.",
      ctaText: "Get a Free Consultation",
      ctaHref: "/contact-us?service=google-ads-ppc",
      secondaryCtaText: "Explore Solutions",
      secondaryCtaHref: "#solutions",
      heroImage: "/images/social-media-hero.jpg",
      stats: [
        { value: "4.2x", label: "Average ROAS", subtext: "Return on ad spend" },
        { value: "-35%", label: "Wasted Spend Eliminated", subtext: "Negative keyword filtering" },
        { value: "#1", label: "Top-of-Page Placement", subtext: "Local search queries" },
      ],
      keyBadges: ["Google Certified", "Search & Display Ads", "Local Services Ads"],
    },
    overview: {
      eyebrow: "Service Overview",
      heading: "Reach High-Intent Searchers The Moment They Need You",
      paragraphs: [
        "When potential customers search for services in your area, being on page one is essential. Pay-Per-Click advertising gives you immediate visibility and brings immediate traffic.",
        "We continuously optimize bid strategies, refine negative keyword lists, and craft compelling ad copy to drive down cost per click while boosting qualified conversions.",
      ],
      pillars: [
        { title: "Keyword Intelligence", description: "In-depth competitor and search intent analysis to capture ready-to-buy traffic.", icon: "target" },
        { title: "Compelling Ad Copy", description: "Persuasive headlines and extensions that capture clicks ahead of competitors.", icon: "palette" },
        { title: "Bid Optimization", description: "Smart bidding strategies that maximize your return on every single dollar spent.", icon: "trending-up" },
        { title: "Conversion Tracking", description: "Granular call tracking and form submission tracking to prove ROI.", icon: "check-circle" },
      ],
    },
    solutions: {
      eyebrow: "Our Google Ads Solutions",
      heading: "Precision Paid Search & Display Advertising",
      description: "Maximize your advertising budget with data-backed Google Ads campaigns.",
      items: [
        {
          id: "google-search-ads",
          title: "Google Search & Local Service Ads",
          description: "Target high-intent commercial keywords so your business dominates local search results.",
          icon: "strategy",
          highlights: ["Targeted keyword bidding", "Negative keyword management", "Geo-fenced local service reach"],
        },
        {
          id: "retargeting-display",
          title: "Retargeting & Display Network",
          description: "Re-engage past website visitors with banner campaigns that keep your brand top-of-mind until they convert.",
          icon: "content",
          highlights: ["Multi-device visual display banners", "Cart abandonment & visitor retargeting", "Transparent ROAS reporting"],
        },
      ],
    },
  },

  "seo-aeo-geo": {
    slug: "seo-aeo-geo",
    title: "SEO, AEO & GEO Services",
    shortDescription: "Search, Answer & Generative Engine Optimization for long-term organic dominance.",
    hero: {
      eyebrow: "Search & Generative Optimization",
      title: "SEO, AEO & GEO Solutions",
      tagline: "Dominate Search Engines. Be The Answer in AI.",
      description:
        "Future-proof your organic visibility with modern search engine optimization, answer engine optimization (AEO), and generative AI engine optimization (GEO).",
      ctaText: "Get a Free Consultation",
      ctaHref: "/contact-us?service=seo-aeo-geo",
      secondaryCtaText: "Explore Solutions",
      secondaryCtaHref: "#solutions",
      heroImage: "/images/social-media-hero.jpg",
      stats: [
        { value: "+310%", label: "Organic Search Growth", subtext: "Within 6-9 months" },
        { value: "#1", label: "Local Map Pack Rankings", subtext: "High-value local terms" },
        { value: "AI Ready", label: "Perplexity & ChatGPT Ready", subtext: "Generative citations" },
      ],
      keyBadges: ["Local SEO", "Answer Engine AEO", "Generative AI GEO"],
    },
    overview: {
      eyebrow: "Service Overview",
      heading: "Rank in Traditional Search and Lead the AI Answer Revolution",
      paragraphs: [
        "Search behavior has evolved. Customers no longer just browse traditional search results; they ask AI models like ChatGPT, Perplexity, and Google Gemini for recommendations.",
        "Our unified SEO, AEO, and GEO framework ensures your business is cited as the definitive authority, capturing both traditional rankings and AI-generated answers.",
      ],
      pillars: [
        { title: "Technical Foundation", description: "Lightning-fast page speeds, structured Schema data, and clean crawl architectures.", icon: "code" },
        { title: "Semantic Authority", description: "Comprehensive content clusters that answer customer questions with depth.", icon: "palette" },
        { title: "Local Map Pack", description: "Optimizing Google Business Profile and local citations for map pack dominance.", icon: "target" },
        { title: "Generative AI Citations", description: "Formatting data so LLMs choose your business as the recommended answer.", icon: "sparkles" },
      ],
    },
    solutions: {
      eyebrow: "Our Search & AI Solutions",
      heading: "Holistic Search & Generative Engine Dominance",
      description: "Stay ahead of algorithm shifts with strategies engineered for both search engines and AI assistants.",
      items: [
        {
          id: "technical-local-seo",
          title: "Technical & Local Map Pack SEO",
          description: "Establish undeniable local authority with on-page optimization, Google Business Profile excellence, and local citation building.",
          icon: "strategy",
          highlights: ["Google Business Profile management", "Local citation audits & consistency", "Core Web Vitals speed optimization"],
        },
        {
          id: "aeo-geo-optimization",
          title: "Answer Engine & Generative Optimization (AEO / GEO)",
          description: "Structure your website content with authoritative schema so generative search engines quote and link to your business.",
          icon: "content",
          highlights: ["Conversational FAQ & snippet engineering", "Knowledge graph schema integration", "LLM brand citation optimization"],
        },
      ],
    },
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development Services",
    shortDescription: "Custom, responsive & high-converting modern websites.",
    hero: {
      eyebrow: "Web Development Services",
      title: "Custom Web Development",
      tagline: "Fast. Beautiful. Built to Convert Visitors into Customers.",
      description:
        "Your website is the center of your digital marketing universe. We build lightning-fast, mobile-first websites designed to showcase your brand and generate measurable revenue.",
      ctaText: "Get a Free Consultation",
      ctaHref: "/contact-us?service=web-development",
      secondaryCtaText: "Explore Solutions",
      secondaryCtaHref: "#solutions",
      heroImage: "/images/social-media-hero.jpg",
      stats: [
        { value: "<1.2s", label: "Average Page Load Speed", subtext: "Peak Core Web Vitals" },
        { value: "100%", label: "Mobile-First Responsive", subtext: "Optimized for all screens" },
        { value: "+180%", label: "Conversion Rate Increase", subtext: "Intuitive user flows" },
      ],
      keyBadges: ["Mobile-First Design", "Blazing Performance", "Conversion-Focused"],
    },
    overview: {
      eyebrow: "Service Overview",
      heading: "A Website That Works As Hard As You Do",
      paragraphs: [
        "A dated or sluggish website costs your business customers every day. Modern consumers demand instant load times, seamless mobile navigation, and effortless contact options.",
        "Our web development team crafts custom, secure, and SEO-ready web applications that elevate your brand reputation and turn casual visitors into loyal clients.",
      ],
      pillars: [
        { title: "Modern Architecture", description: "Built with cutting-edge web frameworks for unmatched reliability and speed.", icon: "code" },
        { title: "Conversion UX", description: "Strategically positioned CTAs, clear navigation, and frictionless contact forms.", icon: "target" },
        { title: "Search-Engine Ready", description: "Built from day one with semantic HTML, automated sitemaps, and rich snippet schemas.", icon: "trending-up" },
        { title: "Secure & Scalable", description: "Rock-solid security protocols, automated backups, and scalable infrastructure.", icon: "check-circle" },
      ],
    },
    solutions: {
      eyebrow: "Our Web Development Services",
      heading: "Custom Web Solutions for Modern Growth",
      description: "From corporate service showcases to interactive booking tools, we build websites that deliver.",
      items: [
        {
          id: "custom-site-design",
          title: "Custom Website Design & Engineering",
          description: "Bespoke digital design tailored precisely to your brand guidelines and business objectives.",
          icon: "strategy",
          highlights: ["Custom responsive layouts", "Tailored brand typography & design system", "Interactive quote & lead forms"],
        },
        {
          id: "site-optimization",
          title: "Performance & SEO Optimization",
          description: "Speed audits, mobile responsiveness tune-ups, and conversion rate optimization for existing platforms.",
          icon: "code",
          highlights: ["Google Core Web Vitals optimization", "ADA accessibility compliance", "Ongoing security & content maintenance"],
        },
      ],
    },
  },
};

export const DIGITAL_MARKETING_SLUGS = Object.keys(DIGITAL_MARKETING_SERVICES);

export function getDigitalMarketingService(slug: string): DigitalMarketingServiceData | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  
  // Exact match
  if (DIGITAL_MARKETING_SERVICES[normalized]) {
    return DIGITAL_MARKETING_SERVICES[normalized];
  }

  // Common aliases
  const aliasMap: Record<string, string> = {
    "social-media": "social-media-marketing",
    "social": "social-media-marketing",
    "smm": "social-media-marketing",
    "lead-gen": "lead-generation",
    "leads": "lead-generation",
    "google-ads": "google-ads-ppc",
    "ppc": "google-ads-ppc",
    "seo": "seo-aeo-geo",
    "web-dev": "web-development",
    "web": "web-development",
  };

  const mapped = aliasMap[normalized];
  if (mapped && DIGITAL_MARKETING_SERVICES[mapped]) {
    return DIGITAL_MARKETING_SERVICES[mapped];
  }

  return undefined;
}
