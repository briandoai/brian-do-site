import Link from "next/link";

// A genuine sequence, step 1 has to happen before step 2, so numbering it is
// earning its keep here, unlike a decorative 01/02/03 on unordered content.
const steps = [
  {
    n: "01",
    title: "Browse the library",
    body: "Find the prompt for the job you're stuck on: an email, an update, a report you rebuild every month.",
  },
  {
    n: "02",
    title: "Copy the prompt",
    body: "Nothing to learn first. It's already written, just swap in your own details.",
  },
  {
    n: "03",
    title: "Paste it into your tool",
    body: "ChatGPT, Claude, or Gemini, whatever your company already gives you. You'll have a real draft in the time it takes to read this.",
  },
];

export function HowItWorks() {
  return (
    <section id="plan" className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">How it works</p>
        <h2 className="headline-sm mt-4 text-ink">
          Copy it, paste it, <span className="px">done</span>.
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-[1.55] text-muted">
          No new skill to learn first. Every resource here is a prompt you can
          copy, not a framework to master. Paste it in, get a real draft, and
          adjust from there.
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
        Get the free library →
      </Link>
    </section>
  );
}
