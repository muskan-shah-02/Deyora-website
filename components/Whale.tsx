import { HOME } from "@/lib/home";

/**
 * Deyora's whale, drawn for this site (no stock art). The founder, 23 Oct 2026, asked for a more professional mark than
 * a153's dolphin: a humpback whale in fine line art, outlined in the light blue on a dark body, with its long jaw, the
 * grooves under its throat running back to the belly, its long scalloped fin and the knobs on its head. Its sonar pulses ripple out through dark water, and as each pulse passes, a hidden shape lights up for a
 * moment: a document, a box, a coin and a calendar. It means what Deyora is building: helping the people who run
 * companies see what is hidden. Inline SVG and CSS only (app/globals.css, "the whale"): no script, font or library.
 * With reduced motion it is a still frame, the pulses drawn and every shape lit; on phones a smaller drawing with two
 * shapes and no blur.
 */

/** The whale, a humpback facing right, its jaw at (340, 109), in its own 344 by 190 box. */
const BODY =
  "M336 104 C 326 90, 300 80, 268 78 C 230 76, 190 79, 152 86 C 136 89, 124 92, 116 93 C 111 89, 105 86, 98 85 C 100 90, 99 95, 95 99 C 80 104, 64 108, 50 110 C 38 103, 22 95, 4 88 C 14 99, 21 107, 27 113 C 21 121, 13 128, 5 136 C 22 130, 37 122, 50 117 C 72 120, 98 126, 126 132 C 170 145, 222 152, 266 147 C 302 142, 328 126, 340 109 C 339 107, 338 105, 336 104 Z";
