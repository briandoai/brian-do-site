"use client";

import { useState } from "react";

export function CopyBlock({ label, text }: { label?: string; text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="hard-flat bg-paper p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        {label ? (
          <p className="eyebrow font-mono text-[0.65rem] text-teal">
            {label}
          </p>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-[8px] border-[1.4px] border-line px-2.5 py-1 text-xs font-semibold text-muted transition-colors hover:border-teal hover:text-teal focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="mt-2.5 font-mono text-[13px] leading-[1.6] text-ink">
        {text}
      </p>
    </div>
  );
}
