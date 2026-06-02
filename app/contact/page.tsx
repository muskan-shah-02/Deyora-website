import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { company } from "@/lib/company";

export const metadata = {
  title: "Contact — Deyora Intelligence",
  description: "Talk to Deyora Intelligence — partnerships, demos, careers.",
};

const cards = [
  { label: "General", value: "hello@deyora.ai", href: "mailto:hello@deyora.ai" },
  { label: "Product Demo", value: "Request a DokyDoc walkthrough", href: "https://dokydoc.com/" },
  { label: "Careers", value: "Building the SDLC intelligence layer", href: "mailto:careers@deyora.ai" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-subtle">
        <div className="container-deyora">
          <Reveal><SectionLabel>Talk to Deyora</SectionLabel></Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl lg:text-[96px] text-white mb-10 max-w-4xl">
              Let's make your<br />delivery <span className="shimmer-text">measurable.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[18px] leading-relaxed text-ink-secondary max-w-2xl">
              Whether you're shipping a product, running an engineering org, or building a dev shop — we'd love to
              hear what you're working on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-secondary py-32">
        <div className="container-deyora">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  className="group block border border-subtle p-10 transition-all hover:bg-bg-card hover:border-strong h-full"
                >
                  <div className="label-mono mb-6">{c.label}</div>
                  <div className="display text-2xl md:text-3xl text-white mb-6 leading-tight">{c.value}</div>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white">
                    Reach out
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border-t border-subtle pt-12 flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="label-mono mb-2">Location</div>
                <div className="display text-2xl text-white">{company.contact.location}</div>
              </div>
              <div>
                <div className="label-mono mb-2">The Company</div>
                <div className="display text-2xl text-white">{company.name}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
