import Link from "next/link";
import { Monogram } from "./Monogram";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-offwhite/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Monogram size={34} />
          <span className="text-[15px] font-semibold tracking-tight text-charcoal">
            Brian Do
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/resources"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate transition-colors hover:text-charcoal"
          >
            Resources
          </Link>
          <a
            href="https://www.youtube.com/@briando"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate transition-colors hover:text-charcoal"
          >
            YouTube
          </a>
          <a
            href="#community"
            className="ml-1 rounded-lg bg-teal px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Join free
          </a>
        </nav>
      </div>
    </header>
  );
}
