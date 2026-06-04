import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

// Pulled up to the homepage from the product detail page — buyers shouldn't
// have to click into /products/dokydoc to understand the problem DokyDoc solves.
export default function ProblemBlock() {
  return (
    <section className="bg-bg-secondary py-32 md:py-36" id="problem">
      <div className="container-deyora">
        <Reveal>
          <SectionLabel>The Problem</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-6xl text-white mb-16">
            The PRD said one thing.<br />
            Production does another.<br />
            Nobody knows where it diverged.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <Reveal>
              <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-6 max-w-xl">
                The bottleneck in modern software isn't writing code. It's <span className="text-white">translation</span>:
                requirements get scattered across Confluence pages, Jira tickets, Slack threads,
                and engineers' heads — and nobody can prove the code that shipped is the code that
                was requested.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-6 max-w-xl">
                You find out at QA. Or at audit time. Or when a customer raises a ticket about a
                requirement nobody remembers writing. By then, it's already an expensive sprint
                of rework.
              </p>
            </Reveal>

            <Reveal>
              <ul className="grid gap-3 mt-10 max-w-md">
                {[
                  "Specs and code drift silently between sprints",
                  "Traceability matrices are rebuilt by hand for every audit",
                  "New engineers spend months learning what the docs no longer say",
                  "Scope-creep disputes turn into he-said-she-said with clients",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-sans font-light text-[15px] text-ink-secondary"
                  >
                    <span className="font-mono text-accent-danger mt-1">✕</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
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
                  <div className="font-mono text-2xl font-bold text-accent-danger leading-none">
                    ✕
                  </div>
                  <div className="font-mono text-[9px] font-medium tracking-[0.16em] uppercase text-accent-danger mt-2">
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
// Features promised   → Features missing
// Sprints planned     → Rework shipped
// Budget allocated    → Budget wasted`}
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
