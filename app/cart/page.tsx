import { Suspense } from "react";
import { CartClient } from "./CartClient";

export const metadata = {
  title: "Cart | Ted's Premium Tzatziki",
  description: "Review your cart and checkout.",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-aegean">
        Your Cart
      </p>
      <h1 className="mt-2 font-display text-4xl text-stone">Checkout</h1>
      <Suspense fallback={<p className="mt-8 text-stone/60">Loading cart…</p>}>
        <CartClient />
      </Suspense>
    </div>
  );
}
