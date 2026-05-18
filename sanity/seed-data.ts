/**
 * Content mirrored from page components and lib/sanity/fallbacks.ts.
 * Used by scripts/seed-sanity.ts to populate the Sanity dataset.
 */

export const seedHomepage = {
  _id: "homepage",
  heroEyebrow: "Family owned since 1957",
  heroHeadline: "Creamy Greek\nTzatziki\nMade by Ted's",
  heroSubheadline:
    "From Coney Island counters to your kitchen — our premium tzatziki brings decades of Greek heritage and homemade flavor to every scoop.",
  heroButtonText: "Shop Now",
  heroBadgeScript: "Ted's",
  heroBadgeLabel: "Premium · Gluten Free",
  heroImagePath: "images/hero-products.png",
  whyEyebrow: "Why Ted's",
  whyTitle: "Heritage you can taste",
  whyCtaText: "Shop Tzatziki",
  features: [
    {
      _key: "greek-roots",
      title: "Greek roots",
      body: "Recipes passed down from Ted Velman, a Greek immigrant who opened his first Coney Island in 1957.",
    },
    {
      _key: "made-fresh",
      title: "Made fresh",
      body: "Real cucumber, garlic, and herbs — the same quality Ted's West has served for decades.",
    },
    {
      _key: "family-owned",
      title: "Family owned",
      body: "Established in 2005. At 83, Ted still stops by a couple times a week. Come say hello!",
    },
  ],
};

export const seedStory = {
  _id: "story",
  sectionEyebrow: "Our Story",
  title: "A Greek immigrant's dream, one scoop at a time",
  body: `Ted's is a family owned and operated business established in 2005 — but our story starts long before that.

My father Ted Velman, a Greek immigrant, opened the first Ted's in 1985. Prior to that he had several Coney Islands in the Des Moines area since 1957.

At 83 years old, Ted still comes in a couple times a week to help out. Come say hello!

Ted's West specializes in gyros, tenderloins, burgers, homemade onion rings, homemade cheese sticks, salads, coneys of course and much more. So if you're in the mood for some freshly made food then stop into Ted's West!!

Our premium tzatziki brings that same homemade Greek flavor from the restaurant counter to your table — creamy, bright, and made with the care only a family kitchen can give.`,
  quote:
    "From Coney Island classics to Mediterranean dips — the Velman family has been feeding Des Moines for generations.",
  quoteAttribution: "The Ted's Family",
  founderPhotoPath: "images/restaurant-sign.png",
};

export const seedShopPage = {
  _id: "shopPage",
  eyebrow: "Shop",
  title: "Our Tzatziki",
  description:
    "Two creamy dips, one family recipe. Add your favorites to the cart and we'll ship them fresh.",
};

export const seedRecipesPage = {
  _id: "recipesPage",
  eyebrow: "Recipes",
  title: "Made with Ted's",
  description:
    "Simple ideas for putting our tzatziki on everything — from gyro bowls to weeknight plates.",
};

export const seedContactPage = {
  _id: "contactPage",
  eyebrow: "Contact",
  title: "Say hello",
  description:
    "Questions about orders, wholesale, or visiting Ted's West? Send us a message — we'd love to hear from you.",
  locationName: "Ted's West",
  locationLine1: "Des Moines, Iowa",
  locationLine2: "Gyros · Coneys · Homemade favorites",
  visitNote: "Stop in and meet Ted — he still comes by a couple times a week!",
};

export const seedProducts = [
  {
    _id: "product-premium-tzatziki",
    name: "Ted's Premium Tzatziki",
    slug: "premium-tzatziki",
    price: 9.99,
    description:
      "Our signature creamy dip made with Greek yogurt, fresh cucumber, garlic, and herbs. Perfect for gyros, pita, veggies, or straight from the tub.",
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
    description:
      "Bright, bold, and garlicky — a classic cucumber & garlic tzatziki with the same homemade taste Ted's has served since 1957.",
    imagePath: "images/hero-products.png",
    ingredients: ["Greek yogurt", "Cucumber", "Garlic", "Dill", "Lemon juice"],
  },
] as const;

export const seedRecipes = [
  {
    _id: "recipe-classic-gyro-bowl",
    title: "Classic Gyro Bowl",
    slug: "classic-gyro-bowl",
    description:
      "Layer warm rice, sliced gyro, fresh veggies, and a generous scoop of Ted's tzatziki.",
    ingredients: [
      "1 cup cooked rice",
      "Sliced gyro meat or chicken",
      "Tomato, onion, and cucumber",
      "Ted's Premium Tzatziki",
      "Warm pita",
    ],
    steps: [
      "Warm rice and gyro meat in a skillet.",
      "Add rice to a bowl and top with meat and chopped vegetables.",
      "Dollop tzatziki over the top and serve with warm pita.",
    ],
    photoPath: "images/product-tub.png",
  },
] as const;
