import type { Metadata } from "next";
import Link from "next/link";
import { getShopPage } from "@/lib/sanity/api";
import { Button } from "@/components/Button";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Wholesale Pricing | Ted's Premium Tzatziki",
  description: "Wholesale pricing tiers and minimum order requirements for Ted's Premium Tzatziki.",
};

export default async function PricingPage() {
  const page = await getShopPage();
  const pricingTiers = page.pricingTiers ?? [];
  const moqItems = page.moqItems ?? [];

  return (
    <div>
      <div className="hero-pattern border-b border-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link href="/shop" className="text-sm font-medium text-aegean hover:text-aegean-dark">
            ← Wholesale overview
          </Link>
          <div className="mt-6 max-w-2xl">
            {page.pricingEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
                {page.pricingEyebrow}
              </p>
            )}
            <h1 className="mt-2 font-display text-4xl text-stone sm:text-5xl">
              {page.pricingTitle ?? "Pricing"}
            </h1>
            {page.pricingDescription && (
              <p className="mt-4 text-lg leading-relaxed text-stone/70">
                {page.pricingDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {pricingTiers.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <article
                key={tier._key}
                className={`flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                  index === 1
                    ? "border-aegean ring-2 ring-aegean/15 lg:-translate-y-1"
                    : "border-sand"
                }`}
              >
                {index === 1 && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-aegean/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-aegean">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-2xl text-stone">{tier.tierName}</h2>
                <p className="mt-1 text-sm text-stone/60">{tier.orderMinimum}</p>
                <p className="mt-6 font-display text-4xl text-aegean">
                  {tier.pricePerCase}
                  <span className="ml-1 text-base font-sans font-normal text-stone/50">/ case</span>
                </p>
                {tier.perks && (
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone/70">{tier.perks}</p>
                )}
                <Button
                  href="/shop#wholesale-quote"
                  variant={index === 1 ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  Request Quote
                </Button>
              </article>
            ))}
          </div>
        </section>
      )}

      {moqItems.length > 0 && (
        <section className="border-t border-sand bg-gradient-to-b from-sky-light/40 to-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                {page.moqEyebrow && (
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
                    {page.moqEyebrow}
                  </p>
                )}
                {page.moqTitle && (
                  <h2 className="mt-2 font-display text-3xl text-stone sm:text-4xl">
                    {page.moqTitle}
                  </h2>
                )}
                {page.moqDescription && (
                  <p className="mt-4 text-lg leading-relaxed text-stone/70">
                    {page.moqDescription}
                  </p>
                )}
              </div>
              <dl className="divide-y divide-sand rounded-2xl border border-sand bg-white">
                {moqItems.map((item) => (
                  <div
                    key={item._key}
                    className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <dt className="text-sm font-semibold text-stone">{item.label}</dt>
                    <dd className="text-sm text-stone/70 sm:text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 text-center">
        <p className="text-stone/60 text-sm">Ready to place an order?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button href="/shop#wholesale-quote">Request a Quote</Button>
          <Button href="/shop/products" variant="outline">Browse Products</Button>
        </div>
      </section>
    </div>
  );
}
