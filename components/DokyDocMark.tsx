// Brand mark for DokyDoc. Pure SVG so it inherits `currentColor` from its
// parent — works equally well on dark and light backgrounds, in nav and
// buttons. Replace the path geometry with your final logo file later;
// callers don't need to change.

type Props = {
  className?: string;
  withWordmark?: boolean;
  wordmarkClassName?: string;
};

export default function DokyDocMark({
  className = "w-5 h-5",
  withWordmark = false,
  wordmarkClassName = "",
}: Props) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        viewBox="0 0 32 32"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 9H17C20.866 9 24 12.134 24 16C24 19.866 20.866 23 17 23H9V9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="16" r="1.7" fill="currentColor" />
      </svg>
      {withWordmark && (
        <span
          className={`font-mono text-[13px] font-medium uppercase tracking-[0.14em] ${wordmarkClassName}`}
        >
          DokyDoc
        </span>
      )}
    </span>
  );
}
