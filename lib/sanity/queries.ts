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
    sku,
    packSize,
    unitsPerCase,
    minOrderCases,
    price,
    description,
    image { ${imageFields} },
    ingredients
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    sku,
    packSize,
    unitsPerCase,
    minOrderCases,
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
    sku,
    packSize,
    unitsPerCase,
    minOrderCases,
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
    heroSecondaryButtonText,
    heroImage { ${imageFields} },
    heroImageAlt,
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
    seoTitle,
    seoDescription,
    sectionEyebrow,
    title,
    body,
    founderPhoto { ${imageFields} },
    founderPhotoAlt,
    quote,
    quoteAttribution
  }
`;

export const shopPageQuery = groq`
  *[_type == "shopPage"][0] {
    _id,
    seoTitle,
    seoDescription,
    eyebrow,
    title,
    description,
    benefits[] { _key, title, body },
    catalogEyebrow,
    catalogTitle,
    catalogDescription,
    pricingEyebrow,
    pricingTitle,
    pricingDescription,
    pricingTiers[] { _key, tierName, orderMinimum, pricePerCase, perks },
    moqEyebrow,
    moqTitle,
    moqDescription,
    moqItems[] { _key, label, value },
    howItWorksEyebrow,
    howItWorksTitle,
    howItWorksSteps[] { _key, title, body },
    quoteEyebrow,
    quoteTitle,
    quoteDescription,
    formStoreLabel,
    formContactLabel,
    formEmailLabel,
    formPhoneLabel,
    formStoreTypeLabel,
    formStoreTypeOptions,
    formProductsLabel,
    formVolumeLabel,
    formRegionLabel,
    formMessageLabel,
    formSubmitText,
    formSuccessTitle,
    formSuccessMessage
  }
`;

export const recipesPageQuery = groq`
  *[_type == "recipesPage"][0] {
    _id,
    seoTitle,
    seoDescription,
    eyebrow,
    title,
    description,
    backLinkText,
    ingredientsHeading,
    stepsHeading
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    _id,
    seoTitle,
    seoDescription,
    eyebrow,
    title,
    description,
    locationName,
    locationLine1,
    locationLine2,
    visitNote,
    formNameLabel,
    formEmailLabel,
    formMessageLabel,
    formSubmitText,
    formSuccessTitle,
    formSuccessMessage
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
