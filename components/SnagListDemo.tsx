"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A walk-through of what DokyDoc reports for one requirement. Sample data,
 * labelled as such on the page: nothing here is scanned.
 */

type Result = {
  state: "Linked" | "Missing" | "Not examined";
  basis?: string;
  where: string;
  says: string;
  next: string;
};

const SAMPLES: { id: string; text: string; result: Result }[] = [
  {
    id: "R-07",
    text: "A customer can cancel an order within 24 hours",
    result: {
      state: "Linked",
      basis: "Verified by a person",
      where: "orders/cancel.py · cancel_order()",
      says: "The code refuses a cancellation after 24 hours, as the document asks.",
      next: "Nothing to decide.",
    },
  },
  {
    id: "R-08",
    text: "Orders over ₹50,000 need a manager's approval",
    result: {
      state: "Missing",
      where: "Searched 412 files · no matching code",
      says: "No code checks an order's value before it is placed.",
      next: "Needs your decision: agreed, not a problem, or the document should change.",
    },
  },
  {
    id: "R-11",
    text: "Every order is written to the ledger",
    result: {
      state: "Linked",
      basis: "Inferred by DokyDoc",
      where: "ledger/writer.py · post_order()",
      says: "Matched by a close name. Nobody has confirmed it yet, so it stays marked as inferred.",
      next: "A person can confirm it, or reject the link.",
    },
  },
  {
    id: "R-15",
    text: "A changed order keeps its original invoice number",
    result: {
      state: "Not examined",
      where: "invoices/numbering.py · over the size limit",
      says: "DokyDoc could not read the file, so it reports this as not examined, never as fine.",
      next: "Listed in the report of what was not examined.",
    },
  },
];

const STEPS = ["Reading Orders BRD v3", "Searching the code", "Exact names, then close matches, then AI"];

const tone = {
  Linked: "bg-live-bg text-live",
  Missing: "bg-warn-bg text-warn",
  "Not examined": "bg-paper-deep text-text-soft",
};

export default function SnagListDemo() {
  const [picked, setPicked] = useState(1);
  const [step, setStep] = useState(STEPS.length);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function pick(i: number) {
    setPicked(i);
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) {
      setStep(STEPS.length);
      return;
    }
    setStep(0);
    STEPS.forEach((_, k) => timers.current.push(window.setTimeout(() => setStep(k + 1), 320 * (k + 1))));
  }

  const s = SAMPLES[picked];
  const checking = step < STEPS.length;

  return (
    <figure>
      <div className="card grid overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-paper-line p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <p id="snag-label" className="font-mono text-[11px] uppercase tracking-label text-text-mute">
            Your snag list · Orders BRD v3
          </p>
          <div role="group" aria-labelledby="snag-label" className="mt-4 space-y-2">
            {SAMPLES.map((x, i) => (
              <button
                key={x.id}
                type="button"
                aria-pressed={i === picked}
                onClick={() => pick(i)}
                className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  i === picked ? "border-ink-900 bg-paper" : "border-paper-line hover:border-text/40"
                }`}
              >
                <span className="mt-0.5 shrink-0 whitespace-nowrap font-mono text-[12px] text-text-mute">{x.id}</span>
                <span className="text-[15px] leading-snug">{x.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6" aria-live="polite">
          <p className="font-mono text-[11px] uppercase tracking-label text-text-mute">What DokyDoc reports</p>
          {checking ? (
            <ul className="mt-5 space-y-3 text-[14.5px]">
              {STEPS.map((t, k) => (
                <li key={t} className={`flex items-center gap-3 ${k < step ? "text-text" : "text-text-mute"}`}>
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${k < step ? "bg-live" : k === step ? "animate-pulse2 bg-brand-600" : "bg-paper-line"}`}
                  />
                  {t}
                </li>
              ))}
            </ul>
          ) : (
            <div key={s.id} className="animate-rise">
              <p className="mt-4 text-[15px] leading-snug text-text-soft">
                <span className="font-mono text-[12px] text-text-mute">{s.id}</span> {s.text}
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-label ${tone[s.result.state]}`}>
                  {s.result.state}
                </span>
                {s.result.basis ? <span className="font-mono text-[12px] text-text-mute">{s.result.basis}</span> : null}
              </p>
              <p className="mt-4 font-serif text-[22px] leading-snug">{s.result.says}</p>
              <p className="mt-3 font-mono text-[12.5px] text-text-mute">Evidence: {s.result.where}</p>
              <p className="mt-5 border-t border-paper-line pt-4 text-[15px] text-text">{s.result.next}</p>
            </div>
          )}
        </div>
      </div>
      <figcaption className="illustration-tag mt-3">Illustration · sample data, not a real scan</figcaption>
    </figure>
  );
}
