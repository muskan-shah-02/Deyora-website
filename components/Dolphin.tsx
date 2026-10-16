import { HOME } from "@/lib/home";

/**
 * a153: Deyora's dolphin, drawn for this site (no stock art). Its echolocation pulses ripple out through dark water,
 * and as each pulse passes, a hidden shape lights up for a moment: a document, a box, a coin and a calendar. It
 * means what Deyora is building: helping the people who run companies see what is hidden. Inline SVG and CSS only
 * (app/globals.css, "the dolphin"): no script, font or library. With reduced motion it is a still frame, the
 * pulses drawn and every shape lit; on phones a smaller drawing with two shapes and no blur.
 */

/** The dolphin, facing right, its beak at (312, 96), in its own 320 by 160 box. */
const BODY =
  "M312 96 C 300 90, 286 86, 276 85 C 272 70, 256 58, 232 56 C 210 54, 190 54, 176 56 Q 172 34, 144 22 " +
  "Q 158 40, 150 60 C 120 66, 88 78, 64 92 C 54 82, 40 72, 22 70 C 32 82, 40 92, 44 98 C 36 106, 26 116, 14 124 " +
  "C 36 120, 52 112, 66 104 C 100 114, 140 122, 180 120 Q 172 136, 154 150 Q 184 144, 198 118 " +
  "C 230 114, 260 108, 282 103 C 294 101, 304 99, 312 96 Z";

function DolphinShape({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#93a9f5" />
          <stop offset="0.55" stopColor="#dfe6ff" />
          <stop offset="1" stopColor="#f6f8ff" />
        </linearGradient>
      </defs>
      <path d={BODY} fill={`url(#${id}-skin)`} />
      <circle cx={262} cy={80} r={3.2} fill="#090b10" />
      <path d="M312 96 C 302 99, 292 100, 280 99" stroke="#6b7aa8" strokeWidth={1.4} fill="none" strokeLinecap="round" />
    </>
  );
}

/** The hidden shapes, each centred on (0, 0), drawn in the pulse's colour. */
const SHAPES = {
  document: (
    <>
      <rect x={-34} y={-44} width={68} height={88} rx={8} />
      <path d="M-18 -20h36M-18 -4h36M-18 12h22" />
    </>
  ),
  box: (
    <>
      <path d="M-50 -12 0 -36 50 -12 0 12Z" />
      <path d="M-50 -12v52l50 24 50-24v-52M0 12v52" />
    </>
  ),
  coin: (
    <>
      <circle r={38} />
      <path d="M-15 -15h30M-15 -4h30M-15 -15c22 0 22 22 0 22l26 22" />
    </>
  ),
  calendar: (
    <>
      <rect x={-40} y={-32} width={80} height={72} rx={8} />
      <path d="M-40 -10h80M-20 -42v16M20 -42v16" />
      <circle cx={-14} cy={12} r={4} />
    </>
  ),
};

type Hidden = { shape: keyof typeof SHAPES; x: number; y: number; scale?: number };

/**
 * One scene: the dolphin placed by `place`, its pulses from `origin` (the beak, after placing) out to `reach`, and
 * the hidden shapes. Each shape lights up when the pulse reaches it: its delay is its distance over the reach,
 * times the pulse's six seconds (`--hit`).
 */
function Scene({
  id,
  viewBox,
  place,
  origin,
  reach,
  hidden,
  className,
}: {
  id: string;
  viewBox: string;
  place: string;
  origin: [number, number];
  reach: number;
  hidden: Hidden[];
  className: string;
}) {
  const [ox, oy] = origin;
  return (
    <svg viewBox={viewBox} className={className} role="img" aria-label={HOME.dolphin}>
      <defs>
        <clipPath id={`${id}-ahead`}>
          <rect x={ox} y={-1000} width={4000} height={4000} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-ahead)`} style={{ transformOrigin: `${ox}px ${oy}px` }}>
        <circle className="dl-ring" cx={ox} cy={oy} r={reach} style={{ transformOrigin: `${ox}px ${oy}px` }} />
        <circle className="dl-ring dl-ring-2" cx={ox} cy={oy} r={reach} style={{ transformOrigin: `${ox}px ${oy}px` }} />
      </g>
      {hidden.map((h) => {
        const hit = Math.hypot(h.x - ox, h.y - oy) / reach;
        return (
          <g
            key={h.shape}
            className="dl-hidden"
            transform={`translate(${h.x} ${h.y}) scale(${h.scale ?? 1})`}
            style={{ animationDelay: `${(hit * 6).toFixed(2)}s` }}
          >
            {SHAPES[h.shape]}
          </g>
        );
      })}
      <g className="dl-swim">
        <g transform={place}>
          <DolphinShape id={id} />
        </g>
      </g>
    </svg>
  );
}

/** From sm up: the full drawing, under the headline and the actions. */
export function DolphinScene() {
  return (
    <Scene
      id="dl-full"
      viewBox="0 80 1200 290"
      place="translate(60 150) rotate(-7 160 96)"
      origin={[371, 227]}
      reach={860}
      hidden={[
        { shape: "document", x: 590, y: 170 },
        { shape: "box", x: 770, y: 270 },
        { shape: "coin", x: 950, y: 150 },
        { shape: "calendar", x: 1100, y: 280 },
      ]}
      className="mx-auto hidden h-auto w-full max-w-[1160px] sm:block"
    />
  );
}

/** On a phone: smaller, two shapes, above the headline so it is on the first screen. */
export function DolphinSceneCompact() {
  return (
    <Scene
      id="dl-compact"
      viewBox="0 50 400 165"
      place="translate(10 100) scale(0.55) rotate(-7 160 96)"
      origin={[181, 143]}
      reach={240}
      hidden={[
        { shape: "document", x: 265, y: 90, scale: 0.6 },
        { shape: "coin", x: 350, y: 180, scale: 0.6 },
      ]}
      className="mx-auto block h-auto w-full max-w-[400px] sm:hidden"
    />
  );
}
