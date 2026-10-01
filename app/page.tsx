import Link from "next/link";
import { company, deyora, DOKYDOC } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import { ArrowLink, DokyDocMark, Eyebrow, Section, Status } from "@/components/ui";
import HomeHero from "@/components/HomeHero";
import Conversation from "@/components/Conversation";
import DokyDocLink from "@/components/DokyDocLink";
import { FounderAvatar, FounderLinks } from "@/components/Founder";

export const metadata = pageMeta({
  description:
    "Intelligence for the people who run companies. DokyDoc, live today, checks the software you paid for against what was agreed. It prepares. You decide.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ── The problem ──────────────────────────────────────── */}
      <Section labelledBy="problem-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Why this matters</Eyebrow>
            <h2 id="problem-title" className="h-section mt-5">
              The information exists. Nobody has time to compare it.
            </h2>
          </div>
          <div data-reveal className="space-y-6 text-[18px] leading-[1.7] text-text-soft">
            <p>
              Every company runs on promises: to customers, to suppliers, between teams. The evidence of whether they are
              kept sits in documents, code, orders, invoices and spreadsheets that do not talk to each other.
            </p>
            <p>
              So the people in charge run the business from memory, Excel and WhatsApp, and often hear about a problem only
              when someone finally says,{" "}
              <span className="font-serif text-[20px] italic text-text">&ldquo;Sir, I think there is a problem.&rdquo;</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ── Vision ───────────────────────────────────────────── */}
      <Section dark labelledBy="vision-title">
        <div className="max-w-4xl" data-reveal>
          <Eyebrow>
            <span id="vision-title">Our vision</span>
          </Eyebrow>
          <p className="mt-6 font-serif text-[34px] leading-[1.15] tracking-[-0.015em] text-white sm:text-[48px]">
            {deyora.vision}
          </p>
          <p className="lede mt-8 max-w-3xl">{deyora.mission}</p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/[0.07] md:grid-cols-3">
          {[
            { tone: "live" as const, status: "Today", t: "Software delivery", d: "DokyDoc shows whoever pays for software what was built against what was agreed." },
            { tone: "dev" as const, status: "In development", t: "Manufacturing", d: "Orders, plants, suppliers and invoices. The first industry DokyBrain is being designed for." },
            { tone: "design" as const, status: "By design", t: "Every industry", d: "Industry is a setting, not a rebuild. We go deeper as we learn each world." },
          ].map((i) => (
            <li key={i.t} data-reveal className="flex flex-col bg-ink-950 p-7 sm:p-8">
              <Status tone={i.tone}>{i.status}</Status>
              <p className="mt-5 font-serif text-[26px] text-white">{i.t}</p>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink-300">{i.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10" data-reveal>
          <ArrowLink href="/about#vision">Read the vision in full</ArrowLink>
        </p>
      </Section>

      {/* ── Products ─────────────────────────────────────────── */}
      <Section id="products" labelledBy="products-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Products</Eyebrow>
          <h2 id="products-title" className="h-section mt-5">
            One product you can use today. A company brain in the making.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article data-reveal className="card flex flex-col p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <DokyDocMark size={52} />
                <h3 className="font-serif text-[32px]">DokyDoc</h3>
              </div>
              <Status tone="live">Live</Status>
            </div>
            <p className="mt-6 font-serif text-[21px] italic leading-snug text-text">
              The snag list for software you paid for.
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-text-soft">
              It links each requirement in your documents to the code, shows what is built, what is missing and what it
              could not check, and lets a named person on your side sign off.
            </p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
              <ArrowLink href="/dokydoc">Explore DokyDoc</ArrowLink>
              <DokyDocLink href={DOKYDOC.register} variant="arrow">
                Start on dokydoc.com
              </DokyDocLink>
            </div>
          </article>

          <article data-reveal className="on-dark flex flex-col rounded-2xl bg-ink-900 p-8 text-ink-200 shadow-lift sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-[32px] text-white">DokyBrain</h3>
              <Status tone="dev">In development</Status>
            </div>
            <p className="mt-6 font-serif text-[21px] italic leading-snug text-white">A brain for the whole company.</p>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-300">
              Being built inside DokyDoc, and designed to connect what a company intended, promised, built, delivered and
              earned. Manufacturers first.
            </p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
              <ArrowLink href="/dokydoc#dokybrain">Where we are going</ArrowLink>
              <ArrowLink href="/?for=manufacturing#talk">Run a factory? Tell us how you work</ArrowLink>
            </div>
          </article>
        </div>
      </Section>

      {/* ── Facts ────────────────────────────────────────────── */}
      <Section className="bg-paper-deep" labelledBy="facts-title">
        <h2 id="facts-title" className="sr-only">
          What you can check
        </h2>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Live", "DokyDoc runs at dokydoc.com today, with self-serve sign-up and a prepaid wallet in rupees."],
            ["About 5,000", "automated tests run before every DokyDoc release. If one fails, the release stops."],
            ["Checked", "An automated check stops this website from publishing the kinds of claims we cannot back."],
            ["1 business day", "to hear back, from the founder, Monday to Friday, India time."],
          ].map(([t, d]) => (
            <li key={t} data-reveal className="border-t border-text/15 pt-6">
              <p className="font-serif text-[30px] leading-none">{t}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-text-soft">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Founder ──────────────────────────────────────────── */}
      <Section dark labelledBy="founder-title">
        <figure className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[auto_1fr]" data-reveal>
          <FounderAvatar size={112} className="ring-4 ring-white/10" />
          <div>
            <Eyebrow>
              <span id="founder-title">Why Deyora exists</span>
            </Eyebrow>
            <blockquote className="mt-6 font-serif text-[26px] leading-[1.35] text-white sm:text-[32px]">
              &ldquo;I want to bring intelligence and out-of-the-box thinking to every industry, and make life easier for the
              people who run companies. Less time chasing. More time deciding.&rdquo;
            </blockquote>
            <figcaption className="mt-8 space-y-3">
              <span className="block">
                <span className="block text-white">{company.founder}</span>
                <span className="block text-[14px] text-ink-400">
                  {company.founderTitle}, {company.brand}
                </span>
              </span>
              <FounderLinks dark />
            </figcaption>
          </div>
        </figure>
      </Section>

      {/* ── Talk ─────────────────────────────────────────────── */}
      <Section id="talk" labelledBy="talk-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow>Talk to us</Eyebrow>
            <h2 id="talk-title" className="h-section mt-5">
              No long form. Two taps and an email.
            </h2>
            <p className="lede mt-6">
              Deyora is a young company. You talk to the founder, your problem shapes what we build, and we only claim what
              we have built.
            </p>
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
