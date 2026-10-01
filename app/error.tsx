"use client";

import Link from "next/link";
import { company } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="h-display mt-6 text-[40px] sm:text-[52px]">This page did not load.</h1>
        <p className="lede mt-6">
          Please try again. If it keeps happening, email{" "}
          <a href={`mailto:${company.email}`} className="underline underline-offset-4">
            {company.email}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-ghost">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
