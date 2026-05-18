import Image from "next/image";
import type { StoreProduct } from "@/lib/sanity/api";
import { formatPrice } from "@/lib/products";

type WholesaleProductCardProps = {
  product: StoreProduct;
};

export function WholesaleProductCard({ product }: WholesaleProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-sky-light sm:aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {product.sku && (
          <p className="font-mono text-xs tracking-wide text-stone/50">
            SKU {product.sku}
          </p>
        )}
        <h3 className="mt-1 font-display text-2xl text-stone">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone/70">
          {product.description}
        </p>

        {(product.ingredients?.length ?? 0) > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {product.ingredients!.map((ingredient) => (
              <li
                key={ingredient}
                className="rounded-full bg-sand/60 px-2.5 py-0.5 text-xs text-stone/70"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-cream/80 p-4 text-sm">
          {product.packSize && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                Pack size
              </dt>
              <dd className="mt-0.5 font-medium text-stone">{product.packSize}</dd>
            </div>
          )}
          {product.unitsPerCase != null && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                Units / case
              </dt>
              <dd className="mt-0.5 font-medium text-stone">
                {product.unitsPerCase}
              </dd>
            </div>
          )}
          {product.minOrderCases != null && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-olive">
                Min. order
              </dt>
              <dd className="mt-0.5 font-medium text-stone">
                {product.minOrderCases} cases
              </dd>
            </div>
          )}
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-olive">
              Suggested retail
            </dt>
            <dd className="mt-0.5 font-medium text-stone">
              {formatPrice(product.price)}
            </dd>
          </div>
        </dl>

        <p className="mt-4 text-xs text-stone/55">
          Wholesale case pricing quoted per tier —{" "}
          <a
            href="#wholesale-quote"
            className="font-medium text-aegean hover:underline"
          >
            request a quote
          </a>
        </p>
      </div>
    </article>
  );
}
