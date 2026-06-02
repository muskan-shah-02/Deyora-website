import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { company } from "@/lib/company";
import Link from "next/link";

export const metadata = {
  title: "About — Deyora Intelligence",
  description: "The vision, mission, and story behind Deyora Intelligence.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-bg-primary border-b border-subtle">
        <div className="container-deyora">
          <Reveal><SectionLabel>About Deyora Intelligence</SectionLabel></Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl lg:text-[96px] text-white mb-10 max-w-5xl">
              We're an intelligence<br />company for the way<br />
              software actually <span className="outline-text">gets built.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[18px] leading-relaxed text-ink-secondary max-w-2xl">
              {company.oneLiner}
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="bg-bg-secondary py-32 md:py-40 border-b border-subtle">
        <div className="container-deyora grid gap-16 md:grid-cols-2">
          <Reveal>
            <div className="border-l-2 border-white pl-8 h-full flex flex-col">
              <SectionLabel>Vision</SectionLabel>
              <p className="display text-3xl md:text-4xl text-white leading-tight">{company.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border-l-2 border-accent-blue-soft pl-8 h-full flex flex-col">
              <SectionLabel>Mission</SectionLabel>
              <p className="display text-3xl md:text-4xl text-white leading-tight">{company.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-bg-primary py-32 md:py-40">
        <div className="container-deyora">
          <Reveal><SectionLabel>The Story</SectionLabel></Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-20 max-w-3xl">
              Why Deyora<br />exists.
            </h2>
          </Reveal>

          <div className="grid gap-8">
            {company.story.map((s, i) => (
              <Reveal key={s.year} delay={i * 80}>
                <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-subtle pt-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-blue-soft">{s.year}</div>
                  <div>
                    <h3 className="display text-2xl md:text-3xl text-white mb-4">{s.heading}</h3>
                    <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary max-w-2xl">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-bg-secondary py-32 md:py-40">
        <div className="container-deyora">
          <Reveal><SectionLabel>Operating Principles</SectionLabel></Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-16 max-w-3xl">
              The non-negotiables of every Deyora product.
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

      {/* CTA */}
      <section className="bg-bg-primary border-t border-subtle py-32 text-center">
        <div className="container-deyora">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-8">
              See what we're building.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/products" className="btn-primary">Explore Products</Link>
              <Link href="/contact" className="btn-secondary">Talk to Us →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
