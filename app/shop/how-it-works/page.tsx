import type { Metadata } from "next";
import Link from "next/link";
import { getShopPage } from "@/lib/sanity/api";
import { Button } from "@/components/Button";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "How It Works | Ted's Premium Tzatziki Wholesale",
  description: "Learn how to become a wholesale partner with Ted's Premium Tzatziki.",
};

export default async function HowItWorksPage() {
  const page = await getShopPage();
  const steps = page.howItWorksSteps ?? [];

  return (
    <div>
      <div className="border-b border-sand bg-stone text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link href="/shop" className="text-sm font-medium text-olive-light hover:text-cream">
            ← Wholesale overview
          </Link>
          <div className="mt-6 max-w-2xl">
            {page.howItWorksEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive-light">
                {page.howItWorksEyebrow}
              </p>
            )}
            <h1 className="mt-2 font-display text-4xl sm:text-5xl">
              {page.howItWorksTitle ?? "How It Works"}
            </h1>
          </div>
        </div>
      </div>

      {steps.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <ol className="space-y-12">
            {steps.map((step, index) => (
              <li key={step._key} className="flex gap-6 sm:gap-10">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-aegean text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div className="pt-2">
                  <h2 className="font-display text-2xl text-stone">{step.title}</h2>
                  <p className="mt-2 leading-relaxed text-stone/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="border-t border-sand bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 text-center">
          <p className="font-display text-2xl text-stone">Ready to get started?</p>
          <p className="mt-2 text-stone/60">Fill out a quote request and we'll be in touch within two business days.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/shop#wholesale-quote">Request a Quote</Button>
            <Button href="/shop/pricing" variant="outline">View Pricing</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
