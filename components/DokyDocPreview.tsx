import { HOME } from "@/lib/home";
import { STORY } from "@/lib/story";

/**
 * a153: a small preview of dokydoc.com's first screen for the home page's product card: the rounded dark panel in
 * Deyora blue (a156), four records joined by lines with one pair in red, and its headline. Drawn inline (no
 * screenshot, no image file), so it stays in step with the words in lib/story.ts. Decorative detail only: the
 * records carry no figures.
 */

const BLUE = "6 63 161";
const TINT = "155 178 217";
const ALARM = "255 93 93";

const RECORDS: [string, number, number][] = [
  ["Order", 92, 74],
  ["Invoice", 508, 74],
  ["Payment", 520, 290],
  ["Stock", 80, 290],
];

export default function DokyDocPreview() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 rounded-full bg-white/[0.06] px-3 py-0.5 font-mono text-[11px] text-ink-300">dokydoc.com</span>
      </div>
      <svg viewBox="0 0 600 340" className="block h-auto w-full" role="img" aria-label={HOME.product.preview}>
        <defs>
          <radialGradient id="ddp-glow" cx="50%" cy="0%" r="70%">
            <stop offset="0" stopColor={`rgb(${BLUE})`} stopOpacity="0.9" />
            <stop offset="1" stopColor={`rgb(${BLUE})`} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="600" height="340" fill="#090b10" />
        <rect x="0" y="0" width="600" height="340" fill="url(#ddp-glow)" />
        <path d="M92 74 C 220 30, 380 30, 508 74" fill="none" stroke={`rgb(${ALARM})`} strokeWidth="2" className="ddp-bad" />
        <path d="M508 74 C 560 150, 565 230, 520 290" fill="none" stroke={`rgb(${TINT} / 0.5)`} strokeWidth="1.2" />
        <path d="M520 290 C 400 335, 200 335, 80 290" fill="none" stroke={`rgb(${TINT} / 0.5)`} strokeWidth="1.2" />
        <path d="M80 290 C 40 230, 45 150, 92 74" fill="none" stroke={`rgb(${TINT} / 0.5)`} strokeWidth="1.2" />
        {RECORDS.map(([label, x, y]) => {
          const w = label.length * 7 + 28;
          return (
            <g key={label}>
              <rect x={x - w / 2} y={y - 12} width={w} height={24} rx={12} fill="#10131a" stroke={`rgb(${TINT} / 0.6)`} />
              <circle cx={x - w / 2 + 11} cy={y} r={2.6} fill={`rgb(${TINT})`} />
              <text x={x - w / 2 + 19} y={y + 4} fill="#E7EAF0" fontSize="11.5" fontWeight="500" fontFamily="var(--font-sans)">
                {label}
              </text>
            </g>
          );
        })}
        <text x="300" y="150" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="700" letterSpacing="-0.8" fontFamily="var(--font-sans)">
          {STORY.headline.replace(/\.$/, "")}
        </text>
        <text x="300" y="188" textAnchor="middle" fill={`rgb(${TINT})`} fontSize="26" fontWeight="700" letterSpacing="-0.8" fontFamily="var(--font-sans)">
          {STORY.accent}
        </text>
        <rect x="222" y="222" width="76" height="26" rx="13" fill={`rgb(${BLUE})`} />
        <rect x="306" y="222" width="76" height="26" rx="13" fill="none" stroke="rgb(255 255 255 / 0.25)" />
      </svg>
    </figure>
  );
}
