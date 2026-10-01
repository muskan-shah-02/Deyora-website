"use client";

import type { ReactNode } from "react";
import { dokydocLink } from "@/lib/site";
import { useVisitor } from "@/components/Visitor";

/**
 * A link into DokyDoc that carries where the visitor came from (utm_source and,
 * if they chose one, who they are), so a sign-up can be traced to this site.
 */
export default function DokyDocLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "arrow";
  className?: string;
}) {
  const { persona } = useVisitor();
  const cls = className ?? { primary: "btn-primary", ghost: "btn-ghost", arrow: "link-arrow" }[variant];
  return (
    <a href={dokydocLink(href, persona?.id)} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true">{variant === "arrow" || className ? " ↗" : "↗"}</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
