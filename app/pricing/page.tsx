import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Breadcrumb from "@/components/Breadcrumb";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing — DokyDoc by Deyora Intelligence",
  description:
    "DokyDoc pricing — Design Partner (alpha), Team, and Enterprise. Currency adapts to your region. Annual contracts available. Book a demo to get started.",
  alternates: { canonical: "https://deyora.ai/pricing" },
};

const faqs = [
  {
    q: "How do you bill?",
    a: "Team plans are billed monthly or annually (annual unlocks a 20% discount). Enterprise contracts are scoped per engagement. We accept card, ACH/SEPA, and wire — local options available in supported regions.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade anytime. Design Partner pricing is locked in for the duration of your contract — even after we exit alpha.",
  },
  {
    q: "What counts as a seat?",
    a: "Anyone who actively reads, edits, or approves traceability in DokyDoc. Read-only viewers (auditors, exec dashboards) don't consume a seat.",
  },
  {
    q: "Do you offer discounts for startups / non-profits?",
    a: "Yes — 50% off the Team plan for funded early-stage startups and registered non-profits, no time limit. Ask us at the demo.",
  },
  {
    q: "Self-hosted / on-prem?",
    a: "Available on the Enterprise plan. Air-gapped deployments are scoped per engagement; we'll walk you through the setup on the demo call.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-subtle">
        <div className="container-deyora">
          <Breadcrumb items={[{ label: "Pricing" }]} />
          <Reveal>
            <SectionLabel>Pricing</SectionLabel>
          </Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-6xl lg:text-7xl text-white mb-8 max-w-4xl">
              Honest pricing.<br />
              <span className="shimmer-text">Lowest while we're in alpha.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl mb-2">
              Three tiers. Currency adapts to your region. No quote-then-haggle —
              if you can read the page, you know the price.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary max-w-2xl">
              Design Partner is free during the alpha and locks in 50%-off pricing
              after GA — in exchange for thirty minutes of feedback every fortnight.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-bg-secondary border-b border-subtle">
        <div className="container-deyora">
          <Reveal>
            <PricingCards />
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-tertiary mt-10 max-w-3xl leading-relaxed">
              All prices exclude applicable taxes. Annual billing on the Team plan
              unlocks a 20% discount versus monthly. Volume discount applies at
              25+ seats and again at 100+ seats.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>Questions</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-3xl md:text-5xl text-white mb-12 max-w-2xl">
              The questions we get most.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-subtle border border-subtle">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <div className="bg-bg-primary p-8 h-full">
                  <h3 className="display text-xl text-white mb-3 leading-tight">
                    {f.q}
                  </h3>
                  <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-28 md:py-32 border-t border-subtle text-center"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
      >
        <div className="container-deyora max-w-3xl">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6">
              Still have a question<br />
              we didn't answer?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary mb-10 max-w-xl mx-auto">
              Book a 30-minute call with a founder. We'll walk you through pricing
              for your team size, your region, and your stack.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Demo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Or Email Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
