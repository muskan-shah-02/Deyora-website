# Contact form: Netlify Forms setup

The contact page (`/contact`) uses **Netlify Forms**. There is no backend to run.

## How it works

- `public/__forms.html` declares the form, named `contact`, as static HTML.
  Netlify finds it when the site deploys.
- `app/contact/ContactForm.tsx` renders the visible form and posts the fields,
  URL-encoded, to `/__forms.html`. This is the method Netlify recommends for the
  Next.js runtime: post to a static file, not to a page the runtime renders.
- The field names in the two files must match: `form-name`, `bot-field`
  (a honeypot), `name`, `email`, `company`, `role`, `topic`, `message`.
- On a local preview (`localhost`), the form shows a notice and sends nothing.

## One-time setup in Netlify

Done on 13 Oct 2026, with the founder. Form detection had been off until then, so
messages sent through the contact form before that day were not received.

1. **Forms:** enable form detection, then publish the site again. Done
   (republished on 13 Oct 2026).
2. **Project configuration → Notifications → Emails and webhooks → Form
   submission notifications:** one email notification, to the company mailbox
   (`muskan@deyoraintelligence.com`), for any form. Done. There is no webhook or
   Slack notification; keep it that way, because the privacy notice says
   messages go only to the company mailbox.
3. **Netlify's data processing terms:** nothing to accept. Netlify's Data
   Processing Agreement (last updated 9 June 2026) forms part of its
   Self-Serve Subscription Agreement, so it has applied since the account was
   opened (3 June 2026). Its PDF is kept with the company's records, not here.
   The website privacy notice (`/privacy`) tells visitors that Netlify (United
   States) stores form submissions.
4. **Test:** send one message from the live site and confirm it appears under
   **Forms → contact** and arrives by email. A "Received" screen is not proof by
   itself: check the dashboard. Done: the test of 13 Oct 2026 appeared under
   Forms and reached the mailbox from formresponses@netlify.com.

## Retention

The privacy notice promises that form submissions are deleted **365 days** after
they are sent, and email correspondence **two years** after the last message,
unless the person becomes a customer. Netlify does not delete submissions on its
own, so delete older submissions from the Forms dashboard once a quarter
(**Forms → contact**: tick each message, **Delete submission**; then the same
under **Spam submissions**; never **Delete form**). Keep a repeating reminder
for it on the first working day of January, April, July and October.
The same review every three months (the first by 31 December 2026) also clears
the messages Netlify marks as spam and the copies in the mailbox, as version 2.0
of the privacy notice promises ("How long we keep data").

## Spam

The honeypot field `bot-field` catches simple bots. If spam grows, turn on
Netlify's reCAPTCHA option; that adds a third-party script, so update `/privacy`
and the Content-Security-Policy in `netlify.toml` at the same time.
