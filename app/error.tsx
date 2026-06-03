"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error to whatever monitoring you wire up later.
    // For now we just log to console so it's visible in DevTools.
    // eslint-disable-next-line no-console
    console.error("Page-level error:", error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-32 border-b border-subtle">
      <div className="container-deyora text-center max-w-2xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-danger mb-6">
          Something went wrong
        </div>
        <h1 className="display text-5xl md:text-7xl text-white mb-8">
          Even traceable<br />systems sometimes<br />drift.
        </h1>
        <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-10 max-w-lg mx-auto">
          We hit an unexpected error rendering this page. Try again, head home, or email
          muskan@deyoraintelligence.com if it keeps happening.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => reset()} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Back Home →
          </Link>
        </div>
      </div>
    </section>
  );
}
