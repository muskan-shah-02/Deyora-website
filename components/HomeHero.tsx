import Link from "next/link";
import { CommitmentsIllustration } from "@/components/Illustrations";
import DokyDocLink from "@/components/DokyDocLink";
import { Eyebrow } from "@/components/ui";
import { CTA, STORY } from "@/lib/story";

/**
 * What everyone sees first, and what search engines see: what DokyDoc does, in plain words (lib/story.ts),
 * the two actions, and what can be used today.
 */
export default function HomeHero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-950 text-ink-200" aria-labelledby="hero-title">
      <div aria-hidden="true" className="grain absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(47,91,255,0.55), transparent)" }}
      />
      <div className="container-page relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24">
        <div className="animate-rise">
          <Eyebrow>{STORY.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[68px]">
            {STORY.headline} <em className="text-brand-300">{STORY.accent}</em>
          </h1>
          <p className="lede mt-6 max-w-[34rem]">{STORY.line}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink-200">
            {STORY.points.map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-brand-300">✓</span>
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={CTA.demo.href} className="btn-primary">
              {CTA.demo.label} <span aria-hidden="true">→</span>
            </Link>
            <DokyDocLink href={CTA.login.href} variant="ghost">
              {CTA.login.label}
            </DokyDocLink>
          </div>
          <p className="mt-6 max-w-[34rem] text-[14.5px] leading-relaxed text-ink-400">{STORY.today}</p>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <CommitmentsIllustration />
        </div>
      </div>
    </section>
  );
}
