import { FeatureHighlight } from "@/components/feature-highlight"
import { OtherFeatures } from "@/components/other-features"
import {
  captureEvent,
  useUserScrolledTheEntireLandingPage,
} from "@/lib/analytics"
import Link from "next/link"

export default function Home() {
  useUserScrolledTheEntireLandingPage()

  return (
    <main>
      <section id="header">
        <nav className="relative p-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" title="Toki">
              <span className="text-xl font-semibold">Toki</span>
            </Link>

            <div className="flex items-center gap-4 font-medium text-gray-700">
              <Link
                style={{ wordSpacing: "3px" }}
                className="hidden rounded-lg px-4 py-3 hover:underline md:block"
                href="#how-it-works"
                title="How it works"
              >
                How it works
              </Link>

              <Link
                className="rounded-lg bg-black px-4 py-3 font-semibold text-white hover:underline"
                href="https://tally.so/r/meAv8x"
                target="_blank"
                title="Waitlist"
              >
                Waitlist
              </Link>
            </div>
          </div>
        </nav>
      </section>

      <section
        id="headline-and-cta  "
        className="relative flex h-[560px] items-center border-b-2 border-t-2 border-black bg-rose-50 md:h-[920px]"
      >
        <div className="mx-auto flex flex-col items-center justify-center gap-12">
          <div>
            <h1 className="headline-word-spacing w-full text-center text-3xl font-black uppercase leading-tight md:text-6xl xl:text-8xl">
              Gamify your tasks.
            </h1>

            <h1 className="headline-word-spacing w-full text-center text-3xl font-black uppercase leading-tight md:mb-3 md:mt-6 md:text-6xl xl:text-8xl">
              <span>Get</span>{" "}
              <span className="bg-rose-300 px-2 py-1 text-3xl font-black uppercase leading-tight text-black md:px-6 md:text-6xl xl:text-8xl">
                rewards.
              </span>
            </h1>
          </div>

          <div className="font-inter mx-auto flex flex-col items-center gap-2 text-lg font-medium text-gray-500 md:text-2xl">
            <span className="text-center">
              Increase your{" "}
              <span className="text-gray-600 underline">motivation</span> and{" "}
              <span className="text-gray-600 underline">productivity</span> by
              competing with your best self.
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <WaitlistCTA />

            <p
              style={{ wordSpacing: "2px" }}
              className="mx-auto mt-2 max-w-3xl text-center font-medium text-gray-500 md:text-lg"
            >
              Lifetime license (and 50% OFF) for the first 100 customers
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <FeatureHighlight.Root className="bg-rose-100">
          <FeatureHighlight.Description
            title="Stay Driven"
            subtitle="Build momentum with daily streaks."
            description="Keep your streak going with at least one full timer run. Finish full routines for bigger rewards."
          />

          <FeatureHighlight.Image
            src="/images/stay-driven.png"
            alt="Stay driven"
          />
        </FeatureHighlight.Root>

        <FeatureHighlight.Root className="bg-rose-200" invertFlex>
          <FeatureHighlight.Image
            src="/images/earn-rewards.png"
            alt="Earn rewards"
          />

          <FeatureHighlight.Description
            title="Earn Rewards"
            subtitle="Unlock achievements and benefits."
            description="Accumulate XP points and move through divisions. Access exclusive Notion templates. Achieve goals to earn free or discounted productivity resources. Customize the app as you reach milestones."
          />
        </FeatureHighlight.Root>

        <FeatureHighlight.Root className="bg-rose-300">
          <FeatureHighlight.Description
            title="Compete and Advance"
            subtitle="Push limits with solo and group challenges."
            description="Break your own records. Join productivity challenges with friends. Track your progress and celebrate successes."
          />

          <FeatureHighlight.Image
            src="/images/compete-and-advance.png"
            alt="Compete and advance"
          />
        </FeatureHighlight.Root>
      </section>

      <section
        id="other-features"
        className="mt-4 flex items-center justify-center md:mt-12"
      >
        <OtherFeatures />
      </section>

      <section id="footer">
        <div className="flex h-80 flex-col items-center justify-center gap-6 border-t-2 border-black bg-rose-100">
          <WaitlistCTA />
          {/* <TwitterLink /> */}
        </div>
      </section>
    </main>
  )
}

function TwitterLink() {
  return (
    <Link
      onClick={() => captureEvent("Clicked on my twitter link [Footer]")}
      href="https://dub.sh/danielx"
      target="_blank"
      className="flex w-[263px] items-center justify-center gap-2 rounded-md bg-white py-4 transition-colors hover:bg-gray-50 hover:underline md:w-[283px]"
      title="Twitter"
    >
      <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 462.799"
      >
        <path
          fill="#000"
          fillRule="nonzero"
          d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
        />
      </svg>
      <span className="font-inter text-lg font-bold text-gray-600">
        Twitter
      </span>
    </Link>
  )
}

function WaitlistCTA() {
  return (
    <Link
      onClick={() => captureEvent("Waitlist CTA Clicked")}
      href="https://tally.so/r/meAv8x"
      target="_blank"
      title="Waitlist"
    >
      <button
        style={{ wordSpacing: "5px" }}
        className="rounded-md bg-black px-12 py-4 font-semibold uppercase text-white hover:bg-neutral-950 hover:underline md:text-lg"
      >
        Join our waitlist
      </button>
    </Link>
  )
}
