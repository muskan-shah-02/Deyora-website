import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Marquee from "@/components/Marquee";
import ProblemBlock from "@/components/ProblemBlock";
import HowItWorks from "@/components/HowItWorks";
import ProofBlock from "@/components/ProofBlock";
import IntegrationGrid from "@/components/IntegrationGrid";
import PersonaRow from "@/components/PersonaRow";
import CostCalculator from "@/components/CostCalculator";
import AlphaBanner from "@/components/AlphaBanner";
import TrustStrip from "@/components/TrustStrip";
import DokyDocMark from "@/components/DokyDocMark";

const DOKYDOC_URL = "https://dokydoc.com/";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-[68px] pb-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-0"
          aria-hidden="true"
        >
          <source src="/videos/glowing.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.62) 50%, rgba(0,0,0,0.82) 100%)",
          }}
        />
        <div className="absolute inset-y-0 right-0 w-1/2 z-[1] grid-texture pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/[0.04]" />
        </div>

        <div className="relative z-[2] w-full max-w-[920px] px-6 md:px-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-strong px-5 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-secondary">
                DokyDoc by Deyora Intelligence — Private Alpha
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="display text-[44px] sm:text-6xl md:text-7xl lg:text-[100px] text-white mb-8">
              YOUR SPECS SAY<br />
              ONE THING.<br />
              YOUR CODE DOES<br />
              <span className="shimmer-text">ANOTHER.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-[640px] mb-12">
              <strong className="text-white font-medium">DokyDoc</strong> reads your PRDs and your
              codebase, maps every requirement to the functions that implement it, and shows you —
              in real time — exactly where they disagree.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Demo
              </Link>
              <a
                href={DOKYDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <DokyDocMark className="w-4 h-4" />
                Open DokyDoc Live
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 max-w-2xl">
              {[
                { k: "Specs analyzed", v: "PRDs · Confluence · Notion" },
                { k: "Repos supported", v: "GitHub · GitLab" },
                { k: "Response time", v: "≤ 1 business day" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary mb-2">
                    {m.k}
                  </div>
                  <div className="font-mono text-[12px] text-white">{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        items={[
          "TRACEABILITY →",
          "INTELLIGENCE →",
          "VERIFICATION →",
          "ALIGNMENT →",
          "MATHEMATICAL PROOF →",
          "AUDIT-READY →",
        ]}
      />

      {/* 1. THE PROBLEM */}
      <ProblemBlock />

      {/* 2. THE PROOF — visual break, blue-tinted background, mock dashboard */}
      <ProofBlock />

      {/* 3. HOW IT WORKS — 3 steps */}
      <HowItWorks />

      {/* 4. INTEGRATIONS — plugs into your existing stack */}
      <IntegrationGrid />

      {/* 5. WHO IT'S FOR — personas */}
      <PersonaRow />

      {/* 6. THE MATH — ROI calculator */}
      <section
        className="py-24 md:py-28 border-t border-subtle"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
        id="roi"
      >
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>The Math</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
              See the cost of staying<br />
              with the status quo.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-12">
              Dial in your numbers. The recovery assumption is yours to set — we'd rather you
              under-shoot than us oversell.
            </p>
          </Reveal>
          <Reveal>
            <CostCalculator />
          </Reveal>
        </div>
      </section>

      {/* 7. WHY NOW — Private Alpha framing */}
      <AlphaBanner />

      {/* 8. SECURITY & TRUST */}
      <TrustStrip />

      {/* FINAL CTA */}
      <section className="bg-bg-primary py-32 md:py-36 text-center border-t border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel className="justify-center">Stop guessing. Start proving.</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-5xl md:text-7xl text-white mb-6">
              30 minutes. One PRD.<br />
              You'll see the gap.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary max-w-xl mx-auto mb-12">
              Send us a redacted spec. We'll run it through DokyDoc and walk you through every
              place your code disagrees with it. Live, on a call, with a founder.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Demo
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
