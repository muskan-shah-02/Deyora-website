"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { company, DOKYDOC, dokydocLink } from "@/lib/site";
import { EMAIL_RE, firstName, guessIdentity } from "@/lib/identity";
import type { PersonaId } from "@/lib/personas";
import { FounderAvatar } from "@/components/Founder";
import { ForgetMe, readJourney, useVisitor, type Journey } from "@/components/Visitor";

/**
 * The contact form, as a short conversation: two taps and an email address.
 *
 * Netlify Forms with the Next.js runtime: the form is declared in the static
 * file public/__forms.html, which Netlify detects at deploy time, and this
 * component posts to that file. Every field sent here must be declared there.
 */
const FORM_NAME = "contact";
const FORM_ENDPOINT = "/__forms.html";

type Topic = {
  value: string;
  label: string;
  persona?: PersonaId;
  ask: string;
  needs: string[];
  next?: { label: string; href: string; dokydoc?: boolean };
};

export const TOPICS: Topic[] = [
  {
    value: "dokydoc",
    label: "I pay for software",
    persona: "buyer",
    ask: "Where are you with it?",
    needs: ["About to sign off a delivery", "Something feels off", "Starting a new project", "Just exploring"],
    next: { label: "Start on DokyDoc while you wait", href: DOKYDOC.register, dokydoc: true },
  },
  {
    value: "builder",
    label: "I build software",
    persona: "builder",
    ask: "What would help most?",
    needs: ["Evidence for a client", "Find gaps before the client does", "Documents that match the code", "Just exploring"],
    next: { label: "Start on DokyDoc while you wait", href: DOKYDOC.register, dokydoc: true },
  },
  {
    value: "manufacturing",
    label: "I run a manufacturing business",
    persona: "maker",
    ask: "Where do things slip most?",
    needs: ["Orders and delivery dates", "Suppliers and purchase", "Dispatch and invoicing", "Payments and collections", "It all lives in Excel and WhatsApp"],
    next: { label: "See what DokyBrain is designed to do", href: "/dokydoc#dokybrain" },
  },
  {
    value: "owner",
    label: "I run a company",
    persona: "owner",
    ask: "What takes most of your week?",
    needs: ["Chasing updates", "Checking work I paid for", "Reconciling numbers", "Costs I cannot see clearly"],
    next: { label: "Read what we are building, and why", href: "/about#vision" },
  },
  {
    value: "investor",
    label: "I'm an investor",
    persona: "investor",
    ask: "What would you like?",
    needs: ["A call with the founder", "A walkthrough of DokyDoc", "Just following along"],
    next: { label: "Read the vision", href: "/about#vision" },
  },
  {
    value: "trust",
    label: "I need your security documents",
    ask: "Which ones? We share them under NDA.",
    needs: ["Security architecture", "Data retention and deletion", "Sub-processors", "How the AI handles data", "All of them"],
    next: { label: "Read DokyDoc's public security page", href: DOKYDOC.security },
  },
  {
    value: "other",
    label: "Something else",
    ask: "Which is closest?",
    needs: ["A partnership", "Working at Deyora", "Press or speaking", "Something else"],
  },
];

const TOPIC_ALIASES: Record<string, string> = { partnership: "other", investors: "investor", security: "trust" };
const PERSONA_TOPIC: Record<PersonaId, string> = {
  owner: "owner",
  buyer: "dokydoc",
  builder: "builder",
  maker: "manufacturing",
  investor: "investor",
};

type SendState = "idle" | "sending" | "sent" | "error" | "local";

/** It reads ?topic= from the address, so it renders inside its own Suspense boundary. */
export default function Conversation({ initialTopic }: { initialTopic?: string }) {
  return (
    <Suspense
      fallback={
        <div className="card overflow-hidden">
          <ChatHeader />
          <div className="min-h-[260px] p-5 sm:p-7">
            <noscript>
              <p className="text-[15px] text-text-soft">
                This form needs JavaScript. Please email{" "}
                <a className="underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>{" "}
                instead.
              </p>
            </noscript>
          </div>
        </div>
      }
    >
      <ConversationInner initialTopic={initialTopic} />
    </Suspense>
  );
}

