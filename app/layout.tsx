import type { Metadata } from "next";
import { DM_Sans, Pacifico, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { getProducts } from "@/lib/sanity/api";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ted's Premium Tzatziki | Family-Owned Greek Dip",
  description:
    "Crisp, fresh tzatziki from Ted's Coney Island — a Greek immigrant-owned family business in Des Moines.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getProducts();

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-stone">
        <CartProvider products={products}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
