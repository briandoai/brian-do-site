# Redesign brief — brian-do-site → brand v2

Paste this whole file as your prompt to Opus (in Claude Code, inside this repo:
`Projects/brian-do-site`). It has everything Opus needs — brand system, current
state, reference structure, and the deliverable spec.

---

## The task

Redesign this Next.js site (`briandoai.com`) to match the **v2 brand
guide** at `Artifacts/brian_do_brand_guide_v2.md` (read it in full first — it's
the source of truth for every color, type, and shadow decision below).

Use **`https://sleeautomation.com/`** as the *structural* reference — the
section flow and pacing of that page is what to borrow (motion hero → photo +
personal intro → what-you-get → offer tiers → resource library → community
CTA → FAQ → footer). Do **not** copy its visual style (that's clinical
blue/white SaaS). Every section should be rebuilt in Brian's own warm-paper,
teal, solid-shadow system from the brand guide. Think of Sandy's page as the
floor plan, not the paint job.

## Current state — read before touching anything

- `app/globals.css` already has v2 CSS variables defined (`--paper`,
  `--surface`, `--ink`, `--muted`, `--line`, `--orange`, `--green`) with
  back-compat aliases to the old v1 names (`--offwhite`, `--charcoal`,
  `--slate`, `--border`). **The tokens are correct — the markup isn't using
  them right.** `app/page.tsx` still hardcodes literal `bg-white` in a bunch
  of places instead of `bg-paper`/`bg-surface`, so cards read as clinical
  white-on-white instead of warm paper-on-paper. Fix that as part of this
  pass.
- `--font-pixel` (Doto) and `--font-mono` (JetBrains Mono) are wired into
  `@theme inline` in `globals.css`, but **check `app/layout.tsx`** to confirm
  both fonts are actually being loaded (`next/font`) and passed as CSS
  variables — if either is missing, add it. Don't assume it's done.
- Existing components to reuse/extend, not replace wholesale:
  - `app/components/Header.tsx` — sticky nav, has `Monogram`, "Resources" /
    "YouTube" links, "Join free" CTA button.
  - `app/components/Footer.tsx`
  - `app/components/Monogram.tsx` — the BD mark.
  - `app/lib/resources.ts` — the resource library's actual data (6 categories,
    ~25 resources, each `{ emoji, title, href }`, most `href: "#"`
    placeholders still — leave the placeholders as `#`, don't invent URLs).
  - `app/resources/page.tsx` — the existing library page, renders
    `resourceCategories`.
- This is **Next.js 16**, which the repo's own `AGENTS.md` warns has breaking
  API changes vs. training data — **read `node_modules/next/dist/docs/`
  before writing App Router code you're not 100% sure about.** Tailwind is v4
  (note the `@theme inline` import syntax already in `globals.css`, not a
  `tailwind.config.js`).

## Brand system — hard rules (full detail in the brand guide)

- **Palette:** warm paper `#FAF8F2` background, surface `#F2EFE8` for
  raised/inset elements (cards-on-cards, chips, code blocks), warm black
  `#1C1A16` text, warm grey `#6F6A5C` secondary text, deep teal `#0F766E`
  as the one signature accent, warm orange `#F97316` **only** for costs/
  warnings (should appear zero or maybe once on this whole site), green
  `#22C55E` only for checks/confirmations.
- **Shadows:** solid offset, never blurred — `4px 4px 0 var(--ink)`, or
  `4px 4px 0 var(--teal)` on the one "promoted" element per section. No
  `box-shadow: blur` anywhere except this rule is explicitly waived for
  video motion graphics (not relevant here).
- **The signature headline device:** every major headline splits two-tone —
  the phrase in warm-black Inter, with **exactly one word** in teal Doto
  (pixel font, class `.px` already defined in `globals.css`). E.g. "Do the
  annoying parts of your job in [half] the time." Never two pixel words,
  never a whole pixel headline, never pixel below ~40px (it dies at small
  sizes — headline words and big links only, never body/labels/table
  cells/step numbers).
- **One "promoted" element per view:** exactly one card/button per section
  gets the teal border + teal offset shadow treatment. It marks "start here."
  Two promotions in one view and neither reads as special — resist the urge.
- **Eyebrows:** tracked-out uppercase labels (`.eyebrow` class exists) do all
  the labelling work — this is why headings don't need to shout.
