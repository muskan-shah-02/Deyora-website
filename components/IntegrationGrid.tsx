import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const integrations = [
  { name: "GitHub", category: "Code" },
  { name: "GitLab", category: "Code" },
  { name: "Confluence", category: "Specs" },
  { name: "Notion", category: "Specs" },
  { name: "Google Docs", category: "Specs" },
  { name: "Jira", category: "Tickets" },
  { name: "Linear", category: "Tickets" },
  { name: "Slack", category: "Alerts" },
];

export default function IntegrationGrid() {
  return (
    <section className="bg-bg-primary py-24 md:py-28 border-t border-subtle">
      <div className="container-deyora">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <Reveal>
            <div>
              <SectionLabel>Plugs Into What You Use</SectionLabel>
              <h2 className="display text-3xl md:text-4xl text-white mb-4">
                No new workflow.<br />
                No data migration.
              </h2>
              <p className="font-sans font-light text-[15px] text-ink-secondary max-w-sm">
                DokyDoc reads what your team already writes, in the tools your
                team already uses. Read-only by default.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 sm:grid-cols-4 -ml-px -mt-px">
              {integrations.map((it) => (
                <div
                  key={it.name}
                  className="border-l border-t border-subtle px-5 py-7 flex flex-col items-start gap-2 hover:bg-bg-card transition-colors"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-tertiary">
                    {it.category}
                  </span>
                  <span className="display text-xl text-white">{it.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
