type Props = { items: string[] };

export default function Marquee({ items }: Props) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="w-full bg-bg-secondary border-y border-subtle overflow-hidden py-5">
      <div className="flex w-max animate-marquee">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="display text-[15px] font-bold uppercase text-ink-tertiary whitespace-nowrap px-8 tracking-[0.06em]"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
