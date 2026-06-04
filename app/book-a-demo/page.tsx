import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import DemoForm from "@/components/DemoForm";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Book a Demo — DokyDoc by Deyora Intelligence",
  description:
    "See DokyDoc analyze a real PRD and map it to live code. 30-minute walkthrough with a founder. Private alpha — limited design partner slots.",
  alternates: { canonical: "https://deyora.ai/book-a-demo" },
  openGraph: {
    title: "Book a DokyDoc Demo",
    description:
      "30-minute founder-led walkthrough. See DokyDoc trace your specs to your code, live.",
    url: "https://deyora.ai/book-a-demo",
    type: "website",
  },
};

const expect = [
  {
    n: "01",
    title: "30 minutes, founder-led",
    body: "Not a sales pitch. We open the product, you watch it analyze a real PRD against a real codebase, and we answer every question — including the hard ones.",
  },
  {
    n: "02",
    title: "Bring your own document",
    body: "Optional: send us a redacted PRD, BRD, or Confluence page. We'll run it through DokyDoc before the call so you see traceability against your own intent, not a demo dataset.",
  },
  {
    n: "03",
    title: "Design partner pricing",
    body: "We're in private alpha. The first cohort of design partners shapes the roadmap and gets meaningfully discounted long-term pricing in return for feedback.",
  },
];

export default function BookDemoPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-subtle">
        <div className="container-deyora grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          <div>
            <Breadcrumb items={[{ label: "Book a Demo" }]} />
            <Reveal>
              <SectionLabel>Book a Demo</SectionLabel>
            </Reveal>
            <Reveal>
              <h1 className="display text-5xl md:text-6xl lg:text-7xl text-white mb-8">
                See DokyDoc map<br />
                your spec to your<br />
                <span className="shimmer-text">codebase.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-xl mb-10">
                30-minute founder-led walkthrough. We'll show DokyDoc analyzing a real PRD against
                a real repository — and if you send us a redacted spec in advance, we'll run yours
                instead.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid gap-6 mt-12">
                {expect.map((e) => (
                  <div key={e.n} className="border-l border-subtle pl-6">
                    <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-2">
                      {e.n}
                    </div>
                    <h3 className="display text-xl text-white mb-2">{e.title}</h3>
                    <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary max-w-md">
                      {e.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <DemoForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-secondary py-20">
        <div className="container-deyora grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="label-mono mb-3">Response Time</div>
            <div className="display text-3xl text-white">≤ 1 business day</div>
          </div>
          <div>
            <div className="label-mono mb-3">Call Length</div>
            <div className="display text-3xl text-white">30 minutes</div>
          </div>
          <div>
            <div className="label-mono mb-3">Direct Line</div>
            <div className="display text-3xl text-white">
              <a
                href="mailto:muskan@deyoraintelligence.com"
                className="hover:text-accent-blue-soft transition-colors"
              >
                muskan@deyoraintelligence.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
