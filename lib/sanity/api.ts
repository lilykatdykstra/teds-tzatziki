import { client } from "@/sanity/lib/client";
import {
  fallbackContactPage,
  fallbackHomepage,
  fallbackProducts,
  fallbackRecipes,
  fallbackRecipesPage,
  fallbackShopPage,
  fallbackStory,
} from "./fallbacks";
import { getSanityImageUrl } from "./image";
import {
  contactPageQuery,
  homepageQuery,
  productsByIdsQuery,
  productsQuery,
  recipeBySlugQuery,
  recipesPageQuery,
  recipesQuery,
  shopPageQuery,
  storyQuery,
} from "./queries";
import type {
  ContactPageDocument,
  HomepageDocument,
  PageHeaderDocument,
  ProductDocument,
  RecipeDocument,
  StoryDocument,
} from "./types";

const fetchOptions = { next: { revalidate: 30 } };

const productImageFallbacks: Record<string, string> = {
  "product-premium-tzatziki": "/images/product-tub.png",
  "product-cucumber-garlic-tzatziki": "/images/hero-products.png",
};

export type StoreProduct = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  ingredients: string[];
};

export function toStoreProduct(doc: ProductDocument): StoreProduct {
  const fallback =
    productImageFallbacks[doc._id] ?? "/images/product-tub.png";

  return {
    id: doc._id,
    name: doc.name,
    slug: doc.slug,
    price: doc.price,
    description: doc.description,
    image:
      doc.image?.asset?._id || doc.image?.asset?.url
        ? getSanityImageUrl(doc.image, 800)
        : fallback,
    ingredients: doc.ingredients ?? [],
  };
}

async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, fetchOptions);
  } catch {
    return null;
  }
}

export async function getProducts(): Promise<StoreProduct[]> {
  const docs = await safeFetch<ProductDocument[]>(productsQuery);
  const list = docs?.length ? docs : fallbackProducts;
  return list.map(toStoreProduct);
}

export async function getProductsByIds(
  ids: string[],
): Promise<StoreProduct[]> {
  if (!ids.length) return [];

  const docs =
    (await safeFetch<ProductDocument[]>(productsByIdsQuery, { ids })) ?? [];

  const fromSanity = new Map(docs.map((d) => [d._id, d]));
  const results: StoreProduct[] = [];

  for (const id of ids) {
    const doc =
      fromSanity.get(id) ?? fallbackProducts.find((p) => p._id === id);
    if (!doc) continue;
    results.push(toStoreProduct(doc));
  }

  return results;
}

export async function getHomepage(): Promise<HomepageDocument> {
  const data = await safeFetch<HomepageDocument>(homepageQuery);
  return data ?? fallbackHomepage;
}

export async function getStory(): Promise<StoryDocument> {
  const data = await safeFetch<StoryDocument>(storyQuery);
  return data ?? fallbackStory;
}

export async function getShopPage(): Promise<PageHeaderDocument> {
  const data = await safeFetch<PageHeaderDocument>(shopPageQuery);
  return data ?? fallbackShopPage;
}

export async function getRecipesPage(): Promise<PageHeaderDocument> {
  const data = await safeFetch<PageHeaderDocument>(recipesPageQuery);
  return data ?? fallbackRecipesPage;
}

export async function getContactPage(): Promise<ContactPageDocument> {
  const data = await safeFetch<ContactPageDocument>(contactPageQuery);
  return data ?? fallbackContactPage;
}

export async function getRecipes(): Promise<RecipeDocument[]> {
  const data = await safeFetch<RecipeDocument[]>(recipesQuery);
  return data?.length ? data : fallbackRecipes;
}

export async function getRecipeBySlug(
  slug: string,
): Promise<RecipeDocument | null> {
  const data = await safeFetch<RecipeDocument>(recipeBySlugQuery, { slug });
  return data ?? fallbackRecipes.find((r) => r.slug === slug) ?? null;
}
