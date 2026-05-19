import Image from "next/image";
import { Button } from "@/components/Button";
import { getHomepage } from "@/lib/sanity/api";
import { getSanityImageUrl } from "@/lib/sanity/image";

export const revalidate = 30;

const featureAccents = ["text-aegean", "text-olive", "text-coney-red"];

export default async function HomePage() {
  const homepage = await getHomepage();
  const heroImage = homepage.heroImage
    ? getSanityImageUrl(homepage.heroImage, 900)
    : "/images/hero-products.png";

  const headlineLines = homepage.heroHeadline.split("\n").filter(Boolean);
  const features = homepage.features ?? [];

  return (
    <>
      <section className="hero-pattern relative overflow-hidden border-b border-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            {homepage.heroEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-olive">
                {homepage.heroEyebrow}
              </p>
            )}
            <h1 className="mt-4 font-display text-5xl leading-[1.1] text-stone sm:text-6xl lg:text-7xl">
              {headlineLines.map((line, index) => (
                <span
                  key={line}
                  className={
                    index === 0
                      ? "block"
                      : index === 1
                        ? "block text-aegean"
                        : "font-script block text-4xl text-olive sm:text-5xl"
                  }
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone/75">
              {homepage.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/shop">{homepage.heroButtonText}</Button>
              {homepage.heroSecondaryButtonText && (
                <Button href="/our-story" variant="outline">
                  {homepage.heroSecondaryButtonText}
                </Button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-aegean/10 via-sky-light to-olive/10" />
            <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-aegean/10">
              <Image
                src={heroImage}
                alt={homepage.heroImageAlt ?? "Ted's Premium Tzatziki"}
                width={600}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {(homepage.whyTitle || features.length > 0) && (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center">
            {homepage.whyEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-aegean">
                {homepage.whyEyebrow}
              </p>
            )}
            {homepage.whyTitle && (
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">
                {homepage.whyTitle}
              </h2>
            )}
          </div>
          {features.length > 0 && (
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {features.map((item, index) => (
                <div
                  key={item._key}
                  className="rounded-2xl border border-sand bg-white p-8 text-center shadow-sm"
                >
                  <h3
                    className={`font-display text-xl ${featureAccents[index % featureAccents.length]}`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          )}
          {homepage.whyCtaText && (
            <div className="mt-14 text-center">
              <Button href="/shop" variant="secondary">
                {homepage.whyCtaText}
              </Button>
            </div>
          )}
        </section>
      )}
      {/* Find a store */}
      <section className="border-t border-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aegean">
              Find Us Near You
            </p>
            <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">
              Available at these Des Moines retailers
            </h2>
            <p className="mt-3 text-sm text-stone/55">Click any location for directions</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stores.map((store) => (
              <a
                key={store.name + store.address}
                href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-sand bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-display text-xl text-stone transition-colors group-hover:text-aegean">
                  {store.name}
                </p>
                <p className="mt-1 flex-1 text-sm text-stone/55">{store.address}</p>
                <p className="mt-4 text-xs font-semibold text-aegean">
                  Get directions →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const stores = [
  { name: "Gateway Market", address: "2002 Woodland Ave, Des Moines, IA 50312" },
  { name: "Campbell's Market", address: "4040 University Ave, Des Moines" },
  { name: "Campbell's Market", address: "2749 100th St, Des Moines" },
  { name: "Price Chopper", address: "3425 Ingersoll Ave, Des Moines" },
  { name: "Price Chopper", address: "2701 Beaver Ave, Des Moines" },
];
