import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { SITE_URL, company } from "@/lib/site";

const serif = Fraunces({ subsets: ["latin"], axes: ["opsz", "SOFT"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const description =
  "Deyora Intelligence builds intelligence for the people who run companies. DokyDoc, our first product, checks software against the documents that say what it should do. A person always decides.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Deyora Intelligence · Intelligence for the people who run companies",
    template: "%s · Deyora Intelligence",
  },
  description,
  applicationName: "Deyora Intelligence",
  openGraph: {
    type: "website",
    siteName: "Deyora Intelligence",
    locale: "en_IN",
    url: SITE_URL,
    title: "Deyora Intelligence",
    description,
  },
  twitter: { card: "summary_large_image", title: "Deyora Intelligence", description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#090B10",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brand,
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/deyora-mark-512.png`,
  foundingDate: "2026-05-08",
  email: company.email,
  identifier: { "@type": "PropertyValue", propertyID: "CIN", value: company.cin },
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-195, Shastri Nagar",
    addressLocality: "Bhilwara",
    addressRegion: "Rajasthan",
    postalCode: "311001",
    addressCountry: "IN",
  },
  brand: [{ "@type": "Brand", name: "DokyDoc", url: "https://dokydoc.com" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script
          type="application/ld+json"
          // Organization facts only; every value comes from lib/site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
