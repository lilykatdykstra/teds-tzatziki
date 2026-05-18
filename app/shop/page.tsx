import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { WholesaleProductCard } from "@/components/WholesaleProductCard";
import { getProducts, getShopPage } from "@/lib/sanity/api";
import { WholesaleInquiryForm } from "./WholesaleInquiryForm";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getShopPage();
  return {
    title: page.seoTitle ?? "Wholesale | Ted's Premium Tzatziki",
    description: page.seoDescription,
  };
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
      {children}
    </p>
  );
}

export default async function ShopPage() {
  const [products, page] = await Promise.all([getProducts(), getShopPage()]);
  const benefits = page.benefits ?? [];
  const pricingTiers = page.pricingTiers ?? [];
  const moqItems = page.moqItems ?? [];
  const steps = page.howItWorksSteps ?? [];
  const storeTypeOptions = page.formStoreTypeOptions ?? [];

  return (
    <div>
      {/* Hero */}
      <section className="hero-pattern border-b border-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            {page.eyebrow && <SectionEyebrow>{page.eyebrow}</SectionEyebrow>}
            <h1 className="mt-3 font-display text-4xl leading-tight text-stone sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            {page.description && (
              <p className="mt-6 text-lg leading-relaxed text-stone/75">
                {page.description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#wholesale-quote">Request a Quote</Button>
              <Button href="#pricing" variant="outline">
                View Pricing Tiers
              </Button>
            </div>
          </div>

          {benefits.length > 0 && (
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit._key}
                  className="rounded-2xl border border-sand/80 bg-white/80 p-6 backdrop-blur-sm"
                >
                  <h2 className="font-display text-lg text-aegean">
                    {benefit.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone/70">
                    {benefit.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product catalog */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          {page.catalogEyebrow && (
            <SectionEyebrow>{page.catalogEyebrow}</SectionEyebrow>
          )}
          {page.catalogTitle && (
            <h2 className="mt-2 font-display text-3xl text-stone sm:text-4xl">
              {page.catalogTitle}
            </h2>
          )}
          {page.catalogDescription && (
            <p className="mt-4 text-lg leading-relaxed text-stone/70">
              {page.catalogDescription}
            </p>
          )}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <WholesaleProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Pricing tiers */}
      {pricingTiers.length > 0 && (
        <section
          id="pricing"
          className="border-y border-sand bg-gradient-to-b from-sky-light/40 to-cream"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              {page.pricingEyebrow && (
                <SectionEyebrow>{page.pricingEyebrow}</SectionEyebrow>
              )}
              {page.pricingTitle && (
                <h2 className="mt-2 font-display text-3xl text-stone sm:text-4xl">
                  {page.pricingTitle}
                </h2>
              )}
              {page.pricingDescription && (
                <p className="mt-4 text-lg leading-relaxed text-stone/70">
                  {page.pricingDescription}
                </p>
              )}
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                  <h3 className="font-display text-2xl text-stone">
                    {tier.tierName}
                  </h3>
                  <p className="mt-1 text-sm text-stone/60">{tier.orderMinimum}</p>
                  <p className="mt-6 font-display text-4xl text-aegean">
                    {tier.pricePerCase}
                    <span className="ml-1 text-base font-sans font-normal text-stone/50">
                      / case
                    </span>
                  </p>
                  {tier.perks && (
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-stone/70">
                      {tier.perks}
                    </p>
                  )}
                  <Button
                    href="#wholesale-quote"
                    variant={index === 1 ? "primary" : "outline"}
                    className="mt-8 w-full"
                  >
                    Request Quote
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MOQ */}
      {moqItems.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              {page.moqEyebrow && (
                <SectionEyebrow>{page.moqEyebrow}</SectionEyebrow>
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
                  <dt className="text-sm font-semibold text-stone">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-stone/70 sm:text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* How it works */}
      {steps.length > 0 && (
        <section className="border-t border-sand bg-stone text-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            {page.howItWorksEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive-light">
                {page.howItWorksEyebrow}
              </p>
            )}
            {page.howItWorksTitle && (
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                {page.howItWorksTitle}
              </h2>
            )}
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step._key}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aegean text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Quote form */}
      <section
        id="wholesale-quote"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            {page.quoteEyebrow && (
              <SectionEyebrow>{page.quoteEyebrow}</SectionEyebrow>
            )}
            {page.quoteTitle && (
              <h2 className="mt-2 font-display text-3xl text-stone sm:text-4xl">
                {page.quoteTitle}
              </h2>
            )}
            {page.quoteDescription && (
              <p className="mt-4 text-lg leading-relaxed text-stone/70">
                {page.quoteDescription}
              </p>
            )}
            <ul className="mt-8 space-y-3 text-sm text-stone/65">
              <li className="flex gap-2">
                <span className="text-olive">✓</span>
                No commitment required for initial quotes
              </li>
              <li className="flex gap-2">
                <span className="text-olive">✓</span>
                Response within two business days
              </li>
              <li className="flex gap-2">
                <span className="text-olive">✓</span>
                Dedicated rep for Partner tier accounts
              </li>
            </ul>
          </div>
          <WholesaleInquiryForm
            products={products}
            formStoreLabel={page.formStoreLabel}
            formContactLabel={page.formContactLabel}
            formEmailLabel={page.formEmailLabel}
            formPhoneLabel={page.formPhoneLabel}
            formStoreTypeLabel={page.formStoreTypeLabel}
            formStoreTypeOptions={storeTypeOptions}
            formProductsLabel={page.formProductsLabel}
            formVolumeLabel={page.formVolumeLabel}
            formRegionLabel={page.formRegionLabel}
            formMessageLabel={page.formMessageLabel}
            formSubmitText={page.formSubmitText}
            formSuccessTitle={page.formSuccessTitle}
            formSuccessMessage={page.formSuccessMessage}
          />
        </div>
      </section>
    </div>
  );
}
