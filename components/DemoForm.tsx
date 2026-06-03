"use client";

// ─────────────────────────────────────────────────────────────────────────────
// DEMO FORM — wired to Netlify Forms
//
// HOW SUBMISSIONS REACH MUSKAN'S INBOX (muskan@deyoraintelligence.com):
//
//   1. Visitor fills + submits this form.
//   2. POST goes to "/" with Content-Type: application/x-www-form-urlencoded
//      and form-name=demo-request — that's how Netlify recognizes it.
//   3. Netlify stores the submission in: dashboard → Forms → "demo-request".
//   4. Netlify sends an email notification to muskan@deyoraintelligence.com
//      with EVERY submitted field, in plain text, one per line.
//
// ONE-TIME SETUP (after the first deploy on Netlify):
//   - Netlify dashboard → Site → Forms → Notifications → Add notification
//   - Type: "Email notification"
//   - Email to notify: muskan@deyoraintelligence.com
//   - (Optional) Reply-To: {{email}} or {{phone}} — so hitting Reply in
//     Zoho replies to the lead directly.
//
// VALIDATION:
//   - Required: name, company
//   - Required (at least one of): email OR phone
//   - Optional: role, teamSize, stack, pain
//
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function DemoForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // Track email/phone in state for the "at least one" validation
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactErr, setContactErr] = useState("");
  // Warn if user is testing locally — Netlify Forms only work on the deployed site.
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    setIsLocal(
      host === "localhost" ||
        host === "127.0.0.1" ||
        host === "0.0.0.0" ||
        host.startsWith("192.168.") ||
        host.endsWith(".local")
    );
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactErr("");
    setErrorMsg("");

    // At-least-one-of validation: email OR phone
    if (!email.trim() && !phone.trim()) {
      setContactErr("Please provide at least an email or a phone number so we can reach you.");
      return;
    }

    setState("submitting");

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
      setEmail("");
      setPhone("");
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
          Thanks — Muskan will be in touch<br />
          within one business day.
        </h3>
        <p className="font-sans font-light text-[15px] leading-relaxed text-ink-secondary max-w-xl mb-5">
          Your submission landed in our inbox. We'll reach out at the email or
          phone you provided. If you have a redacted PRD or spec you'd like us
          to analyze before the call, reply to that email with it attached.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
          Direct line:{" "}
          <a
            href="mailto:muskan@deyoraintelligence.com"
            className="text-white hover:text-accent-blue-soft transition-colors"
          >
            muskan@deyoraintelligence.com
          </a>
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
      {isLocal && (
        <div
          role="status"
          className="border border-accent-warn/40 bg-accent-warn/5 text-accent-warn p-4 grid gap-1"
        >
          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
            ⚠ Local Preview — Submissions Won't Be Captured
          </div>
          <p className="font-sans font-light text-[13px] text-accent-warn/90 leading-relaxed">
            You're viewing this form on <code className="font-mono">localhost</code>. Netlify Forms
            only capture submissions on the deployed site (your{" "}
            <code className="font-mono">*.netlify.app</code> URL or{" "}
            <code className="font-mono">deyora.ai</code> once the domain is connected). Form data
            submitted here will <strong>not</strong> reach{" "}
            <code className="font-mono">muskan@deyoraintelligence.com</code>.
          </p>
        </div>
      )}
      {/* Netlify form-name field (required for Netlify Forms detection) */}
      <input type="hidden" name="form-name" value="demo-request" />
      {/* Honeypot for bots */}
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Required fields — name + organization */}
      <div className="grid md:grid-cols-2 gap-6">
        <Field
          label="Your Name"
          name="name"
          required
          autoComplete="name"
          placeholder="Rajesh Kumar"
        />
        <Field
          label="Organization"
          name="company"
          required
          autoComplete="organization"
          placeholder="Acme Technologies Pvt Ltd"
        />
      </div>

      {/* Email OR Phone — at least one required */}
      <fieldset className="border border-subtle p-5 grid gap-5">
        <legend className="px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-blue-soft">
          How should we reach you? — Provide at least one
        </legend>

        <div className="grid md:grid-cols-2 gap-5">
          <Field
            label="Work Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(v) => {
              setEmail(v);
              if (contactErr) setContactErr("");
            }}
            optional
          />
          <Field
            label="Phone / Mobile"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(v) => {
              setPhone(v);
              if (contactErr) setContactErr("");
            }}
            optional
          />
        </div>

        {contactErr && (
          <div
            role="alert"
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent-danger"
          >
            {contactErr}
          </div>
        )}
      </fieldset>

      {/* Optional context fields — kept compact, no asterisks */}
      <div className="grid gap-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary">
          A bit of context (optional — but it helps us prep)
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="Role / Title"
            name="role"
            placeholder="VP Engineering, PM, CTO…"
            optional
          />
          <SelectField
            label="Team Size"
            name="teamSize"
            optional
            options={[
              "1–10 engineers",
              "11–50 engineers",
              "51–200 engineers",
              "200+ engineers",
            ]}
          />
        </div>

        <SelectField
          label="Current Spec / Doc Stack"
          name="stack"
          optional
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

        <TextArea
          label="What's your biggest spec-vs-code pain right now?"
          name="pain"
          optional
          placeholder="e.g. We failed an audit because our traceability matrix was out of date. Or: engineering keeps building things the PRD never asked for."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2 border-t border-subtle">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary leading-relaxed max-w-md">
          Muskan reads every submission personally. No sales sequences. No
          automated emails. Response within 1 business day.
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
          {errorMsg || "Something went wrong."} You can also email{" "}
          <a href="mailto:muskan@deyoraintelligence.com" className="underline">
            muskan@deyoraintelligence.com
          </a>{" "}
          directly.
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
  optional,
  placeholder,
  autoComplete,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  const id = `field-${name}`;
  const controlled = value !== undefined && onChange !== undefined;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary flex items-center gap-2"
      >
        <span>{label}</span>
        {required && <span className="text-accent-blue-soft">*</span>}
        {optional && (
          <span className="text-ink-tertiary normal-case tracking-normal text-[10px]">
            (optional)
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...(controlled
          ? { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange!(e.target.value) }
          : {})}
        className="bg-transparent border border-subtle focus:border-white focus:outline-none px-4 py-3 font-sans text-[15px] text-white placeholder:text-ink-tertiary transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  optional,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
  options: string[];
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary flex items-center gap-2"
      >
        <span>{label}</span>
        {required && <span className="text-accent-blue-soft">*</span>}
        {optional && (
          <span className="text-ink-tertiary normal-case tracking-normal text-[10px]">
            (optional)
          </span>
        )}
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
  optional,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-secondary flex items-center gap-2"
      >
        <span>{label}</span>
        {required && <span className="text-accent-blue-soft">*</span>}
        {optional && (
          <span className="text-ink-tertiary normal-case tracking-normal text-[10px]">
            (optional)
          </span>
        )}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="bg-transparent border border-subtle focus:border-white focus:outline-none px-4 py-3 font-sans text-[15px] text-white placeholder:text-ink-tertiary transition-colors resize-y"
      />
    </div>
  );
}
