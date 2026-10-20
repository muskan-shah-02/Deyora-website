import { DEMO_UP, DOKYDOC, LEDGER, SITE_URL, dokydocStatement, untilDokyDocV2 } from "@/lib/site";
import { CTA, STORY } from "@/lib/story";
import { CAPABILITIES, FAQ, LIMITS, SECURITY } from "@/lib/dokydoc";
import { pageMeta } from "@/lib/meta";
import { ArrowLink, ButtonLink, DokyDocMark, Eyebrow, Section, Status } from "@/components/ui";
import { CommitmentsIllustration, CoverageIllustration } from "@/components/Illustrations";
import { StoryAudiences, StoryCatches, StorySteps, StoryToday } from "@/components/Story";
import DokyDocLink from "@/components/DokyDocLink";
import SnagListDemo from "@/components/SnagListDemo";
import Conversation from "@/components/Conversation";

const description =
  "DokyDoc checks your orders, invoices, payments and stock against each other, and your software against its documents. It shows you only what doesn't match, with the record behind each one. You decide what to do.";

export const metadata = pageMeta({
  title: "DokyDoc · See what's going wrong in your business",
  description,
  path: "/dokydoc",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DokyDoc",
  url: DOKYDOC.home,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  publisher: { "@type": "Organization", name: "Deyora Intelligence Private Limited", url: SITE_URL },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const steps = [
  {
    t: "Bring the documents",
    d: "Upload requirement documents as PDF, Word, text or Markdown. DokyDoc pulls out each requirement, and reports any part it could not read instead of hiding it.",
  },
  {
    t: "Connect the code",
    d: "GitHub, GitLab (cloud or your own server), Bitbucket Cloud, a public repository link, or a ZIP upload.",
  },
  {
    t: "DokyDoc links them",
    d: "Exact names first, close matches next, and AI only for the pairs those cannot settle. Each link is marked verified, by a person, or inferred, by DokyDoc. A requirement nobody checked stays unverified, never covered.",
  },
  {
    t: "You decide, and sign off",
    d: "Findings arrive as one ordered list, and your decisions survive every re-scan. A CXO signs off, and the sealed record states the signer, the time, the coverage, the open findings and when it stops holding.",
  },
];


export default function DokyDocPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-14 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
          <div className="animate-rise">
            <div className="flex flex-wrap items-center gap-4">
              <DokyDocMark size={44} />
              <span className="font-serif text-[26px]">DokyDoc</span>
              <Status tone="live">Live at dokydoc.com</Status>
            </div>
            <h1 className="h-display mt-8 text-[44px] sm:text-[58px] lg:text-[66px]">
              {STORY.headline} <em className="text-brand-600">{STORY.accent}</em>
            </h1>
            <p className="lede mt-7 max-w-[36rem]">{STORY.line}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <DokyDocLink href={CTA.start.href} className="btn-accent">
                {CTA.start.label}
              </DokyDocLink>
              <ButtonLink href={CTA.demo.href} variant="ghost">
                {CTA.demo.label}
              </ButtonLink>
            </div>
            <p className="mt-5 text-[14px] text-text-mute">{STORY.today}</p>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <CommitmentsIllustration />
          </div>
        </div>
      </section>

      <StoryCatches id="catches" />
      <StorySteps id="steps" />
      <StoryAudiences id="who-for" />
      <StoryToday id="today" />

      {/* ── Software teams: the snag list ───────────────────── */}
      <Section id="software" labelledBy="software-title">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow>For software teams</Eyebrow>
            <h2 id="software-title" className="h-section mt-5">
              Does your software do what the documents say?
            </h2>
            <p className="mt-7 max-w-[36rem] border-l-2 border-brand-600 pl-5 font-serif text-[21px] italic leading-snug text-text">
              {dokydocStatement.analogy}
            </p>
            <p className="lede mt-6 max-w-[36rem]">
              It reads your requirement documents and your code, and shows what is built, what is missing and what it could
              not check, with the evidence. A named person on your side signs off. DokyDoc never signs for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DokyDocLink href={CTA.start.href}>{CTA.start.label}</DokyDocLink>
              <ButtonLink href="#walkthrough" variant="ghost">
                Try the walk-through
              </ButtonLink>
            </div>
          </div>
          <div data-reveal>
            <CoverageIllustration />
          </div>
        </div>
      </Section>

      {/* ── Walk-through ─────────────────────────────────────── */}
      <Section id="walkthrough" className="bg-paper-deep" labelledBy="walk-title">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow>Software teams · walk through it</Eyebrow>
            <h2 id="walk-title" className="h-section mt-5">
              Pick a requirement. See what DokyDoc reports.
            </h2>
            <p className="lede mt-6">
              Built, missing, or not checked, each with the evidence behind it. What it could not read, it says so.
            </p>
          </div>
          <div data-reveal>
            <SnagListDemo />
          </div>
        </div>
      </Section>

      {/* ── Code written with AI tools ──────────────────────── */}
      <Section dark labelledBy="ai-code-title">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Code written with AI tools</Eyebrow>
            <h2 id="ai-code-title" className="h-section mt-5 text-white">
              AI writes the code in minutes. Someone still has to check it does what you asked.
            </h2>
            <p className="lede mt-6">
              Teams and agencies now write code with AI tools, fast and from short prompts. Speed makes the old question
              harder, not easier: does it do what was agreed? DokyDoc reads the code in your repository, whoever or whatever
              wrote it, and checks it against your documents.
            </p>
          </div>
          <ul className="grid gap-px self-start overflow-hidden rounded-2xl bg-white/[0.07]">
            {[
              ["Missing", "Requirements the prompts never covered."],
              ["Not in any document", "Features nobody asked for, and code no requirement explains."],
              ["Not examined", "Anything DokyDoc could not read, listed rather than passed as fine."],
            ].map(([t, d]) => (
              <li key={t} data-reveal className="bg-ink-950 p-6 sm:p-7">
                <p className="font-mono text-[12px] uppercase tracking-label text-brand-300">{t}</p>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-300">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Who it is for ────────────────────────────────────── */}
      <Section labelledBy="who-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Software teams · who uses it</Eyebrow>
          <h2 id="who-title" className="h-section mt-5">
            For the people who pay for software, and the people who build it.
          </h2>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Founders and CXOs", "You pay a team or an agency. See what you are getting against what you agreed, before you sign off."],
            ["Product managers and analysts", "Turn a requirements document into testable requirements, and see which ones the code really covers."],
            ["Engineering leads", "Find code nobody asked for, including code written with AI tools, and documents that promise what the code does not do."],
            ["Auditors", "A record of every decision and sign-off, and an audit log of changes that shows tampering."],
          ].map(([t, d]) => (
            <li key={t} data-reveal className="card p-7">
              <p className="font-serif text-[22px] leading-snug">{t}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-text-soft">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── How it works ─────────────────────────────────────── */}
      <Section id="how" className="bg-paper-deep" labelledBy="how-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Software teams · how it works</Eyebrow>
          <h2 id="how-title" className="h-section mt-5">
            Four steps, and a person decides at the end.
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.t} data-reveal className="flex gap-6 border-t border-text/15 pt-7">
              <span className="font-mono text-[13px] text-brand-700">0{i + 1}</span>
              <div>
                <p className="font-serif text-[26px] leading-snug">{s.t}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-text-soft">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <Section id="capabilities" labelledBy="cap-title">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div className="max-w-3xl">
            <Eyebrow>What it does today</Eyebrow>
            <h2 id="cap-title" className="h-section mt-5">
              Everything here is live on dokydoc.com.
            </h2>
          </div>
          <Status tone="live">Live</Status>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(([t, d]) => (
            <li key={t} className="bg-paper-card p-7">
              <p className="text-[17px] font-semibold">{t}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-text-soft">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Boardroom ────────────────────────────────────────── */}
      <Section dark labelledBy="boardroom-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Inside DokyDoc · The Boardroom</Eyebrow>
            <h2 id="boardroom-title" className="h-section mt-5 text-white">
              A boardroom that argues in front of you.
            </h2>
            <p className="lede mt-6">
              Out-of-the-box thinking, on demand. Bring a question to eight AI advisers: strategy, product, technology,
              security, infrastructure, sales, marketing and finance. Each can look things up in your company&rsquo;s
              documents and code before answering. They rebut each other once, and the minutes record where the room
              disagreed.
            </p>
          </div>
          <div data-reveal className="space-y-5 text-[16px] leading-relaxed text-ink-300">
            <div className="rounded-2xl border border-white/10 p-7">
              <p className="font-serif text-[22px] text-white">An agenda built without AI</p>
              <p className="mt-2">
                The agenda is drawn up at no charge through six lenses: delivery truth, hidden assets, synthesis, risk,
                market posture and delivery cost.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-7">
              <p className="font-serif text-[22px] text-white">You build, park or kill</p>
              <p className="mt-2">
                Each idea ends in a decision and a reason, written into the minutes. Choosing to build can open Jira tickets,
                and nothing is sent without you.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-7">
              <p className="font-serif text-[22px] text-white">Priced before it runs</p>
              <p className="mt-2">Every turn of a sitting is priced against a budget before it runs.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Orders, invoices, payments and stock ─────────────── */}
      <Section id="orders" labelledBy="brain-title">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div data-reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Orders, invoices, payments and stock</Eyebrow>
              <Status tone="live">Live in DokyDoc</Status>
            </div>
            <h2 id="brain-title" className="h-section mt-5">
              DokyDoc for orders, invoices, payments and stock.
            </h2>
            <p className="lede mt-6">
              DokyDoc connects what a company promised with what its records show, across orders, deliveries, invoices,
              payments and suppliers, and raises the few things that deserve a person&rsquo;s attention, each with its
              evidence and with what it could not see.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-text-soft">
              It has been in production in DokyDoc since 15 October 2026, {LEDGER.clause}.
              {DEMO_UP
                ? " Today it runs on our demo manufacturer, Prathvel Engineering, with invented records, and we show it on request."
                : ""}{" "}
              Reading your own company&rsquo;s ERP exports and documents into it is coming, and we will not put a date on
              this page until we can keep it.
            </p>
            <div className="mt-8">
              <ButtonLink href={CTA.demo.href}>{CTA.demo.label}</ButtonLink>
            </div>
          </div>
          <ul className="grid gap-5">
            {[
              [
                "It prepares; a person decides",
                "It raises findings and prepares options. It changes nothing in your ERP, and a person at your company decides and acts.",
              ],
              [
                "Evidence behind every line",
                "Every figure is a count, with what it is counted out of: “6 of 47 open commitments”, never just “delivery is at risk”.",
              ],
              [
                "Ten checks have passed their tests",
                "Manufacturing's seven, among them orders due before their inputs are on record, customer POs that differ from the sales order, and payments at risk, and three for any company that takes orders. A check is switched on only once it passes.",
              ],
              [
                "Brain Health and the weekly brief",
                "Brain Health shows whether you can trust what DokyDoc says today. The weekly brief shows on screen what changed, what crossed the line and what it could not see.",
              ],
            ].map(([t, d]) => (
              <li key={t} data-reveal className="card p-7">
                <p className="font-serif text-[22px] leading-snug">{t}</p>
                <p className="mt-2 text-[15.5px] leading-relaxed text-text-soft">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <Section id="pricing" className="bg-paper-deep" labelledBy="pricing-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Pricing</Eyebrow>
          <h2 id="pricing-title" className="h-section mt-5">
            Pay for what you use. See the price first.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article data-reveal className="card flex flex-col p-8 sm:p-10">
            <p className="font-serif text-[30px]">Pay as you go</p>
            <p className="mt-2 text-[16px] text-text-soft">A prepaid wallet in rupees, topped up through Razorpay.</p>
            <ul className="mt-7 space-y-3 text-[15.5px] leading-relaxed">
              {[
                "Every feature included. No plans and no subscription.",
                "The price of each paid operation is shown before it runs, and anything your balance cannot cover is refused up front.",
                "Spend limits per person and per month.",
                "A GST tax invoice for every top-up.",
                // From the release day of version 2.0, the Terms of Service's rule ("Fees, wallet and invoices").
                ...untilDokyDocV2(
                  ["Unused balance never expires. Top-ups are not refundable."],
                  [
                    "No refunds. Top-ups are final.",
                    "If your organisation is a company, its top-up balance does not expire and stays usable while its account is open.",
                    "If your organisation is not a company registered under the Companies Act, 2013 or an earlier companies law (for example a partnership, a limited liability partnership, a trust, a society or a sole proprietor), each top-up it pays for can be used for 360 days from the day it is paid, and any part unused by then lapses.",
                  ],
                ),
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-9">
              <DokyDocLink href={CTA.start.href}>{CTA.start.label}</DokyDocLink>
            </div>
          </article>
          <article data-reveal className="on-dark flex flex-col rounded-2xl bg-ink-900 p-8 text-ink-200 shadow-lift sm:p-10">
            <p className="font-serif text-[30px] text-white">Enterprise</p>
            <p className="mt-2 text-[16px] text-ink-300">For companies that buy through a contract.</p>
            <ul className="mt-7 space-y-3 text-[15.5px] leading-relaxed">
              {[
                "An annual agreement, invoiced against your purchase order.",
                "Analysis on your own Google AI key, set up with you.",
                "Custom work, by agreement.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3 pt-9">
              <ButtonLink href="/contact?topic=dokydoc">Talk to us</ButtonLink>
            </div>
          </article>
        </div>
      </Section>

      {/* ── Security and your data ───────────────────────────── */}
      <Section labelledBy="security-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <Eyebrow>Security and your data</Eyebrow>
            <h2 id="security-title" className="h-section mt-5">
              What happens to your documents and code.
            </h2>
            <ul className="mt-8 space-y-4 text-[16px] leading-relaxed text-text-soft">
              {SECURITY.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-live" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <ArrowLink href="/contact?topic=trust">Request our security documents (NDA)</ArrowLink>
              <ArrowLink href={DOKYDOC.security}>dokydoc.com/security</ArrowLink>
            </div>
          </div>
          <details data-reveal className="card group self-start p-8 sm:p-10">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block font-serif text-[26px]">What it does not do yet</span>
                <span className="mt-2 block text-[15px] text-text-mute">Five limits. We would rather you hear them from us.</span>
              </span>
              <span aria-hidden="true" className="mt-2 font-mono text-[20px] text-text-mute transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-text-soft">
              {LIMITS.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dev" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </Section>

      {/* ── Straight answers ─────────────────────────────────── */}
      <Section id="faq" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Straight answers</Eyebrow>
            <h2 id="faq-title" className="h-section mt-5">
              What DokyDoc is, and what it is not.
            </h2>
            <p className="lede mt-6">
              Including the questions people ask because they have read something about us that is no longer true.
            </p>
          </div>
          <div data-reveal className="divide-y divide-paper-line border-y border-paper-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-[21px] leading-snug">{f.q}</h3>
                  <span aria-hidden="true" className="mt-1 font-mono text-[20px] text-text-mute transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[42rem] text-[16px] leading-relaxed text-text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Talk ─────────────────────────────────────────────── */}
      <Section id="talk" className="bg-paper-deep" labelledBy="cta-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow>Start small</Eyebrow>
            <h2 id="cta-title" className="h-section mt-5">
              One document. One repository. See what it really covers.
            </h2>
            <p className="lede mt-6">
              Start on your own, or tell us where you are and the founder will walk you through it. We sign an NDA before we
              look at anything of yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DokyDocLink href={CTA.start.href}>{CTA.start.label}</DokyDocLink>
              <ButtonLink href={CTA.demo.href} variant="ghost">
                {CTA.demo.label}
              </ButtonLink>
            </div>
          </div>
          <div data-reveal>
            <Conversation initialTopic="dokydoc" />
          </div>
        </div>
      </Section>
    </>
  );
}
