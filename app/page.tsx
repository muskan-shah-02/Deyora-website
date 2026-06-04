import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Marquee from "@/components/Marquee";
import SelfSelectGrid from "@/components/SelfSelectGrid";
import DokyDocMark from "@/components/DokyDocMark";

export default function Home() {
  return (
    <>
      {/* HERO — Deyora parent brand */}
      <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center pt-[68px] pb-20">
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

        <div className="relative z-[2] w-full max-w-[1000px] px-6 md:px-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-strong px-5 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-secondary">
                Deyora Intelligence
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="display text-[44px] sm:text-6xl md:text-7xl lg:text-[96px] text-white mb-8 leading-[0.95]">
              Transforming<br />
              information into<br />
              <span className="shimmer-text">intelligent action.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-sans font-light text-[19px] leading-relaxed text-ink-secondary max-w-[640px] mb-4">
              Intelligence that moves business forward.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p className="font-sans font-light text-[16px] leading-relaxed text-ink-tertiary max-w-[640px] mb-12">
              We turn the complexity buried in your documents, systems, and processes
              into clarity your teams can act on.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/dokydoc" className="btn-primary inline-flex items-center gap-2">
                Explore DokyDoc
                <span>→</span>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE — vision keywords */}
      <Marquee
        items={[
          "CLARITY →",
          "INTELLIGENCE →",
          "UNDERSTANDING →",
          "ACTION →",
          "COMPLEXITY → CLARITY →",
          "KNOWLEDGE AS ADVANTAGE →",
        ]}
      />

      {/* WHY WE EXIST */}
      <section className="py-24 md:py-28 border-t border-subtle">
        <div className="container-deyora grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <Reveal>
            <SectionLabel>Why we exist</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.05]">
                The world's most valuable knowledge<br />
                is <span className="text-ink-secondary">trapped.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl mb-6">
                It sits inside documents, systems, processes, and people. It's there — but
                it's hard to reach, hard to trust, and hard to act on. So organizations move
                slower than they should, repeat work they've already done, and make decisions
                with less than they know.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-[18px] leading-relaxed text-white max-w-2xl">
                Deyora Intelligence exists to{" "}
                <span className="shimmer-text">unlock that knowledge</span> — to make it
                accessible, intelligent, and actionable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SELF-SELECT GRID — the Visure move */}
      <SelfSelectGrid />

      {/* WHAT WE'RE BUILDING NOW — single product spotlight */}
      <section
        className="py-24 md:py-28 border-t border-subtle"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
      >
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>What we're building now</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
              Documentation intelligence.<br />
              <span className="text-ink-secondary">Starting with DokyDoc.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl mb-12">
              Our first product helps leaders, teams, and enterprises visualize, understand,
              and navigate the systems they've built — with confidence.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <Link
              href="/dokydoc"
              className="group block border border-strong p-10 md:p-14 hover:bg-bg-card transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-500" />

              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary">
                  01 / 01
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent-success border border-accent-success/40 px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse-dot" />
                  Live
                </span>
              </div>

              <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">
                <DokyDocMark className="w-20 h-20 md:w-24 md:h-24 text-white" />
                <div>
                  <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-blue-soft mb-3">
                    Doc-to-Code Governance
                  </div>
                  <h3 className="display text-4xl md:text-5xl text-white mb-6">DokyDoc</h3>
                  <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl mb-8">
                    The system of truth between what your business asked for and what your
                    engineers actually shipped. For every BRD. Every repo. Every release.
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-white">
                    Explore DokyDoc
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHERE WE'RE GOING — roadmap teaser */}
      <section className="py-24 md:py-28 border-t border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>Where we're going</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-12 max-w-3xl">
              Beyond documentation —<br />
              an <span className="shimmer-text">intelligence ecosystem.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 -mt-px -ml-px">
            {[
              {
                k: "Workflow Intelligence",
                v: "Understanding how work actually moves through your business — not how the org chart says it does.",
              },
              {
                k: "Decision Intelligence",
                v: "Why each call was made, what data backed it, who signed off — preserved as an asset, not lost in Slack.",
              },
              {
                k: "Operations Intelligence",
                v: "The living, queryable picture of how the business runs at scale, refreshed continuously.",
              },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 80}>
                <div className="border-l border-t border-subtle p-7 h-full">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-ink-tertiary mb-4">
                    NEXT · 0{i + 2}
                  </div>
                  <h3 className="display text-[22px] leading-tight text-white mb-3">
                    {item.k}
                  </h3>
                  <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary">
                    {item.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <p className="font-sans font-light text-[16px] text-ink-tertiary mt-12 max-w-2xl">
              We're building toward a future where every organization can understand and
              navigate its business with complete clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        className="py-24 md:py-28 border-t border-subtle"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
      >
        <div className="container-deyora grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <Reveal>
            <SectionLabel>Who we are</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.05]">
                Builders. Thinkers.<br />
                <span className="text-ink-secondary">Problem-solvers.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans text-[18px] leading-relaxed text-white max-w-2xl mb-6">
                We're driven by one belief —{" "}
                <span className="shimmer-text">
                  when people gain clarity, they make better decisions, build better products,
                  and create better futures.
                </span>
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary max-w-2xl">
                Clarity creates power. That's the principle every product we build is
                designed around — and the standard we hold ourselves to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-bg-primary py-28 md:py-32 text-center border-t border-subtle">
        <div className="container-deyora max-w-3xl">
          <Reveal>
            <SectionLabel className="justify-center">Ready when you are</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-5xl md:text-7xl text-white mb-6 leading-[1.02]">
              Bring us your<br />
              complexity.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary max-w-xl mx-auto mb-12">
              A 20-minute walkthrough on a system you already know. We'll show you the
              clarity hiding inside it.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Walkthrough
              </Link>
              <Link href="/dokydoc" className="btn-secondary">
                Explore DokyDoc →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
