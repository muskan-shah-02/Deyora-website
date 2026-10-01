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

1. **Site configuration → Forms:** enable form detection, then deploy.
2. **Forms → contact → Form notifications:** add an email notification to the
   company mailbox (today `muskan@deyoraintelligence.com`).
3. Accept Netlify's data processing terms for the account. The website privacy
   notice (`/privacy`) tells visitors that Netlify (United States) stores form
   submissions.
4. **Test:** send one message from the live site and confirm it appears under
   **Forms → contact** and arrives by email. A "Received" screen is not proof by
   itself: check the dashboard.

## Retention

The privacy notice promises that form submissions are deleted **365 days** after
they are sent, and email correspondence **two years** after the last message,
unless the person becomes a customer. Netlify does not delete submissions on its
own, so delete older submissions from the Forms dashboard once a quarter.

## Spam

The honeypot field `bot-field` catches simple bots. If spam grows, turn on
Netlify's reCAPTCHA option; that adds a third-party script, so update `/privacy`
and the Content-Security-Policy in `netlify.toml` at the same time.
