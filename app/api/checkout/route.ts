import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductsByIds } from "@/lib/sanity/api";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key, {
    apiVersion: "2026-04-22.dahlia",
  });
}

type CheckoutItem = {
  productId: string;
  quantity: number;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = body.items as CheckoutItem[] | undefined;

    if (!items?.length) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 },
      );
    }

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const productIds = items.map((i) => i.productId);
    const products = await getProductsByIds(productIds);
    const productMap = new Map(products.map((p) => [p.id, p]));

    const lineItems = [];

    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product || item.quantity < 1) continue;

      lineItems.push({
        price_data: {
          currency: "usd" as const,
          product_data: {
            name: product.name,
            description: product.description.slice(0, 200),
            images: product.image.startsWith("http")
              ? [product.image]
              : [`${origin}${product.image}`],
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: item.quantity,
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "No valid items in cart" },
        { status: 400 },
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/cart?success=true`,
      cancel_url: `${origin}/cart?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 },
    );
  }
}
