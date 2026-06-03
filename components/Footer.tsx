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
      { label: "Book a Demo", href: "/book-a-demo" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How DokyDoc Works", href: "/#how-it-works" },
      { label: "Who It's For", href: "/#who" },
      { label: "Security & Trust", href: "/#trust" },
      { label: "ROI Estimator", href: "/#roi" },
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
            <p className="font-sans font-light text-[13px] leading-relaxed text-ink-secondary max-w-[300px]">
              {company.tagline} Building the right code, the first time.
            </p>
            <a
              href="mailto:muskan@deyoraintelligence.com"
              className="inline-block mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white hover:text-accent-blue-soft transition-colors"
            >
              muskan@deyoraintelligence.com →
            </a>
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
                    className="block font-sans font-light text-[13px] text-ink-secondary mb-3 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-subtle pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-ink-secondary">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:muskan@deyoraintelligence.com"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-secondary hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-ink-tertiary" aria-hidden>·</span>
            <Link
              href="/book-a-demo"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-white hover:text-accent-blue-soft transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
