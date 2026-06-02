"use client";
import { useMemo, useState } from "react";

export default function CostCalculator() {
  const [team, setTeam] = useState(15);
  const [rate, setRate] = useState(75);
  const [hours, setHours] = useState(6);

  const { hoursLost, costLost, savings } = useMemo(() => {
    const hoursLost = hours * 52 * team;
    const costLost = hoursLost * rate;
    const savings = Math.round(costLost * 0.97);
    return { hoursLost, costLost, savings };
  }, [team, rate, hours]);

  return (
    <div className="relative overflow-hidden bg-bg-secondary border border-subtle p-8 md:p-14">
      <div className="pointer-events-none absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full opacity-60"
           style={{ background: "radial-gradient(circle, rgba(43,107,255,0.18) 0%, transparent 70%)" }} />

      <div className="relative">
        <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-secondary border border-subtle px-3 py-1 mb-5">
          Interactive Tool
        </span>
        <h3 className="display text-3xl md:text-[40px] text-white mb-3">
          Calculate Rework & Misalignment Costs
        </h3>
        <p className="text-ink-secondary text-[15px] max-w-2xl mb-12">
          Software projects bleed engineering hours into translation gaps. Adjust the sliders to see what your team
          is losing — and how much DokyDoc claws back.
        </p>

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-9">
            <Slider label="Team Size (Engineers)" valueLabel={`${team} dev${team === 1 ? "" : "s"}`} min={5} max={150} value={team} onChange={setTeam} />
            <Slider label="Average Hourly Rate ($)" valueLabel={`$${rate}/hr`} min={40} max={200} value={rate} onChange={setRate} />
            <Slider
              label="Weekly Hours Wasted Per Dev"
              valueLabel={`${hours} hour${hours === 1 ? "" : "s"}`}
              min={1}
              max={25}
              value={hours}
              onChange={setHours}
              hint="Time spent in alignment meetings, clarifying Jira tasks, and fixing misunderstood requirements."
            />
          </div>

          <div className="bg-bg-card border border-subtle p-8 flex flex-col gap-7">
            <ResultBox label="Annual Engineering Hours Lost" value={`${hoursLost.toLocaleString()} hrs`} />
            <ResultBox label="Annual Misalignment & Rework Cost" value={`$${costLost.toLocaleString()}`} highlight />

            <div className="relative bg-white/5 border border-white/10 p-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.14em] text-white mb-1">
                DOKYDOC ESTIMATED SAVINGS (97%)
              </div>
              <div className="display text-[40px] leading-none text-white mb-3"
                   style={{ textShadow: "0 0 20px rgba(168,197,255,0.35)" }}>
                ${savings.toLocaleString()}
              </div>
              <p className="text-[12px] text-ink-secondary leading-relaxed">
                Direct, automated, mathematical requirement traceability eliminates structural rework and most
                misalignment overhead.
              </p>
            </div>
          </div>
        </div>
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
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <label className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white">{label}</label>
        <span className="font-mono text-sm font-bold text-white">{valueLabel}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-px bg-strong appearance-none cursor-pointer accent-white"
        style={{ background: "rgba(255,255,255,0.22)" }}
      />
      {hint && <span className="text-xs text-ink-tertiary leading-relaxed">{hint}</span>}
    </div>
  );
}

function ResultBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="border-b border-subtle pb-5 last:border-b-0">
      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-secondary mb-2">{label}</div>
      <div className={`display text-[38px] leading-none ${highlight ? "text-accent-danger" : "text-white"}`}>
        {value}
      </div>
    </div>
  );
}
