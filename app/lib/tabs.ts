// ---------------------------------------------------------------
// Shared keyboard behaviour for tab strips.
//
// A tablist is expected to behave like one control, not like N separate
// buttons: arrows move between tabs, Home/End jump to the ends, and only the
// selected tab sits in the page's tab order. The exact-prompts demo and the
// resource explorer both use this, so it lives here rather than being written twice.
// ---------------------------------------------------------------

type ButtonRefs = { current: (HTMLButtonElement | null)[] };

export function handleTabKeys(
  event: { key: string; preventDefault: () => void },
  index: number,
  count: number,
  refs: ButtonRefs,
  select: (next: number) => void,
) {
  let next = index;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    next = (index + 1) % count;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    next = (index - 1 + count) % count;
  } else if (event.key === "Home") {
    next = 0;
  } else if (event.key === "End") {
    next = count - 1;
  } else {
    return;
  }

  event.preventDefault();
  select(next);
  refs.current[next]?.focus();
}
