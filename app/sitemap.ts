import type { MetadataRoute } from "next";
import { DOKYDOC_HOME_LIVE, SITE_URL } from "@/lib/site";
import manifesto from "@/lib/manifesto.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    // Once dokydoc.com's home page is live, /dokydoc redirects there and leaves the sitemap.
    ...(DOKYDOC_HOME_LIVE ? [] : [{ path: "/dokydoc", priority: 0.9 }]),
    // a155: the manifesto, once the founder signs it (a review build's preview never reaches the sitemap).
    ...(manifesto.signed === true ? [{ path: "/manifesto", priority: 0.8 }] : []),
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/security/disclosure", priority: 0.2 },
  ];
  return pages.map((p) => ({ url: `${SITE_URL}${p.path}`, changeFrequency: "monthly", priority: p.priority }));
}
