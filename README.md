# Brian Do — site

Practical AI for everyday professionals. A homepage + a free resource library,
in the v1 brand (Deep Teal `#0F766E` / off-white / Inter). Built to model
sleeautomation.com's structure.

## Run locally

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (both pages are static)
```

## Edit your resources

All library content lives in **one file**: [`app/lib/resources.ts`](app/lib/resources.ts).

- Each resource is `{ emoji, title, href }`.
- Replace every `href: "#"` with your real **public Notion share link**
  (Notion → Share → "Publish to web" → copy link).
- Add a resource by dropping a new object into the right category's `items`.
- Add a category by adding a new `{ title, items: [...] }` block.

Links starting with `http` open in a new tab automatically.

## Things to point at real URLs

- **Community buttons** → currently `https://www.skool.com/` (Header, homepage,
  resources page). Swap for your real Skool group URL once it's live.
- **YouTube link** → `https://www.youtube.com/@briando` in Header/Footer. Fix the
  handle if different.
- **`metadataBase`** in [`app/layout.tsx`](app/layout.tsx) → set to your real domain.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework auto-detects as Next.js. Click Deploy. Done.
4. Add your custom domain in Vercel → Project → Settings → Domains.

No environment variables or config needed.

## Structure

```
app/
  layout.tsx            Root layout — Inter font, metadata
  globals.css           Brand tokens (teal system)
  page.tsx              Homepage
  resources/page.tsx    Resource library
  lib/resources.ts      ← edit your resources here
  components/           Header, Footer, Monogram (BD mark)
```
