"use client";

import Link from "next/link";
import { PERSONAS } from "@/lib/personas";
import { firstName } from "@/lib/identity";
import { CommitmentsIllustration, DecisionIllustration } from "@/components/Illustrations";
import DokyDocLink from "@/components/DokyDocLink";
import { Eyebrow } from "@/components/ui";
import { useVisitor } from "@/components/Visitor";
import { productPage } from "@/lib/site";
import { CTA, STORY } from "@/lib/story";

/** What everyone sees first, and what search engines see: the story's three steps (lib/story.ts). */
const DEFAULT_POINTS: [string, string][] = STORY.steps.map((s, i) => [`${i + 1} · ${s.t}`, s.d]);

export default function HomeHero() {
  const { ready, persona, name, choose } = useVisitor();
  const p = ready ? persona : null;
  const hello = ready && name ? `Welcome back, ${firstName(name)}` : null;

  return (
    <section className="on-dark relative overflow-hidden bg-ink-950 text-ink-200" aria-labelledby="hero-title">
      <div aria-hidden="true" className="grain absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(47,91,255,0.55), transparent)" }}
      />
      <div className="container-page relative grid items-center gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div key={p?.id || "all"} className="animate-rise">
            <Eyebrow>{[hello, p ? p.eyebrow : "Deyora Intelligence"].filter(Boolean).join(" · ")}</Eyebrow>
            <h1 id="hero-title" className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[70px]">
              {p ? p.headline : STORY.headline} <em className="text-brand-300">{p ? p.accent : STORY.accent}</em>
            </h1>
            <p className="lede mt-6 max-w-[34rem]">
              {p ? p.sub : STORY.line}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {p ? (
              <>
                {p.primary.dokydoc ? (
                  <DokyDocLink href={p.primary.href}>{p.primary.label}</DokyDocLink>
                ) : (
                  <Link href={p.primary.href} className="btn-primary">
                    {p.primary.label} <span aria-hidden="true">→</span>
                  </Link>
                )}
                <Link href={p.secondary.href} className="btn-ghost">
                  {p.secondary.label} <span aria-hidden="true">→</span>
                </Link>
              </>
            ) : (
              <>
                <Link href={CTA.demo.href} className="btn-primary">
                  {CTA.demo.label} <span aria-hidden="true">→</span>
                </Link>
                <DokyDocLink href={CTA.login.href} variant="ghost">
                  {CTA.login.label}
                </DokyDocLink>
              </>
            )}
          </div>
          {p ? null : (
            <p className="mt-5 text-[14.5px] text-ink-400">
              New to DokyDoc?{" "}
              <Link href={productPage()} className="text-ink-200 underline underline-offset-4 hover:text-white">
                See how it works
              </Link>
              . The login page has a link to register.
            </p>
          )}
          <div className="mt-9">
            <p id="who-label" className="font-mono text-[12px] uppercase tracking-label text-ink-400">
              {p ? "Showing this page for" : "Who's visiting? Pick one and this page speaks to you"}
            </p>
            <div role="group" aria-labelledby="who-label" className="mt-3 flex flex-wrap gap-2">
              {PERSONAS.map((x) => {
                const on = p?.id === x.id;
                return (
                  <button
                    key={x.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => choose(on ? null : x.id)}
                    className={`rounded-full border px-4 py-2 text-[14.5px] transition-colors ${
                      on
                        ? "border-white bg-white text-ink-950"
                        : "border-ink-700 text-ink-200 hover:border-ink-300 hover:text-white"
                    }`}
                  >
                    {x.chip}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        <div key={p?.illustration || "commitments"} className="animate-rise [animation-delay:120ms]">
          {(p?.illustration || "commitments") === "commitments" ? <CommitmentsIllustration /> : <DecisionIllustration />}
        </div>
      </div>

      <div className="container-page relative pb-20 lg:pb-24">
        <ul key={p?.id || "all"} className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.07] md:grid-cols-3">
          {(p ? p.points : DEFAULT_POINTS).map(([t, d]) => (
            <li key={t} className="animate-rise bg-ink-950/95 p-6 sm:p-7">
              <p className="font-mono text-[12px] uppercase tracking-label text-brand-300">{t}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-300">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
