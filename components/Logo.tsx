type Props = { className?: string; withWordmark?: boolean };

export default function Logo({ className = "h-9 w-auto", withWordmark = true }: Props) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src="/images/logo.png"
        alt="Deyora Intelligence"
        className={`${className} object-contain`}
      />
      {withWordmark && (
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-secondary hidden sm:inline">
          Deyora
        </span>
      )}
    </span>
  );
}
