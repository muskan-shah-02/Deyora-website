import Link from "next/link";
import { CTA } from "@/lib/story";

/**
 * a150: the thin bar on top of every page. True today: DokyBrain is in production inside DokyDoc since
 * 15 October 2026 (docs/CLAIMS_REGISTER.md, "The story").
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-ink-950 text-ink-300">
      <p className="container-page flex min-h-9 flex-wrap items-center justify-center gap-x-2 py-2 text-center text-[13.5px]">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" />
        <span className="text-ink-200">DokyBrain is live inside DokyDoc</span>
        <span aria-hidden="true" className="text-ink-500">·</span>
        <Link href={CTA.demo.href} className="font-medium text-white underline decoration-accent decoration-2 underline-offset-4">
          Book a demo <span aria-hidden="true">→</span>
        </Link>
      </p>
    </div>
  );
}
