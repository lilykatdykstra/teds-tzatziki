import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = {
  asset?: { _ref?: string; _id?: string; url?: string };
  alt?: string;
} | null;

export type ProductDocument = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: SanityImage;
  ingredients?: string[];
};

export type HomepageFeature = {
  _key: string;
  title: string;
  body: string;
};

export type HomepageDocument = {
  _id: string;
  heroEyebrow?: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroButtonText: string;
  heroImage?: SanityImage;
  heroBadgeScript?: string;
  heroBadgeLabel?: string;
  whyEyebrow?: string;
  whyTitle?: string;
  whyCtaText?: string;
  features?: HomepageFeature[];
};

export type StoryDocument = {
  _id: string;
  sectionEyebrow?: string;
  title: string;
  body: string;
  founderPhoto?: SanityImage;
  quote?: string;
  quoteAttribution?: string;
};

export type PageHeaderDocument = {
  _id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export type ContactPageDocument = PageHeaderDocument & {
  locationName?: string;
  locationLine1?: string;
  locationLine2?: string;
  visitNote?: string;
};

export type RecipeDocument = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  ingredients: string[];
  steps: string[];
  photo?: SanityImage;
};

export type { SanityImageSource };
