import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, IBM_Plex_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://deyora.ai";

const barlow = Barlow_Condensed({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});
const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const plexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Deyora Intelligence — DokyDoc: AI Traceability for Software Delivery",
    template: "%s | Deyora Intelligence",
  },
  description:
    "DokyDoc by Deyora Intelligence reads your PRDs and codebase, maps every requirement to live code, and shows you exactly where they disagree. In private alpha — book a founder-led demo.",
  keywords: [
    "AI traceability",
    "requirement traceability matrix",
    "spec to code",
    "PRD analysis",
    "software delivery intelligence",
    "audit traceability",
    "DokyDoc",
    "Deyora Intelligence",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Deyora Intelligence",
    title: "DokyDoc — AI Traceability from PRD to Production",
    description:
      "Your specs and your code disagree. DokyDoc finds every gap and keeps them in sync. Private alpha — book a demo.",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Deyora Intelligence — DokyDoc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DokyDoc — AI Traceability from PRD to Production",
    description:
      "Your specs and your code disagree. DokyDoc finds every gap. Private alpha — book a demo.",
    images: ["/images/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deyora Intelligence",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description:
    "Deyora Intelligence builds AI products that make software delivery measurable, mathematical, and trustworthy. Creator of DokyDoc.",
  email: "muskan@deyoraintelligence.com",
  sameAs: [],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DokyDoc",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI traceability platform that maps product requirements to live code, generates UAT checklists, and produces audit-ready evidence trails.",
  brand: { "@type": "Brand", name: "Deyora Intelligence" },
  offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${outfit.variable} ${mono.variable} ${plexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
