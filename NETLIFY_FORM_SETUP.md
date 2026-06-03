# Demo Form — Email Delivery Setup

Every submission of the "Book a Demo" / Contact form should land in:

> **muskan@deyoraintelligence.com** (Zoho Mail)

This document explains the entire flow and the one-time configuration
required after the first Netlify deploy.

---

## The flow (no backend, no API keys)

```
 Visitor fills form on deyora.ai
            │
            ▼
 POST / (form-name=demo-request)
            │
            ▼
 Netlify Forms (auto-detected from public/forms.html)
            │
            ├──► Stored at: Netlify dashboard → Forms → demo-request
            │    (full searchable history + CSV export)
            │
            └──► Email notification
                 To: muskan@deyoraintelligence.com
                 Reply-To: {{email}}  (so hitting "Reply" goes to the lead)
```

---

## One-time setup (≈ 3 minutes)

After your first deploy on Netlify:

1. Go to Netlify dashboard → your site (`deyora.ai`)
2. **Forms** tab in the left sidebar — you'll see a form called
   `demo-request` once at least one build has completed.
3. Click into `demo-request` → **Settings & usage** (top-right) →
   **Form notifications** → **Add notification**
4. Pick **Email notification**.
   - **Email to notify:** `muskan@deyoraintelligence.com`
   - **Subject:** `New demo request from {{name}} ({{company}})`
   - **Custom subject** lets you scan your inbox at a glance.
5. (Recommended) Add a second notification for redundancy — pick
   **Outgoing webhook** if you ever want to pipe to Slack/Zapier later.

That's it. Test by submitting once on the live site.

---

## What the email looks like

When a visitor submits the form, Muskan receives an email like:

```
From:    Netlify <forms@netlify.com>
To:      muskan@deyoraintelligence.com
Reply-To: rajesh@acme.tech
Subject: New demo request from Rajesh Kumar (Acme Technologies)

A new form submission has been received on deyora.ai:

  name:     Rajesh Kumar
  company:  Acme Technologies Pvt Ltd
  email:    rajesh@acme.tech
  phone:    +91 98765 43210
  role:     Head of Engineering
  teamSize: 51–200 engineers
  stack:    Confluence
  pain:     Our PRDs and code drift apart between sprints…
```

Hitting **Reply** in Zoho goes straight to Rajesh (because of the
`Reply-To: {{email}}` header), so you can respond personally.

---

## Validation rules in the form

| Field        | Required?                                  |
|--------------|--------------------------------------------|
| name         | ✅ Required                                 |
| company      | ✅ Required                                 |
| email        | ☑️ Required if `phone` is empty             |
| phone        | ☑️ Required if `email` is empty             |
| role         | Optional                                   |
| teamSize     | Optional                                   |
| stack        | Optional                                   |
| pain         | Optional                                   |
| bot-field    | Honeypot — bots fill it, humans don't see it |

Client-side validation lives in `components/DemoForm.tsx`. Netlify
also re-checks server-side, so even if a bot bypasses the JS it gets
caught by the honeypot.

---

## Where to change things later

| Want to change                | File                                |
|-------------------------------|-------------------------------------|
| Form fields / labels          | `components/DemoForm.tsx`           |
| Netlify field registration    | `public/forms.html`                 |
| Recipient email               | Netlify dashboard (not in code)     |
| Subject line template         | Netlify dashboard                   |

**Important:** if you add or rename a field in `DemoForm.tsx`, also add
or rename it in `public/forms.html` — Netlify won't accept fields it
doesn't know about, and submissions can fail silently.

---

## Pricing & limits

- Netlify Forms free tier: **100 submissions / month**.
- That's plenty during private alpha. If you ever exceed it,
  upgrade to the Pro plan (Netlify dashboard → Billing).
- Spam submissions are caught by the honeypot and don't count
  toward the quota.

---

## If submissions stop arriving

Quick diagnostic checklist:

1. **Check Netlify dashboard → Forms → demo-request.** If submissions
   are appearing here but not in Zoho, the issue is the email
   notification — re-add it in Settings.
2. **Check Zoho Spam folder.** Sometimes the first notification from
   a new sender lands in spam — mark as Not Spam once and future
   ones will land in Inbox.
3. **Check that `public/forms.html` still exists.** If it gets
   deleted or its fields drift from `DemoForm.tsx`, Netlify will
   stop accepting submissions.
4. **Check the browser DevTools Network tab** when you submit — the
   POST to `/` should return `200 OK`. A 404 means the form name
   doesn't match what Netlify registered.
