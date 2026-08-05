"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  findResourceByLandingSlug,
  type Resource,
} from "../../lib/resources";
import { REQUESTED_RESOURCE_KEY } from "../../components/ResourceSignupForm";

function CheckIcon() {
  return (
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
  );
}

export default function ResourcesConfirmedPage() {
  // null = "haven't checked yet" (avoids a flash of the wrong state),
  // undefined = "checked, nothing specific was requested".
  const [resource, setResource] = useState<Resource | null | undefined>(null);

  useEffect(() => {
    const slug = localStorage.getItem(REQUESTED_RESOURCE_KEY);
    localStorage.removeItem(REQUESTED_RESOURCE_KEY);
    setResource(slug ? findResourceByLandingSlug(slug) : undefined);
  }, []);

  if (resource === null) {
    // Still checking — render nothing rather than flash the generic state.
    return (
      <>
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:py-20" />
        <Footer />
      </>
    );
  }

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
            One more thing — check your inbox and confirm your email if Kit
            asks you to.{" "}
            {resource
              ? "Once that's done, your download is ready below."
              : "Once that's done, the whole library unlocks below, AI Starter Kit included."}
          </p>
        </div>

        {resource ? (
          <div className="hard-teal mx-auto max-w-md bg-paper p-6 text-center sm:p-8">
            <CheckIcon />
            <p className="eyebrow mt-5 text-teal">Confirmed</p>
            <p className="mt-2 text-sm font-medium text-ink">
              {resource.title}
            </p>
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full"
            >
              Download now →
            </a>
            <Link
              href="/resources/library"
              className="mt-4 inline-block text-sm font-medium text-muted transition-colors hover:text-teal"
            >
              See the rest of the free library →
            </Link>
          </div>
        ) : (
          <div className="hard-teal mx-auto max-w-md bg-paper p-6 text-center sm:p-8">
            <CheckIcon />
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
        )}
      </main>

      <Footer />
    </>
  );
}
