/**
 * Content mirrored from page components and lib/sanity/fallbacks.ts.
 * Used by scripts/seed-sanity.ts to populate the Sanity dataset.
 */

export const seedHomepage = {
  _id: "homepage",
  heroEyebrow: "Family owned and operated",
  heroHeadline: "Premium\nTzatziki\nMade by Ted's",
  heroSubheadline:
    "From Coney Island counters to your kitchen — our premium tzatziki brings decades of Greek heritage and homemade flavor to every scoop.",
  heroButtonText: "Wholesale",
  heroSecondaryButtonText: "Our Story",
  heroImageAlt: "Ted's Premium Tzatziki",
  heroBadgeScript: "Ted's",
  heroBadgeLabel: "Premium · Gluten Free",
  heroImagePath: "images/hero-products.png",
  whyEyebrow: "Why Ted's",
  whyTitle: "Heritage you can taste",
  whyCtaText: "Request a Quote",
  features: [
    {
      _key: "greek-roots",
      title: "Greek roots",
      body: "Recipes passed down from Ted Velman, a Greek immigrant who opened his first Coney Island in 1957.",
    },
    {
      _key: "made-fresh",
      title: "Made fresh",
      body: "Real cucumber, garlic, and herbs — the same quality Ted's Coney Island has served for decades.",
    },
    {
      _key: "family-owned",
      title: "Family owned",
      body: "It is currently run by Ted's son, but at ## Ted still stops by to say hello!",
    },
  ],
};

export const seedStory = {
  _id: "story",
  seoTitle: "Our Story | Ted's Premium Tzatziki",
  seoDescription:
    "The story of Ted Velman, Greek immigrant and founder of Ted's Coney Island in Des Moines.",
  sectionEyebrow: "Our Story",
  title: "A Greek immigrant's dream, one scoop at a time",
  founderPhotoAlt: "Ted's founder and restaurant",
  body: `Ted's is a family owned and operated business established in 2005 — but our story starts long before that.

My father Ted Velman, a Greek immigrant, opened the first Ted's in 1985. Prior to that he had several Coney Islands in the Des Moines area since 1957.

At 83 years old, Ted still comes in a couple times a week to help out. Come say hello!

Ted's West specializes in gyros, tenderloins, burgers, homemade onion rings, homemade cheese sticks, salads, coneys of course and much more. So if you're in the mood for some freshly made food then stop into Ted's West!!

Our premium tzatziki brings that same homemade Greek flavor from the restaurant counter to your table — crisp, bright, and made with the care only a family kitchen can give.`,
  quote:
    "From Coney Island classics to Mediterranean dips — the Velman family has been feeding Des Moines for generations.",
  quoteAttribution: "The Ted's Family",
  founderPhotoPath: "images/restaurant-sign.png",
};

export const seedShopPage = {
  _id: "shopPage",
  seoTitle: "Wholesale | Ted's Premium Tzatziki",
  seoDescription:
    "Bulk tzatziki for grocery and specialty retailers. Case packs, tiered wholesale pricing, and dedicated account support.",
  eyebrow: "Wholesale",
  title: "Tzatziki for your stores",
  description:
    "Partner with Ted's to stock premium Greek tzatziki in your dairy or deli set. We ship case-packed tubs built for grocery — with minimums, tiered pricing, and a dedicated rep for every account.",
  benefits: [
    {
      _key: "cold-chain",
      title: "Refrigerated logistics",
      body: "Shipped cold with predictable lead times and pallet-friendly case packs for your warehouse.",
    },
    {
      _key: "account-rep",
      title: "Dedicated account support",
      body: "A single point of contact for orders, resets, and promotional planning in your stores.",
    },
    {
      _key: "pos-ready",
      title: "Shelf-ready packaging",
      body: "UPC-labeled tubs sized for dairy and deli sets, with consistent branding your shoppers recognize.",
    },
  ],
  catalogEyebrow: "Product line",
  catalogTitle: "Available for wholesale",
  catalogDescription:
    "Two SKUs, case-packed for retail. Pricing is quoted per tier below — final rates depend on volume and distribution region.",
  pricingEyebrow: "Pricing",
  pricingTitle: "Wholesale pricing tiers",
  pricingDescription:
    "Published tiers are starting points. Your rep will confirm final case pricing after reviewing volume and delivery details.",
  pricingTiers: [
    {
      _key: "tier-starter",
      tierName: "Starter",
      orderMinimum: "10 cases / SKU",
      pricePerCase: "From $84",
      perks: "Standard lead times · New accounts",
    },
    {
      _key: "tier-growth",
      tierName: "Growth",
      orderMinimum: "25 cases / SKU",
      pricePerCase: "From $76",
      perks: "Priority production · Quarterly promos",
    },
    {
      _key: "tier-partner",
      tierName: "Partner",
      orderMinimum: "50+ cases / SKU",
      pricePerCase: "Custom quote",
      perks: "Dedicated rep · Custom POS · Co-op support",
    },
  ],
  moqEyebrow: "Minimums",
  moqTitle: "Order minimums & case specs",
  moqDescription:
    "All wholesale orders ship by the case. Mixed-SKU pallets are available on Partner tier accounts.",
  moqItems: [
    { _key: "moq-min", label: "Minimum opening order", value: "10 cases per SKU" },
    { _key: "moq-reorder", label: "Reorder minimum", value: "5 cases per SKU" },
    { _key: "moq-case", label: "Case pack", value: "12 tubs per case · 16 oz each" },
    { _key: "moq-pallet", label: "Pallet quantity", value: "48 cases (576 tubs)" },
    { _key: "moq-lead", label: "Lead time", value: "10–14 business days" },
  ],
  howItWorksEyebrow: "How it works",
  howItWorksTitle: "From quote to shelf",
  howItWorksSteps: [
    {
      _key: "step-1",
      title: "Request a quote",
      body: "Tell us about your stores, regions, and estimated monthly volume.",
    },
    {
      _key: "step-2",
      title: "Review pricing",
      body: "We confirm tier pricing, MOQs, and delivery windows for your account.",
    },
    {
      _key: "step-3",
      title: "Place your PO",
      body: "Submit purchase orders by email or through your buyer portal.",
    },
    {
      _key: "step-4",
      title: "Receive & reset",
      body: "Cold-chain delivery with shelf-ready tubs and optional POS materials.",
    },
  ],
  quoteEyebrow: "Get started",
  quoteTitle: "Request a wholesale quote",
  quoteDescription:
    "Fill out the form below and our wholesale team will respond within two business days with pricing and next steps.",
  formStoreLabel: "Store / Company name",
  formContactLabel: "Contact name",
  formEmailLabel: "Email",
  formPhoneLabel: "Phone",
  formStoreTypeLabel: "Store type",
  formStoreTypeOptions: [
    "Grocery chain",
    "Independent grocery",
    "Specialty / gourmet",
    "Food service / deli",
    "Distributor",
    "Other",
  ],
  formProductsLabel: "Products interested in",
  formVolumeLabel: "Estimated monthly cases",
  formRegionLabel: "Delivery region / states",
  formMessageLabel: "Additional details",
  formSubmitText: "Request a Quote",
  formSuccessTitle: "Quote request received!",
  formSuccessMessage:
    "Thanks for your interest in Ted's wholesale. Our team will reach out within two business days.",
};

