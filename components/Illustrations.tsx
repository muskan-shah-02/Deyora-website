/**
 * Product illustrations, drawn in code rather than screenshots. Each one is
 * labelled "Illustration" on the page: the names and numbers are invented to
 * show the shape of the output, not taken from any customer.
 */

type Finding = { tag: string; tone: "warn" | "dev" | "neutral"; title: string; evidence: string };

const findings: Finding[] = [
  {
    tag: "Missing",
    tone: "warn",
    title: "The approval rule for large orders in the Orders BRD has no matching code",
    evidence: "Orders BRD v3, §4.2 · searched 412 files",
  },
  {
    tag: "Not in any document",
    tone: "dev",
    title: "A bulk-export endpoint does something no requirement asks for",
    evidence: "api/exports.py · no linked requirement",
  },
  {
    tag: "Not examined",
    tone: "neutral",
    title: "4 of 24 requirements could not be checked",
    evidence: "2 files over the size limit · 1 page unreadable",
  },
];

const tagTone = {
  warn: "bg-warn-bg text-warn",
  dev: "bg-dev-bg text-dev",
  neutral: "bg-paper-deep text-text-soft",
};

export function DecisionIllustration() {
  return (
    <figure className="relative">
      <div className="rounded-2xl border border-white/10 bg-paper-card p-5 text-text shadow-glow sm:p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-label text-text-mute">Needs your decision</p>
          <p className="font-mono text-[11px] text-text-mute">3 of 3</p>
        </div>
        <p className="mt-2 font-serif text-[22px] leading-snug">Three things deserve your attention this week.</p>
        <ul className="mt-5 space-y-3">
          {findings.map((f) => (
            <li key={f.title} className="rounded-xl border border-paper-line bg-paper p-4">
              <span className={`inline-block rounded-full px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-label ${tagTone[f.tone]}`}>{f.tag}</span>
              <p className="mt-2 text-[15px] font-medium leading-snug">{f.title}</p>
              <p className="mt-1 font-mono text-[12px] text-text-mute">Evidence: {f.evidence}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[13px]">
                <span className="rounded-full bg-ink-900 px-3 py-1 text-white">Decide</span>
                <span className="rounded-full border border-paper-line px-3 py-1 text-text-soft">See evidence</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-paper-line pt-3 text-[13px] text-text-mute">Prepared, not sent. A person decides each one.</p>
      </div>
      <figcaption className="illustration-tag mt-3 !text-ink-400">Illustration · invented example</figcaption>
    </figure>
  );
}

const rows = [
  { id: "R-07", text: "A customer can cancel an order within 24 hours", state: "Linked", basis: "verified", where: "orders/cancel.py" },
  { id: "R-08", text: "Orders over ₹50,000 need a manager's approval", state: "Missing", basis: "", where: "no matching code" },
  { id: "R-11", text: "Every order is written to the ledger", state: "Linked", basis: "inferred", where: "ledger/writer.py" },
  { id: "R-15", text: "A changed order keeps its original invoice number", state: "Not examined", basis: "", where: "file over size limit" },
];

const stateTone: Record<string, string> = {
  Linked: "bg-live-bg text-live",
  Missing: "bg-warn-bg text-warn",
  "Not examined": "bg-paper-deep text-text-soft",
};

export function CoverageIllustration() {
  const segs = [
    { label: "Linked", n: 16, cls: "bg-live" },
    { label: "Missing", n: 4, cls: "bg-warn" },
    { label: "Not examined", n: 4, cls: "bg-ink-300" },
  ];
  return (
    <figure>
      <div className="card overflow-hidden">
        <div className="border-b border-paper-line p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-label text-text-mute">Coverage · Orders BRD v3</p>
          <p className="mt-2 font-serif text-[24px] leading-tight">16 of 24 requirements linked to code</p>
          <div className="mt-4 flex h-2.5 overflow-hidden rounded-full bg-paper-deep" role="img" aria-label="16 linked, 4 missing, 4 not examined, of 24 requirements">
            {segs.map((s) => (
              <span key={s.label} className={s.cls} style={{ width: `${(s.n / 24) * 100}%` }} />
            ))}
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-text-soft">
            {segs.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <span aria-hidden="true" className={`h-2 w-2 rounded-full ${s.cls}`} />
                {s.n} {s.label.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
        <ul className="divide-y divide-paper-line">
          {rows.map((r) => (
            <li key={r.id} className="grid grid-cols-[auto_1fr] gap-x-3 px-5 py-3.5 sm:px-6">
              <span className="font-mono text-[12px] text-text-mute">{r.id}</span>
              <div>
                <p className="text-[14.5px] leading-snug">{r.text}</p>
                <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[12.5px] text-text-mute">
                  <span className={`rounded-full px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-label ${stateTone[r.state]}`}>{r.state}</span>
                  {r.basis ? <span className="font-mono">{r.basis === "verified" ? "verified by a person" : "inferred by DokyDoc"}</span> : null}
                  <span className="font-mono">{r.where}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="illustration-tag mt-3">Illustration · invented example</figcaption>
    </figure>
  );
}
