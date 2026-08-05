"use client";

import type { ReactNode } from "react";
import { useInView } from "../lib/useInView";

// Thin wrapper, not a layout primitive: it renders one block-level div, so it
// works as a grid/flex item like the element it wraps, and callers pass
// `className` through for anything the wrapped content needs (max-width,
// grid span, etc).
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
