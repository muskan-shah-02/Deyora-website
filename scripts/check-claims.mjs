#!/usr/bin/env node
/**
 * Claims check: fails the build if the website says something it cannot back.
 *
 * Every rule below exists because the claim it blocks was once on this site or
 * on dokydoc.com and was false (TP-00-01, Website Corrections, in deyora-hq),
 * or because the DokyDoc product's own copy guards forbid it
 * (backend/tests/test_false1_copy_is_a_contract.py and friends).
 *
 * If this check fails, fix the copy. Do not loosen the rule: a guard that is
 * edited to pass stops protecting anything written after it.
 *
 * Run: npm run check:claims   (also runs automatically before `npm run build`)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SCAN = ["app", "components", "lib"];
const EXT = /\.(tsx?|mdx?)$/;

// Never allowed, anywhere in rendered copy.
const BANNED = [
  [/\bproofs?\b|\bproves?\b|\bprovable\b|\bproving\b/i, "Proof language: DokyDoc reports evidence; it proves nothing (W-40, W-41)"],
  [/\bmathematical(ly)?\b|\bdeterministic\b/i, "Mathematical / deterministic claims (W-64, W-66)"],
  [/\bguarantee(s|d)?\b/i, "Guarantees (W-42)"],
  [/real[- ]?time|\binstantly\b|\bin sync\b|keeps? (them|it) in sync/i, "Real-time / sync claims (W-44, W-53, W-63)"],
  [/system of truth|eradicate|zero friction|never miss(es)?\b|remembers everything|would have (prevented|avoided)/i, "Absolute outcome claims (W-47, W-57, P0-29)"],
  [/\bpredict(s|ed|ion)?\b|\bforecast(s|ed)?\b|\bautonomous\b|\bAI agents?\b/i, "Prediction or autonomy: DokyBrain never forecasts or acts (D11, D12)"],
  // A percentage in copy is followed by words or punctuation; CSS values ("100%", "22%]") are not.
  [/\d+(\.\d+)?\s?%(?=\s*[A-Za-z.,;:!?)]|\s*$)/, "A percentage figure: none is measured (W-45, W-46, W-48)"],
  [/\b\d+\s?[x×]\s+(faster|cheaper|more)\b|\b\d+×/i, "A multiplier claim with no measurement (W-48, company.ts 30×)"],
  [/private alpha|pre-?order|\bbeta\b|early access|wait-?list/i, "Launch-stage labels: DokyDoc is live; DokyBrain has no sign-up (W-63, W-72)"],
  [/most popular|per[- ]seat|\bTeam plan\b|locked[- ]in pricing|\b50% off\b/i, "Seat or tier pricing that does not exist (W-01 to W-29)"],
  [/\bNotion\b|Google Docs|\bLinear\b/, "Integrations that do not exist (W-43, W-58, W-73)"],
  [/never (be )?used to train|data residency|configurable per/i, "Training or residency claims (W-31, W-32)"],
  [/self[- ]hosted|on[- ]?prem(ise)?s?\b|air[- ]?gapped|dedicated (infrastructure|success manager|technical contact)/i, "Deployment options that are not built (W-17, W-18, W-33)"],
  [/\bSAML\b|\bSCIM\b/, "Enterprise identity features that are not built (W-14)"],
  [/\bSLA\b/, "An SLA is not offered (H8)"],
  [/remote-first|every buyer|trusted by|\bused by \d|\d+\+\s*(companies|customers|organi[sz]ations|teams|users)/i, "Invented scale or testimonials (W-50, W-70)"],
  [/gemini[- ]?\d|\bgpt-?\d|\bclaude\b|\bopus\b|\bsonnet\b/i, "An AI model name (house rule)"],
  [/\bdocky\b/i, "Brand spelling: DokyDoc"],
];

// Allowed only when the sentence denies it (a negation shortly before).
// The third entry, when present, is the exact denial that must appear instead
// of a general negation.
const NEGATION_REQUIRED = [
  [/\bSOC ?2\b|ISO ?27001|penetration test|\bcertif(y|ied|ication|icate)s?\b/i, "Certification or pen-test claims (W-30, W-37)"],
  [/single sign-on|\bSSO\b|two-factor|\bMFA\b/i, "Identity features that are not built (W-14)"],
  [/\brefund/i, "Refunds: top-ups are not refundable (W-51)", /\b(not|non)[- ]?refundable\b|\bno refunds?\b/i],
];
const NEGATION = /\b(no|not|non|without|neither|nor|never|isn't|aren't|don't|doesn't|cannot)\b|n't\b/i;

function files(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...files(p));
    else if (EXT.test(name)) out.push(p);
  }
  return out;
}

/** The sentence containing position `at` of line `i`, which may wrap onto the
 *  neighbouring lines (JSX text often does). Tags are dropped. */
function sentenceAround(lines, i, at) {
  const prev = (lines[i - 1] || "").replace(/<[^>]*>/g, " ");
  const next = (lines[i + 1] || "").replace(/<[^>]*>/g, " ");
  const line = lines[i];
  const head = (prev + " \u0000" + line.slice(0, at)).replace(/<[^>]*>/g, " ");
  const tail = (line.slice(at) + " \u0000" + next).replace(/<[^>]*>/g, " ");
  const startCut = Math.max(head.lastIndexOf(". "), head.lastIndexOf("? "), head.lastIndexOf("! "), head.lastIndexOf("\""), head.lastIndexOf("{"));
  const start = head.slice(startCut + 1);
  const endMatch = tail.search(/[.!?](\s|$)|"|\}/);
  const end = endMatch === -1 ? tail : tail.slice(0, endMatch);
  return (start + end).replace(/\u0000/g, " ");
}

function stripComments(src) {
  return src
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[\s;{}(),])\/\/.*$/gm, (m, pre) => pre + " ".repeat(m.length - pre.length));
}

const problems = [];
for (const f of SCAN.flatMap((d) => files(join(ROOT, d)))) {
  const text = stripComments(readFileSync(f, "utf8"));
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    for (const [re, why] of BANNED) {
      const m = line.match(re);
      if (m) problems.push(`${relative(ROOT, f)}:${i + 1}  "${m[0]}"  ${why}`);
    }
    for (const [re, why, exact] of NEGATION_REQUIRED) {
      const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
      for (const m of line.matchAll(g)) {
        const sentence = sentenceAround(lines, i, m.index);
        // The denial may come before ("we hold no SOC 2 …") or after ("two-factor
        // sign-in is not available"), but it must be in the same sentence.
        const ok = exact ? exact.test(sentence) : NEGATION.test(sentence);
        if (!ok) problems.push(`${relative(ROOT, f)}:${i + 1}  "${m[0]}"  ${why} (needs a negation)`);
      }
    }
  });
}

if (problems.length) {
  console.error(`\nClaims check failed: ${problems.length} problem(s).\n`);
  for (const p of problems) console.error("  " + p);
  console.error("\nFix the copy, not the rule. Sources: deyora-hq trust-pack/00-before-anything/TP-00-01_WEBSITE_CORRECTIONS.md\n");
  process.exit(1);
}
console.log("Claims check passed.");
