import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const pillars = [
  {
    emoji: "📧",
    title: "AI workflows for work",
    body: "Email, meetings, weekly updates, slides, research, analysis — the real tasks on your plate.",
  },
  {
    emoji: "🧠",
    title: "AI productivity systems",
    body: "Repeatable setups: a weekly work OS, a meeting-prep flow, an inbox system you actually keep.",
  },
  {
    emoji: "⭐",
    title: "Become the AI person",
    body: "Share workflows with your team, build habits that stick, and get visible for doing it.",
  },
  {
    emoji: "🚀",
    title: "Career growth in the AI era",
    body: "Build skills that make you harder to replace and communicate better with AI in the loop.",
  },
];

const workInputs = ["Email", "Meetings", "Updates", "Research", "Data"];
const outcomes = [
  "Hours back every week",
  "Clearer communication",
  "The AI person on your team",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ---------------- Hero ---------------- */}
        <section className="mx-auto max-w-5xl px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-slate">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              Practical AI for everyday professionals
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-6xl">
              Do the annoying parts of your job in{" "}
              <span className="text-teal">half the time</span>.
            </h1>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark sm:w-auto"
              >
                Browse the free resource library →
              </Link>
              <a
                href="#community"
                className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-white/60 sm:w-auto"
              >
                Join the community
              </a>
            </div>
          </div>

          {/* Brand flow — one system, all your everyday work */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:gap-3.5 sm:p-7">
              {/* Inputs */}
              <div className="flex w-full max-w-xs flex-col gap-2 sm:w-auto">
                <span className="mb-0.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate">
                  The work you already do
                </span>
                {workInputs.map((item) => (
                  <span
                    key={item}
                    className="rounded-[10px] border border-border bg-offwhite px-3 py-2 text-center text-[13px] font-medium text-charcoal"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <span
                className="rotate-90 text-lg text-slate sm:rotate-0"
                aria-hidden
              >
                →
              </span>

              {/* Hub */}
              <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-teal px-5 py-4">
                <span className="text-2xl font-bold tracking-tight text-white">
                  AI
                </span>
                <span className="mt-0.5 text-[11px] text-white/80">
                  applied to real work
                </span>
              </div>

              <span
                className="rotate-90 text-lg text-slate sm:rotate-0"
                aria-hidden
              >
                →
              </span>

              {/* Outcomes */}
              <div className="flex w-full max-w-xs flex-col gap-2 sm:w-auto">
                <span className="mb-0.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate">
                  What changes
                </span>
                {outcomes.map((item) => (
                  <span
                    key={item}
                    className="rounded-[10px] border border-teal/20 bg-teal/[0.07] px-3 py-2 text-center text-[13px] font-medium text-teal-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate">
              One repeatable system for the everyday work you already do.
            </p>
          </div>
        </section>

        {/* ---------------- Pillars ---------------- */}
        <section className="border-y border-border bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                What you&apos;ll learn
              </h2>
              <p className="mt-3 text-lg text-slate">
                Less &ldquo;AI news,&rdquo; more &ldquo;here&apos;s exactly how
                I&apos;d use AI to do this work task better.&rdquo;
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-offwhite p-6 transition-shadow hover:shadow-sm"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-xl">
                    {p.emoji}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Resource library callout ---------------- */}
        <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <div className="grid items-center gap-8 rounded-3xl border border-border bg-white p-8 sm:grid-cols-2 sm:p-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Free resource library
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal">
                Guides, templates, and copy-paste workflows
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                A growing library of practical resources — from turning messy
                notes into a clean update, to building a weekly work OS. Free to
                use, organized by what you&apos;re trying to get done.
              </p>
              <Link
                href="/resources"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Open the library →
              </Link>
            </div>

            <ul className="space-y-2.5">
              {[
                { emoji: "📝", label: "Messy Notes → Clean Weekly Update" },
                { emoji: "🎯", label: "Meeting Prep System" },
                { emoji: "💬", label: "ChatGPT for Work — Starter Guide" },
                { emoji: "🎁", label: "The AI Starter Kit" },
              ].map((r) => (
                <li
                  key={r.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-offwhite px-4 py-3"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-base">
                    {r.emoji}
                  </span>
                  <span className="text-sm font-medium text-charcoal">
                    {r.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- Community CTA ---------------- */}
        <section id="community" className="border-t border-border bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
            <div className="mx-auto max-w-2xl rounded-3xl bg-teal px-8 py-12 text-center text-white sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join the free community
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/80">
                Trade practical AI workflows with other professionals, ask
                questions, and get the full resource library in one place. Free
                to join.
              </p>
              <a
                href="https://www.skool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal transition-transform hover:-translate-y-0.5"
              >
                Join free on Skool →
              </a>
              <p className="mt-4 text-xs text-white/60">
                One practical AI workflow you can use at work — every week.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
