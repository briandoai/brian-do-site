// ---------------------------------------------------------------
// Resource Library data
//
// Each item links out to a public Notion doc (like sleeautomation.com).
// Replace the `href: "#"` placeholders with your real Notion share links.
// To add a resource: drop a new object in the right category's `items`.
// ---------------------------------------------------------------

export type Resource = {
  emoji: string;
  title: string;
  href: string;
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
        href: "#",
      },
      {
        emoji: "📬",
        title: "One Practical AI Workflow / Week (newsletter)",
        href: "#",
      },
      {
        emoji: "🧭",
        title: "Stop Using AI Randomly: the 20-minute setup",
        href: "#",
      },
    ],
  },
  // Task-level workflows lead: they're the direct, copy-this-prompt entry
  // point. Systems are the next step up once a few individual prompts are
  // already part of someone's week, so they sit second.
  {
    title: "AI Workflows for Work",
    items: [
      { emoji: "📧", title: "Turn a Messy Email Into a Clean One", href: "#" },
      { emoji: "📝", title: "Messy Notes → Clean Weekly Update", href: "#" },
      { emoji: "📊", title: "Build a Slide Deck From Rough Notes", href: "#" },
      { emoji: "🔍", title: "Research a Topic Fast With AI", href: "#" },
      { emoji: "📈", title: "Analyze Data Without Touching a Formula", href: "#" },
    ],
  },
  {
    title: "AI Productivity Systems",
    items: [
      { emoji: "🗓️", title: "The Weekly Work OS", href: "#" },
      { emoji: "🎯", title: "Meeting Prep System", href: "#" },
      { emoji: "📥", title: "The Inbox System", href: "#" },
      { emoji: "📌", title: "Project Update System", href: "#" },
      { emoji: "🧠", title: "Personal Knowledge System", href: "#" },
    ],
  },
  {
    title: "Become the AI Person at Work",
    items: [
      { emoji: "🤝", title: "Share AI Workflows With Your Team", href: "#" },
      { emoji: "🔁", title: "Build AI Habits That Actually Stick", href: "#" },
      { emoji: "🛡️", title: "Use AI Safely at Work: What Not to Paste", href: "#" },
      { emoji: "⭐", title: "Get Visibility by Improving Team Workflows", href: "#" },
    ],
  },
  {
    title: "Tool Tutorials",
    items: [
      { emoji: "💬", title: "ChatGPT for Work: Starter Guide", href: "#" },
      { emoji: "🤖", title: "Claude for Work", href: "#" },
      { emoji: "✨", title: "Gemini for Work", href: "#" },
      { emoji: "📚", title: "NotebookLM for Research", href: "#" },
      { emoji: "🎙️", title: "AI Tools for Meetings", href: "#" },
    ],
  },
  {
    title: "Career Growth in the AI Era",
    items: [
      { emoji: "🚀", title: "Skills That Make You Harder to Replace", href: "#" },
      { emoji: "💡", title: "Communicate Better With AI", href: "#" },
      { emoji: "🧩", title: "How AI Changes Analyst Work", href: "#" },
    ],
  },
];
