// ---------------------------------------------------------------
// Resource Library data
//
// Three ways an item can resolve:
//   1. External/file href (e.g. a PDF in /public, or a Notion share link)
//      — just set `href`, leave `page` unset.
//   2. On-site resource page — set `slug` + `page`, leave `href` unset.
//      The library links to /resources/library/{slug}, rendered by the
//      shared template in app/resources/library/[slug]/page.tsx.
//   3. Not built yet — set `comingSoon: true`. Renders as a non-clickable
//      "Coming soon" tag instead of a dead link.
//
// Pull each video's own "STARTER TEMPLATE" section for the `page` content
// — it's already written, this is a formatting step, not new writing.
// To add a resource: drop a new object in the right category's `items`.
//
// STANDARD (2026-08-04): every resource you're promoting from a video's
// description should also get a `landingSlug` + `landingHook`. That gives
// it its own signup page at /resources/{landingSlug} — "Get [X]" instead of
// the generic library ask — so the description link matches what the video
// just promised. Share THAT link in the description, never the raw PDF
// path and never /resources/library directly (see app/resources/[slug]).
// ---------------------------------------------------------------

export type PromptBlock = {
  label?: string;
  text: string;
};

export type ResourcePage = {
  /** One short line under the title, sets up why this exists. */
  intro: string;
  /** Copy-paste blocks — prompts, templates, checklists. */
  prompts?: PromptBlock[];
  /** Optional short numbered/step list, for non-prompt resources. */
  steps?: string[];
  /** Optional closing note — a pro tip or a "how to use this" line. */
  tip?: string;
  /** Which video this came from, shown as a small credit line. */
  source?: string;
};

export type Resource = {
  emoji: string;
  title: string;
  href?: string;
  slug?: string;
  page?: ResourcePage;
  comingSoon?: boolean;
  /** Set this to give the resource its own /resources/{slug} signup page. */
  landingSlug?: string;
  /** One-line "what you get" hook shown on that landing page. */
  landingHook?: string;
};

export type ResourceCategory = {
  title: string;
  items: Resource[];
};

/** Resolves the link target for any resource: on-site page, external/file
 * href, or "#" as a last resort (only ever shown for comingSoon items,
 * which don't render as a link at all — see the library page). */
export function getResourceHref(item: Resource): string {
  if (item.slug) return `/resources/library/${item.slug}`;
  return item.href ?? "#";
}

/** Flat lookup used by the /resources/library/[slug] page. */
export function findResourceBySlug(slug: string): Resource | undefined {
  for (const category of resourceCategories) {
    const match = category.items.find((item) => item.slug === slug);
    if (match) return match;
  }
  return undefined;
}

/** Flat lookup used by the /resources/[slug] landing page and the
 * confirmation page's "here's the thing you asked for" state. */
