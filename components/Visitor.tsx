"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PERSONA_ALIASES, personaById, type Persona, type PersonaId } from "@/lib/personas";

/**
 * What this site remembers about a visitor, kept in the visitor's own browser.
 *
 * - Who they said they are (a persona chip, or a link such as /?for=investor),
 *   and, after they send us a message, the first name and company they gave.
 *   localStorage, until they press "Forget me".
 * - This visit's path through the site, the site that sent them (host name
 *   only) and any campaign tags on the link they arrived by. sessionStorage,
 *   gone when the tab closes.
 *
 * None of it leaves the browser unless the visitor sends the contact form,
 * which says so before they press send. No cookies, no analytics, no third
 * parties. The website privacy notice describes exactly this.
 */

const VISITOR_KEY = "deyora.visitor";
const JOURNEY_KEY = "deyora.journey";
const MAX_PAGES = 12;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

type Stored = { persona?: PersonaId | null; name?: string | null; company?: string | null };
export type Journey = { landing: string; referrer: string; utm: string; pages: string[] };

function read<T>(store: "local" | "session", key: string): T | null {
  try {
    const raw = (store === "local" ? window.localStorage : window.sessionStorage).getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(store: "local" | "session", key: string, value: unknown) {
  try {
    const s = store === "local" ? window.localStorage : window.sessionStorage;
    if (value === null) s.removeItem(key);
    else s.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be blocked (private mode, strict settings). The site works without it.
  }
}

export function readJourney(): Journey | null {
  return read<Journey>("session", JOURNEY_KEY);
}

type VisitorContext = {
  /** False until the browser has been read; render the default until then. */
  ready: boolean;
  persona: Persona | null;
  name: string | null;
  company: string | null;
  choose: (id: PersonaId | null) => void;
  remember: (who: { name: string | null; company: string | null }) => void;
  forget: () => void;
};

const Ctx = createContext<VisitorContext>({
  ready: false,
  persona: null,
  name: null,
  company: null,
  choose: () => {},
  remember: () => {},
  forget: () => {},
});

export const useVisitor = () => useContext(Ctx);

export function VisitorProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [stored, setStored] = useState<Stored>({});

  // Read once on arrival.
  useEffect(() => {
    setStored(read<Stored>("local", VISITOR_KEY) || {});
    setReady(true);
  }, []);

  // This visit's path, for context when they write to us.
  useEffect(() => {
    const path = window.location.pathname;
    let j = readJourney();
    if (!j) {
      let referrer = "";
      try {
        const r = new URL(document.referrer);
        if (r.host !== window.location.host) referrer = r.host; // the host only, never the page
      } catch {
        // No referrer, or not a URL.
      }
      const sp = new URLSearchParams(window.location.search);
      const utm = UTM_KEYS.filter((k) => sp.get(k))
        .map((k) => `${k.slice(4)}=${(sp.get(k) || "").slice(0, 60)}`)
        .join("&");
      j = { landing: path, referrer, utm, pages: [] };
    }
    if (j.pages[j.pages.length - 1] !== path) j.pages = [...j.pages, path].slice(-MAX_PAGES);
    write("session", JOURNEY_KEY, j);
  }, [pathname]);

  const update = useCallback((change: (s: Stored) => Stored) => {
    setStored((s) => {
      const next = change(s);
      write("local", VISITOR_KEY, next.persona || next.name || next.company ? next : null);
      return next;
    });
  }, []);

  const value = useMemo<VisitorContext>(
    () => ({
      ready,
      persona: personaById(stored.persona),
      name: stored.name || null,
      company: stored.company || null,
      choose: (id) => update((s) => ({ ...s, persona: id })),
      remember: (who) => update((s) => ({ ...s, ...who })),
      forget: () => {
        update(() => ({}));
        write("session", JOURNEY_KEY, null);
      },
    }),
    [ready, stored, update],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/**
 * A link such as /?for=investor sets who the visitor is, and wins over what
 * was stored, because it is what the person who shared the link meant. Render
 * inside <Suspense>: it reads the query string, and only this empty component
 * waits for it, not the page.
 */
export function ForParam() {
  const params = useSearchParams();
  const { ready, choose } = useVisitor();
  const wanted = params.get("for")?.toLowerCase().trim();
  useEffect(() => {
    const id = wanted ? PERSONA_ALIASES[wanted] : undefined;
    if (ready && id) choose(id);
  }, [ready, wanted]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

/** Shown only when this browser holds something about the visitor. */
export function ForgetMe({ className = "" }: { className?: string }) {
  const { ready, persona, name, forget } = useVisitor();
  const [done, setDone] = useState(false);
  if (done) return <span className={className}>Forgotten. This browser no longer remembers you.</span>;
  if (!ready || (!persona && !name)) return null;
  return (
    <button
      type="button"
      className={`underline-offset-4 hover:underline ${className}`}
      onClick={() => {
        forget();
        setDone(true);
      }}
    >
      Forget me in this browser
    </button>
  );
}
