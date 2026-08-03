import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { HowItWorks } from "./components/HowItWorks";
import { Faq } from "./components/Faq";
import { resourceCategories } from "./lib/resources";
import { noOrphan } from "./lib/text";

// Pulled from the real library data so the homepage preview can't drift out of
// sync with /resources.
const startHere =
  resourceCategories.find((c) => c.title === "Start Here") ??
  resourceCategories[0];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        <IntroSection />

        <HowItWorks />

        {/* ---------------- Resource library preview ---------------- */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <div className="grid items-start gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-6">
                <p className="eyebrow">Free resource library</p>
                <h2 className="headline-sm mt-4 text-ink">
                  Guides, templates, and copy-paste{" "}
                  <span className="px">workflows</span>.
                </h2>
                <p className="mt-5 max-w-[62ch] text-[1.0625rem] leading-[1.55] text-muted">
                  From turning messy notes into a clean update to building a
                  weekly work OS. Free to use, organized by what you&apos;re
                  trying to get done.
                </p>
                <Link href="/resources" className="btn btn-primary mt-7">
                  Open the library →
                </Link>

                <div className="mt-9 flex flex-wrap gap-2">
                  {resourceCategories.map((c) => (
                    <span
                      key={c.title}
                      className="rounded-[10px] border border-line bg-paper px-3 py-1.5 text-[13px] text-muted"
                    >
                      {c.title}{" "}
                      <span className="text-ink/45">{c.items.length}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* The one promoted element on this page — "start here". */}
              <div className="md:col-span-6">
                <div className="hard-teal bg-paper p-6 sm:p-7">
                  <p className="eyebrow text-teal">{startHere.title}</p>
                  <ul className="mt-5 space-y-2.5">
                    {startHere.items.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="hard-flat group flex items-center gap-3.5 bg-surface px-4 py-3 transition-colors hover:bg-white"
                        >
                          <span
                            aria-hidden
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-paper text-base"
                          >
                            {item.emoji}
                          </span>
                          <span className="flex-1 text-[14.5px] font-medium text-ink text-balance">
                            {noOrphan(item.title)}
                          </span>
                          <span
                            aria-hidden
                            className="text-muted transition-transform group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-muted">
                    New to this? These three are the ones to open first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />

        {/* ---------------- Community CTA ---------------- */}
        <section id="community" className="border-t border-line bg-paper">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
            <div className="hard bg-teal px-8 py-12 text-center sm:px-12 sm:py-14">
              <p className="eyebrow text-white/70">Keep going</p>
              <h2 className="headline-sm mx-auto mt-4 max-w-2xl text-white">
                Compare notes in the <span className="px px-invert">free</span>{" "}
                community.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-[1.55] text-white/80">
                Once you&apos;ve got a workflow running, this is where you ask
                questions, see what other people changed, and find the next
                one to try.
              </p>
              <a
                href="https://www.skool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-invert mt-8"
              >
                Join free on Skool →
              </a>
              <p className="mt-5 text-xs text-white/60">
                One practical AI workflow you can use at work, every week.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
