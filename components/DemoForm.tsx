"use client";

// ─────────────────────────────────────────────────────────────────────────────
// SETUP (one-time, after first deploy):
//   1. Push to Netlify (the form auto-registers on first build).
//   2. Netlify dashboard → Site settings → Forms → Notifications.
//   3. Add an "Email notification" pointing to muskan@deyoraintelligence.com.
//      (Optional: add a Slack/Zapier integration on the same screen.)
//   4. Submissions are also visible at Netlify dashboard → Forms → "demo-request".
//   No backend code, no API keys, no env vars required.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function DemoForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Netlify Forms expects URL-encoded POST to "/" with form-name field.
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, value.toString()));

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-strong p-10 md:p-14 bg-bg-card">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-blue-soft mb-5">
          Request Received
        </div>
        <h3 className="display text-3xl md:text-4xl text-white mb-5">
          Thanks — we'll be in touch within one business day.
        </h3>
        <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary max-w-xl">
          A founder from Deyora will personally review your request and reach out at the email you
          provided. If you have a sample PRD or spec doc you'd like us to analyze before the call,
          reply to that email with it attached.
        </p>
      </div>
    );
  }

  return (
    <form
      name="demo-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="border border-subtle p-8 md:p-12 bg-bg-card grid gap-6"
    >
      {/* Netlify form-name field (required for Netlify Forms detection) */}
      <input type="hidden" name="form-name" value="demo-request" />
      {/* Honeypot for bots */}
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" required autoComplete="name" />
        <Field label="Work Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Role / Title" name="role" required placeholder="VP Engineering, PM, CTO…" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SelectField
          label="Team Size"
          name="teamSize"
          required
          options={[
            "1–10 engineers",
            "11–50 engineers",
            "51–200 engineers",
            "200+ engineers",
          ]}
        />
        <SelectField
          label="Current Spec / Doc Stack"
          name="stack"
          required
          options={[
            "Confluence",
            "Notion",
            "Google Docs",
            "Jira / Linear (tickets only)",
            "SharePoint / Word",
            "Mix of the above",
            "Other",
          ]}
        />
      </div>

      <TextArea
        label="What's your biggest spec-vs-code pain right now?"
        name="pain"
        required
        placeholder="e.g. We just failed an audit because our traceability matrix was out of date. Or: engineering keeps building things the PRD never asked for."
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary leading-relaxed max-w-md">
          We reply within one business day. No sales sequences, no automated emails — a real
          founder reads every submission.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending…" : "Request Demo"}
        </button>
      </div>

      {state === "error" && (
        <div
          role="alert"
          className="border border-accent-danger/40 bg-accent-danger/5 text-accent-danger font-mono text-[12px] uppercase tracking-[0.12em] p-4"
        >
          {errorMsg || "Something went wrong."} You can also email muskan@deyoraintelligence.com directly.
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary"
      >
        {label}
        {required && <span className="text-accent-blue-soft ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="bg-transparent border border-subtle focus:border-white focus:outline-none px-4 py-3 font-sans text-[15px] text-white placeholder:text-ink-tertiary transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary"
      >
        {label}
        {required && <span className="text-accent-blue-soft ml-1">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="bg-transparent border border-subtle focus:border-white focus:outline-none px-4 py-3 font-sans text-[15px] text-white transition-colors appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-black">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-black">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary"
      >
        {label}
        {required && <span className="text-accent-blue-soft ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="bg-transparent border border-subtle focus:border-white focus:outline-none px-4 py-3 font-sans text-[15px] text-white placeholder:text-ink-tertiary transition-colors resize-y"
      />
    </div>
  );
}
