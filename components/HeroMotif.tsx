/**
 * a150: Deyora's own motif. Five records (Order, Invoice, Payment, Supplier PO, Stock) joined by soft lines in the
 * accent colour. Every four seconds one line turns red where two records disagree, and a small card says what is
 * wrong, labelled "Example". Inline SVG and CSS only (app/globals.css, "the motif"): no script, font or library.
 * With reduced motion it is a still frame: the first red line and its card. On phones a smaller version shows.
 *
 * The three examples are the ones on the "Needs you today" card below the hero (made-up records).
 */

type Node = { id: string; label: string; x: number; y: number };

const NODES: Node[] = [
  { id: "order", label: "Order", x: 135, y: 105 },
  { id: "invoice", label: "Invoice", x: 1065, y: 105 },
  { id: "payment", label: "Payment", x: 1115, y: 470 },
  { id: "po", label: "Supplier PO", x: 1010, y: 690 },
  { id: "stock", label: "Stock", x: 85, y: 470 },
];

/** The ring of lines, as curves that keep clear of the headline in the middle. */
const LINES: { from: string; to: string; d: string }[] = [
  { from: "order", to: "invoice", d: "M135 105 C 360 25, 840 25, 1065 105" },
  { from: "invoice", to: "payment", d: "M1065 105 C 1180 210, 1190 350, 1115 470" },
  { from: "payment", to: "po", d: "M1115 470 C 1110 570, 1080 650, 1010 690" },
  { from: "po", to: "stock", d: "M1010 690 C 820 800, 220 800, 85 470" },
  { from: "stock", to: "order", d: "M85 470 C 15 350, 25 210, 135 105" },
];

/** The three scenes: which line turns red, and the card that appears. */
const SCENES = [
  { cls: "motif-s1", line: 0, text: "Order 4471 shipped. No invoice yet.", x: 440, y: -6, w: 320 },
  { cls: "motif-s2", line: 3, text: "Yarn PO is 3 days late.", x: 70, y: 540, w: 240 },
  { cls: "motif-s3", line: 1, text: "Customer B is 41 days late.", x: 965, y: 250, w: 225 },
];

function Bubble({ n }: { n: Node }) {
  const w = n.label.length * 9.5 + 34;
  return (
    <g className="motif-pulse">
      <rect className="motif-node" x={n.x - w / 2} y={n.y - 17} width={w} height={34} rx={17} />
      <circle cx={n.x - w / 2 + 15} cy={n.y} r={3.5} fill="rgb(var(--accent))" />
      <text x={n.x - w / 2 + 25} y={n.y + 5} fill="#E7EAF0" fontSize={15} fontWeight={500} fontFamily="var(--font-sans)">
        {n.label}
      </text>
    </g>
  );
}

function SceneCard({ cls, text, x, y, w = 340, h = 64 }: { cls: string; text: string; x: number; y: number; w?: number; h?: number }) {
  return (
    <foreignObject x={x} y={y} width={w} height={h} className={`motif-card ${cls}`}>
      <div className="flex h-full items-center">
        <div className="rounded-xl border border-white/15 bg-ink-950/90 px-3.5 py-2 shadow-lift backdrop-blur">
          <p className="font-mono text-[10px] uppercase tracking-label text-alarm">Example</p>
          <p className="mt-0.5 text-[13.5px] font-medium leading-snug text-white">{text}</p>
        </div>
      </div>
    </foreignObject>
  );
}

/** Behind the headline, on screens wider than a phone. */
export function HeroMotif() {
  return (
    <svg
      viewBox="0 0 1200 780"
      preserveAspectRatio="xMidYMin meet"
      className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
      role="img"
      aria-label="Example: five kinds of record joined by lines. When two of them disagree, the line between them turns red."
    >
      {LINES.map((l) => (
        <path key={`${l.from}-${l.to}`} d={l.d} className="motif-line" />
      ))}
      {SCENES.map((s) => (
        <path key={s.cls} d={LINES[s.line].d} className={`motif-bad ${s.cls}`} />
      ))}
      {NODES.map((n) => (
        <Bubble key={n.id} n={n} />
      ))}
      {SCENES.map((s) => (
        <SceneCard key={s.cls} {...s} />
      ))}
    </svg>
  );
}

/** Under the buttons, on phones: smaller, one scene. */
export function HeroMotifCompact() {
  const pts: Record<string, [number, number]> = {
    order: [70, 40],
    invoice: [290, 40],
    payment: [315, 150],
    po: [180, 200],
    stock: [45, 150],
  };
  const ring = ["order", "invoice", "payment", "po", "stock", "order"];
  return (
    <svg viewBox="0 0 360 230" className="mx-auto mt-10 block w-full max-w-[360px] sm:hidden" role="img"
      aria-label="Example: when an order is shipped but no invoice is raised, the line between them turns red.">
      {ring.slice(0, -1).map((id, i) => {
        const [x1, y1] = pts[id];
        const [x2, y2] = pts[ring[i + 1]];
        return <line key={id} x1={x1} y1={y1} x2={x2} y2={y2} className="motif-line" />;
      })}
      <line x1={70} y1={40} x2={290} y2={40} className="motif-bad motif-s1" />
      {NODES.map((n) => {
        const [x, y] = pts[n.id];
        const w = n.label.length * 7.2 + 26;
        return (
          <g key={n.id}>
            <rect className="motif-node" x={x - w / 2} y={y - 13} width={w} height={26} rx={13} />
            <text x={x - w / 2 + 13} y={y + 4.5} fill="#E7EAF0" fontSize={12} fontWeight={500} fontFamily="var(--font-sans)">
              {n.label}
            </text>
          </g>
        );
      })}
      <SceneCard cls="motif-s1" text="Order 4471 shipped. No invoice yet." x={60} y={62} w={240} h={84} />
    </svg>
  );
}

