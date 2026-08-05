"use client";

export const REQUESTED_RESOURCE_KEY = "requestedResource";

/**
 * The one Kit form (id 9757915) used everywhere on the site. Pass
 * `resourceSlug` from a per-resource landing page (see
 * app/resources/[slug]/page.tsx) and this records which resource the
 * visitor asked for — in localStorage, so the confirmation page can read
 * it after Kit's own redirect lands them there, and as a hidden field on
 * the Kit form itself, for segmentation inside Kit later.
 *
 * Omit `resourceSlug` (as the generic /resources gate page does) and it
 * clears any stale value instead, so a previous landing-page visit doesn't
 * leak into a generic signup.
 */
export function ResourceSignupForm({
  resourceSlug,
  submitLabel = "Get free access →",
}: {
  resourceSlug?: string;
  submitLabel?: string;
}) {
  function handleSubmit() {
    if (resourceSlug) {
      localStorage.setItem(REQUESTED_RESOURCE_KEY, resourceSlug);
    } else {
      localStorage.removeItem(REQUESTED_RESOURCE_KEY);
    }
    // Real form POST to Kit proceeds after this — not prevented.
  }

  return (
    <form
      action="https://app.kit.com/forms/9757915/subscriptions"
      method="post"
      data-sv-form="9757915"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="first_name" className="text-sm font-medium text-ink">
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

      {resourceSlug ? (
        <input
          type="hidden"
          name="fields[requested_resource]"
          value={resourceSlug}
        />
      ) : null}

      <button type="submit" className="btn btn-primary w-full">
        {submitLabel}
      </button>
    </form>
  );
}
