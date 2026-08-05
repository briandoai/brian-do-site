// ---------------------------------------------------------------
// Resource Library data
//
// Each item links out to a public Notion doc (like sleeautomation.com)
// or a file in /public. Only items with a real href and no `comingSoon`
// flag render as clickable — everything else shows a "Coming soon" tag
// instead of a dead link. Flip `comingSoon` to false (and set the real
// href) as each one actually ships.
// To add a resource: drop a new object in the right category's `items`.
// ---------------------------------------------------------------

export type Resource = {
  emoji: string;
  title: string;
  href: string;
  comingSoon?: boolean;
};

export type ResourceCategory = {
  title: string;
  items: Resource[];
};

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
        title: "Stop Using AI Randomly: the 20-minute setup",
        href: "#",
        comingSoon: true,
      },
    ],
  },
  // Task-level workflows lead: they're the direct, copy-this-prompt entry
  // point. Systems are the next step up once a few individual prompts are
  // already part of someone's week, so they sit second.
  {
    title: "AI Workflows for Work",
    items: [
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
      { emoji: "🛡️", title: "Use AI Safely at Work: What Not to Paste", href: "#", comingSoon: true },
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
