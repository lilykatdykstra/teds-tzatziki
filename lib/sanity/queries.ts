import { groq } from "next-sanity";

const imageFields = groq`
  asset->{ _id, url },
  alt
`;

export const productsQuery = groq`
  *[_type == "product"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    image { ${imageFields} },
    ingredients
  }
`;

export const productsByIdsQuery = groq`
  *[_type == "product" && _id in $ids] {
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    image { ${imageFields} },
    ingredients
  }
`;

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    _id,
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroButtonText,
    heroImage { ${imageFields} },
    heroBadgeScript,
    heroBadgeLabel,
    whyEyebrow,
    whyTitle,
    whyCtaText,
    features[] { _key, title, body }
  }
`;

export const storyQuery = groq`
  *[_type == "story"][0] {
    _id,
    sectionEyebrow,
    title,
    body,
    founderPhoto { ${imageFields} },
    quote,
    quoteAttribution
  }
`;

export const shopPageQuery = groq`
  *[_type == "shopPage"][0] {
    _id,
    eyebrow,
    title,
    description
  }
`;

export const recipesPageQuery = groq`
  *[_type == "recipesPage"][0] {
    _id,
    eyebrow,
    title,
    description
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    _id,
    eyebrow,
    title,
    description,
    locationName,
    locationLine1,
    locationLine2,
    visitNote
  }
`;

export const recipesQuery = groq`
  *[_type == "recipe"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    ingredients,
    steps,
    photo { ${imageFields} }
  }
`;

export const recipeBySlugQuery = groq`
  *[_type == "recipe" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    ingredients,
    steps,
    photo { ${imageFields} }
  }
`;
