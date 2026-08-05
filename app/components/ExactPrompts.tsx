"use client";

import { useRef, useState } from "react";
import { handleTabKeys } from "../lib/tabs";

// The site's actual differentiator: not theory, the exact prompt you can
// copy and the real output it produced. Four ordinary jobs, each with a
// full prompt (not a fill-in-the-blank template) and the draft it returned,
// so the reader can judge the quality before they ever paste it in.
const examples = [
  {
    tab: "Messy email",
    prompt:
      "I need to reply to a client who's annoyed we missed Thursday's deadline. I want to keep the relationship, not win the argument. Here's the thread so far, plus my rough notes on what actually went wrong on our side: [paste thread + notes]. Write a reply in four sentences that owns the miss without groveling, something I can send without editing. Pick the wording yourself, but don't invent a new delivery date, I'll confirm that with the team first.",
    output: [
      "Hi Dana, you're right that we missed Thursday, and that one's on us.",
      "The holdup was our vendor handoff, nothing to do with anything on your side.",
      "I don't want to give you a new date until I've confirmed it with the team, so I'll have that to you Monday.",
      "Happy to get on a call before then if it's useful.",
    ],
  },
  {
    tab: "Meeting prep",
    prompt:
      "I have a quarterly review with my manager tomorrow. She cares about blockers, not activity. Here's last quarter's notes, my tracker export, and the two projects that slipped: [paste notes + export]. Give me one page I can skim walking in, bullets, no preamble. Flag what you'd ask if you were her, and don't soften the slipped items to make them sound better.",
    output: [
      "Two slipped: vendor migration, blocked on procurement since week 3. Analytics rebuild, scope grew after the data audit.",
      "She'll likely ask what changed at week 3, and why it wasn't raised then.",
      "Decision to bring: pull Q3 headcount forward, or let the rebuild land in Q4.",
    ],
  },
  {
    tab: "Weekly update",
    prompt:
      "Write my Friday update to a team that skims, half of them only read the first line. Here's my raw notes from the week, the threads I starred, and the deck we shipped Tuesday: [paste notes]. Top line first, then three bullets, nothing that reads like filler. Cut anything that's only activity and keep the one item that actually needs someone to decide.",
    output: [
      "Onboarding deck shipped. Migration is blocked and needs a call this week.",
      "Deck went out Tuesday, feedback due Friday.",
      "Vendor migration blocked on procurement, need a contact by Wednesday.",
      "Analytics rebuild scope grew, flagging now before it slips.",
    ],
  },
  {
    tab: "Monthly report",
    prompt:
      "Rebuild my board report for this month. Same structure as last month so nobody has to relearn it, here's last month's finished report, this month's raw exports, and my notes on what changed: [paste report + exports]. Update the numbers, rewrite the commentary, and flag anything that moved more than ten percent with why you think it moved. Don't guess at causes you can't see in the data.",
    output: [
      "Revenue up 12 percent, tracking to the two enterprise renewals that closed late last month.",
      "Support tickets up 18 percent. I can see the volume but nothing in the exports explains it, worth checking with the team before this goes out.",
      "Everything else sits inside the usual range. Commentary carried over with the dates updated.",
    ],
  },
];

export function ExactPrompts() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Exact prompts</p>
          <h2 className="headline-sm mt-4 text-ink">
            Copy the <span className="px">prompt</span>. Get the output.
          </h2>
          <p className="mt-5 max-w-[62ch] text-lg leading-[1.55] text-muted">
            No framework to learn first. Every one of these is the actual
            prompt I used, word for word. Swap in your own details, paste it
            into ChatGPT, Claude, or Gemini, and you&apos;ll get something
            close to what&apos;s on the right.
          </p>
        </div>

        <div className="mt-12">
          <p className="eyebrow text-teal">In practice</p>
          <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-[1.55] text-muted">
            Four ordinary jobs, four real prompts. The last one repeats every
            month, which is exactly the kind worth saving.
          </p>

          <div
            role="tablist"
            aria-label="Example prompts"
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {examples.map((ex, i) => (
              <button
                key={ex.tab}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`prompt-tab-${i}`}
                aria-selected={selected === i}
                aria-controls={`prompt-panel-${i}`}
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

          {/* All panels share one grid cell so the section is always as tall
              as the longest example; switching cross-fades instead of
              shunting everything below it up the page. */}
          <div className="mt-5 grid">
            {examples.map((example, index) => (
              <div
                key={example.tab}
                role="tabpanel"
                id={`prompt-panel-${index}`}
                aria-labelledby={`prompt-tab-${index}`}
                tabIndex={index === selected ? 0 : -1}
                className={`col-start-1 row-start-1 grid gap-5 transition-opacity duration-300 md:grid-cols-5 motion-reduce:transition-none ${
                  index === selected ? "opacity-100" : "invisible opacity-0"
                }`}
              >
                <div className="md:col-span-3">
                  <div className="hard-flat h-full bg-paper p-4 sm:p-5">
                    <p className="eyebrow font-mono text-[0.65rem] text-teal">
                      The prompt
                    </p>
                    <p className="mt-2.5 font-mono text-[13px] leading-[1.6] text-ink">
                      {example.prompt}
                    </p>
                  </div>
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
