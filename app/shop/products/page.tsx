import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/sanity/api";
import { WholesaleProductCard } from "@/components/WholesaleProductCard";
import { Button } from "@/components/Button";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Products | Ted's Premium Tzatziki",
  description: "Browse our full line of Ted's Premium Tzatziki products available for wholesale.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Link href="/shop" className="text-sm font-medium text-aegean hover:text-aegean-dark">
        ← Wholesale overview
      </Link>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
            Product Catalog
          </p>
          <h1 className="mt-2 font-display text-4xl text-stone sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone/70">
            Click any product for full details. All products are available for wholesale ordering.
          </p>
        </div>
        <Button href="/shop#wholesale-quote" variant="outline">
          Request a Quote
        </Button>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {products.map((product) => (
          <WholesaleProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
