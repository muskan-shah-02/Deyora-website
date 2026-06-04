import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import HowItWorks from "@/components/HowItWorks";
import IntegrationGrid from "@/components/IntegrationGrid";
import PersonaRow from "@/components/PersonaRow";
import TrustStrip from "@/components/TrustStrip";
import AlphaBanner from "@/components/AlphaBanner";
import DokyDocMark from "@/components/DokyDocMark";

export const metadata = {
  title: "DokyDoc — Doc-to-Code Governance | Deyora Intelligence",
  description:
    "The system of truth between what your business asked for and what your engineers actually shipped. For every BRD, every repo, every release.",
};

const DOKYDOC_URL = "https://dokydoc.com/";

const PAIN_CARDS = [
  {
    id: "problem-drift",
    pre: "You've been here:",
    body: "A PRD was signed off six months ago. A feature shipped last week. They don't match. You find out at the demo.",
  },
  {
    id: "problem-docs",
    pre: "You've been here:",
    body: "Two hundred BRDs in Confluence. Nobody has read them end-to-end. Nobody knows which ones are still true.",
  },
  {
    id: "problem-code",
    pre: "You've been here:",
    body: "A senior engineer leaves. Three months of tribal knowledge walks out the door. Onboarding the replacement takes six weeks.",
  },
  {
    id: "problem-stale",
    pre: "You've been here:",
    body: "Your README lies. Your API docs lie. They describe a system you deprecated 18 months ago. You don't know which docs are still true.",
  },
];

const PERSONAS = [
  {
    id: "for-cto",
    role: "CTO",
    pain: "Your codebase doesn't explain itself. Onboarding is slow. You don't know what scope drift cost you last quarter until the retro.",
    bundle: [
      "Code Analysis — repo-wide structural understanding",
      "Reverse Validation — surfaces every place the docs lie about the code",
      "AskyDoc — chatbot over your private codebase",
      "Data Flow Visualisation — the architecture diagram that updates itself",
      "Auto-Docs — first-draft documentation from your actual code",
    ],
  },
  {
    id: "for-cxo",
    role: "CXO",
    pain: "You have a quality, productivity, and audit-readiness problem masquerading as a documentation problem.",
    bundle: [
      "Project Brain — one private knowledge graph across every doc and every repo",
      "Coverage Matrix — green/red/amber map of intent vs. shipped",
      "Sign-off & UAT — tamper-evident approval flow with a real audit trail",
      "Wallet billing — every call costed in real time, no surprise invoices",
      "Per-action audit log — answer 'who did what' without calling support",
    ],
  },
  {
    id: "for-pm",
    role: "Product / BA",
    pain: "You sign off on a BRD. Six months later you find out what actually shipped — at the demo.",
    bundle: [
      "Document Insight — every BRD/PRD summarised for the reader you need",
      "Coverage Matrix — see drift the moment a PR merges, not at the demo",
      "AskyDoc — ask plain-English questions across every doc and repo",
      "Sign-off & UAT — auto-generated UAT scripts from extracted acceptance criteria",
    ],
  },
  {
    id: "for-dev",
    role: "Developer",
    pain: "Your README lies. Your colleagues interrupt you with questions a chatbot could answer.",
    bundle: [
      "Code Analysis — per-file understanding, ignores noise (binaries, lockfiles)",
      "Reverse Validation — what your README claims that the code doesn't do",
      "AskyDoc — your team stops asking you the same question fifteen times",
      "Auto-Docs — drafts you edit, instead of blank pages you avoid",
    ],
  },
];

