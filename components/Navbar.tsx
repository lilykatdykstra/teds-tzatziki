"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const wholesaleLinks = [
  { href: "/shop/products", label: "Products" },
  { href: "/shop/pricing", label: "Pricing" },
  { href: "/shop/how-it-works", label: "How It Works" },
];

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/recipes", label: "Recipes" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [wholesaleOpen, setWholesaleOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const wholesaleActive = pathname.startsWith("/shop");

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 flex-col">
          <span className="font-script text-xl leading-none text-olive">
            Ted&apos;s
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-aegean">
            Premium Tzatziki
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
          <Link
            href="/"
            className={`rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
              pathname === "/"
                ? "bg-aegean/10 text-aegean"
                : "text-stone hover:bg-sand/60 hover:text-aegean-dark"
            }`}
          >
            Home
          </Link>

          {/* Wholesale dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setWholesaleOpen(true)}
            onMouseLeave={() => setWholesaleOpen(false)}
          >
            <Link
              href="/shop"
              className={`block rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                wholesaleActive
                  ? "bg-aegean/10 text-aegean"
                  : "text-stone hover:bg-sand/60 hover:text-aegean-dark"
              }`}
            >
              Wholesale
            </Link>

            {wholesaleOpen && (
              <div className="absolute left-0 top-full w-48 rounded-2xl border border-sand bg-white py-1.5 shadow-lg">
                {wholesaleLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setWholesaleOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-sand/50 hover:text-aegean ${
                      pathname === link.href ? "text-aegean" : "text-stone"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mx-3 my-1.5 border-t border-sand" />
                <Link
                  href="/shop#wholesale-quote"
                  onClick={() => setWholesaleOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-aegean transition-colors hover:bg-sand/50"
                >
                  Get a Quote →
                </Link>
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                pathname.startsWith(link.href)
                  ? "bg-aegean/10 text-aegean"
                  : "text-stone hover:bg-sand/60 hover:text-aegean-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-stone transition-colors hover:bg-sand/60 sm:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="4" x2="16" y2="4" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="14" x2="16" y2="14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-sand bg-cream sm:hidden">
          <nav className="mx-auto max-w-6xl divide-y divide-sand/60 px-4">
            <Link
              href="/"
              onClick={closeMobile}
              className={`block py-3.5 text-sm font-medium ${pathname === "/" ? "text-aegean" : "text-stone"}`}
            >
              Home
            </Link>
            <div>
              <Link
                href="/shop"
                onClick={closeMobile}
                className={`block py-3.5 text-sm font-medium ${wholesaleActive ? "text-aegean" : "text-stone"}`}
              >
                Wholesale
              </Link>
              <div className="mb-3 ml-3 space-y-0.5 border-l-2 border-sand pl-4">
                {wholesaleLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={`block py-2 text-sm ${pathname === link.href ? "text-aegean" : "text-stone/70"}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/shop#wholesale-quote"
                  onClick={closeMobile}
                  className="block py-2 text-sm font-semibold text-aegean"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`block py-3.5 text-sm font-medium ${pathname.startsWith(link.href) ? "text-aegean" : "text-stone"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
