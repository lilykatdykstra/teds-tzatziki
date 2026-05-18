import Image from "next/image";
import Link from "next/link";
import { getRecipes, getRecipesPage } from "@/lib/sanity/api";
import { getSanityImageUrl } from "@/lib/sanity/image";

export const metadata = {
  title: "Recipes | Ted's Premium Tzatziki",
  description: "Ways to enjoy Ted's tzatziki at home.",
};

export const revalidate = 30;

export default async function RecipesPage() {
  const [recipes, page] = await Promise.all([getRecipes(), getRecipesPage()]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        {page.eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-aegean">
            {page.eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-display text-4xl text-stone sm:text-5xl">
          {page.title}
        </h1>
        {page.description && (
          <p className="mt-4 text-lg leading-relaxed text-stone/70">
            {page.description}
          </p>
        )}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => {
          const photo = recipe.photo
            ? getSanityImageUrl(recipe.photo, 600)
            : "/images/product-tub.png";

          return (
            <Link
              key={recipe._id}
              href={`/recipes/${recipe.slug}`}
              className="group overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sky-light">
                <Image
                  src={photo}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl text-stone group-hover:text-aegean">
                  {recipe.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-stone/70">
                  {recipe.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
