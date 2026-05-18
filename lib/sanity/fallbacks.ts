import {
  seedContactPage,
  seedHomepage,
  seedProducts,
  seedRecipes,
  seedRecipesPage,
  seedShopPage,
  seedStory,
} from "@/sanity/seed-data";
import type {
  ContactPageDocument,
  HomepageDocument,
  PageHeaderDocument,
  ProductDocument,
  RecipeDocument,
  StoryDocument,
} from "./types";

export const fallbackProducts: ProductDocument[] = seedProducts.map((p) => ({
  _id: p._id,
  name: p.name,
  slug: p.slug,
  price: p.price,
  description: p.description,
  image: null,
  ingredients: [...p.ingredients],
}));

export const fallbackHomepage: HomepageDocument = {
  _id: seedHomepage._id,
  heroEyebrow: seedHomepage.heroEyebrow,
  heroHeadline: seedHomepage.heroHeadline,
  heroSubheadline: seedHomepage.heroSubheadline,
  heroButtonText: seedHomepage.heroButtonText,
  heroBadgeScript: seedHomepage.heroBadgeScript,
  heroBadgeLabel: seedHomepage.heroBadgeLabel,
  whyEyebrow: seedHomepage.whyEyebrow,
  whyTitle: seedHomepage.whyTitle,
  whyCtaText: seedHomepage.whyCtaText,
  features: seedHomepage.features,
};

export const fallbackStory: StoryDocument = {
  _id: seedStory._id,
  sectionEyebrow: seedStory.sectionEyebrow,
  title: seedStory.title,
  body: seedStory.body,
  quote: seedStory.quote,
  quoteAttribution: seedStory.quoteAttribution,
};

export const fallbackShopPage: PageHeaderDocument = {
  _id: seedShopPage._id,
  eyebrow: seedShopPage.eyebrow,
  title: seedShopPage.title,
  description: seedShopPage.description,
};

export const fallbackRecipesPage: PageHeaderDocument = {
  _id: seedRecipesPage._id,
  eyebrow: seedRecipesPage.eyebrow,
  title: seedRecipesPage.title,
  description: seedRecipesPage.description,
};

export const fallbackContactPage: ContactPageDocument = {
  _id: seedContactPage._id,
  eyebrow: seedContactPage.eyebrow,
  title: seedContactPage.title,
  description: seedContactPage.description,
  locationName: seedContactPage.locationName,
  locationLine1: seedContactPage.locationLine1,
  locationLine2: seedContactPage.locationLine2,
  visitNote: seedContactPage.visitNote,
};

export const fallbackRecipes: RecipeDocument[] = seedRecipes.map((r) => ({
  _id: r._id,
  title: r.title,
  slug: r.slug,
  description: r.description,
  ingredients: [...r.ingredients],
  steps: [...r.steps],
}));
