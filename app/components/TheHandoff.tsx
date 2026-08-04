"use client";

import { useRef, useState } from "react";
import { handleTabKeys } from "../lib/tabs";

// The site's actual differentiator: not a prompt library, a way of thinking
// about what AI needs before you ask it for anything. Every resource in the
// library demonstrates this same shape instead of handing over a string to
// paste, so this section explains the pattern once, concretely, rather than
// each resource re-teaching it from scratch.
const parts = [
  {
    n: "01",
    title: "The situation",
    body: "Who this is for, why it matters right now, what's riding on it.",
  },
  {
    n: "02",
    title: "The material",
    body: "The actual raw stuff you've got: the notes, the thread, the draft. Don't make it invent what's already in front of you.",
  },
  {
    n: "03",
    title: "What done looks like",
    body: "Not a rigid template. The actual outcome you're aiming for.",
  },
  {
    n: "04",
    title: "Your call vs. its call",
    body: "Where you want it to use judgment, and where you don't. This is the part most people skip, and it matters more every time the models get better.",
  },
];

// Three ordinary jobs, the same four parts each time. Each output deliberately
// honours its own judgment-call line (the email really doesn't invent a date,
// the prep really doesn't soften the slip) so the last part is shown working
// rather than just asserted.
const examples = [
  {
    tab: "Messy email",
    handoff: [
      "Replying to a client who's annoyed we missed Thursday. I want to keep the relationship, not win the argument.",
      "The thread so far, plus my rough notes on what actually went wrong on our side.",
      "Four sentences. Owns the miss without grovelling. Something I can send without editing.",
      "You pick the wording. Don't invent a new delivery date, I'll confirm that with the team first.",
    ],
    output: [
      "Hi Dana, you're right that we missed Thursday, and that one's on us.",
      "The holdup was our vendor handoff, nothing to do with anything on your side.",
      "I don't want to give you a new date until I've confirmed it with the team, so I'll have that to you Monday.",
      "Happy to get on a call before then if it's useful.",
    ],
  },
  {
    tab: "Meeting prep",
    handoff: [
      "Quarterly review with my manager tomorrow. She cares about blockers, not activity.",
      "Last quarter's notes, my tracker export, and the two projects that slipped.",
      "One page I can skim walking in. Bullets, no preamble.",
      "Flag what you'd ask if you were her. Don't soften the slipped items to make them sound better.",
    ],
    output: [
      "Two slipped: vendor migration, blocked on procurement since week 3. Analytics rebuild, scope grew after the data audit.",
      "She'll likely ask what changed at week 3, and why it wasn't raised then.",
      "Decision to bring: pull Q3 headcount forward, or let the rebuild land in Q4.",
    ],
  },
  {
    tab: "Weekly update",
    handoff: [
      "Friday update to a team that skims. Half of them only read the first line.",
      "My raw notes from the week, the threads I starred, and the deck we shipped Tuesday.",
      "Top line first, then three bullets. Nothing that reads like filler.",
      "Cut anything that's only activity. Keep the one item that actually needs someone to decide.",
    ],
    output: [
      "Onboarding deck shipped. Migration is blocked and needs a call this week.",
      "Deck went out Tuesday, feedback due Friday.",
      "Vendor migration blocked on procurement, need a contact by Wednesday.",
      "Analytics rebuild scope grew, flagging now before it slips.",
    ],
  },
  {
    tab: "Monthly report",
    handoff: [
      "The board report I rebuild every month. Same shape every time, five sources, and it eats most of a Tuesday.",
      "Last month's finished report, this month's raw exports, and my notes on what changed.",
      "Same structure as last month so nobody has to relearn it. Numbers updated, commentary rewritten.",
      "Flag anything that moved more than ten percent and say why you think it moved. Don't guess at causes you can't see in the data.",
    ],
    output: [
      "Revenue up 12 percent, tracking to the two enterprise renewals that closed late last month.",
      "Support tickets up 18 percent. I can see the volume but nothing in the exports explains it, worth checking with the team before this goes out.",
      "Everything else sits inside the usual range. Commentary carried over with the dates updated.",
    ],
  },
];

