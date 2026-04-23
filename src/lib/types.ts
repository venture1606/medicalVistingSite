export interface FeaturePill {
  icon: string;
  label: string;
}

export interface CompositionRow {
  ingredient: string;
  quantity: string;
  dv: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge: string;
  formulaBadge: string;
  shortDescription: string;
  fullDescription: string;
  mrp: number;
  discountedPrice: number;
  imageUrl: string;
  thumbnails: string[];
  featurePills: FeaturePill[];
  dosageProtocol: string[];
  composition: CompositionRow[];
  clinicalTrials: string;
  storageHandling: string;
  isFeatured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  solutions: FooterLink[];
  corporate: FooterLink[];
  navigation: FooterLink[];
  legal: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export type FooterVariant = "newsletter" | "certifications";
