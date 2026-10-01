import { company } from "@/lib/site";

const initials = company.founder
  .split(/\s+/)
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

/** The founder's photo once there is one (lib/site.ts), and initials until then. */
export function FounderAvatar({ size = 40, className = "" }: { size?: number; className?: string }) {
  if (company.founderPhoto) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={company.founderPhoto}
        width={size}
        height={size}
        alt={company.founder}
        className={`shrink-0 rounded-full object-cover ${className}`}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={company.founder}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-serif text-white ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38) }}
    >
      {initials}
    </span>
  );
}

export function FounderLinks({ dark = false }: { dark?: boolean }) {
  const cls = dark ? "text-brand-300" : "text-brand-700";
  return (
    <span className="flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
      {company.founderLinkedIn ? (
        <a href={company.founderLinkedIn} target="_blank" rel="noopener noreferrer" className={`${cls} underline-offset-4 hover:underline`}>
          {company.founderFirstName} on LinkedIn <span aria-hidden="true">↗</span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      <a href={`mailto:${company.email}`} className={`${cls} underline-offset-4 hover:underline`}>
        {company.email}
      </a>
    </span>
  );
}
