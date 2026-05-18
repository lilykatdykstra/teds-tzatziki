export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  ingredients?: string[];
};

export { type StoreProduct } from "@/lib/sanity/api";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
