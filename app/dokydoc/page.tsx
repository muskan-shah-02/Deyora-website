import type { Metadata } from "next";
import { DOKYDOC, SITE_URL } from "@/lib/site";
import { ArrowLink, ButtonLink, DokyDocMark, Eyebrow, Section, Status } from "@/components/ui";
import { CoverageIllustration } from "@/components/Illustrations";

const description =
  "DokyDoc reads your requirement documents and your code, links each requirement to the code that implements it, and shows what is built, what is missing and what it could not check. A named person on your side signs off.";

export const metadata: Metadata = {
  title: "DokyDoc · Check software against the documents that say what it should do",
  description,
  alternates: { canonical: "/dokydoc" },
  openGraph: { title: "DokyDoc by Deyora Intelligence", description, url: `${SITE_URL}/dokydoc` },
};

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

const capabilities = [
  ["Coverage matrix", "Requirement by requirement: linked, missing or not examined, with a separate report of what was never looked at."],
  ["Reverse check", "Code, and claims in documents, that no requirement explains."],
  ["Needs your decision", "One ordered list of findings to decide, and a record of every decision already made."],
  ["Sealed sign-off", "A signed record that states the condition it depends on, and shows the day it stops holding."],
  ["UAT checklists and test cases", "Generated from the extracted requirements, for your team to review before use."],
  ["AskyDoc", "Ask questions about your own documents and code, in plain language."],
  ["Auto Docs", "Draft requirement documents, architecture diagrams and API summaries from your sources, as a starting point to edit."],
  ["Maps of your system", "A knowledge graph, a business map and architecture views of what was analysed."],
  ["Jira and Slack", "Check Jira tickets against the code, and create a Jira issue only when a person asks. Bring in messages from the Slack channels you choose."],
  ["Code from anywhere", "GitHub, GitLab, Bitbucket Cloud, a public repository link, or a ZIP upload. Nothing to install."],
  ["Spend controls", "Limits per person and per month, and the price of every paid run shown before it starts."],
  ["Audit trail", "Changes to documents, repositories, users, integrations and keys are recorded in a chain that shows tampering. Viewing and export are limited to the CXO, Admin and Auditor roles."],
];

export default function DokyDocPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

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
              Does your software do what the documents say?
            </h1>
            <p className="lede mt-7 max-w-[36rem]">
              DokyDoc reads your requirement documents and your code, links each requirement to the code that implements
              it, and shows what is built, what is missing and what it could not check, with the evidence. A named person
              on your side reviews the findings and signs off. DokyDoc never signs for you.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={DOKYDOC.register}>Start on dokydoc.com</ButtonLink>
              <ButtonLink href="/contact?topic=dokydoc" variant="ghost">
                Talk to us
              </ButtonLink>
            </div>
            <p className="mt-5 text-[14px] text-text-mute">Prepaid and pay-as-you-go. The price is shown before anything runs.</p>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <CoverageIllustration />
          </div>
        </div>
      </section>

      {/* ── Who it is for ────────────────────────────────────── */}
      <Section className="bg-paper-deep" labelledBy="who-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Who it is for</Eyebrow>
          <h2 id="who-title" className="h-section mt-5">
            For the people who pay for software, and the people who build it.
          </h2>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Founders and CXOs", "You pay a team or an agency. See what you are getting against what you agreed, before you sign off."],
            ["Product managers and analysts", "Turn a requirements document into testable requirements, and see which ones the code really covers."],
            ["Engineering leads", "Find code nobody asked for, and documents that promise what the code does not do."],
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
      <Section labelledBy="how-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>How it works</Eyebrow>
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
      <Section className="bg-paper-deep" labelledBy="cap-title">
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
          {capabilities.map(([t, d]) => (
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

      {/* ── DokyBrain ────────────────────────────────────────── */}
      <Section id="dokybrain" labelledBy="brain-title">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div data-reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Next, inside DokyDoc</Eyebrow>
              <Status tone="dev">In development</Status>
            </div>
            <h2 id="brain-title" className="h-section mt-5">
              DokyBrain: a brain for the whole company.
            </h2>
            <p className="lede mt-6">
              We are building DokyBrain into DokyDoc as one evidence-backed foundation that connects what a company
              intended, promised, built, delivered and earned, and surfaces the gaps, patterns and opportunities that
              deserve human attention.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-text-soft">
              It stands on what DokyDoc already runs: the Boardroom, AskyDoc, sealed sign-off, and evidence marked verified
              or inferred. What comes next is designed, not shipped, and we will not put a date on this page until we can
              keep it.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact?topic=manufacturing">Run a manufacturing company? Talk to us</ButtonLink>
            </div>
          </div>
          <ul className="grid gap-5">
            {[
              [
                "It observes, reasons, recommends and prepares",
                "A person approves and acts. By design, it never sends, approves or changes anything in your systems on its own.",
              ],
              [
                "Evidence behind every line",
                "No count without what it is counted against: “6 of 47 open commitments”, never just “delivery is at risk”.",
              ],
              [
                "Starting with manufacturing",
                "Orders, plants, suppliers, distributors and finances come first. It is designed so a company in any industry can start, and go deeper over time.",
              ],
              [
                "A report a person stands behind",
                "Its sealed output will be a Verification Report, signed by a named person at your company, not by us.",
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
                "Every feature included. No seats, no tiers.",
                "The price of each paid operation is shown before it runs, and anything your balance cannot cover is refused up front.",
                "Spend limits per person and per month.",
                "A GST tax invoice for every top-up.",
                "Unused balance never expires. Top-ups are not refundable.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-9">
              <ButtonLink href={DOKYDOC.register}>Start on dokydoc.com</ButtonLink>
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
              <ButtonLink href={DOKYDOC.enterprise} variant="ghost">
                Enterprise details
              </ButtonLink>
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
              {[
                "Hosted on a server in Germany. Connections to DokyDoc use TLS 1.2 or 1.3.",
                "Document text and connector tokens are encrypted in the database.",
                "Each organisation is kept separate, and automated tests check access across organisations before every release.",
                "AI analysis uses Google’s Gemini API on the paid tier, under which Google does not use your content to train its models. DokyDoc trains no models of its own.",
                "Changes to documents, repositories, users and integrations are recorded in an audit log that shows tampering.",
              ].map((x) => (
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
          <div data-reveal className="card p-8 sm:p-10">
            <p className="font-serif text-[26px]">What it does not do yet</p>
            <p className="mt-2 text-[15px] text-text-mute">We would rather you hear it from us.</p>
            <ul className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-text-soft">
              {[
                "Two-factor sign-in and company-wide login are not available yet.",
                "We have not yet had an independent penetration test, and we hold no ISO 27001 or SOC 2 certification.",
                "Your data is hosted in Germany, and AI processing happens outside India. Hosting in India is not available yet.",
                "Results are estimates for a person to review. We publish no accuracy figure, because we have not yet measured one on real customer projects.",
                "Accounting and CRM connections are built but not yet switched on.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dev" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section dark labelledBy="cta-title">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 id="cta-title" className="h-section text-white">
            See what your software really covers.
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">
            Start with one requirements document and one repository. If you would like a walkthrough first, talk to us.
            We sign an NDA before we look at anything of yours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={DOKYDOC.register}>Start on dokydoc.com</ButtonLink>
            <ButtonLink href="/contact?topic=dokydoc" variant="ghost">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
