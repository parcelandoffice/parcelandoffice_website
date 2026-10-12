import {
  BookOpen,
  Briefcase,
  Building2,
  Camera,
  Code,
  Copy,
  CreditCard,
  FileText,
  Fingerprint,
  Gift,
  Globe,
  Heart,
  Inbox,
  Lightbulb,
  Mail,
  Package,
  PackageOpen,
  Plane,
  Printer,
  ScanLine,
  Scissors,
  Share2,
  ShoppingBag,
  Stamp,
  Target,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const SITE_NAME = "Parcel & Office Solutions";
export const SITE_TAGLINE = "Taking care of all your shipping needs";

export const BUSINESS = {
  phone: "+14105193131",
  phoneHref: "tel:+14105193131",
  fax: "410.519.3535",
  email: "contact@parcelofficesolutions.com",
  addressLines: [
    "8777 Piney Orchard Pkwy Ste B",
    "Beside Food Lion Supermarket",
    "Odenton, MD 21113",
  ],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=8777+Piney+Orchard+Pkwy+Ste+B+Odenton+MD+21113",
  whatsappNumber: "14105193131",
} as const;

/** Index = JS Date#getDay() (0 = Sunday). `null` = closed. */
export const STORE_HOURS: ReadonlyArray<{
  day: string;
  short: string;
  open: string | null;
  close: string | null;
}> = [
    { day: "Sunday", short: "Sun", open: null, close: null },
    { day: "Monday", short: "Mon", open: "9:30 AM", close: "6:30 PM" },
    { day: "Tuesday", short: "Tue", open: "9:30 AM", close: "6:30 PM" },
    { day: "Wednesday", short: "Wed", open: "9:30 AM", close: "6:30 PM" },
    { day: "Thursday", short: "Thu", open: "9:30 AM", close: "6:30 PM" },
    { day: "Friday", short: "Fri", open: "9:30 AM", close: "6:30 PM" },
    { day: "Saturday", short: "Sat", open: "10:00 AM", close: "3:30 PM" },
  ];

export type ServiceItem = {
  slug: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: ServiceItem[] = [
  { slug: "fedex-shipping", label: "FedEx Shipping", icon: Plane, description: "Authorized ShipCenter for Express, Ground & International." },
  { slug: "ups-shipping", label: "UPS Shipping", icon: Truck, description: "Authorized Shipping Outlet with daily drop-off pick-ups." },
  { slug: "dhl-shipping", label: "DHL Shipping", icon: Package, description: "Fast, reliable worldwide express delivery." },
  { slug: "us-postal-service", label: "US Postal Service", icon: Mail, description: "Stamps, priority mail and postal services in-store." },
  { slug: "notary-public", label: "Notary Public", icon: Stamp, description: "Certified notarization of your important documents." },
  { slug: "print-document-services", label: "Print & Document Services", icon: Printer, description: "Black & white or colour printing, large format too." },
  { slug: "fax-services", label: "Fax Services", icon: FileText, description: "Send and receive faxes quickly and securely." },
  { slug: "document-shredding", label: "Document Shredding", icon: Scissors, description: "Secure, confidential destruction of sensitive paperwork." },
  { slug: "mailbox-rental", label: "Mailbox Rental", icon: Inbox, description: "Real street address & private mailbox for you." },
  { slug: "digital-fingerprinting", label: "Digital Fingerprinting", icon: Fingerprint, description: "Fast, accurate electronic fingerprinting." },
  { slug: "document-scanning", label: "Document Scanning", icon: ScanLine, description: "Digitize documents into crisp, shareable files." },
  { slug: "professional-packing", label: "Professional Packing", icon: PackageOpen, description: "Expert packing so fragile items arrive intact." },
  { slug: "packaging-supplies", label: "Packaging Supplies", icon: ShoppingBag, description: "Boxes, tape, bubble wrap and everything to pack." },
  { slug: "copying-services", label: "Copying Services", icon: Copy, description: "Quick, high-quality copies in bulk or single." },
  { slug: "passport-photos", label: "Passport Photos", icon: Camera, description: "Compliant passport & ID photos in minutes." },
];

/** Single place to change when dedicated service pages go live. */
export function getServiceHref(_slug: string): string {
  return "/#services";
}

const bySlug = (slug: string) =>
  SERVICES.find((service) => service.slug === slug)!.label;

/** Mega-menu columns (mirrors the existing website). */
export const PRODUCT_MENU: { title: string; links: { label: string; href: string; sub?: boolean }[] }[] = [
  {
    title: "Shipping",
    links: [
      ...["dhl-shipping", "fedex-shipping", "ups-shipping", "us-postal-service"].map((slug) => ({
        label: bySlug(slug),
        href: getServiceHref(slug),
        sub: true,
      })),
      { label: "Gift Wrapping", href: getServiceHref("gift-wrapping") },
      { label: "Office Supplies", href: getServiceHref("office-supplies") },
      { label: "Print & Document Services", href: getServiceHref("print-document-services") },
    ],
  },
  {
    title: "Packing",
    links: [
      { label: "Packaging Supplies", href: getServiceHref("packaging-supplies"), sub: true },
      { label: "Professional Packing", href: getServiceHref("professional-packing"), sub: true },
      { label: "Document Scanning", href: getServiceHref("document-scanning") },
      { label: "Fax Services", href: getServiceHref("fax-services") },
      { label: "Greeting Cards", href: getServiceHref("greeting-cards") },
      { label: "Passport Photos", href: getServiceHref("passport-photos") },
    ],
  },
  {
    title: "Business & Office",
    links: [
      { label: "Business Cards", href: getServiceHref("business-cards") },
      { label: "Copying Services", href: getServiceHref("copying-services") },
      { label: "Digital Fingerprinting", href: getServiceHref("digital-fingerprinting") },
      { label: "Document Shredding", href: getServiceHref("document-shredding") },
      { label: "Flyers & Brochures", href: getServiceHref("flyers-brochures") },
      { label: "Notary Public", href: getServiceHref("notary-public") },
      { label: "Mailbox Rental", href: getServiceHref("mailbox-rental") },
    ],
  },
];

export type ServiceMenuItem = {
  label: string;
  href: string;
  slug: string;
  icon: LucideIcon;
};

export type ServiceMenuCategory = {
  title: string;
  items: ServiceMenuItem[];
};

/** Categorized services matching the menu specification */
export const SERVICES_MENU_CATEGORIES: ServiceMenuCategory[] = [
  {
    title: "Shipping & Mailing",
    items: [
      { label: "DHL Shipping", href: "/#services", slug: "dhl-shipping", icon: Package },
      { label: "FedEx Shipping", href: "/#services", slug: "fedex-shipping", icon: Plane },
      { label: "UPS Shipping", href: "/#services", slug: "ups-shipping", icon: Truck },
      { label: "US Postal Service", href: "/#services", slug: "us-postal-service", icon: Mail },
    ],
  },
  {
    title: "Packing",
    items: [
      { label: "Professional Packing", href: "/#services", slug: "professional-packing", icon: PackageOpen },
      { label: "Packaging Supplies", href: "/#services", slug: "packaging-supplies", icon: ShoppingBag },
    ],
  },
  {
    title: "Printing & Document Services",
    items: [
      { label: "Print & Document Services", href: "/#services", slug: "print-document-services", icon: Printer },
      { label: "Business Cards", href: "/#services", slug: "business-cards", icon: CreditCard },
      { label: "Copying Services", href: "/#services", slug: "copying-services", icon: Copy },
      { label: "Flyers & Brochures", href: "/#services", slug: "flyers-brochures", icon: FileText },
      { label: "Document Scanning", href: "/#services", slug: "document-scanning", icon: ScanLine },
      { label: "Document Shredding", href: "/#services", slug: "document-shredding", icon: Scissors },
      { label: "Fax Services", href: "/#services", slug: "fax-services", icon: FileText },
    ],
  },
  {
    title: "Business & Personal Services",
    items: [
      { label: "Digital Fingerprinting", href: "/#services", slug: "digital-fingerprinting", icon: Fingerprint },
      { label: "Notary Public", href: "/#services", slug: "notary-public", icon: Stamp },
      { label: "Passport Photos", href: "/#services", slug: "passport-photos", icon: Camera },
      { label: "Gift Wrapping", href: "/#services", slug: "gift-wrapping", icon: Gift },
      { label: "Greeting Cards", href: "/#services", slug: "greeting-cards", icon: Heart },
    ],
  },
];

export const DIGITAL_MARKETING_MENU = [
  { label: "Social Media Marketing", href: "/digital-marketing#social-media", icon: Share2, description: "Boost brand presence & audience engagement" },
  { label: "Lead Generation", href: "/digital-marketing#lead-gen", icon: Target, description: "Capture verified leads and customer inquiries" },
  { label: "Google Ads & PPC", href: "/digital-marketing#google-ads", icon: TrendingUp, description: "High-ROI targeted search & display campaigns" },
  { label: "SEO, AEO & GEO", href: "/digital-marketing#seo", icon: Globe, description: "Search, Answer & Generative Engine Optimization" },
  { label: "Web Development", href: "/digital-marketing#web-dev", icon: Code, description: "Custom, responsive & high-converting websites" },
];

export const ABOUT_US_MENU = [
  { label: "About Us", href: "/about-us", icon: Building2, description: "Our story, mission & trusted team in Odenton, MD" },
  { label: "Our Blogs", href: "/blog", icon: BookOpen, description: "Shipping guides, office tips & small business insights" },
];

/**
 * Top navigation. The Blogs/Insights link is intentionally hidden for now —
 * flip `hidden` to false to bring it back (header + footer both read this list).
 */
export const NAV_LINKS: { href: string; label: string; hidden?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/#tracking", label: "Tracking" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/blog", label: "Blogs", hidden: true },
];

export const VISIBLE_NAV_LINKS = NAV_LINKS.filter((link) => !link.hidden);

export type CarrierPickup = {
  carrier: string;
  slots: { label: string; time: string }[];
};

export const NEXT_PICKUPS: CarrierPickup[] = [
  { carrier: "DHL", slots: [{ label: "Express", time: "5:30 PM" }] },
  {
    carrier: "FedEx",
    slots: [
      { label: "Express", time: "6:00 PM" },
      { label: "Ground", time: "4:00 PM" },
    ],
  },
  {
    carrier: "UPS",
    slots: [
      { label: "Air", time: "5:30 PM" },
      { label: "Ground", time: "5:00 PM" },
    ],
  },
  { carrier: "USPS", slots: [{ label: "Postal", time: "4:00 PM" }] },
  { carrier: "Delhivery", slots: [{ label: "Ground", time: "4:30 PM" }] },
];

export const TRACKING_CARRIERS = [
  { id: "fedex", label: "FedEx", url: "https://www.fedex.com/fedextrack/?trknbr=" },
  { id: "ups", label: "UPS", url: "https://www.ups.com/track?tracknum=" },
  { id: "dhl", label: "DHL", url: "https://www.dhl.com/us-en/home/tracking/tracking-express.html?submit=1&tracking-id=" },
  { id: "usps", label: "USPS", url: "https://tools.usps.com/go/TrackConfirmAction?tLabels=" },
  { id: "delhivery", label: "Delhivery", url: "https://www.delhivery.com/tracking" },
] as const;

export const HOME_STATS = [
  { value: 4, suffix: "", label: "Major carriers under one roof" },
  { value: 15, suffix: "+", label: "Products & services" },
  { value: 6, suffix: "", label: "Days a week open" },
  { value: 100, suffix: "%", label: "Hassle-free handling" },
];

export const HOW_IT_WORKS = [
  { title: "Pack", text: "Our experts box, cushion and label your items using quality supplies." },
  { title: "Ship", text: "Pick the best carrier and price — FedEx, UPS, DHL or USPS." },
  { title: "Track", text: "Follow your shipment live with a single tracking number." },
];

export const PRINT_MEGA_MENU = {
  col1: [
    "Banners & Posters",
    "Bookmarks",
    "Brochures",
    "Business Card Printing",
    "Car Magnets",
    "Catalogs",
    "Copies",
    "Door Hangers",
    "Every Door Direct Mail",
    "Envelopes",
    "Flyers",
    "Forms",
  ],
  col2: [
    "Greeting Cards",
    "Invitations",
    "Lawn Signs",
    "Letterhead",
    "Magnets",
    "Manuals",
    "Menus",
    "Newsletters",
    "Postcards",
    "Presentations",
    "Rack Cards",
    "Reports",
  ],
  featured: {
    title: "Single-Use Menu Printing",
    description:
      "Single-use or disposable menus are an ideal solution for either inside your restaurant or as inserts for takeout and delivery orders.",
    image: "/images/printed-menu-showcase.jpg",
    ctaText: "View All Printing Services",
    ctaHref: "/#services",
  },
};

export const SMALL_BUSINESS_SOLUTIONS = [
  {
    title: "Small Business Blog",
    description: "Actionable shipping tips, logistics strategies, and packaging guides for growing companies.",
    href: "/contact-us",
    icon: BookOpen,
    bgToken: "bg-badge-orange",
    colorToken: "text-badge-orange",
    lightBgToken: "bg-badge-orange-light",
  },
  {
    title: "Printing services",
    description: "Commercial printing, menus, banners, brochures, flyers, and premium business cards.",
    href: "/#services",
    icon: Printer,
    bgToken: "bg-badge-teal",
    colorToken: "text-badge-teal",
    lightBgToken: "bg-badge-teal-light",
  },
  {
    title: "Starting a small business",
    description: "Private mailbox rental with physical street address, corporate notary, and compliance.",
    href: "/#services",
    icon: Briefcase,
    bgToken: "bg-badge-green",
    colorToken: "text-badge-green",
    lightBgToken: "bg-badge-green-light",
  },
  {
    title: "Market your small business",
    description: "Every Door Direct Mail (EDDM), promotional magnets, postcards, and branded packaging.",
    href: "/#services",
    icon: Lightbulb,
    bgToken: "bg-badge-cyan",
    colorToken: "text-badge-cyan",
    lightBgToken: "bg-badge-cyan-light",
  },
];

