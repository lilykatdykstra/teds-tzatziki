import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
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

const subpages = [
  {
    href: "/shop/products",
    label: "Product Catalog",
    description: "Browse our full line of tzatziki products with pack sizes, specs, and ingredient details.",
  },
  {
    href: "/shop/pricing",
    label: "Pricing & MOQ",
    description: "Wholesale pricing tiers and minimum order requirements for every account size.",
  },
  {
    href: "/shop/how-it-works",
    label: "How It Works",
    description: "A simple step-by-step overview of the ordering and onboarding process.",
  },
];

export default async function ShopPage() {
  const [products, page] = await Promise.all([getProducts(), getShopPage()]);
  const benefits = page.benefits ?? [];
  const storeTypeOptions = page.formStoreTypeOptions ?? [];

  return (
    <div>
      {/* Hero */}
      <section className="hero-pattern border-b border-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            {page.eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
                {page.eyebrow}
              </p>
            )}
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
              <Button href="/shop/products" variant="outline">Browse Products</Button>
            </div>
          </div>

          {benefits.length > 0 && (
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit._key}
                  className="rounded-2xl border border-sand/80 bg-white/80 p-6 backdrop-blur-sm"
                >
                  <h2 className="font-display text-lg text-aegean">{benefit.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone/70">{benefit.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subpage nav cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {subpages.map((subpage) => (
            <Link
              key={subpage.href}
              href={subpage.href}
              className="group flex flex-col rounded-2xl border border-sand bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="font-display text-xl text-stone transition-colors group-hover:text-aegean">
                {subpage.label}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone/60">
                {subpage.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-aegean">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote form */}
      <section
        id="wholesale-quote"
        className="border-t border-sand mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            {page.quoteEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
                {page.quoteEyebrow}
              </p>
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
