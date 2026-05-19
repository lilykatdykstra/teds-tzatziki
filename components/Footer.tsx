import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sand bg-stone text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg text-cream">
              Ted&apos;s Premium Tzatziki
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              New from Ted's Coney Island — a family-owned Des Moines landmark since 1957. Crisp, fresh tzatziki made the way Ted always has.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-olive-light">
                Wholesale
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="hover:text-olive-light">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/shop/products" className="hover:text-olive-light">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop/pricing" className="hover:text-olive-light">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/shop/how-it-works" className="hover:text-olive-light">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/shop#wholesale-quote" className="hover:text-olive-light">
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-olive-light">
                About
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/our-story" className="hover:text-olive-light">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/recipes" className="hover:text-olive-light">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-olive-light">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-olive-light">
                Visit
              </p>
              <p className="text-sm leading-relaxed text-cream/70">
                Ted&apos;s Coney Island
                <br />
                <a href="https://maps.google.com/?q=3020+Ingersoll+Ave,+Des+Moines,+Iowa+50312" target="_blank" rel="noopener noreferrer" className="hover:text-olive-light">3020 Ingersoll Ave, Des Moines, Iowa 50312</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
