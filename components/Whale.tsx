import { HOME } from "@/lib/home";

/**
 * Deyora's whale, drawn for this site (no stock art). The founder, 23 Oct 2026, asked for a more professional mark than
 * a153's dolphin: a blue whale in fine line art, outlined in the light blue on a dark body, with its throat grooves as
 * thin lines. Its sonar pulses ripple out through dark water, and as each pulse passes, a hidden shape lights up for a
 * moment: a document, a box, a coin and a calendar. It means what Deyora is building: helping the people who run
 * companies see what is hidden. Inline SVG and CSS only (app/globals.css, "the whale"): no script, font or library.
 * With reduced motion it is a still frame, the pulses drawn and every shape lit; on phones a smaller drawing with two
 * shapes and no blur.
 */

/** The whale, facing right, its head at (318, 96), in its own 320 by 160 box. */
const BODY =
  "M318 96 C 306 86, 282 79, 252 77 C 214 74, 168 76, 132 82 C 124 83, 118 84, 112 84 C 108 81, 103 78, 97 76 " +
  "C 99 80, 99 84, 96 88 C 78 92, 60 96, 44 99 C 34 96, 20 90, 6 82 C 12 90, 18 96, 24 101 C 18 106, 12 111, 8 117 " +
  "C 20 112, 32 107, 44 104 C 64 108, 86 112, 112 116 C 160 124, 220 126, 264 118 C 290 113, 308 106, 318 96 Z";
const FIN = "M240 116 C 232 128, 218 138, 196 146 C 204 136, 214 126, 222 117 Z";
const GROOVES = [
  "M316 99 C 300 106, 282 110, 262 112",
  "M306 104 C 288 111, 266 116, 240 118",
  "M296 108 C 278 115, 256 119, 232 121",
  "M284 112 C 268 117, 248 121, 226 122",
];
const TINT = "rgb(155 178 217)";
const LIGHT = "rgb(205 220 245)";

function WhaleShape({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16326b" />
          <stop offset="0.6" stopColor="#0d1d3f" />
          <stop offset="1" stopColor="#0a1328" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={TINT} stopOpacity={0.35} />
          <stop offset="0.45" stopColor={TINT} stopOpacity={0.95} />
          <stop offset="1" stopColor={LIGHT} />
        </linearGradient>
      </defs>
      <g fill={`url(#${id}-skin)`} stroke={`url(#${id}-edge)`} strokeWidth={1.3} strokeLinejoin="round">
        <path d={BODY} />
        <path d={FIN} />
      </g>
      <g fill="none" stroke={TINT} strokeLinecap="round" strokeOpacity={0.45} strokeWidth={0.8}>
        {GROOVES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d="M318 96 C 304 99, 288 100, 270 100" fill="none" stroke={LIGHT} strokeWidth={0.9} strokeLinecap="round" />
      <circle cx={276} cy={93.5} r={1.4} fill={LIGHT} />
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
 * One scene: the whale placed by `place`, its pulses from `origin` (the head, after placing) out to `reach`, and
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
    <svg viewBox={viewBox} className={className} role="img" aria-label={HOME.whale}>
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
          <WhaleShape id={id} />
        </g>
      </g>
    </svg>
  );
}

/** From sm up: the full drawing, under the headline and the actions. */
export function WhaleScene() {
  return (
    <Scene
      id="dl-full"
      viewBox="0 80 1200 290"
      place="translate(60 150) rotate(-4 160 96)"
      origin={[378, 235]}
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
export function WhaleSceneCompact() {
  return (
    <Scene
      id="dl-compact"
      viewBox="0 50 400 165"
      place="translate(10 100) scale(0.55) rotate(-4 160 96)"
      origin={[185, 147]}
      reach={240}
      hidden={[
        { shape: "document", x: 265, y: 90, scale: 0.6 },
        { shape: "coin", x: 350, y: 180, scale: 0.6 },
      ]}
      className="mx-auto block h-auto w-full max-w-[400px] sm:hidden"
    />
  );
}
