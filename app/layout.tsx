import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { ForParam, VisitorProvider } from "@/components/Visitor";
import { Suspense } from "react";
import { SITE_URL, company, people } from "@/lib/site";

/**
 * a150: one design system for deyoraintelligence.com and dokydoc.com: Geist Sans and Geist Mono, self-hosted by the
 * geist package (the same version DokyDoc uses), and one brand accent. The accent is "blue" or "marigold" (the two
 * options the founder chooses between); NEXT_PUBLIC_ACCENT picks one for a build, and the chosen one becomes the
 * default here.
 */
const ACCENT = process.env.NEXT_PUBLIC_ACCENT === "marigold" ? "marigold" : "blue";

const description =
  "Intelligence for the people who run companies. DokyDoc, live today, checks the software you paid for against what was agreed. It prepares. You decide.";

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
  founder: {
    "@type": "Person",
    name: company.founder,
    jobTitle: company.founderTitle,
    ...(company.founderLinkedIn ? { sameAs: [company.founderLinkedIn] } : {}),
  },
  // The people on /about (board task t212), each with the role Trust Pack CO-01 section 4 gives them.
  member: people.map((p) => ({
    "@type": "OrganizationRole",
    roleName: p.role,
    member: { "@type": "Person", name: p.name, sameAs: [p.linkedIn] },
  })),
  ...(company.companyLinkedIn ? { sameAs: [company.companyLinkedIn] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-accent={ACCENT} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <VisitorProvider>
          <Suspense fallback={null}>
            <ForParam />
          </Suspense>
          <AnnouncementBar />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <RevealObserver />
        </VisitorProvider>
        <script
          type="application/ld+json"
          // Organization facts only; every value comes from lib/site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
