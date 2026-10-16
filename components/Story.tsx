import Link from "next/link";
import { CTA, FREE_LOOK, STORY } from "@/lib/story";
import { DOKYDOC } from "@/lib/site";
import offers from "@/lib/offers.json";
import { ArrowLink, Eyebrow, Section, Status } from "@/components/ui";
import DokyDocLink from "@/components/DokyDocLink";

/**
 * The story's sections (lib/story.ts; board answer a147), shared by the home page and /dokydoc so the two
 * cannot drift apart. Plain words, one idea per card.
 */

const whoTone: Record<string, string> = {
  "Any business": "bg-brand-50 text-brand-700",
  Manufacturers: "bg-live-bg text-live",
  "Software teams": "bg-paper-deep text-text-soft",
};

export function StoryCatches({ id = "catches" }: { id?: string }) {
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="max-w-3xl" data-reveal>
        <Eyebrow>What DokyDoc catches</Eyebrow>
        <h2 id={`${id}-title`} className="h-section mt-5">
          The problems you already know.
        </h2>
        <p className="lede mt-5">Each one is a check DokyDoc runs. Each finding shows the record behind it.</p>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STORY.catches.map((c) => (
          <li key={c.t} data-reveal className="card flex flex-col p-6">
            <span className={`w-fit rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-label ${whoTone[c.who]}`}>
              {c.who}
            </span>
            <p className="mt-4 font-serif text-[22px] leading-snug">{c.t}</p>
            <p className="mt-2 text-[15.5px] leading-relaxed text-text-soft">{c.d}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function StorySteps({ id = "how" }: { id?: string }) {
  return (
    <Section id={id} className="bg-paper-deep" labelledBy={`${id}-title`}>
      <div className="max-w-3xl" data-reveal>
        <Eyebrow>How it works</Eyebrow>
        <h2 id={`${id}-title`} className="h-section mt-5">
          Three steps.
        </h2>
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {STORY.steps.map((s, i) => (
          <li key={s.t} data-reveal className="card flex flex-col p-7 sm:p-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 font-mono text-[14px] text-white">
              {i + 1}
            </span>
            <p className="mt-5 font-serif text-[24px] leading-snug">{s.t}</p>
            <p className="mt-3 text-[16px] leading-relaxed text-text-soft">{s.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function StoryAudiences({ id = "who" }: { id?: string }) {
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="max-w-3xl" data-reveal>
        <Eyebrow>Who it's for</Eyebrow>
        <h2 id={`${id}-title`} className="h-section mt-5">
          If you take orders, it's for you.
        </h2>
      </div>
      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {STORY.audiences.map((a) => (
          <li key={a.id} id={a.id} data-reveal className="card flex flex-col p-7 sm:p-8">
            <Status tone="live">{a.status}</Status>
            <p className="mt-5 font-serif text-[26px] leading-snug">{a.t}</p>
            <p className="mt-1 text-[15px] text-text-mute">{a.note}</p>
            <ul className="mt-5 space-y-2.5 text-[16px] leading-relaxed text-text-soft">
              {a.problems.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              {a.cta === "login" ? (
                <DokyDocLink href={CTA.login.href} variant="arrow">
                  {CTA.login.label}
                </DokyDocLink>
              ) : (
                <ArrowLink href={CTA.demo.href}>{CTA.demo.label}</ArrowLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function StoryToday({ id = "today" }: { id?: string }) {
  return (
    <Section dark id={id} labelledBy={`${id}-title`}>
      <div className="max-w-3xl" data-reveal>
        <Eyebrow>
          <span id={`${id}-title`}>What you can use today</span>
        </Eyebrow>
        <p className="mt-6 font-serif text-[28px] leading-[1.25] text-white sm:text-[36px]">{STORY.oneProduct}</p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <ul className="grid gap-px self-start overflow-hidden rounded-2xl bg-white/[0.07]">
          {STORY.live.map(([t, d]) => (
            <li key={t} data-reveal className="bg-ink-950 p-6 sm:p-7">
              <Status tone="live">Live</Status>
              <p className="mt-4 font-serif text-[24px] text-white">{t}</p>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-300">{d}</p>
            </li>
          ))}
        </ul>
        <div data-reveal>
          <Status tone="design">Coming</Status>
          <ul className="mt-5 space-y-3.5 text-[16px] leading-relaxed text-ink-300">
            {STORY.coming.map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] text-ink-400">No dates. Each one comes when it is ready.</p>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-3" data-reveal>
        <Link href={CTA.demo.href} className="btn-accent">
          {CTA.demo.label} <span aria-hidden="true">→</span>
        </Link>
        <DokyDocLink href={CTA.login.href} variant="ghost">
          {CTA.login.label}
        </DokyDocLink>
      </div>
    </Section>
  );
}

export function StoryPricing({ id = "price" }: { id?: string }) {
  return (
    <Section id={id} className="bg-paper-deep" labelledBy={`${id}-title`}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" data-reveal>
        <div>
          <Eyebrow>Price</Eyebrow>
          <h2 id={`${id}-title`} className="h-section mt-5">
            Pay for what you use.
          </h2>
        </div>
        <p className="lede self-end">{STORY.pricing}</p>
      </div>
    </Section>
  );
}

export function StoryTrust({ id = "trust" }: { id?: string }) {
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="max-w-3xl" data-reveal>
        <Eyebrow>Why you can trust it</Eyebrow>
        <h2 id={`${id}-title`} className="h-section mt-5">
          It shows its work.
        </h2>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {STORY.trust.map((x) => (
          <li key={x.t} data-reveal className="card p-7">
            <p className="font-serif text-[22px] leading-snug">{x.t}</p>
            <p className="mt-2 text-[16px] leading-relaxed text-text-soft">{x.d}</p>
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-4 rounded-2xl border border-paper-line bg-paper-deep p-7">
        <p className="font-serif text-[22px] leading-snug">{STORY.data.t}</p>
        <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-text-soft">{STORY.data.d}</p>
        <p className="mt-4">
          <a href={DOKYDOC.subprocessors} className="link-arrow" target="_blank" rel="noopener noreferrer">
            Read the Sub-processor and Connector List <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </p>
      </div>
    </Section>
  );
}

/** Prepared, not live (a149): renders only once lib/offers.json says "freeLook": true (board task t220). */
export function FreeLook({ id = "free-look" }: { id?: string }) {
  if (offers.freeLook !== true) return null;
  return (
    <Section id={id} className="bg-brand-50" labelledBy={`${id}-title`}>
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" data-reveal>
        <div className="max-w-3xl">
          <Eyebrow>Free</Eyebrow>
          <h2 id={`${id}-title`} className="h-section mt-5">
            {FREE_LOOK.t}
          </h2>
          <p className="lede mt-5">{FREE_LOOK.d}</p>
        </div>
        <Link href={FREE_LOOK.cta.href} className="btn-accent w-fit">
          {FREE_LOOK.cta.label} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
