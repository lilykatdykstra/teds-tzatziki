import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipeBySlug, getRecipes, getRecipesPage } from "@/lib/sanity/api";
import { getSanityImageUrl } from "@/lib/sanity/image";

export const revalidate = 30;

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: `${recipe.title} | Ted's Recipes`,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const [recipe, page] = await Promise.all([
    getRecipeBySlug(slug),
    getRecipesPage(),
  ]);

  if (!recipe) notFound();

  const photo = recipe.photo
    ? getSanityImageUrl(recipe.photo, 900)
    : "/images/product-tub.png";

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/recipes"
        className="text-sm font-medium text-aegean hover:text-aegean-dark"
      >
        {page.backLinkText ?? "← All recipes"}
      </Link>

      <h1 className="mt-4 font-display text-4xl text-stone sm:text-5xl">
        {recipe.title}
      </h1>
      <p className="mt-4 text-lg text-stone/75">{recipe.description}</p>

      <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-sand bg-sky-light">
        <Image
          src={photo}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-stone">
          {page.ingredientsHeading ?? "Ingredients"}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-stone/80">
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-stone">
          {page.stepsHeading ?? "Steps"}
        </h2>
        <ol className="mt-4 space-y-4">
          {recipe.steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aegean text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-1 leading-relaxed text-stone/80">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
