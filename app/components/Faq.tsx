import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Item = { q: string; a: ReactNode };

// Drafted from the positioning in the brand guide (§2 audience, §15 do/don't).
// Brian: check the tool-cost answer below before this goes live.
const items: Item[] = [
  {
    q: "Do I need to know how to code?",
    a: (
      <>
        No. Everything here is plain English. If you can brief a coworker on
        a task, you already have the skill this takes.
      </>
    ),
  },
  {
    q: "What if I've never used AI at work before?",
    a: (
      <>
        Start with{" "}
        <a href="#plan" className="text-teal underline underline-offset-2">
          the three steps above
        </a>
        . The AI Starter Kit in the free library is built for exactly this:
        one small task at a time instead of trying to change how you work all
        at once.
      </>
    ),
  },
  {
    q: "My company has rules about AI. Can I still use this?",
    a: (
      <>
        Usually, yes, with the approved tool your company already gives you.
        The workflows aren&apos;t tied to one product. The one rule I&apos;d
        never break: don&apos;t paste confidential company data into a tool
        that isn&apos;t approved for it. There&apos;s a guide in the library on
        exactly where that line sits.
      </>
    ),
  },
  {
    q: "Do I have to pay for a tool to follow along?",
    a: (
      <>
        <span className="mb-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-medium tracking-wide text-orange uppercase">
          <span aria-hidden>▲</span> Cost
        </span>
        <br />
        The free tiers of ChatGPT, Claude, and Gemini cover most of what I
        show. Paid plans mostly buy you higher limits and the newer models,
        useful once a workflow is part of your week and not something you
        need on day one.
      </>
    ),
  },
  {
    q: "Is the resource library actually free?",
    a: (
      <>
        Yes. Drop in your name and email and the whole thing unlocks, no cost.
        The community on Skool is free to join too.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="headline-sm mt-4 text-ink">
              Questions people actually <span className="px">ask</span>.
            </h2>
          </Reveal>

          <Reveal delay={120} className="md:col-span-8">
            {/* Hairlines between rows, no vertical rules, brand guide §14. */}
            <div className="border-t border-line">
              {items.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem] font-semibold text-ink transition-colors hover:text-teal [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden
                      className="shrink-0 text-xl leading-none text-teal transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="max-w-[70ch] pb-6 text-[1.0625rem] leading-[1.55] text-muted">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