export const seedRecipesPage = {
  _id: "recipesPage",
  seoTitle: "Recipes | Ted's Premium Tzatziki",
  seoDescription: "Ways to enjoy Ted's tzatziki at home.",
  eyebrow: "Recipes",
  title: "Made with Ted's",
  description:
    "Simple ideas for putting our tzatziki on everything — from gyro bowls to weeknight plates.",
  backLinkText: "← All recipes",
  ingredientsHeading: "Ingredients",
  stepsHeading: "Steps",
};

export const seedContactPage = {
  _id: "contactPage",
  seoTitle: "Contact | Ted's Premium Tzatziki",
  seoDescription: "Get in touch with Ted's Premium Tzatziki.",
  eyebrow: "Contact",
  title: "Say hello",
  description:
    "Questions about orders, wholesale, or visiting Ted's West? Send us a message — we'd love to hear from you.",
  locationName: "Ted's West",
  locationLine1: "Des Moines, Iowa",
  locationLine2: "Gyros · Coneys · Homemade favorites",
  visitNote: "Stop in and meet Ted — he still comes by a couple times a week!",
  formNameLabel: "Name",
  formEmailLabel: "Email",
  formMessageLabel: "Message",
  formSubmitText: "Send Message",
  formSuccessTitle: "Message sent!",
  formSuccessMessage:
    "Thanks for reaching out. We'll get back to you soon.",
};

export const seedProducts = [
  {
    _id: "product-premium-tzatziki",
    name: "Ted's Premium Tzatziki",
    slug: "premium-tzatziki",
    price: 9.99,
    sku: "TED-TZ-PREM-16",
    packSize: "16 oz tub",
    unitsPerCase: 12,
    minOrderCases: 10,
    description:
      "Our signature crisp dip made with Greek yogurt, crunchy cucumber, garlic, and herbs. Ideal for deli dips, Mediterranean sets, and grab-and-go meal solutions.",
    imagePath: "images/product-tub.png",
    ingredients: [
      "Greek yogurt",
      "Cucumber",
      "Garlic",
      "Fresh herbs",
      "Lemon",
      "Olive oil",
    ],
  },
  {
    _id: "product-cucumber-garlic-tzatziki",
    name: "Cucumber and Garlic Tzatziki",
    slug: "cucumber-garlic-tzatziki",
    price: 8.99,
    sku: "TED-TZ-CG-16",
    packSize: "16 oz tub",
    unitsPerCase: 12,
    minOrderCases: 10,
    description:
      "Bright, bold, and garlicky — a classic cucumber & garlic tzatziki with a satisfying crunch in every bite.",
    imagePath: "images/hero-products.png",
    ingredients: ["Greek yogurt", "Cucumber", "Garlic", "Dill", "Lemon juice"],
  },
] as const;

export const seedRecipes = [
  {
    _id: "recipe-classic-gyro-bowl",
    title: "Lorem Ipsum Dolor",
    slug: "classic-gyro-bowl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore magna",
      "Aliqua enim ad minim",
    ],
    steps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    photoPath: "images/product-tub.png",
  },
] as const;
