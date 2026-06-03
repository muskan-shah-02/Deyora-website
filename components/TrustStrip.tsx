import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

// Every claim here is backed by something verifiable in the DokyDoc codebase
// (multi-tenant isolation, RBAC, encryption of sensitive fields, audit trail).
// Nothing aspirational, nothing certified-that-isn't.
const pillars = [
  {
    title: "Tenant-isolated by design",
    body: "Every query in DokyDoc is scoped to your tenant at the database layer with composite indexes — so even a code bug can't return another customer's data. Cross-tenant access returns 404, not 403, to prevent enumeration.",
  },
  {
    title: "Fine-grained RBAC",
    body: "Four built-in roles, twenty granular permissions. Decide exactly who can read specs, view code mappings, run analyses, or export audit trails. Every privileged action is logged.",
  },
  {
    title: "Encrypted sensitive fields",
    body: "Integration credentials (Jira, Confluence, GitHub tokens) are encrypted at rest with per-field Fernet encryption. JWTs are short-lived with separate refresh-token validation.",
  },
  {
    title: "Audit-ready evidence trail",
    body: "Every document upload, analysis run, and access event is recorded with actor, tenant, and timestamp — exportable for compliance reviews and SOC 2 / ISO 27001 readiness work.",
  },
];

const honest = [
  { k: "SOC 2 / ISO 27001", v: "On roadmap — evidence available on request" },
  { k: "Data residency", v: "Configurable per-tenant" },
  { k: "Model training", v: "Your data is never used to train AI models" },
  { k: "Self-hosted option", v: "Available for regulated industries" },
];

export default function TrustStrip() {
  return (
    <section className="bg-bg-secondary py-32 md:py-36 border-t border-subtle" id="trust">
      <div className="container-deyora">
        <Reveal>
          <SectionLabel>Security & Trust</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-6xl text-white mb-6 max-w-3xl">
            We treat your specs and<br />
            your source code as crown jewels.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-16">
            DokyDoc was built multi-tenant from day one. Here's what that means concretely — every
            point below maps to code, not marketing copy.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 -ml-px -mt-px">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="border-l border-t border-subtle p-10 md:p-12 h-full">
                <h3 className="display text-2xl md:text-[26px] text-white mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary max-w-md">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="border border-subtle mt-16 p-8 md:p-10">
            <div className="label-mono mb-6">Common Questions, Answered Honestly</div>
            <div className="grid sm:grid-cols-2 gap-6">
              {honest.map((row) => (
                <div key={row.k} className="border-l border-subtle pl-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-secondary mb-1">
                    {row.k}
                  </div>
                  <div className="font-sans text-[15px] text-white">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