export function TheHandoff() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">The method</p>
        <h2 className="headline-sm mt-4 text-ink">
          Give it a <span className="px">handoff</span>, not a script.
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-[1.55] text-muted">
          Prompts expire. What worked on last month&apos;s model can stop
          working on this month&apos;s. Context compounds. How you explain the
          situation still works no matter how good the model gets, and it
          works better as it gets smarter.
        </p>
      </div>

      {/* A hairline list rather than another card grid: the section above
          already uses cards, and the worked examples below label all four
          parts anyway, so this only needs to be a compact reference. Rows,
          thick rule, no vertical rules, per brand guide §14. The fourth is
          tinted because it's the part nobody else teaches. */}
      <ol className="mt-10 border-t-[1.4px] border-ink">
        {parts.map((part, i) => (
          <li
            key={part.n}
            className={`border-b border-line px-3 py-4 sm:flex sm:gap-6 ${
              i === 3 ? "bg-teal/[0.05]" : ""
            }`}
          >
            <div className="flex items-baseline gap-3 sm:w-72 sm:shrink-0">
              <span className={`eyebrow ${i === 3 ? "text-teal" : ""}`}>
                {part.n}
              </span>
              <h3
                className={`text-[15px] font-semibold ${
                  i === 3 ? "text-teal-dark" : "text-ink"
                }`}
              >
                {part.title}
              </h3>
            </div>
            <p className="mt-1.5 text-[15px] leading-[1.55] text-muted sm:mt-0">
              {part.body}
            </p>
          </li>
        ))}
      </ol>

      {/* The same four parts, filled in for four ordinary jobs. */}
      <div className="mt-12">
        <p className="eyebrow text-teal">In practice</p>
        <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-[1.55] text-muted">
          Same four parts, four different jobs. The last one repeats every
          month, which is exactly the kind worth building once.
        </p>

        <div
          role="tablist"
          aria-label="Example handoffs"
          className="mt-6 flex flex-wrap gap-2.5"
        >
          {examples.map((ex, i) => (
            <button
              key={ex.tab}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`handoff-tab-${i}`}
              aria-selected={selected === i}
              aria-controls={`handoff-panel-${i}`}
              tabIndex={selected === i ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) =>
                handleTabKeys(e, i, examples.length, tabRefs, setSelected)
              }
              className={`rounded-[10px] border-[1.4px] px-4 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none ${
                selected === i
                  ? "border-teal bg-teal/[0.08] text-teal-dark"
                  : "border-line bg-paper text-muted hover:text-ink"
              }`}
            >
              {ex.tab}
            </button>
          ))}
        </div>

        {/* All three panels share one grid cell so the section is always as
            tall as the longest example. Switching tabs then cross-fades in
            place instead of shunting everything below it up the page. */}
        <div className="mt-5 grid">
          {examples.map((example, index) => (
            <div
              key={example.tab}
              role="tabpanel"
              id={`handoff-panel-${index}`}
              aria-labelledby={`handoff-tab-${index}`}
              tabIndex={index === selected ? 0 : -1}
              className={`col-start-1 row-start-1 grid gap-5 transition-opacity duration-300 md:grid-cols-5 motion-reduce:transition-none ${
                index === selected ? "opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="space-y-2.5 md:col-span-3">
                {example.handoff.map((text, i) => (
                  <div key={parts[i].title} className="hard-flat bg-paper p-4">
                    <p className="eyebrow text-[0.65rem] text-teal">
                      {parts[i].title}
                    </p>
                    <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="md:col-span-2">
                <div className="hard h-full bg-paper p-5">
                  <p className="eyebrow font-mono text-[0.65rem]">
                    What comes back
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {example.output.map((line) => (
                      <p
                        key={line}
                        className="text-[14px] leading-[1.55] text-muted"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
