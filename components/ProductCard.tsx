"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-sky-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aegean/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-olive">
          Premium Dip
        </p>
        <h2 className="mt-1 font-display text-2xl text-stone">{product.name}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone/70">
          {product.description}
        </p>
        {product.ingredients && product.ingredients.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {product.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="rounded-full bg-sand/60 px-2.5 py-0.5 text-xs text-stone/70"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="font-display text-2xl text-aegean">
            {formatPrice(product.price)}
          </span>
          <Button
            type="button"
            onClick={handleAdd}
            variant={added ? "secondary" : "primary"}
            className="shrink-0"
          >
            {added ? "Added!" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </article>
  );
}