export function findResourceByLandingSlug(
  landingSlug: string
): Resource | undefined {
  for (const category of resourceCategories) {
    const match = category.items.find(
      (item) => item.landingSlug === landingSlug
    );
    if (match) return match;
  }
  return undefined;
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Start Here",
    items: [
      {
        emoji: "🎁",
        title: "The AI Starter Kit (6 workflows + 30-day tracker)",
        href: "/ai-starter-kit.pdf",
        landingSlug: "ai-starter-kit",
        landingHook:
          "Six workflows — email, meetings, updates, prep, research, slides — plus a 30-day practice plan.",
      },
      {
        emoji: "📬",
        title: "One Practical AI Workflow / Week (newsletter)",
        href: "#",
        comingSoon: true,
      },
      {
        emoji: "🧭",
        title: "Spot the Work Worth Automating (3 questions)",
        href: "/spot-the-work-worth-automating.pdf",
        landingSlug: "spot-the-work-worth-automating",
        landingHook:
          "The three questions that tell you what's actually worth handing over — before you waste an afternoon on the wrong task.",
      },
    ],
  },
  // Task-level workflows lead: they're the direct, copy-this-prompt entry
  // point. Systems are the next step up once a few individual prompts are
  // already part of someone's week, so they sit second.
  {
    title: "AI Workflows for Work",
    items: [
      {
        emoji: "🤝",
        title: "The Handoff: the 4 things AI needs from you",
        href: "/the-handoff.pdf",
        landingSlug: "the-handoff",
        landingHook:
          "The four-part brief that replaces every prompt you've ever copied off the internet.",
      },
      { emoji: "📧", title: "Turn a Messy Email Into a Clean One", href: "#", comingSoon: true },
      { emoji: "📝", title: "Messy Notes → Clean Weekly Update", href: "#", comingSoon: true },
      { emoji: "📊", title: "Build a Slide Deck From Rough Notes", href: "#", comingSoon: true },
      { emoji: "🔍", title: "Research a Topic Fast With AI", href: "#", comingSoon: true },
      { emoji: "📈", title: "Analyze Data Without Touching a Formula", href: "#", comingSoon: true },
    ],
  },
  {
    title: "AI Productivity Systems",
    items: [
      {
        emoji: "🔁",
        title: "Build It Once: turn a result into a workflow",
        href: "/build-it-once.pdf",
        landingSlug: "build-it-once",
        landingHook:
          "Stop rebuilding the same brief from memory every Monday — split it once, save it, reuse it in ninety seconds.",
      },
      {
        emoji: "⚙️",
        title: "The One-Time Setup (projects, gems, and standing context)",
        href: "/the-one-time-setup.pdf",
        landingSlug: "the-one-time-setup",
        landingHook:
          "The 15-minute setup that gets ChatGPT, Claude, or Gemini to already know your context before you type anything.",
      },
      { emoji: "🗓️", title: "The Weekly Work OS", href: "#", comingSoon: true },
      { emoji: "🎯", title: "Meeting Prep System", href: "#", comingSoon: true },
      { emoji: "📥", title: "The Inbox System", href: "#", comingSoon: true },
      { emoji: "📌", title: "Project Update System", href: "#", comingSoon: true },
      { emoji: "🧠", title: "Personal Knowledge System", href: "#", comingSoon: true },
    ],
  },
  {
    title: "Become the AI Person at Work",
    items: [
      { emoji: "🤝", title: "Share AI Workflows With Your Team", href: "#", comingSoon: true },
      { emoji: "🔁", title: "Build AI Habits That Actually Stick", href: "#", comingSoon: true },
      {
        emoji: "🛡️",
        title: "Never Hand Over: 3 tests before you delegate to AI",
        href: "/never-hand-over.pdf",
        landingSlug: "never-hand-over",
        landingHook:
          "The three tests — data, judgment, checkable — that tell you exactly what to keep for yourself.",
      },
      { emoji: "⭐", title: "Get Visibility by Improving Team Workflows", href: "#", comingSoon: true },
    ],
  },
  {
    title: "Tool Tutorials",
    items: [
      { emoji: "💬", title: "ChatGPT for Work: Starter Guide", href: "#", comingSoon: true },
      { emoji: "🤖", title: "Claude for Work", href: "#", comingSoon: true },
      { emoji: "✨", title: "Gemini for Work", href: "#", comingSoon: true },
      { emoji: "📚", title: "NotebookLM for Research", href: "#", comingSoon: true },
      { emoji: "🎙️", title: "AI Tools for Meetings", href: "#", comingSoon: true },
    ],
  },
  {
    title: "Career Growth in the AI Era",
    items: [
      { emoji: "🚀", title: "Skills That Make You Harder to Replace", href: "#", comingSoon: true },
      { emoji: "💡", title: "Communicate Better With AI", href: "#", comingSoon: true },
      { emoji: "🧩", title: "How AI Changes Analyst Work", href: "#", comingSoon: true },
    ],
  },
];
