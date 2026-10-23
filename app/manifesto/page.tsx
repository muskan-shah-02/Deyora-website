import { notFound } from "next/navigation";
import Link from "next/link";
import { MANIFESTO, MANIFESTO_SHOWN } from "@/lib/manifesto";
import { pageMeta } from "@/lib/meta";
import { Eyebrow, Section } from "@/components/ui";
import { FounderAvatar } from "@/components/Founder";
import { WhaleScene } from "@/components/Whale";

/**
 * a155: the manifesto, in the founder's voice (lib/manifesto.ts). A draft until the founder edits and signs it:
 * until then this page answers 404, except in a review build (NEXT_PUBLIC_PREVIEW_MANIFESTO=1).
 */
export const metadata = pageMeta({
  title: "Manifesto",
  description:
    "Every company runs on promises. Why Deyora Intelligence is building the intelligence that sees which ones are slipping, and the three rules it holds itself to.",
  path: "/manifesto",
});

export default function Manifesto() {
  if (!MANIFESTO_SHOWN) notFound();
  return (
    <>
      <section className="px-3 pt-4 sm:px-5" aria-labelledby="manifesto-title">
        <div className="on-dark relative mx-auto max-w-[1360px] overflow-hidden rounded-[28px] bg-ink-950 text-ink-200 sm:rounded-[36px]">
          <div aria-hidden="true" className="grain absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[820px] px-5 pb-6 pt-14 text-center sm:px-10 sm:pt-20">
            <Eyebrow>Manifesto</Eyebrow>
            <h1 id="manifesto-title" className="h-display mt-6 text-[42px] sm:text-[60px]">
              {MANIFESTO.title}
            </h1>
          </div>
          <div className="pointer-events-none relative px-2 pb-8 sm:px-6">
            <WhaleScene />
          </div>
        </div>
      </section>
      <Section>
        <article className="mx-auto max-w-[44rem] space-y-6 text-[19px] leading-[1.75] text-text-soft" data-reveal>
          {MANIFESTO.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="pt-4 font-serif text-[24px] text-text">{MANIFESTO.rulesIntro}</p>
          <ol className="space-y-5">
            {MANIFESTO.rules.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-950 font-mono text-[13px] text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-serif text-[21px] text-text">{t}</span>
                  {d}
                </span>
              </li>
            ))}
          </ol>
          {MANIFESTO.closing.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <footer className="flex items-center gap-4 pt-6">
            <FounderAvatar size={56} />
            <span>
              <span className="block font-serif text-[22px] text-text">{MANIFESTO.signature.name}</span>
              <span className="block text-[15px] text-text-mute">{MANIFESTO.signature.title}</span>
            </span>
          </footer>
          <p className="pt-4">
            <Link href="/contact" className="link-arrow">
              Talk to the founder <span aria-hidden="true">→</span>
            </Link>
          </p>
        </article>
      </Section>
    </>
  );
}
