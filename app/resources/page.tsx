import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { resourceCategories } from "../lib/resources";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Free guides, templates, and workflows to help you use AI at work. Save time, communicate better, become the AI person on your team.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate transition-colors hover:text-charcoal"
        >
          <span aria-hidden>←</span> Back
        </Link>

        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Resource Library
          </h1>
          <p className="mt-3 text-lg text-slate">
            Free guides, templates, and workflows you can use at work this week.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category) => (
            <section key={category.title}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                {category.title}
              </h2>

              <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
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
                      className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-offwhite sm:px-5"
                    >
                      <span
                        aria-hidden
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-offwhite text-lg"
                      >
                        {item.emoji}
                      </span>
                      <span className="flex-1 text-[15px] font-medium text-charcoal">
                        {item.title}
                      </span>
                      <span
                        aria-hidden
                        className="text-slate transition-all group-hover:translate-x-0.5 group-hover:text-teal"
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
          className="mt-16 rounded-2xl border border-border bg-teal px-6 py-8 text-white sm:px-10 sm:py-10"
        >
          <h2 className="text-2xl font-bold tracking-tight">
            Get the full library + a free community
          </h2>
          <p className="mt-2 max-w-xl text-teal-50/90 text-white/80">
            Join thousands of professionals sharing practical AI workflows for
            real work. Free to join.
          </p>
          <a
            href="https://www.skool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-teal transition-transform hover:-translate-y-0.5"
          >
            Join the community — free →
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