- **Radius/borders:** 10px card radius, 1.4px warm-black borders.
- **Tables** (if any): no vertical rules, thick rule under the header row,
  hairlines between rows only.
- JetBrains Mono only for anything code/prompt-like (there may not be any on
  this page — that's fine, don't force it in).

## Section-by-section spec

Build these in order, matching Sandy's *pacing* but Brian's *content and
voice* (brand guide §9–11 — calm, practical, "smart coworker" tone, no AI
hype words):

1. **Motion hero.** Sandy's hero has a typewriter-style animated headline
   ("Build an AI-powered content s|" with a blinking cursor cycling through
   words). Build an equivalent for Brian: keep the current two-tone headline
   ("Do the annoying parts of your job in **[half]** the time") but give it
   real motion — either the pixel word cycling through 2-3 alternates
   (`half` → `less` → `no`) with a typewriter/cursor effect, or a subtle
   entrance animation (fade/slide) on load. Keep it lightweight — CSS
   animation or a small hook, not a heavy animation library, unless one's
   already a dependency. Respect `prefers-reduced-motion`. Keep the existing
   two CTA buttons ("Browse the free resource library" / "Join the
   community") below it.
2. **Photo + personal intro.** New section, doesn't exist yet. Mirrors
   Sandy's "SANDY LEE / I grew 550K followers, then I taught AI to do it"
   block: a real photo (use a placeholder image with a clear `TODO: replace
   with real headshot` comment — don't fabricate a photo path that doesn't
   exist) next to a short first-person bio pulled from tone/positioning in
   the brand guide (§1, §3) — practical AI for everyday professionals, not
   a guru. Optionally include 2-3 stat chips like Sandy's (550K+ / Seoul /
   2018) if Brian has real numbers worth showing (subscriber count, years
   creating, etc.) — if no real numbers exist, skip the stats row rather than
   inventing fake ones.
3. **What you'll learn / pillars.** Already exists in `page.tsx` (4 pillars)
   — restyle to the v2 system (paper/surface cards, solid shadows, warm
   black borders), keep the content.
4. **Resource library preview.** Already exists — restyle, and consider
   pulling 4-6 *real* categories/items from `app/lib/resources.ts` instead
   of the hardcoded 4-item list currently in `page.tsx`, so the homepage
   preview and `/resources` page don't drift out of sync.
5. **Community CTA.** Already exists (teal panel, Skool link) — restyle to
   solid-shadow system, keep content and the Skool link as-is.
6. **FAQ (optional, only if it adds real value).** Sandy has one. Only add
   this if there are genuine, specific questions worth answering (e.g. "Do I
   need to know how to code?", "What if I've never used AI before?") — don't
   pad with generic filler questions just to match the reference.
7. **Footer.** Already exists — restyle only, keep structure/links.

## What NOT to do

- Don't invent real photos, stats, testimonials, or resource URLs that don't
  exist. Use clearly-marked placeholders instead and leave a comment for
  Brian to swap in.
- Don't remove or rewrite `app/lib/resources.ts` content — it's real,
  maintained data. Restyle its rendering, don't touch the array unless
  asked.
- Don't add orange or green outside their reserved use (warnings/costs,
  confirmations respectively).
- Don't pull in a heavy new animation dependency (e.g. Framer Motion) unless
  it's already installed — check `package.json` first. Prefer CSS animations
  for a marketing site like this.
- Don't push to `main` / deploy. This repo is connected to Vercel and
  auto-deploys from `main` — **the live site at briandoai.com goes down or
  changes the instant you push.** Do the work, run `npm run build` and
  `npm run dev` locally to verify it builds clean and looks right, and stop
  there. Brian will review and push himself when he's back.

## Deliverable

- Updated `app/page.tsx`, `app/globals.css` (if needed), `app/layout.tsx`
  (if font loading needs fixing), and any new small components you factor
  out (e.g. `Hero.tsx`, `IntroSection.tsx`) under `app/components/`.
- Confirm `npm run build` passes with no errors.
- Leave the repo on the current branch with the changes **uncommitted** (or
  on a new branch if you prefer) — do not commit/push. Brian wants to look
  at it in `npm run dev` before anything goes live.
- Short summary at the end: what you built, what's still a placeholder
  (photo, stats, any invented copy), and anything you'd flag for Brian's
  input.
