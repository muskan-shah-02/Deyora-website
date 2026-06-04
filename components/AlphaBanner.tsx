import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

// Honest pre-launch framing: turn "no testimonials yet" into urgency
// by offering meaningful design-partner upside to the first cohort.
const perks = [
  {
    title: "Founder access",
    body: "Direct line to the engineering team — Slack channel, weekly office hours, your feedback on the roadmap.",
  },
  {
    title: "Locked-in design-partner pricing",
    body: "Discounted long-term pricing that holds through general availability, in exchange for thirty minutes of feedback every fortnight.",
  },
  {
    title: "First crack at integrations",
    body: "Tell us which stack matters to you — Confluence, Notion, Jira, GitHub, Linear, GitLab — and we'll prioritize it.",
  },
];

export default function AlphaBanner() {
  return (
    <section className="bg-bg-primary py-28 md:py-32 border-t border-subtle" id="alpha">
      <div className="container-deyora">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <Reveal>
              <SectionLabel>Private Alpha</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                We're choosing<br />
                our first ten<br />
                <span className="shimmer-text">design partners.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary max-w-md mb-10">
                DokyDoc isn't publicly launched yet — and that's the point. The first teams to come
                on board shape the product, get founder-level access, and lock in pricing that
                holds well beyond GA.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/book-a-demo" className="btn-primary">
                Apply as a Design Partner
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-px bg-subtle border border-subtle">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="bg-bg-primary p-8 md:p-10 h-full">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="display text-xl md:text-2xl text-white mb-3">{p.title}</h3>
                  <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary max-w-md">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
