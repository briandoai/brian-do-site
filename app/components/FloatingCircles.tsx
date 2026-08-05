// Sandy Lee's reference uses soft blurred glowing orbs, which reads as
// texture on a dark background. This brand's signature is the opposite: flat
// fills, hard 1.4px borders, shadows that are solid offsets, never blurred.
// So the same "ambient drift" idea, translated: flat brand-color circles,
// sharp edges, low opacity, absolutely positioned behind the hero copy.
// Decorative only — aria-hidden, no pointer events, static (no drift) when
// the reader has asked for reduced motion.
const circles = [
  { size: 120, top: "4%", left: "6%", fill: "var(--teal)", opacity: 0.07, variant: "a", duration: "15s", delay: "0s" },
  { size: 60, top: "62%", left: "2%", fill: "none", stroke: "var(--orange)", opacity: 0.35, variant: "b", duration: "11s", delay: "-4s" },
  { size: 90, top: "10%", left: "88%", fill: "none", stroke: "var(--line)", opacity: 0.9, variant: "c", duration: "13s", delay: "-9s" },
  { size: 40, top: "40%", left: "94%", fill: "var(--teal)", opacity: 0.09, variant: "b", duration: "9s", delay: "-2s" },
  { size: 26, top: "80%", left: "80%", fill: "var(--orange)", opacity: 0.16, variant: "a", duration: "12s", delay: "-6s" },
  { size: 70, top: "78%", left: "40%", fill: "none", stroke: "var(--teal)", opacity: 0.18, variant: "c", duration: "14s", delay: "-3s" },
];

export function FloatingCircles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {circles.map((c, i) => (
        <span
          key={i}
          className={`drift-${c.variant} absolute rounded-full`}
          style={{
            width: c.size,
            height: c.size,
            top: c.top,
            left: c.left,
            background: c.fill === "none" ? "transparent" : c.fill,
            border: c.stroke ? `1.4px solid ${c.stroke}` : "none",
            opacity: c.opacity,
            animationDuration: c.duration,
            animationDelay: c.delay,
          }}
        />
      ))}
    </div>
  );
}
