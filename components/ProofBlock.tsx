import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import DokyDocMark from "@/components/DokyDocMark";

// A credible "what DokyDoc actually produces" visual, built from CSS only.
// No design assets, no screenshots needed — but the buyer leaves the page
// with a concrete mental model of the output, not a sentence describing it.

const rows = [
  {
    req: "REQ-014",
    text: "Users must verify email before login",
    status: "mapped",
    location: "auth/verify.controller.ts:42",
  },
  {
    req: "REQ-015",
    text: "Password reset token expires in 15 min",
    status: "mapped",
    location: "auth/reset.service.ts:88",
  },
  {
    req: "REQ-016",
    text: "Two-factor authentication for admin role",
    status: "drift",
    location: "auth/2fa.controller.ts:21 — outdated logic",
  },
  {
    req: "REQ-017",
    text: "Audit log entry on every login attempt",
    status: "missing",
    location: "no implementation found",
  },
  {
    req: "REQ-018",
    text: "Account lockout after 5 failed attempts",
    status: "mapped",
    location: "auth/lockout.service.ts:14",
  },
];

const statusMeta: Record<
  string,
  { label: string; color: string; symbol: string }
> = {
  mapped: { label: "MAPPED", color: "text-accent-success", symbol: "✓" },
  drift: { label: "DRIFT", color: "text-accent-warn", symbol: "⚠" },
  missing: { label: "MISSING", color: "text-accent-danger", symbol: "✕" },
};

export default function ProofBlock() {
  return (
    <section
      className="relative py-28 md:py-32 border-t border-subtle overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #06080F 0%, #000 60%, #06080F 100%)",
      }}
      id="proof"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43,107,255,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="container-deyora relative">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16 items-start">
          <div>
            <Reveal>
              <SectionLabel>What You Actually Get</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                A traceability<br />
                matrix that updates<br />
                <span className="shimmer-text">on every commit.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-sans font-light text-[16px] leading-relaxed text-ink-secondary mb-8 max-w-md">
                Every requirement in your PRD gets a row. Every row gets a status —
                mapped, drifted, or missing. Every status links to the exact file
                and line in your codebase. No spreadsheet. No manual reviews.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="grid gap-3">
                {[
                  ["Mapped", "Requirement found in code, behavior matches", "accent-success"],
                  ["Drift", "Code implements the rule, but behavior has changed", "accent-warn"],
                  ["Missing", "PRD says it exists, code disagrees", "accent-danger"],
                ].map(([label, body, color]) => (
                  <li
                    key={label}
                    className="flex items-start gap-4 font-sans text-[14px] text-ink-secondary"
                  >
                    <span
                      className={`font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-${color} mt-0.5 w-[72px] shrink-0`}
                    >
                      {label}
                    </span>
                    <span>{body}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="border border-strong bg-black/80 backdrop-blur-sm font-mono text-[12px] shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-subtle px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-danger/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-warn/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-success/70" />
                </div>
                <span className="inline-flex items-center gap-2 text-ink-secondary text-[10px] uppercase tracking-[0.16em]">
                  <DokyDocMark className="w-3.5 h-3.5 text-accent-blue-soft" />
                  Traceability matrix
                </span>
                <span className="text-ink-tertiary text-[10px]">v2.4.1</span>
              </div>

              {/* Header */}
              <div className="grid grid-cols-[80px_1fr_90px] gap-3 border-b border-subtle px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                <span>Req ID</span>
                <span>Requirement</span>
                <span className="text-right">Status</span>
              </div>

              {/* Rows */}
              <div>
                {rows.map((r) => {
                  const m = statusMeta[r.status];
                  return (
                    <div
                      key={r.req}
                      className="grid grid-cols-[80px_1fr_90px] gap-3 border-b border-subtle px-5 py-4 items-start hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-ink-secondary">{r.req}</span>
                      <div>
                        <div className="text-white leading-snug">{r.text}</div>
                        <div className="text-ink-tertiary text-[10px] mt-1.5">
                          {r.location}
                        </div>
                      </div>
                      <span
                        className={`text-right text-[10px] font-bold tracking-[0.14em] ${m.color}`}
                      >
                        {m.symbol} {m.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                <span>Last sync: 14s ago</span>
                <span>3 mapped · 1 drift · 1 missing</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
