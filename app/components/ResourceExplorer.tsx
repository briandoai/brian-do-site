"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { resourceCategories, getResourceHref } from "../lib/resources";
import { noOrphan } from "../lib/text";
import { handleTabKeys } from "../lib/tabs";
import { Reveal } from "./Reveal";

// Only ever show three rows, even for the five-item categories. Every category
// has at least three, so the card's height stays put as you move between them
// instead of the page jumping under the cursor.
const PREVIEW_COUNT = 3;

export function ResourceExplorer() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = resourceCategories[selected];

  return (
    <div className="grid items-start gap-10 md:grid-cols-12 md:gap-14">
      <Reveal className="md:col-span-6">
        <p className="eyebrow">Free resource library</p>
        <h2 className="headline-sm mt-4 text-ink">
          Guides, templates, and real <span className="px">workflows</span>.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[1.0625rem] leading-[1.55] text-muted">
          From a weekly work OS to the report you rebuild every month. Free to
          use, organized by what you&apos;re trying to get done.
        </p>
        <Link href="/resources" className="btn btn-primary mt-7">
          Unlock the free library →
        </Link>

        <div
          role="tablist"
          aria-label="Resource categories"
          className="mt-9 flex flex-wrap gap-2"
        >
          {resourceCategories.map((c, i) => (
            <button
              key={c.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`category-tab-${i}`}
              aria-selected={selected === i}
              aria-controls="category-panel"
              tabIndex={selected === i ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) =>
                handleTabKeys(
                  e,
                  i,
                  resourceCategories.length,
                  tabRefs,
                  setSelected,
                )
              }
              className={`rounded-[10px] border-[1.4px] px-3 py-1.5 text-[13px] transition-colors focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none ${
                selected === i
                  ? "border-teal bg-teal/[0.08] font-semibold text-teal-dark"
                  : "border-line bg-surface text-muted hover:text-ink"
              }`}
            >
              {c.title}{" "}
              <span className={selected === i ? "text-teal/60" : "text-ink/45"}>
                {c.items.length}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* The one promoted element in this section: the panel you're exploring. */}
      <Reveal delay={120} className="md:col-span-6">
        <div
          id="category-panel"
          role="tabpanel"
          aria-labelledby={`category-tab-${selected}`}
          tabIndex={0}
          className="hard-teal bg-paper p-6 sm:p-7"
        >
          <p className="eyebrow text-teal">{active.title}</p>

          {/* Every category is stacked into the same grid cell, so the card is
              always as tall as the longest one and switching can't shift the
              page. Inactive ones use visibility, which also keeps their links
              out of the tab order and the accessibility tree. */}
          <div className="mt-5 grid">
            {resourceCategories.map((category, i) => {
              const extra = category.items.length - PREVIEW_COUNT;
              return (
                <div
                  key={category.title}
                  className={`col-start-1 row-start-1 transition-[opacity,transform] duration-300 motion-reduce:transition-none ${
                    i === selected
                      ? "translate-x-0 opacity-100"
                      : "invisible translate-x-2 opacity-0"
                  }`}
                >
                  <ul className="space-y-2.5">
                    {category.items.slice(0, PREVIEW_COUNT).map((item) =>
                      item.comingSoon ? (
                        <li key={item.title}>
                          <div className="hard-flat flex items-center gap-3.5 bg-surface px-4 py-3 opacity-60">
                            <span
                              aria-hidden
                              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-paper text-base"
                            >
                              {item.emoji}
                            </span>
                            <span className="flex-1 text-[14.5px] font-medium text-balance text-ink">
                              {noOrphan(item.title)}
                            </span>
                            <span className="eyebrow shrink-0 text-muted">
                              Soon
                            </span>
                          </div>
                        </li>
                      ) : (
                        <li key={item.title}>
                          <a
                            href={getResourceHref(item)}
                            target={
                              getResourceHref(item).startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              getResourceHref(item).startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="hard-flat row-hover group flex items-center gap-3.5 bg-surface px-4 py-3 transition-colors hover:bg-white"
                          >
                            <span
                              aria-hidden
                              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-paper text-base"
                            >
                              {item.emoji}
                            </span>
                            <span className="flex-1 text-[14.5px] font-medium text-balance text-ink">
                              {noOrphan(item.title)}
                            </span>
                            <span
                              aria-hidden
                              className="text-muted transition-transform group-hover:translate-x-0.5"
                            >
                              →
                            </span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>

                  <p className="mt-5 text-sm text-muted">
                    {extra > 0
                      ? `Plus ${extra} more in this category.`
                      : "New to this? These three are the ones to open first."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
