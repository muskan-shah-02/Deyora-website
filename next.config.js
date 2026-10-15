// dokydoc.com's own home page (t155, a147): once lib/dokydoc-home.json says it is live, /dokydoc redirects there
// permanently (301), and so do the old links that led to it.
const { live: DOKYDOC_HOME_LIVE } = require("./lib/dokydoc-home.json");
const PRODUCT = DOKYDOC_HOME_LIVE === true ? "https://dokydoc.com" : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // Pages removed in the October 2026 rebuild keep working as links.
  async redirects() {
    if (PRODUCT) {
      return [
        { source: "/dokydoc", destination: PRODUCT, statusCode: 301 },
        { source: "/dokydoc/:path*", destination: PRODUCT, statusCode: 301 },
        { source: "/pricing", destination: PRODUCT, statusCode: 301 },
        { source: "/products", destination: "/#products", permanent: true },
        { source: "/products/dokydoc", destination: PRODUCT, statusCode: 301 },
        { source: "/products/:slug", destination: "/", permanent: true },
        { source: "/book-a-demo", destination: "/contact?topic=demo", permanent: true },
      ];
    }
    return [
      { source: "/pricing", destination: "/dokydoc#pricing", permanent: true },
      { source: "/products", destination: "/#products", permanent: true },
      { source: "/products/dokydoc", destination: "/dokydoc", permanent: true },
      { source: "/products/:slug", destination: "/", permanent: true },
      { source: "/book-a-demo", destination: "/contact?topic=demo", permanent: true },
    ];
  },
};
module.exports = nextConfig;
