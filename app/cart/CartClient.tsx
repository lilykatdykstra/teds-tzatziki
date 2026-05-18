"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export function CartClient() {
  const searchParams = useSearchParams();
  const { lines, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const success = searchParams.get("success") === "true";
  const canceled = searchParams.get("canceled") === "true";

  useEffect(() => {
    if (success) clearCart();
  }, [success, clearCart]);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((line) => ({
            productId: line.productId,
            quantity: line.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Checkout failed");
      }
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  if (lines.length === 0) {
    return (
      <div className="mt-12 rounded-2xl border border-dashed border-sand bg-white p-12 text-center">
        {success && (
          <p className="mb-4 rounded-lg bg-olive/10 px-4 py-3 text-olive-dark">
            Thank you! Your order was placed successfully.
          </p>
        )}
        {canceled && (
          <p className="mb-4 rounded-lg bg-sand/80 px-4 py-3 text-stone/70">
            Checkout was canceled.
          </p>
        )}
        <p className="text-lg text-stone/70">Your cart is empty.</p>
        <Button href="/shop" className="mt-6">
          Shop Tzatziki
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <ul className="divide-y divide-sand rounded-2xl border border-sand bg-white">
        {lines.map((line) => (
          <li
            key={line.productId}
            className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-sky-light">
              <Image
                src={line.product.image}
                alt={line.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg text-stone">
                {line.product.name}
              </h2>
              <p className="text-sm text-stone/60">
                {formatPrice(line.product.price)} each
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-full border border-sand">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(line.productId, line.quantity - 1)
                  }
                  className="px-3 py-1 text-lg text-stone hover:bg-sand/50"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="min-w-[2rem] text-center text-sm font-semibold">
                  {line.quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(line.productId, line.quantity + 1)
                  }
                  className="px-3 py-1 text-lg text-stone hover:bg-sand/50"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <span className="min-w-[4rem] text-right font-semibold text-aegean">
                {formatPrice(line.lineTotal)}
              </span>
              <button
                type="button"
                onClick={() => removeItem(line.productId)}
                className="text-sm text-stone/50 underline hover:text-coney-red"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-sand bg-white p-6">
        <div className="flex items-center justify-between text-lg">
          <span className="font-medium">Subtotal</span>
          <span className="font-display text-2xl text-aegean">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="mt-2 text-xs text-stone/50">
          Shipping and tax calculated at checkout.
        </p>
        {error && (
          <p className="mt-4 rounded-lg bg-coney-red/10 px-4 py-2 text-sm text-coney-red">
            {error}
          </p>
        )}
        <Button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="mt-6 w-full disabled:opacity-60"
        >
          {loading ? "Redirecting…" : "Checkout with Stripe"}
        </Button>
        <p className="mt-4 text-center text-sm">
          <Link href="/shop" className="text-aegean underline hover:text-aegean-dark">
            Continue shopping
          </Link>
        </p>
      </div>
    </div>
  );
}
