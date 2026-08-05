"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// The signature device, animated: one teal pixel word, typed and retyped.
// "in half the time." → "in less time." → "in no time."
//
// The whole tail is animated, not just the word, so that nothing ever sits to
// the right of the caret. Typing only the word made the headline re-wrap as it
// shrank — "time." jumped between lines, which is far more distracting than
// the typing itself. First word of each tail is the pixel word; the rest is
// plain ink, keeping the brand's one-pixel-word-per-headline rule.
const VARIANTS = ["half the time.", "less time.", "no time."] as const;

const firstWordEnd = (s: string) => {
  const i = s.indexOf(" ");
  return i === -1 ? s.length : i;
};

// The longest variant, pre-split. The hidden sizing copy has to render this
// through the very same markup as the live line — pixel word in Doto and all.
// Doto is far wider than Inter at the same size, so a sizing copy set entirely
// in Inter reserves a box too narrow for the real text, which then wraps inside
// it and spills over whatever follows the headline.
const WIDEST = VARIANTS[0];
const WIDEST_WORD = WIDEST.slice(0, firstWordEnd(WIDEST));
const WIDEST_REST = WIDEST.slice(firstWordEnd(WIDEST));

const TYPE_MS = 70;
const ERASE_MS = 38;
const HOLD_MS = 2400;
const SWAP_MS = 260;

function useTypewriter() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState<string>(VARIANTS[0]);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    // Never start the timers at all if the reader has asked for less motion.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const full = VARIANTS[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!erasing) {
      timer =
        typed.length < full.length
          ? setTimeout(() => setTyped(full.slice(0, typed.length + 1)), TYPE_MS)
          : setTimeout(() => setErasing(true), HOLD_MS);
    } else {
      timer =
        typed.length > 0
          ? setTimeout(() => setTyped(typed.slice(0, -1)), ERASE_MS)
          : setTimeout(() => {
              setIndex((i) => (i + 1) % VARIANTS.length);
              setErasing(false);
            }, SWAP_MS);
    }

    return () => clearTimeout(timer);
  }, [typed, erasing, index]);

  const cut = firstWordEnd(VARIANTS[index]);
  return {
    // The pixel word, and everything after it, split at the first space.
    pixelWord: typed.slice(0, Math.min(typed.length, cut)),
    rest: typed.length > cut ? typed.slice(cut) : "",
  };
}

const workInputs = ["Email", "Meetings", "Updates", "Research", "Data"];
const outcomes = [
  "Hours back every week",
  "Clearer communication",
  "The AI person on your team",
];

export function Hero() {
  const { pixelWord, rest } = useTypewriter();

  return (
    <section className="mx-auto max-w-5xl px-5 pt-14 pb-16 sm:pt-20 sm:pb-24">
      {/* No max-width here: the headline needs the section's full measure to
          keep its first line intact. Body copy sets its own narrower measure. */}
      <div>
        <p className="eyebrow rise">Practical AI for everyday professionals</p>

        <h1
          className="headline rise mt-5 text-ink"
          style={{ animationDelay: "90ms" }}
        >
          Do the annoying parts of your job
          {/* Deliberate break: it starts the animated tail at a fixed x, so the
              pixel word can never be shunted to a new line as the tail grows. */}
          <br />
          {/* The hidden copy of the longest variant reserves the tail's box, so
              a shorter variant can't shrink the headline by a line and jolt the
              whole page upward. Matters on narrow screens, where "half the
              time." wraps and "no time." doesn't. */}
          <span className="relative inline-block max-w-full">
            <span aria-hidden className="invisible">
              in <span className="px">{WIDEST_WORD}</span>
              {WIDEST_REST}
              <span className="caret" />
            </span>
            <span className="absolute top-0 left-0 w-full">
              in <span className="px">{pixelWord}</span>
              {rest}
              <span className="caret" aria-hidden />
            </span>
          </span>
        </h1>

        <p
          className="rise mt-6 max-w-[62ch] text-lg leading-[1.55] text-muted"
          style={{ animationDelay: "180ms" }}
        >
          I make AI workflows for people whose job isn&apos;t AI: ops, finance,
          HR, marketing, project management. The exact prompt I used, copy-paste
          ready, plus what it actually produced.
        </p>

        <div
          className="rise mt-9 flex flex-col gap-3.5 sm:flex-row"
          style={{ animationDelay: "270ms" }}
        >
          <Link href="/resources" className="btn btn-primary">
            Get the free resource library →
          </Link>
          <a href="#community" className="btn btn-secondary">
            Join the community
          </a>
        </div>
      </div>

      {/* The work you already do → one system → what changes */}
      <div
        className="rise mt-14 sm:mt-16"
        style={{ animationDelay: "380ms" }}
      >
        <div className="hard flex flex-col items-center justify-center gap-3 bg-paper p-6 sm:flex-row sm:gap-4 sm:p-8">
          <div className="flex w-full max-w-xs flex-col gap-2 sm:w-auto">
            <span className="eyebrow mb-1 text-center text-[0.65rem]">
              Work you redo every week
            </span>
            {workInputs.map((item) => (
              <span
                key={item}
                className="rounded-[10px] border border-line bg-surface px-3 py-2 text-center text-[13px] font-medium text-balance text-ink"
              >
                {item}
              </span>
            ))}
          </div>

          <span
            className="rotate-90 text-xl text-muted sm:rotate-0"
            aria-hidden
          >
            →
          </span>

          <div className="hard flex shrink-0 flex-col items-center justify-center bg-teal px-6 py-5">
            <span className="text-2xl font-bold tracking-tight text-white">
              AI
            </span>
            <span className="mt-0.5 text-[11px] text-white/80">
              applied to real work
            </span>
          </div>

          <span
            className="rotate-90 text-xl text-muted sm:rotate-0"
            aria-hidden
          >
            →
          </span>

          <div className="flex w-full max-w-xs flex-col gap-2 sm:w-auto">
            <span className="eyebrow mb-1 text-center text-[0.65rem]">
              What changes
            </span>
            {outcomes.map((item) => (
              <span
                key={item}
                className="rounded-[10px] border border-teal/25 bg-teal/[0.06] px-3 py-2 text-center text-[13px] font-medium text-balance text-teal-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">
          The Friday update that used to eat your afternoon takes fifteen
          minutes, and you leave on time.
        </p>
      </div>
    </section>
  );
}
