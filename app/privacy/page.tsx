import Link from "next/link";
import { company, DOKYDOC } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import { Eyebrow } from "@/components/ui";
import { ForgetMe } from "@/components/Visitor";

export const metadata = pageMeta({
  title: "Website privacy notice",
  description: "How Deyora Intelligence handles the personal data you send through this website, and what it remembers in your browser.",
  path: "/privacy",
});

const EFFECTIVE = "1 October 2026";

export default function Privacy() {
  return (
    <article className="py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="h-display mt-6 text-[42px] sm:text-[54px]">Website privacy notice</h1>
        <p className="mt-4 text-[15px] text-text-mute">Effective {EFFECTIVE}</p>

        <div className="mt-10 space-y-10 text-[17px] leading-[1.75] text-text-soft [&_h2]:font-serif [&_h2]:text-[26px] [&_h2]:leading-snug [&_h2]:text-text [&_strong]:text-text">
          <section>
            <p>
              This notice covers this website only. It explains what we collect when you contact us here and what we do
              with it. The DokyDoc product has its own{" "}
              <a href={DOKYDOC.privacy} className="text-text underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                privacy policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Who we are</h2>
            <p className="mt-3">
              {company.legalName} (CIN {company.cin}), registered office at {company.registeredOffice}. We decide why and
              how the data described here is used.
            </p>
          </section>

          <section>
            <h2>What we collect, and why</h2>
            <p className="mt-3">
              When you send the contact form, we receive your email address, the two answers you tap, and, if you give
              them, your name, your company and a note. The form suggests a name and a company from your email address
              (for example, priya.sharma@acme.in suggests Priya Sharma from Acme). The suggestion is made in your browser,
              nothing is looked up anywhere, and you see and can change it before you send.
            </p>
            <p className="mt-3">
              So that we can reply in context, the form also sends: which kind of visitor you said you are, if you chose
              one; the pages of this website you opened during this visit; the name of the website that sent you here (for
              example, google.com, never the page you were on); and any campaign tags in the link you arrived by (such as
              utm_source). The form shows you this before you send. Our form provider also records technical details of
              the submission, such as your IP address and browser, to stop spam.
            </p>
            <p className="mt-3">
              We use these details only to reply to your request and, if you ask, to arrange a walkthrough. We do not add
              you to a mailing list, sell your details, or use them for advertising. You give them by choosing to send the
              form, and you can withdraw that consent at any time.
            </p>
          </section>

          <section>
            <h2>What this website remembers in your browser</h2>
            <p className="mt-3">
              The website keeps a few things in your own browser&rsquo;s storage, not in cookies, and none of it reaches us
              unless you send the contact form:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Who you said you are</strong>, if you tap a choice such as &ldquo;I run a company&rdquo; or open a
                link such as /?for=investor, so the pages speak to you. Kept until you clear it.
              </li>
              <li>
                <strong>Your first name and company</strong>, only after you send the contact form, so the site can greet
                you next time. Kept until you clear it.
              </li>
              <li>
                <strong>This visit</strong>: the pages you open, the name of the website that sent you and any campaign
                tags. Kept for the visit only, and gone when you close the tab.
              </li>
            </ul>
            <p className="mt-3">
              To clear it, use &ldquo;Forget me in this browser&rdquo; at the foot of any page once something is stored,
              or clear this site&rsquo;s data in your browser. <ForgetMe className="text-text underline" />
            </p>
          </section>

          <section>
            <h2>Where it is kept, and for how long</h2>
            <p className="mt-3">
              Your message is stored by our form provider, Netlify (United States), and delivered to our company mailbox.
              We delete form submissions 365 days after you send them, and our email correspondence with you two years
              after the last message, unless you become a customer, in which case the DokyDoc privacy policy applies.
            </p>
          </section>

          <section>
            <h2>Cookies and analytics</h2>
            <p className="mt-3">
              This website sets no cookies and runs no analytics or advertising scripts. It does not try to identify you
              from your IP address or share anything about your visit with anyone. Its fonts are served from our own site.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p className="mt-3">
              You can ask to see, correct or delete your details, or withdraw your consent, by writing to{" "}
              <a href={`mailto:${company.email}`} className="text-text underline underline-offset-4">
                {company.email}
              </a>
              . We act on a request within 30 days.
            </p>
          </section>

          <section>
            <h2>Grievance officer</h2>
            <p className="mt-3">
              {company.grievanceOfficer}, {company.founderTitle}, {company.legalName}, {company.registeredOffice}. Email:{" "}
              {company.email}. We respond to every grievance within 30 days. Once the relevant provisions of the Digital
              Personal Data Protection Act, 2023 are in force, you may also complain to the Data Protection Board of India
              if you are not satisfied with our response.
            </p>
          </section>

          <section>
            <h2>Changes to this notice</h2>
            <p className="mt-3">
              If we change this notice, we will update it here and change the effective date at the top.
            </p>
          </section>

          <p className="border-t border-paper-line pt-8 text-[15px]">
            <Link href="/contact" className="text-text underline underline-offset-4">
              Back to the contact page
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
