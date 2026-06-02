import Link from "next/link";
import Logo from "./Logo";
import { company } from "@/lib/company";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Deyora", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Story", href: "/about#story" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "DokyDoc", href: "/products/dokydoc" },
      { label: "Visit dokydoc.com", href: "https://dokydoc.com/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-subtle px-6 md:px-16 pt-16 md:pt-20 pb-12">
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 md:gap-20 lg:grid-cols-[1fr_2fr] mb-16">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo withWordmark={false} className="h-8 w-auto" />
            </Link>
            <div className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-secondary mb-3">
              {company.name}
            </div>
            <p className="font-sans font-light text-[13px] leading-relaxed text-ink-tertiary max-w-[300px]">
              {company.tagline} Building the right code, the first time.
            </p>
          </div>

          <div className="grid gap-10 grid-cols-2 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-secondary mb-5">
                  {col.title}
                </div>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block font-sans font-light text-[13px] text-ink-tertiary mb-3 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-subtle pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-ink-tertiary">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <div className="flex gap-2">
            {[
              {
                label: "LinkedIn",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                label: "X",
                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
              },
              {
                label: "GitHub",
                path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
              },
              {
                label: "Email",
                path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-10 h-10 border border-subtle flex items-center justify-center hover:border-white/30 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink-secondary">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
