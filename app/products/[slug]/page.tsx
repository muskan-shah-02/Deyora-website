import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Marquee from "@/components/Marquee";
import MetricCounter from "@/components/MetricCounter";
import CostCalculator from "@/components/CostCalculator";
import VideoPlayer from "@/components/VideoPlayer";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.tagline} | Deyora Intelligence`,
    description: p.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  // Upcoming product → simpler teaser layout
  if (product.status === "upcoming") {
    return (
      <section className="min-h-screen flex items-center justify-center pt-32 pb-32 border-b border-subtle">
        <div className="container-deyora text-center max-w-3xl">
          <Reveal><SectionLabel className="justify-center">{product.tagline}</SectionLabel></Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl text-white mb-8">{product.name}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary mb-12">
              {product.longDescription}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">Join the Waitlist</Link>
              <Link href="/products" className="btn-secondary">All Products →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  const isDoky = product.slug === "dokydoc";

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-[68px] pb-20">
        {product.videoSrc && (
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" aria-hidden>
            <source src={product.videoSrc} type="video/mp4" />
          </video>
        )}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.75) 100%)",
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
                {product.tagline} — by Deyora Intelligence
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[110px] text-white mb-8">
              {product.heroHeadline.map((line, i) => (
                <span key={i} className="block">
                  {product.heroOutlineWord && line.includes(product.heroOutlineWord)
                    ? line
                        .split(product.heroOutlineWord)
                        .reduce<React.ReactNode[]>(
                          (acc, part, idx, arr) => [
                            ...acc,
                            part,
                            idx < arr.length - 1 ? (
                              <span key={idx} className="outline-text">
                                {product.heroOutlineWord}
                              </span>
                            ) : null,
                          ],
                          [],
                        )
                    : line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-[560px] mb-12">
              {product.heroSub}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Demo
              </Link>
              {product.externalUrl && (
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Visit {product.name} →
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      {isDoky && (
        <Marquee
          items={[
            "REQUIREMENTS →",
            "CODEBASE MAPPING →",
            "ZERO REWORK →",
            "TEAM ALIGNMENT →",
            "SHIP WHAT WAS PLANNED →",
            "97% AI COST REDUCTION →",
          ]}
        />
      )}

      {/* PROBLEM */}
      {isDoky && (
        <section className="bg-bg-secondary py-32 md:py-36">
          <div className="container-deyora">
            <Reveal><SectionLabel>The Universal Nightmare</SectionLabel></Reveal>
            <Reveal>
              <h2 className="display text-4xl md:text-6xl text-white mb-16">
                Product asks for 'A.'<br />Engineering builds 'B.'
              </h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              <div>
                <Reveal>
                  <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-6 max-w-xl">
                    The biggest bottleneck in software isn't writing code — it's translation. Requirements get lost
                    in Jira tickets, edge cases are missed, and undocumented features creep into production.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-6 max-w-xl">
                    You don't find out until QA fails or a customer complains — after weeks of wasted engineering
                    time and hundreds of thousands in rework costs.
                  </p>
                </Reveal>

                <Reveal>
                  <div className="border-l-2 border-white pl-8 mt-12">
                    <div className="display text-[80px] leading-none text-white">97%</div>
                    <div className="label-mono mt-3 leading-relaxed max-w-[360px]">
                      Reduction in AI API costs via DokyDoc's 3-Tier Mapping Algorithm — continuous traceability
                      affordable at any scale
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <div className="border border-subtle p-8 md:p-10">
                  <div className="flex items-stretch mb-8">
                    <div className="flex-1 border border-subtle p-5">
                      <div className="font-mono text-[10px] font-medium tracking-[0.14em] uppercase text-ink-tertiary mb-2">
                        Product Team
                      </div>
                      <div className="font-sans text-sm text-white">PRD / Requirements Doc</div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 min-w-[60px]">
                      <div className="font-mono text-2xl font-bold text-accent-danger leading-none">✕</div>
                      <div className="font-mono text-[9px] font-medium tracking-[0.16em] uppercase text-accent-danger mt-2 writing-mode-vertical">
                        GAP
                      </div>
                    </div>
                    <div className="flex-1 border border-subtle p-5">
                      <div className="font-mono text-[10px] font-medium tracking-[0.14em] uppercase text-ink-tertiary mb-2">
                        Engineering Team
                      </div>
                      <div className="font-sans text-sm text-accent-danger">Codebase / GitHub</div>
                    </div>
                  </div>

                  <pre className="border border-subtle p-6 font-mono text-xs text-ink-tertiary leading-loose whitespace-pre-wrap m-0">
{`// Requirements written → Requirements ignored
// Features promised → Features missing
// Sprints planned → Rework shipped
// Budget allocated → Budget wasted`}
                  </pre>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* METRICS + CALCULATOR */}
      {product.metrics.length > 0 && (
        <section id="metrics" className="border-y border-subtle">
          <MetricCounter metrics={product.metrics} />
          {isDoky && (
            <div className="container-deyora py-20">
              <Reveal>
                <CostCalculator />
              </Reveal>
            </div>
          )}
        </section>
      )}

      {/* ROLES */}
      {product.roles.length > 0 && (
        <section className="bg-bg-primary py-32 md:py-36">
          <div className="container-deyora">
            <Reveal><SectionLabel>Solutions by Role</SectionLabel></Reveal>
            <Reveal>
              <h2 className="display text-4xl md:text-6xl text-white mb-16">
                How {product.name} aligns<br />your entire team.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 -mt-px -ml-px">
              {product.roles.map((r, i) => {
                const idx = String(i + 1).padStart(2, "0");
                const total = String(product.roles.length).padStart(2, "0");
                return (
                  <Reveal key={r.role} delay={i * 80}>
                    <div className="group relative overflow-hidden border-l border-t border-subtle p-10 md:p-12 transition-colors hover:bg-bg-card h-full">
                      <div className="absolute top-0 left-0 h-[2px] bg-white w-0 transition-all duration-500 group-hover:w-full" />
                      <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-5">{idx} / {total}</div>
                      <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-secondary border border-subtle px-3 py-1 mb-5">
                        {r.role}
                      </span>
                      <h3 className="display text-[26px] text-white mb-4 leading-tight">{r.headline}</h3>
                      <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary">{r.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      {product.features.length > 0 && (
        <section className="bg-bg-secondary py-32 md:py-36">
          <div className="container-deyora">
            <Reveal><SectionLabel>How It Works</SectionLabel></Reveal>
            <Reveal>
              <h2 className="display text-4xl md:text-6xl text-white mb-16">
                {product.name}'s<br />Intelligence Engine
              </h2>
            </Reveal>

            {product.videoSrc && (
              <Reveal>
                <VideoPlayer src={product.videoSrc} watermark={product.name.toUpperCase()} title={`${product.name} — Product Demo`} />
              </Reveal>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {product.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="border-t border-subtle p-10 md:border-r md:border-subtle md:[&:nth-child(3n)]:border-r-0 h-full">
                    <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-5">{f.counter}</div>
                    <h4 className="display text-[22px] text-white mb-3 leading-tight">{f.title}</h4>
                    <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-bg-primary py-40 text-center border-t border-subtle">
        <div className="container-deyora">
          <Reveal><SectionLabel className="justify-center">Get Started with {product.name}</SectionLabel></Reveal>
          <Reveal>
            <h2 className="display text-5xl md:text-7xl text-white mb-6">
              The right code.<br />Built the first time.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary max-w-xl mx-auto mb-12">
              Stop paying for rework. Start shipping exactly what your product team planned — with mathematical
              proof it was built correctly.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">
                Book a Demo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Drop a PRD — Try It Free →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
