import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ResourceSignupForm } from "../../components/ResourceSignupForm";
import {
  resourceCategories,
  findResourceByLandingSlug,
} from "../../lib/resources";

export function generateStaticParams() {
  return resourceCategories
    .flatMap((category) => category.items)
    .filter((item) => item.landingSlug)
    .map((item) => ({ slug: item.landingSlug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = findResourceByLandingSlug(slug);
  return {
    title: resource ? `Get ${resource.title}` : "Free Resource",
    description: resource?.landingHook,
  };
}

export default async function ResourceLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = findResourceByLandingSlug(slug);

  if (!resource) notFound();

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
          <p className="eyebrow">
            <span aria-hidden className="mr-1.5">
              {resource.emoji}
            </span>
            Free resource
          </p>
          <h1 className="headline-sm mt-4 text-ink">
            Get <span className="px">{resource.title.split(":")[0]}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-[1.55] text-muted">
            {resource.landingHook}
          </p>
        </div>

        <div className="hard-teal mx-auto max-w-md bg-paper p-6 sm:p-8">
          <p className="eyebrow text-teal">Get instant access</p>
          <p className="mt-2 text-sm text-muted">
            Enter your details below — it&apos;s free.
          </p>

          <div className="mt-6">
            <ResourceSignupForm
              resourceSlug={resource.landingSlug}
              submitLabel="Send it to me →"
            />
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
