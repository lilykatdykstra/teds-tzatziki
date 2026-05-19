import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducts, getProductBySlug } from "@/lib/sanity/api";
import { formatPrice } from "@/lib/products";
import { Button } from "@/components/Button";

export const revalidate = 30;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} | Ted's Premium Tzatziki`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/shop/products"
        className="text-sm font-medium text-aegean hover:text-aegean-dark"
      >
        ← All products
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-sand bg-sky-light">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          {product.sku && (
            <p className="font-mono text-xs tracking-wide text-stone/50">
              SKU {product.sku}
            </p>
          )}
          <h1 className="mt-1 font-display text-4xl text-stone sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone/70">
            {product.description}
          </p>

          {(product.ingredients?.length ?? 0) > 0 && (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-olive">
                Ingredients
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {product.ingredients!.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="rounded-full bg-sand/60 px-2.5 py-0.5 text-xs text-stone/70"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-sand bg-cream/80 p-6 text-sm">
            {product.packSize && (
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                  Pack size
                </dt>
                <dd className="mt-1 font-medium text-stone">{product.packSize}</dd>
              </div>
            )}
            {product.unitsPerCase != null && (
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                  Units / case
                </dt>
                <dd className="mt-1 font-medium text-stone">{product.unitsPerCase}</dd>
              </div>
            )}
            {product.minOrderCases != null && (
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                  Min. order
                </dt>
                <dd className="mt-1 font-medium text-stone">
                  {product.minOrderCases} cases
                </dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                Suggested retail
              </dt>
              <dd className="mt-1 font-medium text-stone">
                {formatPrice(product.price)}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/shop#wholesale-quote">Request a Quote</Button>
            <Button href="/shop/products" variant="outline">
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
