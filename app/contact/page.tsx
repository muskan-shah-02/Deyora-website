import { company } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import { Eyebrow } from "@/components/ui";
import Conversation from "@/components/Conversation";
import { FounderAvatar, FounderLinks } from "@/components/Founder";

export const metadata = pageMeta({
  title: "Contact",
  description: "Talk to the founder of Deyora Intelligence about DokyDoc, DokyBrain or our security documents. Two taps and an email.",
  path: "/contact",
});

export default function Contact() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="animate-rise">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="h-display mt-6 text-[44px] sm:text-[58px]">Talk to the founder.</h1>
          <p className="lede mt-6 max-w-md">
            No long form. Two taps and an email. Every message is read by {company.founder}, and we reply within one
            business day (Monday to Friday, India time).
          </p>

          <div className="mt-10 flex items-center gap-4">
            <FounderAvatar size={56} />
            <div>
              <p className="text-[16px] font-medium text-text">{company.founder}</p>
              <p className="text-[14px] text-text-mute">
                {company.founderTitle}, {company.brand}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <FounderLinks />
          </div>

          <div className="mt-10 space-y-6 text-[15.5px]">
            <div>
              <p className="eyebrow">Registered office</p>
              <p className="mt-2 max-w-xs text-text-soft">
                {company.legalName}
                <br />
                {company.registeredOffice}
              </p>
            </div>
            <div className="rounded-2xl border border-paper-line bg-paper-card p-5 text-[14.5px] leading-relaxed text-text-soft">
              <p className="font-medium text-text">Please do not send confidential documents here.</p>
              <p className="mt-1">
                If it would help to look at your documents or code, we sign a mutual NDA first, and you upload them to a
                trial account of your own.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <Conversation />
        </div>
      </div>
    </section>
  );
}
