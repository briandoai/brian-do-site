// BD monogram — rounded teal square, white letters.
// Doubles as the site's brand mark in the header and footer.

export function Monogram({ size = 36 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded-[10px] bg-teal font-bold text-white select-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.42,
        letterSpacing: "-0.02em",
      }}
    >
      BD
    </span>
  );
}
