import Link from "next/link";
import { company, DOKYDOC, people } from "@/lib/site";
import { CTA } from "@/lib/story";
import { BRAND_LINE, HERO_LINES, HOME } from "@/lib/home";
import { MANIFESTO, MANIFESTO_SHOWN } from "@/lib/manifesto";
import { pageMeta } from "@/lib/meta";
import { Eyebrow, Section } from "@/components/ui";
import { DolphinScene, DolphinSceneCompact } from "@/components/Dolphin";
import DokyDocPreview from "@/components/DokyDocPreview";
import DokyDocLink from "@/components/DokyDocLink";
import Conversation from "@/components/Conversation";
import { FounderAvatar, FounderLinks } from "@/components/Founder";
import { PersonAvatar } from "@/components/People";

/**
 * a153: the company's home page. Deyora's vision first, with the dolphin; then our first product, DokyDoc, as one
 * card that sends people to dokydoc.com; then what we believe, the team and how to reach us. The product's detail
 * (manufacturing included) is at dokydoc.com, and /dokydoc here until dokydoc.com's home page is live.
 */
export const metadata = pageMeta({
  description:
    "Deyora Intelligence is building intelligence for the people who run companies, to help them see what is hidden in their own records. Our first product is DokyDoc.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* ── Vision, with the dolphin ─────────────────────────── */}
      <section aria-labelledby="hero-title" className="px-3 pt-4 sm:px-5">
        <div className="on-dark relative mx-auto max-w-[1360px] overflow-hidden rounded-[28px] bg-ink-950 text-ink-200 sm:rounded-[36px]">
          <div
            aria-hidden="true"
            className="absolute left-[30%] top-[-20%] h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgb(var(--accent) / 0.8), transparent)" }}
          />
          <div aria-hidden="true" className="grain absolute inset-0 opacity-50" />
          <div className="relative z-10 mx-auto max-w-[880px] px-5 pt-6 text-center sm:px-10 sm:pt-16">
            <DolphinSceneCompact />
            <p className="mt-2 inline-flex sm:mt-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-ink-200">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
              {HOME.pill}
            </p>
            <h1 id="hero-title" className="h-display mt-6 text-[46px] sm:text-[68px] lg:text-[80px]">
              {BRAND_LINE}
            </h1>
            <p className="mx-auto mt-6 max-w-[42rem] text-pretty text-[21px] font-medium leading-[1.4] sm:text-[26px]">
              <span className="block text-ink-200">{HERO_LINES.before}</span>
              <span className="block text-accent-soft">{HERO_LINES.after}</span>
            </p>
            <p className="mx-auto mt-5 max-w-[38rem] text-pretty text-[17px] leading-[1.55] text-ink-300 sm:text-[19px]">
              {HERO_LINES.line}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#product" className="btn-accent !px-6 !py-3.5 !text-[16px]">
                {HOME.toProduct} <span aria-hidden="true">↓</span>
              </a>
              <Link href={CTA.demo.href} className="btn btn-ghost !px-6 !py-3.5 !text-[16px]">
                {CTA.demo.label} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="pointer-events-none relative px-2 pb-10 sm:-mt-4 sm:px-6 sm:pb-8">
            <DolphinScene />
          </div>
        </div>
      </section>

      {/* ── The idea, from the manifesto (shown once the founder signs it) ── */}
      {MANIFESTO_SHOWN ? (
        <Section labelledBy="idea-title" className="!pb-0">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 id="idea-title" className="h-section">
              {MANIFESTO.title}
            </h2>
            <p className="lede mx-auto mt-6">{MANIFESTO.excerpt}</p>
            <p className="mt-6">
              <Link href="/manifesto" className="link-arrow">
                {MANIFESTO.read} <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </Section>
      ) : null}

      {/* ── Our first product ────────────────────────────────── */}
      <Section id="product" labelledBy="product-title">
        <div className="on-dark relative overflow-hidden rounded-[28px] bg-ink-950 p-7 text-ink-200 shadow-lift sm:p-12" data-reveal>
          <div
            aria-hidden="true"
            className="absolute right-[-10%] top-[-30%] h-[520px] w-[720px] rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgb(var(--accent) / 0.7), transparent)" }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <Eyebrow>{HOME.product.eyebrow}</Eyebrow>
              <h2 id="product-title" className="h-display mt-5 text-[44px] text-white sm:text-[56px]">
                {HOME.product.title}
              </h2>
              <p className="mt-6 max-w-[34rem] text-[18px] leading-[1.65] text-ink-300">{HOME.product.line}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <DokyDocLink href={DOKYDOC.home} className="btn-accent !px-6 !py-3.5 !text-[16px]">
                  {HOME.product.visit}
                </DokyDocLink>
                <Link href={CTA.demo.href} className="btn btn-ghost !px-6 !py-3.5 !text-[16px]">
                  {CTA.demo.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <DokyDocPreview />
          </div>
        </div>
      </Section>

      {/* ── What we believe ──────────────────────────────────── */}
      <Section className="bg-paper-deep" labelledBy="beliefs-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>{HOME.beliefs.eyebrow}</Eyebrow>
          <h2 id="beliefs-title" className="h-section mt-5">
            {HOME.beliefs.title}
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {HOME.beliefs.items.map((b, i) => (
            <li key={b.t} data-reveal className="card flex flex-col p-7 sm:p-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 font-mono text-[14px] text-white">
                {i + 1}
              </span>
              <p className="mt-5 font-serif text-[24px] leading-snug">{b.t}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-text-soft">{b.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── The team ─────────────────────────────────────────── */}
      <Section dark labelledBy="team-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <figure data-reveal>
            <Eyebrow>
              <span id="team-title">{HOME.team.eyebrow}</span>
            </Eyebrow>
            <h2 className="h-section mt-5 text-white">{HOME.team.title}</h2>
            <blockquote className="mt-8 font-serif text-[24px] leading-[1.4] text-white sm:text-[28px]">
              &ldquo;{HOME.team.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <FounderAvatar size={56} className="ring-4 ring-white/10" />
              <span>
                <span className="block text-white">{company.founder}</span>
                <span className="block text-[14px] text-ink-400">
                  {company.founderTitle}, {company.brand}
                </span>
              </span>
            </figcaption>
            <div className="mt-5">
              <FounderLinks dark />
            </div>
          </figure>
          <div data-reveal className="self-end">
            <ul className="grid gap-4">
              {people.map((p) => (
                <li key={p.name} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <PersonAvatar person={p} size={48} />
                  <span>
                    <span className="block text-[18px] text-white">{p.name}</span>
                    <span className="block text-[14px] text-ink-400">{p.role}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/about" className="link-arrow text-white">
                {HOME.team.more} <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* ── Talk ─────────────────────────────────────────────── */}
      <Section id="talk" labelledBy="talk-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow>{HOME.talk.eyebrow}</Eyebrow>
            <h2 id="talk-title" className="h-section mt-5">
              {HOME.talk.title}
            </h2>
            <p className="lede mt-6">{HOME.talk.lede}</p>
            <p className="mt-6 text-[15px] text-text-mute">
              Prefer email?{" "}
              <Link href={`mailto:${company.email}`} className="text-text underline underline-offset-4">
                {company.email}
              </Link>
            </p>
          </div>
          <div data-reveal>
            <Conversation />
          </div>
        </div>
      </Section>
    </>
  );
}
