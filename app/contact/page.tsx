import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import DemoForm from "@/components/DemoForm";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Deyora Intelligence — Talk to a Founder",
  description:
    "Talk to Deyora Intelligence about DokyDoc demos, design-partner slots, partnerships, and careers. Direct line: muskan@deyoraintelligence.com.",
  alternates: { canonical: "https://deyora.ai/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 border-b border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>Talk to Deyora</SectionLabel>
          </Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl lg:text-[96px] text-white mb-10 max-w-4xl">
              Let's make your<br />
              delivery <span className="shimmer-text">measurable.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[18px] leading-relaxed text-ink-secondary max-w-2xl">
              Whether you're shipping a product, running an engineering org, or building a dev
              shop — we'd love to hear what you're working on. A founder reads every message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-secondary py-24 md:py-32">
        <div className="container-deyora grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <Reveal>
              <SectionLabel>Direct Lines</SectionLabel>
            </Reveal>

            <div className="grid gap-6 mt-2">
              {[
                {
                  k: "Demos & design partners",
                  v: "muskan@deyoraintelligence.com",
                  href: "mailto:muskan@deyoraintelligence.com",
                },
                {
                  k: "General",
                  v: "hello@deyora.ai",
                  href: "mailto:hello@deyora.ai",
                },
                {
                  k: "Careers",
                  v: "careers@deyora.ai",
                  href: "mailto:careers@deyora.ai",
                },
              ].map((c) => (
                <Reveal key={c.k}>
                  <a
                    href={c.href}
                    className="block border border-subtle p-7 hover:border-strong hover:bg-bg-card transition-colors"
                  >
                    <div className="label-mono mb-3">{c.k}</div>
                    <div className="display text-xl md:text-2xl text-white break-all">
                      {c.v}
                    </div>
                  </a>
                </Reveal>
              ))}

              <Reveal>
                <div className="border-t border-subtle pt-7 mt-2">
                  <div className="label-mono mb-2">Location</div>
                  <div className="display text-xl text-white">{company.contact.location}</div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <div>
              <SectionLabel>Or send us the details</SectionLabel>
              <p className="font-sans font-light text-[15px] text-ink-secondary mb-8 max-w-xl">
                Tell us a bit about your team and the problem you're trying to solve. We'll get
                back within one business day.
              </p>
              <DemoForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
