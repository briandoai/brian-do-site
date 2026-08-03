import Link from "next/link";

// A genuine sequence — step 1 has to happen before step 2 — so numbering it
// is earning its keep here, unlike a decorative 01/02/03 on unordered content.
const steps = [
  {
    n: "01",
    title: "Pick one thing",
    body: "Not ten workflows. One. Something actually on your plate this week: a status update, a full inbox, a deck due Friday.",
  },
  {
    n: "02",
    title: "Use the real prompt",
    body: "Every resource shows exactly what I typed and what came back. Copy it, run it, adjust it for your situation.",
  },
  {
    n: "03",
    title: "Keep it going",
    body: "Bring it to the free community, see how other people are using it, and grab the next one when you're ready.",
  },
];

export function HowItWorks() {
  return (
    <section id="plan" className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">How it works</p>
        <h2 className="headline-sm mt-4 text-ink">
          Three steps, starting <span className="px">today</span>.
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-[1.55] text-muted">
          AI is turning into one of those things people just expect you to
          know, the way spreadsheets did. Better to pick it up on your own
          schedule than get caught without it.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.n}
            className={`${i === 0 ? "hard-teal" : "hard"} bg-paper p-6`}
          >
            <p className={`eyebrow ${i === 0 ? "text-teal" : ""}`}>{step.n}</p>
            <h3 className="mt-3 text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.55] text-muted">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <Link href="/resources" className="btn btn-primary mt-9">
        Start with the free library →
      </Link>
    </section>
  );
}
