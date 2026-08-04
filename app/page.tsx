import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { TheHandoff } from "./components/TheHandoff";
import { HowItWorks } from "./components/HowItWorks";
import { ResourceExplorer } from "./components/ResourceExplorer";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        <IntroSection />

        {/* Overview before deep dive: HowItWorks is the map, TheHandoff is
            step 02 up close. The other way round meant the three-step summary
            landed as a restatement of what had just been taught in detail.
            Backgrounds alternate paper/surface so no two sections butt up
            against each other on the same ground. */}
        <HowItWorks />

        <TheHandoff />

        {/* ---------------- Resource library preview ---------------- */}
        <section>
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <ResourceExplorer />
          </div>
        </section>

        <Faq />

        {/* ---------------- Community CTA ---------------- */}
        <section id="community" className="bg-paper">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
            <div className="hard bg-teal px-8 py-12 text-center sm:px-12 sm:py-14">
              {/* Soft open: the group isn't stood up yet, so this points at
                  the same email list rather than a dead Skool homepage. */}
              <p className="eyebrow text-white/70">Opening soon</p>
              <h2 className="headline-sm mx-auto mt-4 max-w-2xl text-white">
                Compare notes in the <span className="px px-invert">free</span>{" "}
                community.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-[1.55] text-white/80">
                Once you&apos;ve got a workflow running, this is where
                you&apos;ll ask questions, see what other people changed, and
                find the next one to try. It opens shortly, and it&apos;s free
                when it does.
              </p>
              <Link href="/resources" className="btn btn-invert mt-8">
                Get on the list →
              </Link>
              <p className="mt-5 text-xs text-white/60">
                Same signup as the library. I&apos;ll send the invite when
                it&apos;s open.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
