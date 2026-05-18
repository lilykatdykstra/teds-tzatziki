import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = {
  asset?: { _ref?: string; _id?: string; url?: string };
  alt?: string;
} | null;

export type ProductDocument = {
  _id: string;
  name: string;
  slug: string;
  sku?: string;
  packSize?: string;
  unitsPerCase?: number;
  minOrderCases?: number;
  price: number;
  description: string;
  image: SanityImage;
  ingredients?: string[];
};

export type ShopBenefit = { _key: string; title: string; body: string };
export type PricingTier = {
  _key: string;
  tierName: string;
  orderMinimum: string;
  pricePerCase: string;
  perks?: string;
};
export type MoqItem = { _key: string; label: string; value: string };
export type HowItWorksStep = { _key: string; title: string; body: string };

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
  heroSecondaryButtonText?: string;
  heroImage?: SanityImage;
  heroImageAlt?: string;
  heroBadgeScript?: string;
  heroBadgeLabel?: string;
  whyEyebrow?: string;
  whyTitle?: string;
  whyCtaText?: string;
  features?: HomepageFeature[];
};

export type StoryDocument = {
  _id: string;
  seoTitle?: string;
  seoDescription?: string;
  sectionEyebrow?: string;
  title: string;
  body: string;
  founderPhoto?: SanityImage;
  founderPhotoAlt?: string;
  quote?: string;
  quoteAttribution?: string;
};

export type ShopPageDocument = {
  _id: string;
  seoTitle?: string;
  seoDescription?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  benefits?: ShopBenefit[];
  catalogEyebrow?: string;
  catalogTitle?: string;
  catalogDescription?: string;
  pricingEyebrow?: string;
  pricingTitle?: string;
  pricingDescription?: string;
  pricingTiers?: PricingTier[];
  moqEyebrow?: string;
  moqTitle?: string;
  moqDescription?: string;
  moqItems?: MoqItem[];
  howItWorksEyebrow?: string;
  howItWorksTitle?: string;
  howItWorksSteps?: HowItWorksStep[];
  quoteEyebrow?: string;
  quoteTitle?: string;
  quoteDescription?: string;
  formStoreLabel?: string;
  formContactLabel?: string;
  formEmailLabel?: string;
  formPhoneLabel?: string;
  formStoreTypeLabel?: string;
  formStoreTypeOptions?: string[];
  formProductsLabel?: string;
  formVolumeLabel?: string;
  formRegionLabel?: string;
  formMessageLabel?: string;
  formSubmitText?: string;
  formSuccessTitle?: string;
  formSuccessMessage?: string;
};

export type RecipesPageDocument = {
  _id: string;
  seoTitle?: string;
  seoDescription?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  backLinkText?: string;
  ingredientsHeading?: string;
  stepsHeading?: string;
};

export type ContactPageDocument = {
  _id: string;
  seoTitle?: string;
  seoDescription?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  locationName?: string;
  locationLine1?: string;
  locationLine2?: string;
  visitNote?: string;
  formNameLabel?: string;
  formEmailLabel?: string;
  formMessageLabel?: string;
  formSubmitText?: string;
  formSuccessTitle?: string;
  formSuccessMessage?: string;
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
