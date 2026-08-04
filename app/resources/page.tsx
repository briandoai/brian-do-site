import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Free guides, templates, and workflows to help you use AI at work. Enter your email to unlock the library.",
};

export default function ResourcesGatePage() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:py-20">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> Back
        </Link>

        <div className="mb-10 text-center">
          <p className="eyebrow">Free resource library</p>
          <h1 className="headline-sm mt-4 text-ink">
            Guides, templates, <span className="px">workflows</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-[1.55] text-muted">
            Enter your name and email and the whole library unlocks, free.
            Real examples, real reasoning, organized by what you&apos;re
            trying to get done.
          </p>
        </div>

        {/* The one promoted element on this page, "start here". */}
        <div className="hard-teal mx-auto max-w-md bg-paper p-6 sm:p-8">
          <p className="eyebrow text-teal">Get instant access</p>
          <p className="mt-2 text-sm text-muted">
            Enter your details below to unlock the library.
          </p>

          {/*
            KIT (ConvertKit) FORM
            Replace 0000000 below with the real Kit form ID (7 digits).
            Find it: Kit → Grow → Landing Pages & Forms → this form → Embed →
            "HTML" — copy the number out of the action URL.

            After swapping the ID, also set the form's redirect in Kit itself
            (Settings → after a visitor subscribes → redirect to a URL) to
            https://briandoai.com/resources/library — that's what actually
            sends people to the unlocked library. This page's code alone
            can't do that part; it only submits the signup.
          */}
          <form
            action="https://app.kit.com/forms/0000000/subscriptions"
            method="post"
            data-sv-form="0000000"
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="first_name"
                className="text-sm font-medium text-ink"
              >
                First name
              </label>
              <input
                id="first_name"
                type="text"
                name="fields[first_name]"
                placeholder="Your name"
                autoComplete="given-name"
                required
                className="mt-1.5 w-full rounded-[10px] border border-line bg-paper px-4 py-2.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email_address"
                placeholder="you@company.com"
                autoComplete="email"
                required
                className="mt-1.5 w-full rounded-[10px] border border-line bg-paper px-4 py-2.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Get free access →
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-muted">
            One practical AI workflow a week. No spam. Unsubscribe anytime.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
