import Image from "next/image";
import Link from "next/link";

export function IntroSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:py-20 md:grid-cols-12 md:gap-14">
        {/* Photo — a transparent-background cutout sitting on a teal block, so
            it reads as part of the paper system rather than a pasted-in
            rectangle. Swap public/brian.png to change it; keep the cutout. */}
        <div className="md:col-span-5">
          <div className="hard relative mx-auto aspect-square w-full max-w-sm overflow-hidden bg-teal">
            <Image
              src="/brian.png"
              alt="Brian Do"
              width={800}
              height={800}
              sizes="(min-width: 768px) 24rem, 100vw"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="eyebrow">Brian Do</p>

          <h2 className="headline-sm mt-4 text-ink">
            I use AI at <span className="px">work</span>. That&apos;s the
            whole pitch.
          </h2>

          <div className="mt-6 max-w-[62ch] space-y-4 text-[1.0625rem] leading-[1.55] text-muted">
            <p>
              Most of the people I talk to already do solid work. They just
              haven&apos;t had anyone show them how AI fits into a real weekly
              update, a messy inbox, or a meeting nobody wrote up.
            </p>
            <p>
              I make videos about exactly that, turning the ordinary stuff
              into a workflow you can reuse: the email you&apos;ve been
              avoiding, the notes nobody&apos;s going to read twice.
            </p>
            <p>
              Most AI content is either hype or a tool review. I&apos;d rather
              show you how I&apos;d brief it, what came back, and where I let
              it make the call. If you can use it at work tomorrow, it was
              worth making.
            </p>
            <p className="text-ink">
              None of this needs special training. It&apos;s the same thing you
              already do when you hand work to a colleague.
            </p>
          </div>

          {/* Library first — it's the direct, self-serve ask. Community and
              YouTube are quieter, supporting links, not competing CTAs. */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link href="/resources" className="btn btn-primary px-4 py-2 text-sm">
              Free resource library
            </Link>
            <a
              href="#community"
              className="hard-flat bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Free community
            </a>
            <a
              href="https://www.youtube.com/@briandoai"
              target="_blank"
              rel="noopener noreferrer"
              className="hard-flat bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