export default function DokyDocPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 border-b border-subtle">
        <div className="absolute inset-y-0 right-0 w-1/2 z-[1] grid-texture pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/[0.04]" />
        </div>

        <div className="relative z-[2] container-deyora">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-strong px-5 py-2 mb-10">
              <DokyDocMark className="w-4 h-4" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-secondary">
                Doc-to-Code Governance · by Deyora Intelligence
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="display text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] text-white mb-8 leading-[0.98] max-w-[1000px]">
              The system of truth<br />
              between what your business<br />
              asked for and what your<br />
              engineers <span className="shimmer-text">actually shipped.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-sans font-light text-[18px] leading-relaxed text-ink-secondary max-w-[640px] mb-10">
              For every BRD. Every repo. Every release.
            </p>
          </Reveal>

          {/* Pull quote — the demo-walkaway sentence */}
          <Reveal delay={250}>
            <blockquote className="border-l-2 border-white pl-6 my-12 max-w-2xl">
              <p className="font-sans italic text-[17px] leading-relaxed text-white">
                "This is what I've been doing manually in Excel before every quarterly
                review. DokyDoc just runs it all the time — with an audit trail."
              </p>
              <footer className="font-mono text-[10px] tracking-[0.14em] text-ink-tertiary uppercase mt-3">
                — what every buyer says after the demo
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-a-demo" className="btn-primary">
                Book a 20-min Walkthrough
              </Link>
              <a
                href={DOKYDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Open DokyDoc Live ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PAIN — relatability band */}
      <section className="py-24 md:py-28 border-t border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>The pain</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl leading-[1.02]">
              Four moments<br />
              <span className="text-ink-secondary">every team has lived.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-12">
              If two of these feel like your Tuesday, the rest of this page is for you.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 -mt-px -ml-px">
            {PAIN_CARDS.map((card, i) => (
              <Reveal key={card.id} delay={i * 80}>
                <div
                  id={card.id}
                  className="border-l border-t border-subtle p-8 md:p-10 h-full scroll-mt-32"
                >
                  <div className="font-mono text-[10px] tracking-[0.14em] text-accent-blue-soft mb-4">
                    0{i + 1} / 04
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-tertiary mb-4">
                    {card.pre}
                  </p>
                  <p className="font-sans text-[18px] md:text-[20px] leading-relaxed text-white">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE FIX — one sentence */}
      <section
        className="py-24 md:py-28 border-t border-subtle"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
      >
        <div className="container-deyora max-w-4xl text-center">
          <Reveal>
            <SectionLabel className="justify-center">The fix</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.08]">
              DokyDoc reads your documents, reads your code, and tells you
              exactly where they{" "}
              <span className="shimmer-text">agree</span>, where they{" "}
              <span className="shimmer-text">don't</span>, and where you're
              shipping something{" "}
              <span className="shimmer-text">nobody asked for.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR — persona bands (deep-link targets from self-select grid) */}
      <section className="py-24 md:py-28 border-t border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>Who it's for</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl leading-[1.02]">
              Your seat at the table,<br />
              <span className="text-ink-secondary">your view of the product.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
              Every role has a different pain. Here's what DokyDoc does for yours.
            </p>
          </Reveal>

          <div className="space-y-4">
            {PERSONAS.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <div
                  id={p.id}
                  className="border border-subtle hover:border-strong transition-colors scroll-mt-32"
                >
                  <div className="grid lg:grid-cols-[1fr_1.6fr]">
                    <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-subtle">
                      <div className="font-mono text-[10px] tracking-[0.14em] text-ink-tertiary mb-4">
                        FOR THE
                      </div>
                      <div className="display text-3xl md:text-4xl text-white mb-6">
                        {p.role}
                      </div>
                      <p className="font-sans text-[16px] leading-relaxed text-ink-secondary">
                        {p.pain}
                      </p>
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="font-mono text-[10px] tracking-[0.14em] text-accent-blue-soft mb-4">
                        YOUR BUNDLE
                      </div>
                      <ul className="space-y-3">
                        {p.bundle.map((b) => {
                          const [name, ...rest] = b.split(" — ");
                          return (
                            <li
                              key={b}
                              className="font-sans text-[15px] leading-relaxed text-white"
                            >
                              <span className="text-accent-blue-soft mr-2">→</span>
                              <span className="font-medium">{name}</span>
                              {rest.length > 0 && (
                                <span className="text-ink-secondary">
                                  {" "}
                                  — {rest.join(" — ")}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — reuse existing component */}
      <HowItWorks />

      {/* INTEGRATIONS */}
      <IntegrationGrid />

      {/* PRICING TEASER */}
      <section
        className="py-24 md:py-28 border-t border-subtle"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
      >
        <div className="container-deyora grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <Reveal>
            <SectionLabel>Pricing</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.05]">
                A wallet.<br />
                Not a <span className="text-ink-secondary">surprise invoice.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl mb-6">
                Pre-paid wallet. Real-time cost per call. Every document analysed, every
                file scanned — visible cost, visible value. Refunds when we don't deliver.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-[16px] leading-relaxed text-white max-w-2xl mb-10">
                Finance asks where the money went. We hand them a per-user, per-feature
                breakdown without a ticket.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-white hover:gap-3 transition-all"
              >
                See pricing detail
                <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — reuse */}
      <TrustStrip />

      {/* ALPHA BANNER */}
      <AlphaBanner />

      {/* FINAL CTA */}
      <section className="bg-bg-primary py-32 md:py-36 text-center border-t border-subtle">
        <div className="container-deyora max-w-3xl">
          <Reveal>
            <SectionLabel className="justify-center">See it on your own work</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-5xl md:text-7xl text-white mb-6 leading-[1.02]">
              See your own gap<br />
              in 20 minutes.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary max-w-xl mx-auto mb-12">
              Bring one BRD and one repo. We'll run them through DokyDoc and walk you through
              the coverage matrix — live, on a call, with a founder.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Walkthrough
              </Link>
              <a
                href={DOKYDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Open DokyDoc Live ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
