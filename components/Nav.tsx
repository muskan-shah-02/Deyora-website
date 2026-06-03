"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const DOKYDOC_URL = "https://dokydoc.com/";

const internalLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Escape key closes the mobile menu — a11y basic
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-[1000] flex h-[68px] w-full items-center justify-between px-6 md:px-12 backdrop-blur-xl transition-colors ${
          scrolled ? "bg-black/95" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label="Deyora Intelligence home">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {internalLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-[13px] text-ink-secondary hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={DOKYDOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-ink-secondary hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            DokyDoc
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3 fill-none stroke-current"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Link
            href="/book-a-demo"
            className="ml-3 inline-flex items-center bg-white text-black font-mono text-[11px] font-medium uppercase tracking-[0.12em] px-6 py-2.5 hover:bg-[#E8E8E8] transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-7 h-7 z-[1100]"
        >
          <span
            className={`block h-px w-full bg-white transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-full bg-white transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 bg-black/98 backdrop-blur-2xl transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {internalLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="display text-3xl text-ink-secondary hover:text-white"
          >
            {l.label}
          </Link>
        ))}
        <a
          href={DOKYDOC_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="display text-3xl text-ink-secondary hover:text-white inline-flex items-center gap-2"
        >
          DokyDoc ↗
        </a>
        <Link
          href="/book-a-demo"
          onClick={() => setOpen(false)}
          className="btn-primary mt-4"
        >
          Book a Demo
        </Link>
      </div>
    </>
  );
}
