import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { getProduct } from "@/lib/products";

// Pulls role-specific value props from the DokyDoc data layer — single source
// of truth, no duplicated copy.
export default function PersonaRow() {
  const doky = getProduct("dokydoc");
  if (!doky || doky.roles.length === 0) return null;

  return (
    <section className="bg-bg-primary py-32 md:py-36 border-t border-subtle" id="who">
      <div className="container-deyora">
        <Reveal>
          <SectionLabel>Who It's For</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-6xl text-white mb-6 max-w-3xl">
            One product.<br />
            Four people who finally agree.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
            DokyDoc gives every role the same source of truth — the BA's spec, the engineer's
            commit, the QA's checklist, and the client's evidence trail are the same object.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 -mt-px -ml-px">
          {doky.roles.map((r, i) => {
            const idx = String(i + 1).padStart(2, "0");
            const total = String(doky.roles.length).padStart(2, "0");
            return (
              <Reveal key={r.role} delay={i * 80}>
                <div className="group relative overflow-hidden border-l border-t border-subtle p-10 md:p-12 transition-colors hover:bg-bg-card h-full">
                  <div className="absolute top-0 left-0 h-[2px] bg-white w-0 transition-all duration-500 group-hover:w-full" />
                  <div className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary mb-5">
                    {idx} / {total}
                  </div>
                  <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-secondary border border-subtle px-3 py-1 mb-5">
                    {r.role}
                  </span>
                  <h3 className="display text-[26px] text-white mb-4 leading-tight">
                    {r.headline}
                  </h3>
                  <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
