import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { CopyBlock } from "../../../components/CopyBlock";
import {
  resourceCategories,
  findResourceBySlug,
} from "../../../lib/resources";

export function generateStaticParams() {
  return resourceCategories
    .flatMap((category) => category.items)
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = findResourceBySlug(slug);
  return {
    title: resource ? resource.title : "Resource",
    description: resource?.page?.intro,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = findResourceBySlug(slug);

  if (!resource || !resource.page) notFound();
  const { page } = resource;

  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14 sm:py-20">
        <Link
          href="/resources/library"
          className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> Back to the library
        </Link>

        <div className="mb-10">
          <p className="eyebrow">
            <span aria-hidden className="mr-1.5">
              {resource.emoji}
            </span>
            Free resource
          </p>
          <h1 className="headline-sm mt-4 text-ink">{resource.title}</h1>
          <p className="mt-5 text-lg leading-[1.55] text-muted">
            {page.intro}
          </p>
        </div>

        {page.steps ? (
          <div className="hard-teal space-y-0 divide-y divide-line bg-paper">
            {page.steps.map((step, i) => (
              <div key={step} className="flex gap-4 px-5 py-4">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-paper"
                >
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[1.55] text-ink">{step}</p>
              </div>
            ))}
          </div>
        ) : null}

        {page.prompts && page.prompts.length > 0 ? (
          <div className="space-y-4">
            {page.prompts.map((prompt, i) => (
              <CopyBlock
                key={i}
                label={prompt.label ?? "The prompt"}
                text={prompt.text}
              />
            ))}
          </div>
        ) : null}

        {page.tip ? (
          <div className="hard mt-8 bg-surface p-5">
            <p className="eyebrow text-teal">How to use this</p>
            <p className="mt-2 text-[15px] leading-[1.55] text-ink">
              {page.tip}
            </p>
          </div>
        ) : null}

        {page.source ? (
          <p className="mt-8 text-sm text-muted">From: {page.source}</p>
        ) : null}

        <Link
          href="/resources/library"
          className="btn btn-primary mt-10 inline-flex"
        >
          ← Back to the full library
        </Link>
      </main>

      <Footer />
    </>
  );
}
