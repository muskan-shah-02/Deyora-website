import type { Person } from "@/lib/site";

/**
 * A person's photo once the founder sends one (lib/site.ts `people`), and initials until then, in the same style as
 * FounderAvatar. Hidden from screen readers: the name is printed beside it.
 */
export function PersonAvatar({ person, size = 56, className = "" }: { person: Person; size?: number; className?: string }) {
  if (person.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={person.photo}
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
        className={`shrink-0 rounded-full object-cover ${className}`}
      />
    );
  }
  const initials = person.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-serif text-white ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38) }}
    >
      {initials}
    </span>
  );
}
