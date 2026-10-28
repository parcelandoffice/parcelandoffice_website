import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "llwc1pmf",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skIMzJPLLoUggZcZFlDOYViNBojwMhzX7UuypE1ptZ5ndgt8RAkkpvYYPAmOdVleLP4EsGLJK4bgTWqNG7VjgcRetB8qTsqpwjK66yrozURYBdRUCfwI22i5rRtH2C1E4Ty8TzKiOwVVXQTGqXgysxxejByW9oLdyviP8B5btpPuKDCzMeEY",
  useCdn: false,
});

async function seedSocialMediaService() {
  console.log("Seeding Social Media Marketing service in Sanity...");

  const doc = {
    _id: "service-social-media-marketing",
    _type: "service",
    title: "Social Media Marketing Services",
    slug: {
      _type: "slug",
      current: "social-media-marketing",
    },
    serviceType: "digital_marketing_service",
    shortDescription:
      "Build Your Brand. Engage Your Audience. Grow Your Business through strategic social media marketing.",
    iconName: "share-2",
    orderRank: 1,
    isFeatured: true,
    badge: "Popular",

    // Section Visibility Switches (All set to true by default)
    showHero: true,
    showOverview: true,
    showSolutions: true,
    showPlatforms: true,
    showIndustries: true,
    showLocalMarketing: true,
    showProcess: true,
    showWhyChooseUs: true,
    showTestimonials: true,
    showFaqs: true,
    showFinalCta: true,

    // 1. Hero Section
    heroEyebrow: "Social Media Marketing Services",
    heroTagline: "Build Your Brand. Engage Your Audience. Grow Your Business.",
    heroDescription:
      "Connect with your target audience and strengthen your online presence through strategic social media marketing. From engaging content to targeted campaigns, we help businesses build brand awareness, increase engagement and reach potential customers.",
    heroCtaText: "Get a Free Consultation",
    heroCtaHref: "/contact-us?service=social-media-marketing-usa",
    heroSecondaryCtaText: "Explore Solutions",
    heroSecondaryCtaHref: "#solutions",
    heroStats: [
      {
        _key: "stat-1",
        value: "3.5x",
        label: "Average Engagement Boost",
        subtext: "Organic & paid interactions",
      },
      {
        _key: "stat-2",
        value: "240%+",
        label: "Reach & Visibility Growth",
        subtext: "Across targeted audiences",
      },
      {
        _key: "stat-3",
        value: "100%",
        label: "Tailored Brand Strategy",
        subtext: "Aligned with your goals",
      },
    ],

    // 2. Service Overview
    overviewEyebrow: "Service Overview",
    overviewHeading: "Turn Your Social Media Presence Into a Business Opportunity",
    overviewParagraphs: [
      "Social media gives your business an opportunity to connect with customers, showcase your services and stay relevant in a competitive market.",
      "Our social media marketing services combine content planning, creative development, social media management and paid campaigns to help your business communicate effectively and work toward measurable marketing goals.",
    ],
    pillarsTitle: "Four Strategic Pillars of Our Social Media Marketing",
    pillars: [
      {
        _key: "pillar-1",
        title: "Content Planning",
        description:
          "Data-backed editorial calendars, hashtag research, and content themes designed to spark audience conversations.",
        icon: "calendar",
      },
      {
        _key: "pillar-2",
        title: "Creative Development",
        description:
          "High-impact brand visuals, video clips, stories, and carousel graphics tailored to captivate feeds.",
        icon: "palette",
      },
      {
        _key: "pillar-3",
        title: "Social Media Management",
        description:
          "Daily profile maintenance, community replies, consistent scheduling, and authentic follower nurturing.",
        icon: "users",
      },
      {
        _key: "pillar-4",
        title: "Paid Campaigns",
        description:
          "Precision-targeted paid social ads engineered to capture qualified leads, drive clicks, and maximize ROAS.",
        icon: "target",
      },
    ],

    // 3. Solutions / Services List
    solutionsEyebrow: "Our Solutions",
    solutionsHeading: "Our Social Media Marketing Services",
    solutionsDescription:
      "A complete suite of strategic social media solutions tailored to elevate your brand presence and acquire customers.",
    solutionItems: [
      {
        _key: "sol-1",
        id: "strategy-planning",
        title: "Social Media Strategy and Planning",
        description:
          "We develop a tailored social media plan based on your business objectives, audience research, competitors, and available resources.",
        icon: "strategy",
        highlights: [
          "Audience and competitor research",
          "Platform selection and content pillars",
          "Monthly content calendars",
          "Campaign planning and performance goals",
        ],
      },
      {
        _key: "sol-2",
        id: "content-creation",
        title: "Social Media Content Creation",
        description:
          "We create relevant, on-brand content that communicates your value and gives your audience a reason to engage.",
        icon: "content",
        highlights: [
          "Branded graphics and carousel posts",
          "Captions, post copy, and calls to action",
          "Reels and short-form video content",
          "Promotional, educational, and seasonal campaigns",
        ],
      },
      {
        _key: "sol-3",
        id: "account-management",
        title: "Social Media Account Management",
        description:
          "We help keep your social channels active, organized, and aligned with your brand.",
        icon: "social",
        highlights: [
          "Content scheduling and publishing",
          "Profile and page optimization",
          "Comment and message monitoring",
          "Monthly performance reviews and adjustments",
        ],
      },
      {
        _key: "sol-4",
        id: "paid-advertising",
        title: "Paid Social Media Advertising",
        description:
          "We plan and manage paid campaigns to reach relevant audiences and support specific marketing objectives.",
        icon: "campaign",
        highlights: [
          "Facebook and Instagram advertising",
          "Audience and geographic targeting",
          "Lead generation and sales campaigns",
          "Creative testing and budget optimization",
        ],
      },
      {
        _key: "sol-5",
        id: "community-reputation",
        title: "Community Engagement and Brand Reputation",
        description:
          "We help businesses maintain a responsive, consistent presence and build stronger relationships with their audiences.",
        icon: "brand",
        highlights: [
          "Monitoring comments and relevant conversations",
          "Supporting customer inquiries and response workflows",
          "Identifying common audience questions",
          "Maintaining a consistent brand voice",
        ],
      },
      {
        _key: "sol-6",
        id: "analytics-reporting",
        title: "Social Media Analytics and Reporting",
        description:
          "We review campaign performance to understand what is working and where improvements are needed.",
        icon: "analytics",
        highlights: [
          "Reach, impressions, and engagement metrics",
          "Website visits and tracked conversions",
          "Lead volume and cost per lead for paid campaigns",
          "Monthly insights and data-driven recommendations",
        ],
      },
    ],

    // 4. Platforms We Manage
    platformsEyebrow: "Social Media Platforms We Manage",
    platformsHeading: "Choose the platforms for your audience",
    platformsDescription:
      "A strong social media strategy does not require your business to be active on every platform. We help you prioritize channels based on your audience, content capabilities, and business goals.",
    platformsList: [
      {
        _key: "plat-1",
        name: "Facebook Marketing",
        description:
          "Build awareness, share business updates, connect with local audiences, promote offers, and support lead generation through organic content and paid campaigns.",
        platform: "facebook",
      },
      {
        _key: "plat-2",
        name: "Instagram Marketing",
        description:
          "Showcase your work, products, team, and brand culture through high-quality photography, short-form video reels, stories, and carousel education posts.",
        platform: "instagram",
      },
      {
        _key: "plat-3",
        name: "LinkedIn Marketing",
        description:
          "Ideal for B2B companies, consultants, contractors, and professional service firms looking to establish credibility, share insights, and generate corporate inquiries.",
        platform: "linkedin",
      },
      {
        _key: "plat-4",
        name: "YouTube & Video Platforms",
        description:
          "Create lasting evergreen video assets, product demonstrations, customer testimonials, and tutorials that build deep authority and trust.",
        platform: "youtube",
      },
    ],

    // 5. Industries We Serve
    industriesEyebrow: "Industries We Serve",
    industriesHeading: "Social Media Tailored to Your Industry",
    industriesDescription:
      "We design custom social media strategies that reflect the nuances of your business sector, customer expectations, and sales cycles.",
    industryItems: [
      {
        _key: "ind-1",
        title: "Retail & E-Commerce",
        description: "Showcase new arrivals, customer reviews, seasonal discounts, and drive clicks directly to product pages.",
        icon: "shopping-bag",
      },
      {
        _key: "ind-2",
        title: "Healthcare & Wellness",
        description: "Build patient confidence through educational health tips, practitioner introductions, and service overviews.",
        icon: "heart-pulse",
      },
      {
        _key: "ind-3",
        title: "Real Estate & Property",
        description: "Highlight property listings, neighborhood guides, client success stories, and open house announcements.",
        icon: "building",
      },
      {
        _key: "ind-4",
        title: "Professional Services",
        description: "Establish industry thought leadership, share case studies, explain complex solutions, and win client trust.",
        icon: "briefcase",
      },
      {
        _key: "ind-5",
        title: "Food & Hospitality",
        description: "Attract local diners with mouth-watering photography, chef features, daily specials, and vibrant event posts.",
        icon: "utensils",
      },
      {
        _key: "ind-6",
        title: "Tech & SaaS Startups",
        description: "Demystify software features, share feature updates, release changelogs, and engage user communities.",
        icon: "cpu",
      },
    ],

    // 6. Local Market Focus
    localMarketingEyebrow: "Local Market Focus • Odenton, MD",
    localMarketingHeading: "Local Social Media Marketing in Odenton, MD",
    localMarketingIntro:
      "For local businesses in Odenton and surrounding Anne Arundel County communities, social media offers a direct way to reach nearby customers, promote local events, share updates, and maintain a visible presence in the area.",
    localMarketingApproachTitle: "Our Local Social Media Approach",
    localMarketingPoints: [
      {
        _key: "loc-1",
        title: "Localized Content Themes",
        description:
          "We incorporate local community topics, regional milestones, and neighborhood context into your messaging to build genuine local trust.",
        icon: "map-pin",
      },
      {
        _key: "loc-2",
        title: "Geo-Targeted Paid Campaigns",
        description:
          "Target potential customers within specific zip codes or radius boundaries around Odenton, Gambrills, Crofton, and Fort Meade.",
        icon: "target",
      },
      {
        _key: "loc-3",
        title: "Google & Social Synergy",
        description:
          "Ensure your social accounts work cohesively with your Google Business Profile to strengthen your total local search presence.",
        icon: "sparkles",
      },
      {
        _key: "loc-4",
        title: "Community Engagement",
        description:
          "Connect with local business networks, community organizations, and regional groups to expand your organic brand footprint.",
        icon: "trending-up",
      },
    ],

    // 7. Marketing Process
    processEyebrow: "Our Social Media Marketing Process",
    processHeading: "How We Manage and Grow Your Social Presence",
    processSubtitle:
      "A structured, five-step workflow designed to deliver consistent quality, clear communication, and measurable marketing results.",
    processSteps: [
      {
        _key: "step-1",
        step: "01",
        title: "Discovery & Audit",
        description:
          "We analyze your existing social presence, target demographics, top competitors, and establish baseline performance metrics.",
      },
      {
        _key: "step-2",
        step: "02",
        title: "Strategy & Planning",
        description:
          "We build content themes, establish brand voice guidelines, plan platform allocations, and develop the monthly editorial calendar.",
      },
      {
        _key: "step-3",
        step: "03",
        title: "Content & Creative",
        description:
          "Our designers and copywriters craft branded graphics, carousels, video reels, and persuasive captions customized to your business.",
      },
      {
        _key: "step-4",
        step: "04",
        title: "Publishing & Community",
        description:
          "Posts are scheduled at optimal engagement windows, interactions are monitored, and community responses are managed.",
      },
      {
        _key: "step-5",
        step: "05",
        title: "Review & Refinement",
        description:
          "We review monthly analytics reports together, identify top-performing content, and optimize the upcoming month's roadmap.",
      },
    ],

    // 8. Why Choose Us
    whyChooseEyebrow: "Why Choose Our Social Media Marketing Services?",
    whyChooseHeading: "Strategy, Execution, and Measurable Growth",
    whyChooseSubtitle:
      "We combine creative storytelling with data-backed optimization to build real business momentum.",
    whyChoosePoints: [
      {
        _key: "wc-1",
        title: "Tailored to Your Business Goals",
        description:
          "We avoid cookie-cutter templates. Every strategy, graphic, and caption is custom-crafted around your specific commercial goals.",
      },
      {
        _key: "wc-2",
        title: "Consistent On-Brand Execution",
        description:
          "Consistency builds customer recognition and trust. We keep your brand visually unified and actively posting week after week.",
      },
      {
        _key: "wc-3",
        title: "Organic and Paid Expertise",
        description:
          "We balance organic community building with laser-targeted paid social ads to achieve both brand loyalty and instant customer leads.",
      },
      {
        _key: "wc-4",
        title: "Clear, Honest Reporting",
        description:
          "No vanity metrics without context. We provide straightforward monthly reports showing reach, leads, clicks, and tangible business ROI.",
      },
    ],

    // 9. Testimonials
    testimonialsEyebrow: "Client Testimonials",
    testimonialsHeading: "Trusted by Growing Businesses",
    testimonialsDescription:
      "See how our strategic social media marketing campaigns have helped business owners expand their local market presence.",
    testimonialsList: [
      {
        _key: "test-1",
        quote:
          "Parcel & Office took our social channels from completely stagnant to an active source of inbound customer inquiries. Their content planning and responsiveness are exceptional.",
        clientName: "Marcus Sterling",
        company: "Sterling Home Improvements",
        role: "Managing Director",
        rating: 5,
      },
      {
        _key: "test-2",
        quote:
          "Our local engagement in Anne Arundel County tripled within 60 days of launching our targeted Facebook and Instagram campaign. Highly recommend their digital marketing team!",
        clientName: "Elena Rodriguez",
        company: "Odenton Wellness Collective",
        role: "Founder",
        rating: 5,
      },
    ],

    // 10. FAQs
    faqsEyebrow: "Frequently Asked Questions",
    faqsHeading: "Got Questions About Social Media Marketing?",
    faqsDescription:
      "Here are straightforward answers to the questions clients ask most often about our social media services.",
    faqsList: [
      {
        _key: "faq-1",
        question: "Which social media platforms does my business need to be on?",
        answer:
          "Not every business needs to be on every platform. We recommend prioritizing channels where your target customers actively spend their time. For local home services or B2C, Facebook and Instagram are usually essential. For commercial B2B, LinkedIn often yields the highest conversion rates.",
      },
      {
        _key: "faq-2",
        question: "How long does it take to see results from social media marketing?",
        answer:
          "Paid advertising campaigns typically generate initial inquiries and traffic within the first week of launch. For organic brand presence and engagement, measurable compounding growth typically builds over 60 to 90 days of consistent posting and community engagement.",
      },
      {
        _key: "faq-3",
        question: "Do I have to provide the post photos and videos?",
        answer:
          "We can work with your existing library of photos, take advantage of high-quality licensed imagery, and design custom branded graphics. If you have real in-store or on-the-job photos, sharing them with us always makes your feed feel even more authentic and engaging.",
      },
      {
        _key: "faq-4",
        question: "Can I review and approve the content before it gets published?",
        answer:
          "Yes, absolutely. We prepare a monthly content calendar in advance so you can review, comment on, and approve graphics, captions, and publication dates before anything goes live.",
      },
    ],

    // 11. Final CTA
    finalCtaHeading: "Ready to Grow Your Business on Social Media?",
    finalCtaDescription:
      "Build a stronger online presence with a social media strategy tailored to your business. Let's identify the right platforms, content and campaigns to help you reach your marketing goals.",
    finalCtaButtonText: "Request a Custom Proposal",
    finalCtaButtonHref: "/contact-us?service=social-media-marketing-usa",
  };

  const result = await client.createOrReplace(doc);
  console.log("Successfully seeded Social Media Marketing service document in Sanity! ID:", result._id);
}

seedSocialMediaService().catch((err) => {
  console.error("Failed to seed service in Sanity:", err);
  process.exit(1);
});
