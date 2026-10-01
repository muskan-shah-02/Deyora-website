"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DOKYDOC } from "@/lib/site";
import { DeyoraMark } from "@/components/ui";

const links = [
  { href: "/dokydoc", label: "DokyDoc" },
  { href: "/dokydoc#dokybrain", label: "DokyBrain" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="on-dark sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/90 backdrop-blur-md">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label="Deyora Intelligence, home">
          <DeyoraMark size={32} />
          <span className="font-serif text-[21px] leading-none tracking-[-0.01em]">Deyora</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[15px] transition-colors ${
                  isActive(l.href) ? "text-white" : "text-ink-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a href={DOKYDOC.home} target="_blank" rel="noopener noreferrer" className="rounded-full px-3.5 py-2 text-[15px] text-ink-300 hover:text-white">
            Open DokyDoc <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <Link href="/contact" className="btn-primary !py-2.5">
            Talk to us
          </Link>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/[0.06] md:hidden">
        <ul className="container-page flex flex-col py-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block py-3 text-[17px] text-ink-200 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={DOKYDOC.home} target="_blank" rel="noopener noreferrer" className="block py-3 text-[17px] text-ink-200 hover:text-white">
              Open DokyDoc <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li className="pb-3 pt-2">
            <Link href="/contact" className="btn-primary w-full">
              Talk to us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
