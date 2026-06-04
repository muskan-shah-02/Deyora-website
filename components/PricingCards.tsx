"use client";
import Link from "next/link";
import { useCurrency } from "@/hooks/useCurrency";
import { formatCurrency, REGIONS } from "@/lib/currency";
import { PRICING_TIERS, type PricingTier } from "@/lib/pricing";

export default function PricingCards() {
  const { region, ready, setRegion } = useCurrency();

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-secondary">
          Showing prices in
        </span>
        <select
          aria-label="Select currency region"
          value={region.code}
          onChange={(e) => {
            const next = Object.values(REGIONS).find(
              (r) => r.code === e.target.value
            );
            if (next) setRegion(next);
          }}
          className="bg-transparent border border-subtle text-white font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-2 focus:border-white focus:outline-none cursor-pointer"
        >
          {Object.values(REGIONS).map((r) => (
            <option key={r.code} value={r.code} className="bg-black">
              {r.countryName} · {r.code}
            </option>
          ))}
        </select>
        {!ready && (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
            (Detecting your region…)
          </span>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {PRICING_TIERS.map((tier) => (
          <TierCard key={tier.key} tier={tier} />
        ))}
      </div>
    </>
  );
}

function TierCard({ tier }: { tier: PricingTier }) {
  const { region } = useCurrency();

  const priceDisplay = (() => {
    if (tier.prices === "custom") return { value: "Custom", sub: "" };
    if (tier.prices === "free") return { value: "Free", sub: "during alpha" };
    const amount =
      tier.prices[region.code] ??
      tier.prices.USD ??
      Object.values(tier.prices)[0];
    if (typeof amount !== "number") return { value: "—", sub: "" };
    return {
      value: formatCurrency(amount, region),
      sub: tier.cadence,
    };
  })();

  return (
    <div
      className={`relative flex flex-col border p-8 md:p-10 transition-colors ${
        tier.highlight
          ? "border-strong bg-bg-card"
          : "border-subtle bg-bg-secondary hover:border-medium"
      }`}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-2 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="display text-3xl text-white mb-2">{tier.name}</h3>
        {tier.badge && (
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-blue-soft mb-3">
            {tier.badge}
          </div>
        )}
        <p className="font-sans font-light text-[14px] leading-relaxed text-ink-secondary max-w-xs">
          {tier.positioning}
        </p>
      </div>

      <div className="mb-8 pb-8 border-b border-subtle">
        <div className="flex items-baseline gap-2">
          {tier.fromOnly && tier.prices !== "custom" && tier.prices !== "free" && (
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary">
              From
            </span>
          )}
          <span className="display text-5xl text-white leading-none">
            {priceDisplay.value}
          </span>
        </div>
        {priceDisplay.sub && (
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-secondary mt-3">
            {priceDisplay.sub}
          </div>
        )}
      </div>

      <ul className="grid gap-3 mb-10 flex-1">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 font-sans text-[14px] text-ink-secondary leading-relaxed"
          >
            <span
              className="font-mono text-accent-blue-soft mt-0.5"
              aria-hidden="true"
            >
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {tier.ctaExternal ? (
        <a
          href={tier.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={tier.highlight ? "btn-primary justify-center" : "btn-secondary justify-center"}
        >
          {tier.ctaLabel}
        </a>
      ) : (
        <Link
          href={tier.ctaHref}
          className={tier.highlight ? "btn-primary justify-center" : "btn-secondary justify-center"}
        >
          {tier.ctaLabel}
        </Link>
      )}

      {tier.fineprint && (
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-tertiary mt-5 leading-relaxed">
          {tier.fineprint}
        </p>
      )}
    </div>
  );
}