/** The long pectoral fin, its leading edge scalloped as a humpback's is. */
const FIN = "M256 128 C 252 136, 246 142, 240 146 C 236 151, 230 154, 226 158 C 222 163, 215 166, 210 170 C 204 175, 194 180, 172 186 C 190 176, 204 164, 214 154 C 224 144, 232 136, 238 129 Z";
/** The throat grooves: parallel to the belly, from under the jaw back towards the fin. */
const GROOVES = [
  "M333.7 114.0 L332.4 115.3 L331.2 116.5 L329.8 117.7 L328.4 118.9 L327.0 120.1 L325.5 121.3 L324.0 122.4 L322.4 123.6 L320.8 124.7 L319.1 125.8 L317.4 126.9 L315.7 127.9 L313.9 129.0 L312.0 130.0 L310.1 131.0 L308.2 132.0 L306.2 132.9 L304.1 133.9 L302.1 134.8 L300.0 135.6 L297.8 136.5 L295.6 137.3 L293.3 138.1 L291.1 138.8 L288.7 139.6 L286.4 140.3 L284.0 140.9 L281.5 141.5 L279.0 142.1 L276.5 142.7 L273.9 143.2 L271.3 143.7 L268.7 144.1 L266.0 144.5 L262.7 144.9 L259.3 145.2 L256.0 145.4 L252.6 145.6 L249.2 145.8 L245.7 146.0 L242.3 146.1 L238.8 146.1 L235.3 146.1 L231.8 146.1 L228.2 146.0 L224.7 145.9 L221.1 145.8 L217.5 145.6 L214.0 145.4 L210.4 145.1 L206.8 144.8 L203.2 144.5 L199.6 144.1 L196.0 143.8 L192.4 143.3 L188.8 142.9 L185.2 142.4 L181.6 141.8 L178.0 141.3",
  "M328.4 116.4 L327.0 117.6 L325.5 118.8 L324.0 119.9 L322.4 121.1 L320.8 122.2 L319.1 123.3 L317.4 124.4 L315.7 125.4 L313.9 126.5 L312.0 127.5 L310.1 128.5 L308.2 129.5 L306.2 130.4 L304.1 131.4 L302.1 132.3 L300.0 133.1 L297.8 134.0 L295.6 134.8 L293.3 135.6 L291.1 136.3 L288.7 137.1 L286.4 137.8 L284.0 138.4 L281.5 139.0 L279.0 139.6 L276.5 140.2 L273.9 140.7 L271.3 141.2 L268.7 141.6 L266.0 142.0 L262.7 142.4 L259.3 142.7 L256.0 142.9 L252.6 143.1 L249.2 143.3 L245.7 143.5 L242.3 143.6 L238.8 143.6 L235.3 143.6 L231.8 143.6 L228.2 143.5 L224.7 143.4 L221.1 143.3 L217.5 143.1 L214.0 142.9 L210.4 142.6 L206.8 142.3 L203.2 142.0 L199.6 141.6 L196.0 141.2 L192.4 140.8 L188.8 140.4 L185.2 139.9 L181.6 139.3",
  "M324.0 117.4 L322.4 118.6 L320.8 119.7 L319.1 120.8 L317.4 121.9 L315.7 122.9 L313.9 124.0 L312.0 125.0 L310.1 126.0 L308.2 127.0 L306.2 127.9 L304.1 128.9 L302.1 129.8 L300.0 130.6 L297.8 131.5 L295.6 132.3 L293.3 133.1 L291.1 133.8 L288.7 134.6 L286.4 135.3 L284.0 135.9 L281.5 136.5 L279.0 137.1 L276.5 137.7 L273.9 138.2 L271.3 138.7 L268.7 139.1 L266.0 139.5 L262.7 139.9 L259.3 140.2 L256.0 140.4 L252.6 140.6 L249.2 140.8 L245.7 141.0 L242.3 141.1 L238.8 141.1 L235.3 141.1 L231.8 141.1 L228.2 141.0 L224.7 140.9 L221.1 140.8 L217.5 140.6 L214.0 140.4 L210.4 140.1 L206.8 139.8 L203.2 139.5 L199.6 139.1 L196.0 138.8 L192.4 138.3 L188.8 137.9 L185.2 137.4",
  "M320.8 117.2 L319.1 118.3 L317.4 119.4 L315.7 120.4 L313.9 121.5 L312.0 122.5 L310.1 123.5 L308.2 124.5 L306.2 125.4 L304.1 126.4 L302.1 127.3 L300.0 128.1 L297.8 129.0 L295.6 129.8 L293.3 130.6 L291.1 131.3 L288.7 132.1 L286.4 132.8 L284.0 133.4 L281.5 134.0 L279.0 134.6 L276.5 135.2 L273.9 135.7 L271.3 136.2 L268.7 136.6 L266.0 137.0 L262.7 137.4 L259.3 137.7 L256.0 137.9 L252.6 138.1 L249.2 138.3 L245.7 138.5 L242.3 138.6 L238.8 138.6 L235.3 138.6 L231.8 138.6 L228.2 138.5 L224.7 138.4 L221.1 138.3 L217.5 138.1 L214.0 137.9 L210.4 137.6 L206.8 137.3 L203.2 137.0 L199.6 136.6 L196.0 136.2 L192.4 135.8 L188.8 135.4 L185.2 134.9",
  "M315.7 117.9 L313.9 119.0 L312.0 120.0 L310.1 121.0 L308.2 122.0 L306.2 122.9 L304.1 123.9 L302.1 124.8 L300.0 125.6 L297.8 126.5 L295.6 127.3 L293.3 128.1 L291.1 128.8 L288.7 129.6 L286.4 130.3 L284.0 130.9 L281.5 131.5 L279.0 132.1 L276.5 132.7 L273.9 133.2 L271.3 133.7 L268.7 134.1 L266.0 134.5 L262.7 134.9 L259.3 135.2 L256.0 135.4 L252.6 135.6 L249.2 135.8 L245.7 136.0 L242.3 136.1 L238.8 136.1 L235.3 136.1 L231.8 136.1 L228.2 136.0 L224.7 135.9 L221.1 135.8 L217.5 135.6 L214.0 135.4 L210.4 135.1 L206.8 134.8 L203.2 134.5 L199.6 134.1 L196.0 133.8 L192.4 133.3 L188.8 132.9",
  "M312.0 117.5 L310.1 118.5 L308.2 119.5 L306.2 120.4 L304.1 121.4 L302.1 122.3 L300.0 123.1 L297.8 124.0 L295.6 124.8 L293.3 125.6 L291.1 126.3 L288.7 127.1 L286.4 127.8 L284.0 128.4 L281.5 129.0 L279.0 129.6 L276.5 130.2 L273.9 130.7 L271.3 131.2 L268.7 131.6 L266.0 132.0 L262.7 132.4 L259.3 132.7 L256.0 132.9 L252.6 133.1 L249.2 133.3 L245.7 133.5 L242.3 133.6 L238.8 133.6 L235.3 133.6 L231.8 133.6 L228.2 133.5 L224.7 133.4 L221.1 133.3 L217.5 133.1 L214.0 132.9 L210.4 132.6 L206.8 132.3 L203.2 132.0 L199.6 131.6 L196.0 131.2 L192.4 130.8 L188.8 130.4",
  "M308.2 117.0 L306.2 117.9 L304.1 118.9 L302.1 119.8 L300.0 120.6 L297.8 121.5 L295.6 122.3 L293.3 123.1 L291.1 123.8 L288.7 124.6 L286.4 125.3 L284.0 125.9 L281.5 126.5 L279.0 127.1 L276.5 127.7 L273.9 128.2 L271.3 128.7 L268.7 129.1 L266.0 129.5 L262.7 129.9 L259.3 130.2 L256.0 130.4 L252.6 130.6 L249.2 130.8 L245.7 131.0 L242.3 131.1 L238.8 131.1 L235.3 131.1 L231.8 131.1 L228.2 131.0 L224.7 130.9 L221.1 130.8 L217.5 130.6 L214.0 130.4 L210.4 130.1 L206.8 129.8 L203.2 129.5 L199.6 129.1 L196.0 128.8 L192.4 128.3",
  "M304.1 116.4 L302.1 117.3 L300.0 118.1 L297.8 119.0 L295.6 119.8 L293.3 120.6 L291.1 121.3 L288.7 122.1 L286.4 122.8 L284.0 123.4 L281.5 124.0 L279.0 124.6 L276.5 125.2 L273.9 125.7 L271.3 126.2 L268.7 126.6 L266.0 127.0 L262.7 127.4 L259.3 127.7 L256.0 127.9 L252.6 128.1 L249.2 128.3 L245.7 128.5 L242.3 128.6 L238.8 128.6 L235.3 128.6 L231.8 128.6 L228.2 128.5 L224.7 128.4 L221.1 128.3 L217.5 128.1 L214.0 127.9 L210.4 127.6 L206.8 127.3 L203.2 127.0 L199.6 126.6 L196.0 126.2 L192.4 125.8",
  "M300.0 115.6 L297.8 116.5 L295.6 117.3 L293.3 118.1 L291.1 118.8 L288.7 119.6 L286.4 120.3 L284.0 120.9 L281.5 121.5 L279.0 122.1 L276.5 122.7 L273.9 123.2 L271.3 123.7 L268.7 124.1 L266.0 124.5 L262.7 124.9 L259.3 125.2 L256.0 125.4 L252.6 125.6 L249.2 125.8 L245.7 126.0 L242.3 126.1 L238.8 126.1 L235.3 126.1 L231.8 126.1 L228.2 126.0 L224.7 125.9 L221.1 125.8 L217.5 125.6 L214.0 125.4 L210.4 125.1 L206.8 124.8 L203.2 124.5 L199.6 124.1 L196.0 123.8",
  "M295.6 114.8 L293.3 115.6 L291.1 116.3 L288.7 117.1 L286.4 117.8 L284.0 118.4 L281.5 119.0 L279.0 119.6 L276.5 120.2 L273.9 120.7 L271.3 121.2 L268.7 121.6 L266.0 122.0 L262.7 122.4 L259.3 122.7 L256.0 122.9 L252.6 123.1 L249.2 123.3 L245.7 123.5 L242.3 123.6 L238.8 123.6 L235.3 123.6 L231.8 123.6 L228.2 123.5 L224.7 123.4 L221.1 123.3 L217.5 123.1 L214.0 122.9 L210.4 122.6 L206.8 122.3 L203.2 122.0 L199.6 121.6 L196.0 121.2",
];
const MOUTH = "M339 107 C 322 111, 298 115, 270 116";
/** The knobs along the top of the head. */
const KNOBS: [number, number][] = [[322, 92], [312, 88], [302, 85], [292, 83], [330, 98]];
const TINT = "rgb(155 178 217)";
const LIGHT = "rgb(210 224 247)";

