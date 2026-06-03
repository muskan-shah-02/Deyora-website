import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import ProblemBlock from "@/components/ProblemBlock";
import HowItWorks from "@/components/HowItWorks";
import PersonaRow from "@/components/PersonaRow";
import CostCalculator from "@/components/CostCalculator";
import AlphaBanner from "@/components/AlphaBanner";
import TrustStrip from "@/components/TrustStrip";
import { products } from "@/lib/products";
import { company } from "@/lib/company";

export default function Home() {
  return (
    <>
      {/* HERO — problem-led, not vibes-led */}
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
              "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.78) 100%)",
          }}
        />
        <div className="absolute inset-y-0 right-0 w-1/2 z-[1] grid-texture pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/[0.04]" />
        </div>

        <div className="relative z-[2] w-full max-w-[920px] px-6 md:px-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-strong px-5 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary">
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
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-[620px] mb-12">
              <strong className="text-white font-medium">DokyDoc</strong> reads your PRDs and your
              codebase, maps every requirement to the functions that implement it, and shows you —
              in real time — exactly where they disagree. Built by{" "}
              <strong className="text-white font-medium">Deyora Intelligence</strong>.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Demo
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How It Works →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 flex flex-wrap items-center gap-6 max-w-xl">
              {[
                { k: "Specs analyzed", v: "PRDs, BRDs, Confluence, Notion" },
                { k: "Repos supported", v: "GitHub, GitLab" },
                { k: "Response time", v: "≤ 1 business day" },
              ].map((m) => (
                <div key={m.k} className="flex-1 min-w-[160px]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary mb-2">
                    {m.k}
                  </div>
                  <div className="font-mono text-[12px] text-white">{m.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="hidden md:flex absolute bottom-10 left-16 z-[2] items-center gap-3">
          <span className="w-10 h-px bg-ink-tertiary" />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-tertiary">
            Scroll to Explore
          </span>
        </div>
      </section>

      {/* MARQUEE — removed misleading "97% AI cost reduction" claim */}
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

      {/* PROBLEM */}
      <ProblemBlock />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHO IT'S FOR — personas */}
      <PersonaRow />

      {/* ROI CALCULATOR */}
      <section className="bg-bg-secondary py-32 md:py-36 border-t border-subtle" id="roi">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>The Math</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6 max-w-3xl">
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

      {/* PRIVATE ALPHA — turns "no customers yet" into urgency */}
      <AlphaBanner />

      {/* SECURITY & TRUST */}
      <TrustStrip />

      {/* OPERATING PRINCIPLES — short, lower in the page */}
      <section className="bg-bg-secondary py-32 md:py-36 border-t border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>Who's Building This</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6 max-w-3xl">
              The non-negotiables<br />
              of every Deyora product.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
              Deyora Intelligence is the company building DokyDoc. These four commitments hold
              across every product we ship.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 -mt-px -ml-px">
            {company.principles.map((p, i) => (
              <Reveal key={p.number} delay={i * 80}>
                <div className="border-l border-t border-subtle p-8 md:p-10 h-full">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-5">
                    {p.number}
                  </div>
                  <h3 className="display text-xl md:text-2xl text-white mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-bg-primary py-32 md:py-36 border-t border-subtle" id="products">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>The Product Portfolio</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6">
              One mission. A growing<br />
              portfolio of products.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
              Each Deyora product attacks a specific failure in the software delivery lifecycle.
              DokyDoc is the first. The next is in build.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} index={i} total={products.length} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-bg-primary py-40 text-center border-t border-subtle">
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
              <Link href="/products/dokydoc" className="btn-secondary">
                Explore DokyDoc →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
