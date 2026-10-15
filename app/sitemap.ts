import type { MetadataRoute } from "next";
import { DOKYDOC_HOME_LIVE, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    // Once dokydoc.com's home page is live, /dokydoc redirects there and leaves the sitemap.
    ...(DOKYDOC_HOME_LIVE ? [] : [{ path: "/dokydoc", priority: 0.9 }]),
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/security/disclosure", priority: 0.2 },
  ];
  return pages.map((p) => ({ url: `${SITE_URL}${p.path}`, changeFrequency: "monthly", priority: p.priority }));
}
