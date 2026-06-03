import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Connect",
    sub: "Your existing stack",
    body: "Point DokyDoc at your Confluence, Notion, Google Docs, Jira, or GitHub. No migration, no rewrite of how your team works. Read-only by default.",
    tags: ["Confluence", "Notion", "Google Docs", "Jira", "GitHub"],
  },
  {
    n: "02",
    title: "Analyze",
    sub: "Business Ontology Engine",
    body: "DokyDoc extracts atomic business rules — Processes, Rules, Attributes — from prose specs, then maps each one to the functions, endpoints, and modules in your codebase using a 3-Tier algorithm.",
    tags: ["Atomic rules", "3-Tier mapping", "Code traversal"],
  },
  {
    n: "03",
    title: "Govern",
    sub: "Continuous traceability",
    body: "You get a live traceability matrix, drift alerts when code stops matching intent, auto-generated UAT checklists, and an audit-ready evidence trail — all without your team changing tools.",
    tags: ["Drift alerts", "UAT generation", "Audit evidence"],
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-primary py-32 md:py-36 border-t border-subtle" id="how-it-works">
      <div className="container-deyora">
        <Reveal>
          <SectionLabel>How DokyDoc Works</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-6xl text-white mb-6 max-w-3xl">
            Three steps from prose<br />
            to provable code.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
            No new workflow for your team. DokyDoc reads the docs and the code you already have —
            and tells you, in real time, where they disagree.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 -ml-px -mt-px">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative border-l border-t border-subtle p-10 md:p-12 h-full flex flex-col">
                <div className="flex items-baseline justify-between mb-8">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary">
                    {s.n} / 03
                  </div>
                  {i < steps.length - 1 && (
                    <span
                      className="hidden md:inline font-mono text-[18px] text-ink-tertiary"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-blue-soft mb-3">
                  {s.sub}
                </div>
                <h3 className="display text-3xl text-white mb-5">{s.title}</h3>
                <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary mb-8 flex-1">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-secondary border border-subtle px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
