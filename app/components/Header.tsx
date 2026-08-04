import Link from "next/link";
import { Monogram } from "./Monogram";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Monogram size={34} />
          {/* Below 375px the mark plus three nav items overflow the viewport.
              The monogram still identifies the site, so the wordmark is what
              gives way first. */}
          <span className="hidden text-[15px] font-semibold tracking-tight text-ink min-[375px]:inline">
            Brian Do
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-3">
          {/* One direct CTA, consistently: the library, not the community.
              It's the zero-friction, self-serve ask — the button should point
              there everywhere, not split attention between two "free" doors. */}
          <a
            href="https://www.youtube.com/@briandoai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            YouTube
          </a>
          {/* Four items (mark, YouTube, Community, button) don't fit next to
              each other below sm — Community stays reachable via the footer,
              the intro section, and the community CTA itself, so it's what
              gives way on a phone. */}
          <a
            href="#community"
            className="hidden rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink sm:inline-block"
          >
            Community
          </a>
          <Link
            href="/resources"
            className="btn btn-primary ml-1 px-4 py-2 text-sm"
          >
            Library
          </Link>
        </nav>
      </div>
    </header>
  );
}
