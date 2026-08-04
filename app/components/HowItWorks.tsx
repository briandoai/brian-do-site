import Link from "next/link";

// A genuine sequence, step 1 has to happen before step 2, so numbering it is
// earning its keep here, unlike a decorative 01/02/03 on unordered content.
const steps = [
  {
    n: "01",
    title: "Spot the repeat",
    body: "Find the work that comes back every week and lands the same shape every time. That's what's worth building once.",
  },
  {
    n: "02",
    title: "Brief it once",
    body: "Get it right on something real rather than a pretend example. There's a method for this, and it's the next section down.",
  },
  {
    n: "03",
    title: "Make it repeatable",
    body: "Save the brief, run it again next month, and hand it to someone else on your team. That's the point where the hours actually come back.",
  },
];

// The tests are step 01 in practice. Most people can write a decent brief once
// they're shown how; what they can't do yet is look at their own week and see
// which parts of it are mechanical.
const tests = [
  {
    title: "It comes back",
    body: "Weekly, monthly, or every time a request lands. Once is a task. Again is a process.",
  },
  {
    title: "It's the same shape",
    body: "Same sort of inputs going in, same format coming out, even when the details change every time.",
  },
  {
    title: "You're the bottleneck, not the value",
    body: "You're copying, reformatting, and chasing people for updates. The judgment part is real but small, and the mechanical part is most of it.",
  },
];

export function HowItWorks() {
  return (
    <section id="plan" className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">How it works</p>
        <h2 className="headline-sm mt-4 text-ink">
          Find the repeat, build it <span className="px">once</span>.
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-[1.55] text-muted">
          Most jobs hide a few hours a week of work that&apos;s mechanical
          rather than hard. AI is turning into one of those things people just
          expect you to know, the way spreadsheets did. Better to pick it up on
          your own schedule than get caught without it.
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

      {/* Step 01 is the one people get stuck on, so it gets the extra room. */}
      <div className="hard-flat mt-8 bg-paper p-6 sm:p-7">
        <p className="eyebrow text-teal">Spotting one</p>
        <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.55] text-muted">
          Three questions to run against your own week. Yes to all three and
          it&apos;s worth building once.
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {tests.map((test) => (
            <li key={test.title}>
              <h3 className="text-[15px] font-semibold text-ink">
                {test.title}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-[1.55] text-muted">
                {test.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/resources" className="btn btn-primary mt-9">
        Get the free library →
      </Link>
    </section>
  );
}
