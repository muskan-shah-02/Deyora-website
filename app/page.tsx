import type { Metadata } from "next";
import Link from "next/link";
import { DOKYDOC, company } from "@/lib/site";
import { ArrowLink, ButtonLink, DokyDocMark, Eyebrow, Section, Status } from "@/components/ui";
import { DecisionIllustration } from "@/components/Illustrations";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="on-dark relative overflow-hidden bg-ink-950 text-ink-200">
        <div aria-hidden="true" className="grain absolute inset-0 opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(47,91,255,0.55), transparent)" }}
        />
        <div className="container-page relative grid items-center gap-14 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-32">
          <div className="animate-rise">
            <Eyebrow>Deyora Intelligence</Eyebrow>
            <h1 className="h-display mt-6 text-[46px] sm:text-[64px] lg:text-[76px]">
              Run your company on evidence, <em className="text-brand-300">not guesswork.</em>
            </h1>
            <p className="lede mt-7 max-w-[34rem]">
              We build intelligence for founders and the people who run companies. It reads what your business already
              holds, compares what was promised with what actually happened, and brings you the few things that deserve
              your attention, with the evidence behind each one.
            </p>
            <p className="mt-5 font-mono text-[13px] uppercase tracking-label text-ink-400">It prepares. You decide.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Talk to the founder</ButtonLink>
              <ButtonLink href="/dokydoc" variant="ghost">
                See DokyDoc
              </ButtonLink>
            </div>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <DecisionIllustration />
          </div>
        </div>
      </section>

      {/* ── The problem ──────────────────────────────────────── */}
      <Section labelledBy="problem-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>How most companies are run today</Eyebrow>
            <h2 id="problem-title" className="h-section mt-5">
              The information exists. Nobody has time to compare it.
            </h2>
          </div>
          <div data-reveal className="space-y-6 text-[18px] leading-[1.7] text-text-soft">
            <p>
              Every company runs on promises: to customers, to suppliers, between teams. The evidence of whether they are
              being kept is scattered across documents and contracts, code and tickets, orders, invoices and spreadsheets.
            </p>
            <p>
              So the people in charge run the business from memory, Excel, WhatsApp and the weekly review, and often learn
              about a problem only when someone finally says,{" "}
              <span className="font-serif text-[20px] italic text-text">&ldquo;Sir, I think there is a problem.&rdquo;</span>
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["Scattered", "The facts sit in a dozen places that do not talk to each other, so nobody sees the whole picture."],
            ["Late", "Gaps show up after the deadline, the invoice or the customer complaint, when they cost the most."],
            ["Expensive", "Capable people spend their weeks collecting and reconciling, instead of deciding and building."],
          ].map(([t, d]) => (
            <li key={t} data-reveal className="card p-7">
              <p className="font-serif text-[26px]">{t}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-text-soft">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── What we build ────────────────────────────────────── */}
      <Section dark labelledBy="approach-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>What we build</Eyebrow>
          <h2 id="approach-title" className="h-section mt-5 text-white">
            Intelligence that does the reading, so you can do the thinking.
          </h2>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/[0.07] md:grid-cols-3">
          {[
            [
              "01",
              "Read",
              "It reads what you already have: documents, code and tickets today, and orders and accounts as we grow. Nothing new to fill in.",
            ],
            [
              "02",
              "Compare",
              "It checks what was promised against what happened, and says plainly what it could not check, instead of calling it fine.",
            ],
            [
              "03",
              "Prepare",
              "It puts the few things that matter in front of you, with the evidence and a drafted next step. Nothing is sent without you.",
            ],
          ].map(([n, t, d]) => (
            <li key={t} data-reveal className="bg-ink-950 p-8">
              <p className="font-mono text-[12px] text-brand-300">{n}</p>
              <p className="mt-4 font-serif text-[30px] text-white">{t}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-300">{d}</p>
            </li>
          ))}
        </ol>
        <p data-reveal className="mt-12 max-w-3xl font-serif text-[24px] leading-snug text-white sm:text-[28px]">
          We automate the finding and the preparing, <span className="text-brand-300">never the deciding.</span> A person
          approves every action.
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
            <p className="mt-6 text-[18px] leading-relaxed text-text-soft">
              Checks software against the documents that say what it should do. DokyDoc links each requirement to the
              code, shows what is built, what is missing and what it could not check, and lets a named person on your side
              review and sign off.
            </p>
            <p className="mt-4 text-[15px] text-text-mute">For founders and teams who pay for, build or audit software.</p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
              <ArrowLink href="/dokydoc">Explore DokyDoc</ArrowLink>
              <ArrowLink href={DOKYDOC.home}>Open dokydoc.com</ArrowLink>
            </div>
          </article>

          <article data-reveal className="on-dark flex flex-col rounded-2xl bg-ink-900 p-8 text-ink-200 shadow-lift sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-[32px] text-white">DokyBrain</h3>
              <Status tone="dev">In development</Status>
            </div>
            <p className="mt-6 text-[18px] leading-relaxed text-ink-300">
              A brain for the whole company, being built inside DokyDoc. It is designed to connect what a company
              intended, promised, built, delivered and earned, and to surface the gaps, patterns and opportunities that
              deserve your attention.
            </p>
            <p className="mt-4 text-[15px] text-ink-400">Designed first for manufacturers: orders, plants, suppliers and customers.</p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
              <ArrowLink href="/dokydoc#dokybrain">Where we are going</ArrowLink>
              <ArrowLink href="/contact?topic=manufacturing">Run a manufacturing company? Talk to us</ArrowLink>
            </div>
          </article>
        </div>
      </Section>

      {/* ── Principles ───────────────────────────────────────── */}
      <Section className="bg-paper-deep" labelledBy="principles-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>What we hold ourselves to</Eyebrow>
            <h2 id="principles-title" className="h-section mt-5">
              The machine may be wrong. It must never be unknowably wrong.
            </h2>
          </div>
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {[
              [
                "Evidence, or it does not say it",
                "Every finding points to where it came from. Anything that was not checked is reported as not checked, never as fine.",
              ],
              [
                "It prepares. You decide.",
                "The AI proposes and a person approves. DokyDoc writes into your other systems only in a short list of registered ways, and an automated test fails our build if a new one appears.",
              ],
              [
                "Costs you can see",
                "The price of a paid operation is shown before it runs. Cheap, exact matching runs first, and AI only where it is needed.",
              ],
              [
                "Honest by design",
                "Automated checks stop our product, and this website, from claiming numbers we cannot back. When we have not measured something, we say so.",
              ],
            ].map(([t, d]) => (
              <div key={t} data-reveal className="border-t border-text/15 pt-6">
                <dt className="font-serif text-[23px] leading-snug">{t}</dt>
                <dd className="mt-3 text-[16px] leading-relaxed text-text-soft">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── Industries ───────────────────────────────────────── */}
      <Section labelledBy="industries-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Industries</Eyebrow>
          <h2 id="industries-title" className="h-section mt-5">
            Starting where promises are made. Designed for every industry.
          </h2>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              tone: "live" as const,
              status: "Today",
              title: "Software delivery",
              body: "DokyDoc helps whoever pays for software, from founders to delivery heads, see whether what was built matches what was agreed.",
            },
            {
              tone: "dev" as const,
              status: "In design",
              title: "Manufacturing",
              body: "Orders, plants, suppliers, distributors and invoices. The first industry DokyBrain is being designed for.",
            },
            {
              tone: "design" as const,
              status: "By design",
              title: "Every industry",
              body: "Industry is a setting, not a rebuild. The core is designed so a company in any industry can start, and go deeper as we learn its world.",
            },
          ].map((i) => (
            <li key={i.title} data-reveal className="card flex flex-col p-8">
              <Status tone={i.tone}>{i.status}</Status>
              <p className="mt-6 font-serif text-[28px]">{i.title}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-text-soft">{i.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Founder ──────────────────────────────────────────── */}
      <Section dark labelledBy="founder-title">
        <figure className="mx-auto max-w-4xl" data-reveal>
          <Eyebrow>
            <span id="founder-title">Why Deyora exists</span>
          </Eyebrow>
          <blockquote className="mt-8 font-serif text-[28px] leading-[1.35] text-white sm:text-[36px]">
            &ldquo;I want to bring intelligence and out-of-the-box thinking to every industry, and make life easier for the
            people who run companies. Less time chasing information and fixing what slipped. More time thinking, building
            and deciding. Technology should cut costs and remove busywork, not add another screen to check.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-brand-300" />
            <span>
              <span className="block text-white">{company.founder}</span>
              <span className="block text-[14px] text-ink-400">
                {company.founderTitle}, {company.brand}
              </span>
            </span>
          </figcaption>
        </figure>
      </Section>

      {/* ── Work with us ─────────────────────────────────────── */}
      <Section labelledBy="work-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Work with us</Eyebrow>
            <h2 id="work-title" className="h-section mt-5">
              Early, and honest about it.
            </h2>
            <p className="lede mt-6">
              Deyora is a young company. That means you talk to the founder, your problem shapes what we build, and we
              only claim what we have built.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              {
                title: "Check your software delivery",
                body: "Bring a requirements document and the code. See what is built, what is missing and what could not be checked.",
                href: DOKYDOC.register,
                cta: "Start on dokydoc.com",
              },
              {
                title: "Run a manufacturing company?",
                body: "Tell us how you track orders, plants and suppliers today, and where things slip. It shapes what we build.",
                href: "/contact?topic=manufacturing",
                cta: "Talk to us",
              },
              {
                title: "Need our security documents?",
                body: "Security architecture, data retention, sub-processors, incident response and our AI data handling, shared under NDA.",
                href: "/contact?topic=trust",
                cta: "Request them",
              },
            ].map((c) => (
              <li key={c.title} data-reveal className="card flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md">
                  <p className="font-serif text-[22px]">{c.title}</p>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-text-soft">{c.body}</p>
                </div>
                <div className="shrink-0">
                  <ArrowLink href={c.href}>{c.cta}</ArrowLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 text-center text-[15px] text-text-mute" data-reveal>
          Prefer email? Write to{" "}
          <Link href={`mailto:${company.email}`} className="text-text underline underline-offset-4">
            {company.email}
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
