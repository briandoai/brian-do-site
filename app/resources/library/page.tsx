import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { resourceCategories } from "../../lib/resources";
import { noOrphan } from "../../lib/text";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Free guides, templates, and workflows to help you use AI at work. Save time, communicate better, become the AI person on your team.",
};

export default function LibraryPage() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> Back
        </Link>

        {/* Page header */}
        <div className="mb-12">
          <p className="eyebrow">Free resource library</p>
          <h1 className="headline mt-4 text-ink">
            Guides, templates, <span className="px">workflows</span>.
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg leading-[1.55] text-muted">
            Free to use, organized by what you&apos;re trying to get done. Open
            one, copy the exact prompt, use it at work this week.
          </p>
        </div>

        {/* Categories — the first one is the promoted "start here". */}
        <div className="space-y-12">
          {resourceCategories.map((category, i) => (
            <section key={category.title}>
              <h2 className="eyebrow mb-4 text-teal">{category.title}</h2>

              <ul
                className={`divide-y divide-line overflow-hidden bg-paper ${
                  i === 0 ? "hard-teal" : "hard"
                }`}
              >
                {category.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-surface sm:px-5"
                    >
                      <span
                        aria-hidden
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-line bg-surface text-lg"
                      >
                        {item.emoji}
                      </span>
                      <span className="flex-1 text-[15px] font-medium text-ink text-balance">
                        {noOrphan(item.title)}
                      </span>
                      <span
                        aria-hidden
                        className="text-muted transition-all group-hover:translate-x-0.5 group-hover:text-teal"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Community CTA */}
        <div
          id="community"
          className="hard mt-16 bg-teal px-6 py-9 sm:px-10 sm:py-11"
        >
          {/* Soft open. Anyone reading this already signed up, so there's
              nothing to ask them for, just tell them what's coming. */}
          <p className="eyebrow text-white/70">Opening soon</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            A free community is on the way
          </h2>
          <p className="mt-3 max-w-xl text-[1.0625rem] leading-[1.55] text-white/80">
            Somewhere to trade practical AI workflows with other people working
            on the same problems. You&apos;re already on the list, so the
            invite will land in your inbox when it opens.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
