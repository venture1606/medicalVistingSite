import type {
  FooterLinks,
  NavLink,
  SocialLink,
  WhyChooseItem,
} from "@/lib/types";

export const COMPANY_NAME = "PharmaPrecise";
export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "#contact" },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    icon: "BadgeCheck",
    title: "Certified Quality",
    description: "ISO and GMP certified standards ensure dependable outcomes.",
  },
  {
    icon: "Stethoscope",
    title: "Trusted by Doctors",
    description: "Prescribed by practitioners across multi-specialty clinics.",
  },
  {
    icon: "Truck",
    title: "Pan-India Delivery",
    description: "Cold-chain enabled logistics for reliable nationwide supply.",
  },
  {
    icon: "FlaskConical",
    title: "Research-Backed",
    description: "Formulations guided by validated studies and clinical data.",
  },
];

export const FOOTER_LINKS: FooterLinks = {
  solutions: [
    { label: "Specialized Care", href: "#" },
    { label: "Chronic Pain", href: "#" },
    { label: "Cardiology", href: "#" },
    { label: "Pediatric Range", href: "#" },
  ],
  corporate: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Regulatory Compliance", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "#contact" },
    { label: "Research", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Regulatory Compliance", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};

export const HERO_CONTENT = {
  label: "ADVANCED PHARMACEUTICAL RESEARCH",
  title: "Precision Medicine for a Healthier Future",
  subtitle:
    "Pioneering life-changing therapeutic solutions through clinical excellence and uncompromising precision in drug formulation.",
  primaryCta: "View Our Products",
  secondaryCta: "Learn More",
  imageUrl: "https://picsum.photos/seed/hero-lab/900/720",
};

export const ABOUT_CONTENT = {
  overlayLabel: "LABORATORY SAFETY & EXCELLENCE",
  title: "Pioneering Clinical Excellence",
  body:
    "At PharmaPrecise, our mission is to redefine healthcare standards through precise formulations, transparent science, and robust quality governance.",
  missionTitle: "Our Mission",
  missionBody: "Deliver dependable medicine profiles for every patient segment.",
  valuesTitle: "Our Values",
  valuesBody:
    "Champion uncompromising quality, scientific integrity, and patient-first innovation.",
  imageUrl: "https://picsum.photos/seed/about-lab/900/900",
};

export const WHATSAPP_BANNER_CONTENT = {
  title: "Have Questions?",
  subtitle:
    "Our clinical support team is available 24/7 to assist with product inquiries and distributor partnerships.",
  cta: "Chat with us on WhatsApp",
};

export const HOME_SECTIONS = {
  whyChooseTitle: "Reliability Built on Trust",
  whyChooseSubtitle:
    "Setting industry benchmarks in pharmaceutical manufacturing.",
  featuredTitle: "Featured Products",
  featuredSubtitle: "Advanced therapeutic solutions for specialized care.",
  featuredCta: "Explore Full Catalog",
};

export const FOOTER_CONTENT = {
  tagline:
    "Leading the global shift towards precision-based pharmaceutical treatments and healthcare reliability.",
  newsletterTitle: "Newsletter",
  newsletterPlaceholder: "Email Address",
  newsletterButton: "Subscribe",
  certificationsTitle: "Certifications",
  certifications: ["GMP", "ISO", "FDA"],
  copyright: "© 2024 PharmaPrecise. Clinical Excellence & Precision.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Github", href: "https://github.com" },
  { label: "Mail", href: "mailto:clinical@pharmaprecise.com" },
];

export const PRODUCT_LISTING_CONTENT = {
  title: "CLINICAL PORTFOLIO",
  subtitle: "Advanced therapeutics and precision pharmaceutical solutions.",
  searchPlaceholder: "Search molecules, brands, or categories...",
  allProductsLabel: "All Products",
  noProductsLabel: "No products found",
  noProductsHint: "Try a different keyword or category filter.",
};

export const PRODUCT_DETAIL_CONTENT = {
  breadcrumbsRoot: "Products",
  descriptionLabel: "Clinical Description",
  dosageTitle: "Dosage Protocol",
  whatsappCta: "Chat with us about this product",
  deliveryHint: "Expected delivery within 24-48 clinical hours",
  compositionTab: "Composition",
  trialsTab: "Clinical Trials",
  storageTab: "Storage & Handling",
  ingredientHeader: "Active Ingredient",
  quantityHeader: "Quantity",
  dvHeader: "DV%",
  dvFootnote: "† Daily Value not established.",
};

export const UI_LABELS = {
  chatOnWhatsApp: "Chat on WhatsApp",
  chatWithUs: "Chat with us",
  learnMore: "Learn More",
  viewDetails: "View Details",
  openMenu: "Open navigation menu",
};

export const FOOTER_TITLES = {
  solutions: "Solutions",
  corporate: "Corporate",
  navigation: "Navigation",
  legal: "Legal",
};
