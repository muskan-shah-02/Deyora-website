import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { getProduct, products } from "@/lib/products";

const DOKYDOC_URL = "https://dokydoc.com/";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  // Upcoming product — simple teaser
  if (product.status === "upcoming") {
    return (
      <section className="min-h-[80vh] flex items-center pt-32 pb-32 border-b border-subtle">
        <div className="container-deyora max-w-4xl">
          <Reveal>
            <SectionLabel>{product.tagline}</SectionLabel>
          </Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl text-white mb-8">{product.name}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary mb-12 max-w-2xl">
              {product.longDescription}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex gap-4 flex-wrap">
              <Link href="/book-a-demo" className="btn-primary">
                Join the Waitlist
              </Link>
              <Link href="/products" className="btn-secondary">
                All Products →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // Live product (DokyDoc) — distinctly DIFFERENT from homepage:
  //   - No giant marketing hero
  //   - No video background
  //   - Two-column asymmetric layout
  //   - Primary CTA is the external dokydoc.com — this page is a launch pad,
  //     not a homepage clone.
  return (
    <>
      {/* HEADER STRIP */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 border-b border-subtle">
        <div className="container-deyora">
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary hover:text-white transition-colors mb-8"
            >
              ← Product Portfolio
            </Link>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent-success border border-accent-success/40 px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse-dot" />
                    Live
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary">
                    {product.category}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <h1 className="display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                  {product.name}
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-sans text-[18px] md:text-[20px] text-ink-secondary leading-relaxed max-w-2xl mb-8">
                  {product.tagline}.{" "}
                  <span className="text-white">{product.shortDescription}</span>
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="border border-strong p-7 bg-bg-card">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary mb-3">
                  Try the live product
                </div>
                <div className="display text-2xl text-white mb-5 leading-tight">
                  DokyDoc is live<br />at dokydoc.com.
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={product.externalUrl || DOKYDOC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center inline-flex items-center gap-2 w-full"
                  >
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
                  <Link href="/book-a-demo" className="btn-secondary justify-center w-full">
                    Or Book a Guided Demo
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRIEF DESCRIPTION */}
      <section className="py-20 md:py-24 bg-bg-secondary border-b border-subtle">
        <div className="container-deyora grid md:grid-cols-[1fr_1.6fr] gap-10">
          <Reveal>
            <SectionLabel>What it does</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-3xl">
              {product.longDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE GRID — compact, no marketing fluff */}
      {product.features.length > 0 && (
        <section className="py-20 md:py-24">
          <div className="container-deyora">
            <Reveal>
              <SectionLabel>Capabilities</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="display text-3xl md:text-5xl text-white mb-12 max-w-2xl">
                Six capabilities.<br />
                One traceability layer.
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 -mt-px -ml-px">
              {product.features.map((f) => (
                <Reveal key={f.title}>
                  <div className="border-l border-t border-subtle p-7 h-full hover:bg-bg-card transition-colors">
                    <div className="font-mono text-[10px] tracking-[0.14em] text-accent-blue-soft mb-4">
                      {f.counter}
                    </div>
                    <h3 className="display text-[20px] text-white mb-3 leading-tight">
                      {f.title}
                    </h3>
                    <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BIG OUTBOUND CTA — entire point of this page */}
      <section
        className="py-28 md:py-32 border-t border-subtle text-center"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #06080F 50%, #000 100%)",
        }}
      >
        <div className="container-deyora max-w-3xl">
          <Reveal>
            <SectionLabel className="justify-center">Ready to use</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-white mb-6">
              The fastest path<br />
              is <span className="shimmer-text">opening the product.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] text-ink-secondary mb-10 max-w-xl mx-auto">
              DokyDoc lives at dokydoc.com. Spin up an account, point it at a
              repo, and you'll see your first traceability matrix in minutes.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={product.externalUrl || DOKYDOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open DokyDoc Live ↗
              </a>
              <Link href="/book-a-demo" className="btn-secondary">
                Talk to a Founder First
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
