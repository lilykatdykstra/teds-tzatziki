"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Wholesale" },
  { href: "/our-story", label: "Our Story" },
  { href: "/recipes", label: "Recipes" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Ted's Coney Island"
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden flex-col sm:flex">
            <span className="font-script text-xl leading-none text-olive">
              Ted&apos;s
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-coney-red">
              Premium Tzatziki
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  active
                    ? "bg-aegean/10 text-aegean"
                    : "text-stone hover:bg-sand/60 hover:text-aegean-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop#wholesale-quote"
            className="ml-1 rounded-full bg-aegean px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-aegean-dark sm:ml-2 sm:px-4"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
