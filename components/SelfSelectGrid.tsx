"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type Tile = { label: string; href: string; sub: string };

const BY_ROLE: Tile[] = [
  {
    label: "I'm a CXO",
    sub: "Audit-ready clarity across every initiative.",
    href: "/dokydoc#for-cxo",
  },
  {
    label: "I'm a CTO",
    sub: "Make the codebase explain itself.",
    href: "/dokydoc#for-cto",
  },
  {
    label: "I'm a PM / BA",
    sub: "See drift the moment it happens.",
    href: "/dokydoc#for-pm",
  },
  {
    label: "I'm a Developer",
    sub: "Stop being the team's tribal-knowledge hotline.",
    href: "/dokydoc#for-dev",
  },
];

const BY_PROBLEM: Tile[] = [
  {
    label: "Docs nobody reads",
    sub: "Hundreds of BRDs, PRDs, and specs sitting unread.",
    href: "/dokydoc#problem-docs",
  },
  {
    label: "Code nobody understands",
    sub: "Tribal knowledge leaves with every senior engineer.",
    href: "/dokydoc#problem-code",
  },
  {
    label: "Promised vs. shipped drift",
    sub: "Scope creep you discover at the demo, not the planning room.",
    href: "/dokydoc#problem-drift",
  },
  {
    label: "Docs that lie",
    sub: "READMEs describing systems deprecated 18 months ago.",
    href: "/dokydoc#problem-stale",
  },
];

export default function SelfSelectGrid() {
  const [mode, setMode] = useState<"role" | "problem">("role");
  const tiles = mode === "role" ? BY_ROLE : BY_PROBLEM;

  return (
    <section className="py-24 md:py-28 border-t border-subtle">
      <div className="container-deyora">
        <Reveal>
          <SectionLabel>Find your clarity</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
            Whatever you came here to fix,<br />
            <span className="text-ink-secondary">there's a door for it.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-sans font-light text-[16px] text-ink-secondary max-w-2xl mb-10">
            Pick the lens that fits you. We'll send you straight to the part of the product
            that solves it.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="inline-flex border border-strong mb-10"
            role="tablist"
            aria-label="Self-select mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "role"}
              onClick={() => setMode("role")}
              className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] px-5 py-2.5 transition-colors ${
                mode === "role"
                  ? "bg-white text-black"
                  : "text-ink-secondary hover:text-white"
              }`}
            >
              By role
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "problem"}
              onClick={() => setMode("problem")}
              className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] px-5 py-2.5 transition-colors border-l border-strong ${
                mode === "problem"
                  ? "bg-white text-black"
                  : "text-ink-secondary hover:text-white"
              }`}
            >
              By problem
            </button>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 -mt-px -ml-px">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 60}>
              <Link
                href={t.href}
                className="group block border-l border-t border-subtle p-7 h-full hover:bg-bg-card hover:border-strong transition-all"
              >
                <div className="font-mono text-[10px] tracking-[0.14em] text-ink-tertiary mb-4">
                  {String(i + 1).padStart(2, "0")} / 04
                </div>
                <div className="display text-[22px] leading-tight text-white mb-3">
                  {t.label}
                </div>
                <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary mb-6">
                  {t.sub}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                  Open
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
