import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "live" | "dev" | "design" | "neutral";

const toneClass: Record<Tone, string> = {
  live: "bg-live-bg text-live",
  dev: "bg-dev-bg text-dev",
  design: "bg-brand-100 text-brand-700",
  neutral: "bg-paper-deep text-text-soft",
};

/** A small status label. Every product statement on the site carries one. */
export function Status({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-label ${toneClass[tone]}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${tone === "live" ? "bg-live animate-pulse2" : "bg-current opacity-70"}`} />
      {children}
    </span>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Section({
  id,
  children,
  className = "",
  dark = false,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${dark ? "on-dark bg-ink-950 text-ink-200" : ""} scroll-mt-20 py-20 sm:py-28 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  if (isExternal(href)) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  if (isExternal(href)) {
    return (
      <a href={href} className="link-arrow" target="_blank" rel="noopener noreferrer">
        {children} <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className="link-arrow">
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

/** The Deyora mark as a rounded tile; the source logo has an opaque black ground. */
export function DeyoraMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={size > 96 ? "/brand/deyora-mark-256.png" : "/brand/deyora-mark-96.png"}
      width={size}
      height={size}
      alt=""
      className={`shrink-0 rounded-[22%] ${className}`}
    />
  );
}

export function DokyDocMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/dokydoc-mark-256.png" width={size} height={size} alt="" className={`shrink-0 rounded-[22%] ${className}`} />
  );
}
