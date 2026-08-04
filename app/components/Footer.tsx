import Link from "next/link";
import { Monogram } from "./Monogram";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Monogram size={30} />
          <span className="text-sm text-balance text-muted">
            Practical AI for everyday professionals.
          </span>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/resources" className="text-muted hover:text-ink">
            Resources
          </Link>
          <a
            href="https://www.youtube.com/@briandoai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            YouTube
          </a>
          <a href="#community" className="text-muted hover:text-ink">
            Community
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-4 text-xs text-muted">
          © {new Date().getFullYear()} Brian Do. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
