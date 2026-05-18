import { ProductCard } from "@/components/ProductCard";
import { getProducts, getShopPage } from "@/lib/sanity/api";

export const metadata = {
  title: "Shop | Ted's Premium Tzatziki",
  description: "Shop Ted's Premium Tzatziki and Cucumber & Garlic Tzatziki.",
};

export const revalidate = 30;

export default async function ShopPage() {
  const [products, page] = await Promise.all([getProducts(), getShopPage()]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        {page.eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
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

      <div className="greek-key my-10 max-w-md opacity-50" aria-hidden />

      <div className="grid gap-8 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
