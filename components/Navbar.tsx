"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const wholesaleLinks = [
  { href: "/shop", label: "Overview" },
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWholesaleOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const wholesaleActive = pathname.startsWith("/shop");

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

        <nav className="flex items-center gap-1 sm:gap-2">
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
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setWholesaleOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                wholesaleActive
                  ? "bg-aegean/10 text-aegean"
                  : "text-stone hover:bg-sand/60 hover:text-aegean-dark"
              }`}
            >
              Wholesale
              <svg
                className={`h-3.5 w-3.5 transition-transform ${wholesaleOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {wholesaleOpen && (
              <div className="absolute left-0 top-full mt-1 w-48 rounded-2xl border border-sand bg-white py-1.5 shadow-lg">
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
      </div>
    </header>
  );
}
