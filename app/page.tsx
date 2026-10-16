import Link from "next/link";
import { company } from "@/lib/site";
import { STORY } from "@/lib/story";
import { pageMeta } from "@/lib/meta";
import { Eyebrow, Section } from "@/components/ui";
import HomeHero from "@/components/HomeHero";
import Conversation from "@/components/Conversation";
import { FreeLook, StoryAudiences, StoryCatches, StoryPricing, StorySteps, StoryToday, StoryTrust } from "@/components/Story";
import { FounderAvatar, FounderLinks } from "@/components/Founder";

export const metadata = pageMeta({
  description:
    "See what's going wrong in your business, all in one list. DokyDoc checks your orders, invoices, payments and stock against each other and shows you only what doesn't match. You decide what to do.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ── The problem ──────────────────────────────────────── */}
      <Section labelledBy="problem-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 id="problem-title" className="h-section mt-5">
              You find out too late.
            </h2>
          </div>
          <div data-reveal className="space-y-5 text-[18px] leading-[1.7] text-text-soft">
            {STORY.problem.map((s) => (
              <p key={s}>{s}</p>
            ))}
            <p>
              Usually it starts with{" "}
              <span className="font-serif text-[20px] italic text-text">&ldquo;Sir, I think there is a problem.&rdquo;</span>
            </p>
          </div>
        </div>
      </Section>

      <StoryCatches />
      <StorySteps />
      <StoryAudiences />
      <StoryTrust />
      <StoryToday />
      <FreeLook />
      <StoryPricing />

      {/* ── Facts ────────────────────────────────────────────── */}
      <Section labelledBy="facts-title">
        <h2 id="facts-title" className="sr-only">
          What you can check
        </h2>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Live", "DokyDoc runs at dokydoc.com today. Sign up yourself."],
            ["About 9,000", "automated tests run before every DokyDoc release. If one fails, the release stops."],
            ["Checked", "A check stops this website from saying things we cannot back."],
            ["1 business day", "to hear back from the founder, Monday to Friday, India time."],
          ].map(([t, d]) => (
            <li key={t} data-reveal className="border-t border-text/15 pt-6">
              <p className="font-serif text-[30px] leading-none">{t}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-text-soft">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Founder ──────────────────────────────────────────── */}
      <Section dark labelledBy="founder-title">
        <figure className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[auto_1fr]" data-reveal>
          <FounderAvatar size={112} className="ring-4 ring-white/10" />
          <div>
            <Eyebrow>
              <span id="founder-title">Why Deyora exists</span>
            </Eyebrow>
            <blockquote className="mt-6 font-serif text-[26px] leading-[1.35] text-white sm:text-[32px]">
              &ldquo;I want to make life easier for the people who run companies. Less time chasing. More time
              deciding.&rdquo;
            </blockquote>
            <figcaption className="mt-8 space-y-3">
              <span className="block">
                <span className="block text-white">{company.founder}</span>
                <span className="block text-[14px] text-ink-400">
                  {company.founderTitle}, {company.brand}
                </span>
              </span>
              <FounderLinks dark />
            </figcaption>
          </div>
        </figure>
      </Section>

      {/* ── Talk ─────────────────────────────────────────────── */}
      <Section id="talk" labelledBy="talk-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal>
            <Eyebrow>Talk to us</Eyebrow>
            <h2 id="talk-title" className="h-section mt-5">
              Two taps and an email.
            </h2>
            <p className="lede mt-6">You talk to the founder. Tell us where things slip in your business.</p>
            <p className="mt-6 text-[15px] text-text-mute">
              Prefer email?{" "}
              <Link href={`mailto:${company.email}`} className="text-text underline underline-offset-4">
                {company.email}
              </Link>
            </p>
          </div>
          <div data-reveal>
            <Conversation />
          </div>
        </div>
      </Section>
    </>
  );
}
