"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { productPage } from "@/lib/site";
import { CTA } from "@/lib/story";
import { DeyoraMark } from "@/components/ui";
import DokyDocLink from "@/components/DokyDocLink";

const links = [
  { href: productPage(), label: "DokyDoc" },
  { href: "/about#vision", label: "Vision" },
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
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <nav
        aria-label="Main"
        className="on-dark mx-auto flex h-14 max-w-page items-center justify-between gap-4 rounded-full border border-white/10 bg-ink-950/85 pl-4 pr-2 shadow-lift backdrop-blur-md"
      >
        <Link href="/" className="flex items-center gap-2.5 text-white" aria-label="Deyora Intelligence, home">
          <DeyoraMark size={30} />
          <span className="text-[18px] font-semibold leading-none tracking-[-0.02em]">Deyora</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[14.5px] transition-colors ${
                  isActive(l.href) ? "bg-white/10 text-white" : "text-ink-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1.5 md:flex">
          <DokyDocLink href={CTA.login.href} className="rounded-full px-3.5 py-2 text-[14.5px] text-ink-200 hover:text-white">
            Log in
          </DokyDocLink>
          <Link href={CTA.demo.href} className="btn-accent !py-2.5">
            {CTA.demo.label}
          </Link>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <Link href={CTA.demo.href} className="btn-accent !px-4 !py-2 !text-[14px]">
            {CTA.demo.label}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
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
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="on-dark mx-auto mt-2 max-w-page rounded-3xl border border-white/10 bg-ink-950/95 shadow-lift backdrop-blur-md md:hidden"
      >
        <ul className="flex flex-col px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block py-3 text-[17px] text-ink-200 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <DokyDocLink href={CTA.login.href} className="block py-3 text-[17px] text-ink-200 hover:text-white">
              Log in to DokyDoc
            </DokyDocLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