function ConversationInner({ initialTopic }: { initialTopic?: string }) {
  const visitor = useVisitor();
  const [topicId, setTopicId] = useState<string | null>(null);
  const [need, setNeed] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [noteOpen, setNoteOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [nameIn, setNameIn] = useState("");
  const [companyIn, setCompanyIn] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [journey, setJourney] = useState<Journey | null>(null);
  const [state, setState] = useState<SendState>("idle");
  const [sentName, setSentName] = useState<string | null>(null);

  const q2 = useRef<HTMLParagraphElement>(null);
  const q3 = useRef<HTMLParagraphElement>(null);
  const done = useRef<HTMLDivElement>(null);
  const userActed = useRef(false);

  // Start from what we already know: a ?topic= link, the page, or who they said
  // they are. Once the visitor has tapped anything, their answer stands.
  const fromUrl = useSearchParams().get("topic");
  const personaId = visitor.persona?.id;
  useEffect(() => {
    if (!visitor.ready || userActed.current) return;
    const wanted = [fromUrl, initialTopic, personaId ? PERSONA_TOPIC[personaId] : null]
      .map((t) => (t ? TOPIC_ALIASES[t] || t : null))
      .find((t) => t && TOPICS.some((x) => x.value === t));
    setTopicId(wanted || null);
    setNeed(fromUrl === "partnership" ? "A partnership" : null);
  }, [visitor.ready, fromUrl, personaId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Returning visitors who told us their name before see it filled in.
  useEffect(() => {
    if (visitor.name) setNameIn(visitor.name);
    if (visitor.company) setCompanyIn(visitor.company);
  }, [visitor.name, visitor.company]);

  const topic = TOPICS.find((t) => t.value === topicId) || null;
  const guess = useMemo(() => guessIdentity(email), [email]);
  const emailOk = EMAIL_RE.test(email.trim());
  const name = (editing || visitor.name ? nameIn : guess.name || "").trim();
  const org = (editing || visitor.company ? companyIn : guess.company || "").trim();

  useEffect(() => {
    if (need) setJourney(readJourney());
  }, [need]);

  // Move focus to each new question, but only after the visitor has tapped something.
  useEffect(() => {
    if (!userActed.current) return;
    if (topic && !need) q2.current?.focus();
    else if (need) q3.current?.focus();
  }, [topicId, need]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (state === "sent") done.current?.focus();
  }, [state]);

  function pickTopic(value: string) {
    userActed.current = true;
    setTopicId(value);
    setNeed(null);
    const p = TOPICS.find((t) => t.value === value)?.persona;
    if (p && p !== visitor.persona?.id) visitor.choose(p);
  }

  function startEditing() {
    setNameIn(name);
    setCompanyIn(org);
    setEditing(true);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailOk) {
      setEmailError(true);
      return;
    }
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      setState("local");
      return;
    }
    setState("sending");
    const j = readJourney();
    const body = new URLSearchParams({
      "form-name": FORM_NAME,
      "bot-field": String(new FormData(e.currentTarget).get("bot-field") || ""),
      topic: topic?.value || "other",
      need: need || "",
      email: email.trim(),
      name,
      company: org,
      message: note.trim(),
      persona: visitor.persona?.id || "",
      journey: j ? j.pages.join(" → ") : "",
      referrer: j?.referrer || "",
      utm: j?.utm || "",
      landing: j?.landing || "",
    });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      visitor.remember({ name: name || null, company: org || null });
      setSentName(firstName(name));
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const field =
    "block w-full rounded-xl border border-paper-line bg-paper-card px-4 py-3 text-[16px] text-text placeholder:text-text-mute focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100";

  if (state === "sent") {
    const next = topic?.next;
    return (
      <div className="card overflow-hidden">
        <ChatHeader />
        <div ref={done} tabIndex={-1} role="status" className="space-y-4 p-5 outline-none sm:p-7">
          <Bot>
            Thank you{sentName ? `, ${sentName}` : ""}. Your note is with me now. I reply within one business day (Monday to
            Friday, India time).
          </Bot>
          {next ? (
            <p className="pl-12">
              {next.dokydoc || /^https?:/.test(next.href) ? (
                <a
                  href={next.dokydoc ? dokydocLink(next.href, visitor.persona?.id) : next.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  {next.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <Link href={next.href} className="link-arrow">
                  {next.label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </p>
          ) : null}
          {sentName ? (
            <p className="border-t border-paper-line pt-4 text-[13.5px] leading-relaxed text-text-mute">
              This browser now remembers your first name and what you chose, so the site can say hello next time.{" "}
              <ForgetMe className="text-text underline" />
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <form name={FORM_NAME} method="POST" onSubmit={onSubmit} className="card overflow-hidden" noValidate>
      <ChatHeader />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="space-y-5 p-5 sm:p-7">
        {/* Step 1 */}
        <Bot>
          Hi{visitor.name ? ` ${firstName(visitor.name)}, good to see you again` : ", I'm " + company.founderFirstName + ", the founder"}.
          Two taps and an email, and I will know how to help. <strong className="font-medium text-text">What brings you here?</strong>
        </Bot>
        {topic ? (
          <You onChange={() => { userActed.current = true; setTopicId(null); setNeed(null); }}>{topic.label}</You>
        ) : (
          <Chips label="What brings you here?" options={TOPICS.map((t) => [t.value, t.label])} onPick={pickTopic} />
        )}

        {/* Step 2 */}
        {topic ? (
          <>
            <Bot>
              <span ref={q2} tabIndex={-1} className="outline-none">
                {topic.ask}
              </span>
            </Bot>
            {need ? (
              <You onChange={() => { userActed.current = true; setNeed(null); }}>{need}</You>
            ) : (
              <Chips
                label={topic.ask}
                options={topic.needs.map((n) => [n, n])}
                onPick={(n) => {
                  userActed.current = true;
                  setNeed(n);
                }}
              />
            )}
          </>
        ) : null}

        {/* Step 3 */}
        {topic && need ? (
          <>
            <Bot>
              <span ref={q3} tabIndex={-1} className="outline-none">
                Got it. Where should I reply?
              </span>
            </Bot>
            <div className="space-y-3 sm:pl-12">
              <label className="block">
                <span className="sr-only">Your email</span>
                <input
                  className={field}
                  type="email"
                  name="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  aria-invalid={emailError || undefined}
                  aria-describedby="who-line"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  required
                />
              </label>

              <div id="who-line" aria-live="polite" className="text-[14.5px] text-text-soft">
                {emailError ? (
                  <p className="text-warn">That email address does not look complete.</p>
                ) : editing ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[13px] text-text-mute">Your name</span>
                      <input className={`${field} mt-1`} name="name" autoComplete="name" value={nameIn} onChange={(e) => setNameIn(e.target.value)} />
                    </label>
                    <label className="block">
                      <span className="text-[13px] text-text-mute">Company</span>
                      <input className={`${field} mt-1`} name="company" autoComplete="organization" value={companyIn} onChange={(e) => setCompanyIn(e.target.value)} />
                    </label>
                  </div>
                ) : emailOk && (name || org) ? (
                  <p>
                    I&rsquo;ll say hello to <strong className="font-medium text-text">{name || "you"}</strong>
                    {org ? (
                      <>
                        {" "}
                        from <strong className="font-medium text-text">{org}</strong>
                      </>
                    ) : null}
                    .{" "}
                    <button type="button" onClick={startEditing} className="text-brand-700 underline underline-offset-4">
                      Not right? Edit
                    </button>
                  </p>
                ) : emailOk ? (
                  <button type="button" onClick={startEditing} className="text-brand-700 underline underline-offset-4">
                    Add your name and company (optional)
                  </button>
                ) : (
                  <p className="text-text-mute">We fill in your name and company from your email. You can change them.</p>
                )}
              </div>

              {noteOpen ? (
                <label className="block">
                  <span className="text-[13px] text-text-mute">Anything else? (optional, nothing confidential please)</span>
                  <textarea
                    className={`${field} mt-1 min-h-[96px] resize-y`}
                    name="message"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    maxLength={2000}
                  />
                </label>
              ) : (
                <button type="button" onClick={() => setNoteOpen(true)} className="text-[14.5px] text-brand-700 underline underline-offset-4">
                  + Add a note
                </button>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button type="submit" className="btn-primary" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : `Send to ${company.founderFirstName}`}
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              {state === "error" ? (
                <p role="alert" className="rounded-xl bg-warn-bg px-4 py-3 text-[14.5px] text-warn">
                  It did not send. Please email{" "}
                  <a className="underline" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>{" "}
                  instead.
                </p>
              ) : null}
              {state === "local" ? (
                <p role="alert" className="rounded-xl bg-dev-bg px-4 py-3 text-[14.5px] text-dev">
                  This is a local preview: the form only sends from the deployed site. Nothing was sent.
                </p>
              ) : null}

              {/* Notice at collection: IT (SPDI) Rules 2011 rule 4 now; DPDP Act s.5 and DPDP Rules rule 3 when in force. */}
              <p className="border-t border-paper-line pt-4 text-[13px] leading-relaxed text-text-mute">
                We use what you send only to reply and, if you ask, to arrange a walkthrough. With it we send your two answers
                and, for context, the pages you opened here
                {journey && journey.pages.length ? ` (${journey.pages.map(pageName).join(" → ")})` : ""}
                {journey?.referrer ? ` and the site that sent you (${journey.referrer})` : ""}. It is stored by our form
                provider, Netlify (United States), and deleted 365 days after you send it. To see, correct or delete it,
                write to {company.email}; our grievance officer, {company.grievanceOfficer}, replies within 30 days.{" "}
                <Link href="/privacy" className="text-text underline underline-offset-4">
                  Privacy notice
                </Link>
                .
              </p>
            </div>
          </>
        ) : null}

      </div>
    </form>
  );
}

const PAGE_NAMES: Record<string, string> = { "": "Home", dokydoc: "DokyDoc", about: "About", contact: "Contact", privacy: "Privacy" };
const pageName = (p: string) => {
  const seg = p.replace(/^\//, "").split("/")[0];
  return PAGE_NAMES[seg] || seg;
};

function ChatHeader() {
  return (
    <div className="flex items-center gap-3 border-b border-paper-line bg-paper px-5 py-4 sm:px-7">
      <FounderAvatar size={40} />
      <div className="min-w-0">
        <p className="text-[15px] font-medium leading-tight text-text">
          {company.founder} <span className="font-normal text-text-mute">· {company.founderTitle}</span>
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 text-[13px] text-text-mute">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-live" />
          Replies within one business day. No bot on the other end.
        </p>
      </div>
    </div>
  );
}

function Bot({ children }: { children: ReactNode }) {
  return (
    <div className="flex animate-rise items-start gap-3">
      <FounderAvatar size={36} className="mt-0.5 hidden sm:inline-flex" />
      <p className="max-w-[34rem] rounded-2xl rounded-tl-md bg-paper-deep px-4 py-3 text-[16px] leading-relaxed text-text">{children}</p>
    </div>
  );
}

function You({ children, onChange }: { children: ReactNode; onChange: () => void }) {
  return (
    <div className="flex animate-rise flex-col items-end gap-1">
      <p className="max-w-[30rem] rounded-2xl rounded-tr-md bg-ink-900 px-4 py-3 text-[16px] leading-relaxed text-white">{children}</p>
      <button type="button" onClick={onChange} className="text-[13px] text-text-mute underline-offset-4 hover:text-text hover:underline">
        Change
      </button>
    </div>
  );
}

function Chips({ label, options, onPick }: { label: string; options: [string, string][]; onPick: (value: string) => void }) {
  return (
    <div role="group" aria-label={label} className="flex animate-rise flex-wrap justify-end gap-2 sm:pl-12">
      {options.map(([value, text]) => (
        <button
          key={value}
          type="button"
          onClick={() => onPick(value)}
          className="rounded-full border border-brand-600/40 bg-paper-card px-4 py-2.5 text-[15px] text-brand-700 transition-colors hover:border-brand-600 hover:bg-brand-50"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
