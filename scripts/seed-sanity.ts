/**
 * Seeds the Sanity dataset with content from sanity/seed-data.ts
 * (mirrors hardcoded copy from the site).
 *
 * Prerequisites:
 *   1. Create a token at https://sanity.io/manage → API → Tokens (Editor permissions)
 *   2. Add to .env.local:  SANITY_API_WRITE_TOKEN=your_token_here
 *
 * Run:  npm run seed
 */

import { createClient, type SanityClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { readFileSync, realpathSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  seedContactPage,
  seedHomepage,
  seedProducts,
  seedRecipes,
  seedRecipesPage,
  seedShopPage,
  seedStory,
} from "../sanity/seed-data";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");

function loadEnvFile(filename: string) {
  try {
    const contents = readFileSync(path.join(rootDir, filename), "utf8");
    for (const line of contents.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch {
    // .env.local optional if vars already exported
  }
}

loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-18";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
  process.exit(1);
}

if (!token) {
  console.error(
    "Missing SANITY_API_WRITE_TOKEN in .env.local\n" +
      "Create an Editor token at https://sanity.io/manage → API → Tokens",
  );
  process.exit(1);
}

const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const imageCache = new Map<string, { _type: "image"; asset: { _type: "reference"; _ref: string } }>();

async function uploadImage(relativePath: string) {
  const cached = imageCache.get(relativePath);
  if (cached) return cached;

  const absolutePath = realpathSync(path.join(rootDir, "public", relativePath));
  const filename = path.basename(absolutePath);

  process.stdout.write(`  ↑ image ${relativePath}\n`);

  const asset = await client.assets.upload("image", createReadStream(absolutePath), {
    filename,
  });

  const image = {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };

  imageCache.set(relativePath, image);
  return image;
}

function slugField(value: string) {
  return { _type: "slug" as const, current: value };
}

async function seed() {
  console.log(`\nSeeding Sanity project ${projectId} / ${dataset}\n`);

  const heroImage = await uploadImage(seedHomepage.heroImagePath);

  await client.createOrReplace({
    _type: "homepage",
    _id: seedHomepage._id,
    heroEyebrow: seedHomepage.heroEyebrow,
    heroHeadline: seedHomepage.heroHeadline,
    heroSubheadline: seedHomepage.heroSubheadline,
    heroButtonText: seedHomepage.heroButtonText,
    heroImage,
    heroBadgeScript: seedHomepage.heroBadgeScript,
    heroBadgeLabel: seedHomepage.heroBadgeLabel,
    whyEyebrow: seedHomepage.whyEyebrow,
    whyTitle: seedHomepage.whyTitle,
    whyCtaText: seedHomepage.whyCtaText,
    features: seedHomepage.features,
  });
  console.log("✓ Homepage");

  const founderPhoto = await uploadImage(seedStory.founderPhotoPath);

  await client.createOrReplace({
    _type: "story",
    _id: seedStory._id,
    sectionEyebrow: seedStory.sectionEyebrow,
    title: seedStory.title,
    body: seedStory.body,
    founderPhoto,
    quote: seedStory.quote,
    quoteAttribution: seedStory.quoteAttribution,
  });
  console.log("✓ Story");

  await client.createOrReplace({
    _type: "shopPage",
    ...seedShopPage,
  });
  console.log("✓ Shop page");

  await client.createOrReplace({
    _type: "recipesPage",
    ...seedRecipesPage,
  });
  console.log("✓ Recipes page");

  await client.createOrReplace({
    _type: "contactPage",
    ...seedContactPage,
  });
  console.log("✓ Contact page");

  for (const product of seedProducts) {
    const image = await uploadImage(product.imagePath);
    await client.createOrReplace({
      _type: "product",
      _id: product._id,
      name: product.name,
      slug: slugField(product.slug),
      price: product.price,
      description: product.description,
      image,
      ingredients: [...product.ingredients],
    });
    console.log(`✓ Product: ${product.name}`);
  }

  for (const recipe of seedRecipes) {
    const photo = await uploadImage(recipe.photoPath);
    await client.createOrReplace({
      _type: "recipe",
      _id: recipe._id,
      title: recipe.title,
      slug: slugField(recipe.slug),
      description: recipe.description,
      ingredients: [...recipe.ingredients],
      steps: [...recipe.steps],
      photo,
    });
    console.log(`✓ Recipe: ${recipe.title}`);
  }

  console.log("\nDone! Open /studio to review and publish.\n");
}

seed().catch((err) => {
  console.error("\nSeed failed:", err);
  process.exit(1);
});
