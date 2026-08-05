import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "You're In",
  description: "Your free resource library access is confirmed.",
};

export default function ResourcesConfirmedPage() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:py-20">
        <div className="mb-10 text-center">
          <p className="eyebrow">Free resource library</p>
          <h1 className="headline-sm mt-4 text-ink">
            You&apos;re <span className="px">in</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-[1.55] text-muted">
            Your access is confirmed — the whole library unlocks below,
            AI Starter Kit included.
          </p>
        </div>

        {/* The one promoted element on this page, "start here". */}
        <div className="hard-teal mx-auto max-w-md bg-paper p-6 text-center sm:p-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--paper)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
              aria-hidden
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <p className="eyebrow mt-5 text-teal">Confirmed</p>
          <p className="mt-2 text-sm text-muted">
            Click below to open the library — guides, templates, and
            workflows, organized by what you&apos;re trying to get done.
          </p>

          <Link
            href="/resources/library"
            className="btn btn-primary mt-6 w-full"
          >
            Access resources →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
