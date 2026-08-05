import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ResourceSignupForm } from "../components/ResourceSignupForm";

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
            KIT (ConvertKit) FORM — id 9757915, wired 2026-08-04.
            Post-subscribe redirect to /resources/confirmed is set in Kit
            itself. Shared form component — see ResourceSignupForm.tsx.
            No resourceSlug here: this is the generic gate, not a specific
            resource's landing page.
          */}
          <div className="mt-6">
            <ResourceSignupForm />
          </div>

          <p className="mt-4 text-center text-xs text-muted">
            One practical AI workflow a week. No spam. Unsubscribe anytime.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
