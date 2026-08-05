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

/** Flat lookup used by the [slug] resource page route. */
export function findResourceBySlug(slug: string): Resource | undefined {
  for (const category of resourceCategories) {
    const match = category.items.find((item) => item.slug === slug);
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
      },
    ],
  },
  // Task-level workflows lead: they're the direct, copy-this-prompt entry
  // point. Systems are the next step up once a few individual prompts are
  // already part of someone's week, so they sit second.
  {
    title: "AI Workflows for Work",
    items: [
      { emoji: "🤝", title: "The Handoff: the 4 things AI needs from you", href: "/the-handoff.pdf" },
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
      { emoji: "🔁", title: "Build It Once: turn a result into a workflow", href: "/build-it-once.pdf" },
      { emoji: "⚙️", title: "The One-Time Setup (projects, gems, and standing context)", href: "/the-one-time-setup.pdf" },
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
      { emoji: "🛡️", title: "Never Hand Over: 3 tests before you delegate to AI", href: "/never-hand-over.pdf" },
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
