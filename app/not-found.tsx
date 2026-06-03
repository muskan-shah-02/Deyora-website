import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist on deyora.ai.",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-32 border-b border-subtle">
      <div className="container-deyora text-center max-w-2xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-blue-soft mb-6">
          404 — Page Not Found
        </div>
        <h1 className="display text-5xl md:text-7xl text-white mb-8">
          This page doesn't<br />
          map to anything.
        </h1>
        <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-10 max-w-lg mx-auto">
          The URL you tried doesn't exist on deyora.ai. Head back to the homepage or jump
          straight to DokyDoc.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/" className="btn-primary">
            Back Home
          </Link>
          <Link href="/products/dokydoc" className="btn-secondary">
            See DokyDoc →
          </Link>
        </div>
      </div>
    </section>
  );
}
