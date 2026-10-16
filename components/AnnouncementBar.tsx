import Link from "next/link";
import { CTA } from "@/lib/story";

/**
 * a150: the thin bar on top of every page. True today: DokyDoc's checks on orders, invoices, payments and stock are
 * in production since 15 October 2026 (docs/CLAIMS_REGISTER.md, "The story"). The founder's decision of 16 Oct 2026:
 * no public page names the product's internal brain.
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-ink-950 text-ink-300">
      <p className="container-page flex min-h-9 flex-wrap items-center justify-center gap-x-2 py-2 text-center text-[13.5px]">
        <span className="inline-flex items-center gap-2 text-ink-200">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-soft shadow-[0_0_10px_rgb(var(--accent-soft))]" />
          <span className="sm:hidden">DokyDoc now checks orders and invoices</span>
          <span className="hidden sm:inline">DokyDoc now checks orders, invoices, payments and stock</span>
        </span>
        <span aria-hidden="true" className="hidden text-ink-500 sm:inline">·</span>
        <Link href={CTA.demo.href} className="font-medium text-white underline decoration-accent-soft decoration-2 underline-offset-4">
          Book a demo <span aria-hidden="true">→</span>
        </Link>
      </p>
    </div>
  );
}
