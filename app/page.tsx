import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { company } from "@/lib/company";

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
          className="absolute inset-0 w-full h-full object-cover z-0"
          aria-hidden
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

        <div className="relative z-[2] w-full max-w-[820px] px-6 md:px-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-strong px-5 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary">
                Deyora Intelligence — Building the SDLC Intelligence Layer
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="display text-[44px] sm:text-6xl md:text-7xl lg:text-[110px] text-white mb-8">
              AI ARCHITECTURES<br />
              THAT FIX HOW<br />
              SOFTWARE GETS<br />
              <span className="shimmer-text">BUILT.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-[580px] mb-12">
              <strong className="text-white font-medium">Deyora Intelligence</strong> builds AI products that make
              software delivery measurable, mathematical, and trustworthy. Our first product, <strong className="text-white font-medium">DokyDoc</strong>, is
              live — and the portfolio is growing.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/dokydoc" className="btn-primary">Explore DokyDoc</Link>
              <Link href="/about" className="btn-secondary">Our Vision →</Link>
            </div>
          </Reveal>
        </div>

        <div className="hidden md:flex absolute bottom-10 left-16 z-[2] items-center gap-3">
          <span className="w-10 h-px bg-ink-tertiary" />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-tertiary">Scroll to Explore</span>
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
          "97% AI COST REDUCTION →",
        ]}
      />

      {/* VISION CALLOUT */}
      <section className="bg-bg-secondary py-32 md:py-40">
        <div className="container-deyora grid gap-16 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionLabel>The Deyora Vision</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="display text-4xl md:text-6xl text-white mb-10 max-w-3xl">
                Every line of code, traceable to a business intent.<br />
                Every business intent, shipped exactly as written.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl">
                {company.mission} We treat the gap between specification and implementation as a solvable engineering
                problem — not an organizational one.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-bg-primary py-32 md:py-36">
        <div className="container-deyora">
          <Reveal><SectionLabel>Operating Principles</SectionLabel></Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-16">
              What makes a Deyora<br />product a Deyora product.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 -mt-px -ml-px">
            {company.principles.map((p, i) => (
              <Reveal key={p.number} delay={i * 80}>
                <div className="border-l border-t border-subtle p-10 md:p-12 h-full">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-6">{p.number}</div>
                  <h3 className="display text-2xl md:text-3xl text-white mb-4">{p.title}</h3>
                  <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary max-w-[460px]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-bg-secondary py-32 md:py-40" id="products">
        <div className="container-deyora">
          <Reveal><SectionLabel>The Product Portfolio</SectionLabel></Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6">
              One mission. A growing<br />portfolio of products.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
              Each product attacks a specific failure in the software delivery lifecycle. DokyDoc is live. The next
              one is in build.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-primary py-40 text-center border-t border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel className="justify-center">Get Started</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-5xl md:text-7xl text-white mb-6">
              The right code.<br />Built the first time.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary max-w-xl mx-auto mb-12">
              Start with DokyDoc — Deyora's flagship traceability platform — and ship exactly what your product team
              planned, with mathematical proof.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://dokydoc.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Request a Demo
              </a>
              <Link href="/contact" className="btn-secondary">Talk to Deyora →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
