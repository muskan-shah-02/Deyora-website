/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // Pages removed in the October 2026 rebuild keep working as links.
  async redirects() {
    return [
      { source: "/pricing", destination: "/dokydoc#pricing", permanent: true },
      { source: "/products", destination: "/#products", permanent: true },
      { source: "/products/dokydoc", destination: "/dokydoc", permanent: true },
      { source: "/products/:slug", destination: "/", permanent: true },
      { source: "/book-a-demo", destination: "/contact?topic=dokydoc", permanent: true },
    ];
  },
};
module.exports = nextConfig;
