import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "./types";

const FALLBACK_IMAGE = "/images/hero-products.png";

export function getSanityImageUrl(
  image: SanityImage | undefined,
  width = 800,
): string {
  if (!image?.asset) return FALLBACK_IMAGE;

  if ("url" in image.asset && image.asset.url) {
    const url = new URL(image.asset.url);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", "85");
    return url.toString();
  }

  try {
    return urlFor(image).width(width).quality(85).url();
  } catch {
    return FALLBACK_IMAGE;
  }
}
