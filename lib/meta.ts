import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Per-page metadata. Next.js replaces a parent's openGraph object rather than
 * merging it (a page that set only a title lost its share image and site
 * name), so each page sets the whole thing, with its own URL.
 */
const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "Deyora Intelligence: run your company on evidence, not guesswork." };

export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const ogTitle = title ? `${title} · Deyora Intelligence` : "Deyora Intelligence";
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Deyora Intelligence",
      locale: "en_IN",
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      title: ogTitle,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: [image.url] },
  };
}
