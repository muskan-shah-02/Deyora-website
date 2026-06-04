import Link from "next/link";

// Always-visible "back to context" cue at the top of every internal page.
// Solves the "I clicked Book a Demo, how do I get back?" feedback.

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary mb-8 flex items-center flex-wrap gap-x-3 gap-y-1"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
      >
        <span aria-hidden="true">←</span> Deyora
      </Link>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-3">
          <span className="text-ink-tertiary" aria-hidden="true">
            /
          </span>
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
