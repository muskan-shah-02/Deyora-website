// Renders the real DokyDoc product logo.
//
// Source: /public/images/dokydoc-logo.jpg
// (Copied verbatim from the dokydoc repo at frontend/public/dockydoc-logo.jpg.
// Replace this file with a higher-res or transparent SVG whenever the brand
// team finalizes one — no component changes required.)
//
// Same pattern as components/Logo.tsx for the Deyora logo: a plain <img>
// so the size class drives layout predictably at every callsite (nav 16px,
// hero button 14px, product H1 48px, etc.).

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
      <img
        src="/images/dokydoc-logo.jpg"
        alt="DokyDoc"
        className={`${className} object-contain shrink-0`}
      />
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
