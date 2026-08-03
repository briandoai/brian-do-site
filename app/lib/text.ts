// ---------------------------------------------------------------
// Presentation-only text helpers.
// ---------------------------------------------------------------

const NBSP = " ";

/**
 * Glues the last two words together with a non-breaking space so a line can
 * never end with a single stranded word.
 *
 * `text-wrap: pretty` and `balance` handle most copy, but both are browser
 * heuristics that quietly give up — `pretty` on short two-line blocks, and
 * `balance` once a block runs past a few lines. Long resource titles in a
 * narrow card hit both cases, so those get this instead of a suggestion.
 *
 * Purely presentational: the source strings in `resources.ts` stay untouched.
 */
export const noOrphan = (s: string) => s.replace(/\s+(\S+)\s*$/, NBSP + "$1");
