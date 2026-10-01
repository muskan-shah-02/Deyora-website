"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { company } from "@/lib/site";

/**
 * Netlify Forms with the Next.js runtime: the form is declared in the static
 * file public/__forms.html, which Netlify detects at deploy time, and this
 * component posts to that file. The field names here must match that file.
 */
const FORM_NAME = "contact";
const FORM_ENDPOINT = "/__forms.html";

export const topics = [
  { value: "dokydoc", label: "DokyDoc: a walkthrough or a question" },
  { value: "manufacturing", label: "DokyBrain: I run a manufacturing company" },
  { value: "trust", label: "Security documents under NDA" },
  { value: "partnership", label: "A partnership" },
  { value: "other", label: "Something else" },
];

type State = "idle" | "sending" | "sent" | "error" | "local";

export default function ContactForm() {
  const params = useSearchParams();
  const initialTopic = topics.some((t) => t.value === params.get("topic")) ? (params.get("topic") as string) : "dokydoc";
  const [topic, setTopic] = useState(initialTopic);
  const [state, setState] = useState<State>("idle");

  useEffect(() => setTopic(initialTopic), [initialTopic]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      setState("local");
      return;
    }
    setState("sending");
    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="card p-10" role="status">
        <p className="eyebrow">Received</p>
        <p className="mt-4 font-serif text-[32px] leading-tight">Thank you. Your message is with the founder.</p>
        <p className="mt-4 text-[16px] leading-relaxed text-text-soft">
          We reply within one business day (Monday to Friday, India time). If it is urgent, email{" "}
          <a className="underline underline-offset-4" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-xl border border-paper-line bg-paper-card px-4 py-3 text-[16px] text-text placeholder:text-text-mute focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100";
  const label = "text-[14px] font-medium text-text";

  return (
    <form name={FORM_NAME} method="POST" onSubmit={onSubmit} className="card p-7 sm:p-10" noValidate={false}>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Your name *</span>
          <input className={field} name="name" required autoComplete="name" />
        </label>
        <label className="block">
          <span className={label}>Work email *</span>
          <input className={field} name="email" type="email" required autoComplete="email" />
        </label>
        <label className="block">
          <span className={label}>Company</span>
          <input className={field} name="company" autoComplete="organization" />
        </label>
        <label className="block">
          <span className={label}>Your role</span>
          <input className={field} name="role" autoComplete="organization-title" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className={label}>What is this about?</span>
        <select className={field} name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className={label}>What are you trying to fix? *</span>
        <textarea
          className={`${field} min-h-[150px] resize-y`}
          name="message"
          required
          placeholder="A few lines is plenty. Please leave out anything confidential."
        />
      </label>

      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send to the founder"}
      </button>

      {state === "error" ? (
        <p role="alert" className="mt-4 rounded-xl bg-warn-bg px-4 py-3 text-[14.5px] text-warn">
          Your message could not be sent. Please email{" "}
          <a className="underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          instead.
        </p>
      ) : null}
      {state === "local" ? (
        <p role="alert" className="mt-4 rounded-xl bg-dev-bg px-4 py-3 text-[14.5px] text-dev">
          This is a local preview: the form only sends from the deployed site. Nothing was sent.
        </p>
      ) : null}

      {/* Notice at collection: IT (SPDI) Rules 2011 rule 4 now; DPDP Act s.5 and DPDP Rules rule 3 when in force. */}
      <p className="mt-7 border-t border-paper-line pt-5 text-[13.5px] leading-relaxed text-text-mute">
        We use these details only to reply to your request and, if you ask, to arrange a walkthrough. Your message is
        stored by our form provider, Netlify (United States), and delivered to our mailbox. We delete it 365 days after
        you send it, and our email correspondence with you two years after the last message, unless you become a
        customer. To see, correct or delete your details, or to withdraw your consent, write to {company.email}; our
        grievance officer, {company.grievanceOfficer}, replies within 30 days.{" "}
        <Link href="/privacy" className="text-text underline underline-offset-4">
          Read the website privacy notice
        </Link>
        .
      </p>
    </form>
  );
}
