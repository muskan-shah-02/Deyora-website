import Link from "next/link";
import { CommitmentsIllustration } from "@/components/Illustrations";
import { HeroMotif, HeroMotifCompact } from "@/components/HeroMotif";
import DokyDocLink from "@/components/DokyDocLink";
import { CTA, STORY } from "@/lib/story";

/**
 * a150: the first screen. A large rounded dark panel with a soft glow in the accent colour, our motif behind the
 * centred headline (words as approved, lib/story.ts), and the "Needs you today" example card just below it.
 */
export default function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="px-3 pt-4 sm:px-5">
      <div className="on-dark relative mx-auto max-w-[1360px] overflow-hidden rounded-[28px] bg-ink-950 text-ink-200 sm:rounded-[36px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-30%] h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgb(var(--accent) / 0.45), transparent)" }}
        />
        <div aria-hidden="true" className="grain absolute inset-0 opacity-50" />
        <HeroMotif />
        <div className="relative mx-auto max-w-[820px] px-5 pb-28 pt-14 text-center sm:px-10 sm:pb-40 sm:pt-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-ink-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {STORY.eyebrow}
          </p>
          <h1 id="hero-title" className="h-display mt-7 text-[42px] sm:text-[64px] lg:text-[76px]">
            {STORY.headline} <span className="text-accent-soft">{STORY.accent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[38rem] text-[18px] leading-[1.6] text-ink-300 sm:text-[20px]">{STORY.line}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] text-ink-200">
            {STORY.points.map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-accent">✓</span>
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <DokyDocLink href={CTA.start.href} className="btn-accent !px-6 !py-3.5 !text-[16px]">
              {CTA.start.label}
            </DokyDocLink>
            <Link href={CTA.demo.href} className="btn btn-ghost !px-6 !py-3.5 !text-[16px]">
              {CTA.demo.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-[34rem] text-[14px] leading-relaxed text-ink-400">{STORY.today}</p>
          <HeroMotifCompact />
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-20 max-w-[560px] px-2 sm:-mt-28">
        <CommitmentsIllustration />
      </div>
    </section>
  );
}
