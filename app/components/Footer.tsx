import Link from "next/link";
import { Monogram } from "./Monogram";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Monogram size={30} />
          <span className="text-sm text-slate">
            Practical AI for everyday professionals.
          </span>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/resources" className="text-slate hover:text-charcoal">
            Resources
          </Link>
          <a
            href="https://www.youtube.com/@briando"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-charcoal"
          >
            YouTube
          </a>
          <a href="#community" className="text-slate hover:text-charcoal">
            Community
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-4 text-xs text-slate">
          © {new Date().getFullYear()} Brian Do. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
