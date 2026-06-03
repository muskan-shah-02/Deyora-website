"use client";
import { useMemo, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Methodology (kept honest, not theatrical):
//
//   wastedHours = team × hoursPerWeekLost × 48 (working weeks/yr after PTO)
//   wastedCost  = wastedHours × hourlyRate
//   recovered   = wastedCost × recoveryRate (user-adjustable, default 40%)
//
// Why a slider for recoveryRate?
//   - Industry rework benchmarks (CHAOS reports, McKinsey "Developer Velocity"
//     work) put rework + spec-misalignment at 25–50% of engineering time.
//   - We don't know your org. Letting the buyer dial their own assumption is
//     more credible than a hardcoded number. Default 40% reflects the median
//     of those benchmarks for traceability-targeted interventions.
//   - The previous version of this calculator hardcoded 97% — that number is
//     DokyDoc's AI-inference cost reduction, NOT its engineering-rework
//     reduction. Conflating the two destroyed credibility.
// ─────────────────────────────────────────────────────────────────────────────

export default function CostCalculator() {
  const [team, setTeam] = useState(15);
  const [rate, setRate] = useState(75);
  const [hours, setHours] = useState(6);
  const [recovery, setRecovery] = useState(40);

  const { hoursLost, costLost, recovered } = useMemo(() => {
    const WORKING_WEEKS = 48; // 52 weeks minus typical PTO + holidays
    const hoursLost = hours * WORKING_WEEKS * team;
    const costLost = hoursLost * rate;
    const recovered = Math.round((costLost * recovery) / 100);
    return { hoursLost, costLost, recovered };
  }, [team, rate, hours, recovery]);

  return (
    <div className="relative overflow-hidden bg-bg-secondary border border-subtle p-8 md:p-14">
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(43,107,255,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-secondary border border-subtle px-3 py-1 mb-5">
          Interactive ROI Estimator
        </span>
        <h3 className="display text-3xl md:text-[40px] text-white mb-3">
          Estimate what spec drift costs you
        </h3>
        <p className="text-ink-secondary text-[15px] max-w-2xl mb-12">
          Adjust the sliders to your team. The numbers are yours — the recovery
          assumption is yours too, so you can sanity-check the upside before
          you take a demo.
        </p>

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-9">
            <Slider
              label="Team Size (Engineers)"
              valueLabel={`${team} dev${team === 1 ? "" : "s"}`}
              min={5}
              max={150}
              value={team}
              onChange={setTeam}
            />
            <Slider
              label="Average Hourly Rate ($)"
              valueLabel={`$${rate}/hr`}
              min={40}
              max={200}
              value={rate}
              onChange={setRate}
            />
            <Slider
              label="Weekly Hours Lost to Rework Per Dev"
              valueLabel={`${hours} hr${hours === 1 ? "" : "s"}`}
              min={1}
              max={20}
              value={hours}
              onChange={setHours}
              hint="Time spent re-clarifying tickets, rebuilding misunderstood features, and reconciling specs with what shipped."
            />
            <Slider
              label="Target Recovery with DokyDoc (%)"
              valueLabel={`${recovery}%`}
              min={20}
              max={60}
              value={recovery}
              onChange={setRecovery}
              hint="Industry rework benchmarks land between 25% and 50%. You dial what's realistic for your team."
            />
          </div>

          <div className="bg-bg-card border border-subtle p-8 flex flex-col gap-7">
            <ResultBox
              label="Annual Engineering Hours Lost"
              value={`${hoursLost.toLocaleString()} hrs`}
            />
            <ResultBox
              label="Annual Misalignment & Rework Cost"
              value={`$${costLost.toLocaleString()}`}
              highlight
            />

            <div className="relative bg-white/5 border border-white/10 p-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.14em] text-white mb-1">
                ESTIMATED RECOVERY ({recovery}%)
              </div>
              <div
                className="display text-[40px] leading-none text-white mb-3"
                style={{ textShadow: "0 0 20px rgba(168,197,255,0.35)" }}
              >
                ${recovered.toLocaleString()}
              </div>
              <p className="text-[12px] text-ink-secondary leading-relaxed">
                Recovery you could reasonably attribute to traceability-driven
                reduction in spec-misalignment work. Methodology disclosed
                below.
              </p>
            </div>
          </div>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-tertiary mt-10 max-w-3xl leading-relaxed">
          Methodology: wasted hours = team × weekly rework hours × 48 working
          weeks. Recovery is your dial, not ours — defaults reflect the median
          of CHAOS-report-style rework benchmarks (25–50%). Separately:
          DokyDoc's 3-Tier Mapping Algorithm reduces AI inference cost by ~97%
          versus naïve approaches — that's an infra-cost claim, not an
          engineering-cost claim, and we don't conflate the two.
        </p>
      </div>
    </div>
  );
}

function Slider({
  label,
  valueLabel,
  min,
  max,
  value,
  onChange,
  hint,
}: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  const id = `slider-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white"
        >
          {label}
        </label>
        <span className="font-mono text-sm font-bold text-white">{valueLabel}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        aria-label={`${label} (min ${min}, max ${max}, current ${value})`}
        className="w-full h-px bg-strong appearance-none cursor-pointer accent-white"
        style={{ background: "rgba(255,255,255,0.22)" }}
      />
      {hint && (
        <span className="text-xs text-ink-secondary leading-relaxed">{hint}</span>
      )}
    </div>
  );
}

function ResultBox({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="border-b border-subtle pb-5 last:border-b-0">
      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-secondary mb-2">
        {label}
      </div>
      <div
        className={`display text-[38px] leading-none ${
          highlight ? "text-accent-danger" : "text-white"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