function WhaleShape({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#17346f" />
          <stop offset="0.55" stopColor="#0e1f44" />
          <stop offset="1" stopColor="#0a1430" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={TINT} stopOpacity={0.35} />
          <stop offset="0.5" stopColor={TINT} stopOpacity={0.95} />
          <stop offset="1" stopColor={LIGHT} />
        </linearGradient>
        <clipPath id={`${id}-in`}>
          <path d={BODY} />
        </clipPath>
      </defs>
      <path d={BODY} fill={`url(#${id}-skin)`} stroke={`url(#${id}-edge)`} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-in)`} fill="none" stroke={TINT} strokeLinecap="round" strokeWidth={0.7} strokeOpacity={0.55}>
        {GROOVES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={MOUTH} fill="none" stroke={LIGHT} strokeWidth={1} strokeLinecap="round" />
      <g fill={TINT} fillOpacity={0.7}>
        {KNOBS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.1} />
        ))}
      </g>
      <circle cx={262} cy={106} r={1.3} fill={LIGHT} />
      <path d={FIN} fill={`url(#${id}-skin)`} stroke={`url(#${id}-edge)`} strokeWidth={1.2} strokeLinejoin="round" />
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
      place="translate(30 110) scale(1.35) rotate(-4 160 96)"
      origin={[487, 236]}
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
      place="translate(6 96) scale(0.62) rotate(-4 160 96)"
      origin={[216, 154]}
      reach={240}
      hidden={[
        { shape: "document", x: 265, y: 90, scale: 0.6 },
        { shape: "coin", x: 350, y: 180, scale: 0.6 },
      ]}
      className="mx-auto block h-auto w-full max-w-[400px] sm:hidden"
    />
  );
}
