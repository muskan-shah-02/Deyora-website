import Link from "next/link";
import type { Product } from "@/lib/products";

const statusStyles: Record<Product["status"], string> = {
  live: "border-accent-success/60 text-accent-success",
  beta: "border-accent-blue-soft text-accent-blue-soft",
  upcoming: "border-strong text-ink-secondary",
};
const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  upcoming: "Coming Soon",
};

export default function ProductCard({
  product,
  index,
  total,
}: {
  product: Product;
  index: number;
  total?: number;
}) {
  const idx = String(index + 1).padStart(2, "0");
  const totalStr = total ? String(total).padStart(2, "0") : "—";
  const disabled = product.status === "upcoming";

  const Wrap = ({ children }: { children: React.ReactNode }) =>
    disabled ? (
      <div className="block">{children}</div>
    ) : (
      <Link href={`/products/${product.slug}`}>{children}</Link>
    );

  return (
    <Wrap>
      <div
        className={`group relative overflow-hidden border border-subtle p-10 transition-all duration-300 ${
          disabled ? "opacity-70" : "hover:bg-bg-card hover:border-strong cursor-pointer"
        }`}
      >
        <div
          className={`absolute top-0 left-0 h-[2px] bg-white transition-all duration-500 w-0 ${
            !disabled ? "group-hover:w-full" : ""
          }`}
        />

        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-[11px] tracking-[0.14em] text-ink-tertiary">
            {idx} / {totalStr}
          </span>
          <span
            className={`font-mono text-[10px] font-medium uppercase tracking-[0.16em] border px-3 py-1 ${statusStyles[product.status]}`}
          >
            {statusLabel[product.status]}
          </span>
        </div>

        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-secondary mb-3">
          {product.category}
        </div>
        <h3 className="display text-3xl md:text-4xl text-white mb-4">{product.name}</h3>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-blue-soft mb-6">
          {product.tagline}
        </p>
        <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary mb-8 max-w-[440px]">
          {product.shortDescription}
        </p>

        {!disabled && (
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white">
            Explore Product
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        )}
        {disabled && (
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-secondary">
            Join the Waitlist —
          </span>
        )}
      </div>
    </Wrap>
  );
}
