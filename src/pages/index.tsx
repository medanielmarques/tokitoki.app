import { OtherFeatures } from "@/components/other-features"
import { cn } from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { type ComponentPropsWithoutRef } from "react"

export default function Home() {
  return (
    <main>
      {/* START NAV MENU */}
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
      {/* END NAV MENU */}

      {/* START HEADLINE / CTA */}
      <div className="relative flex h-[560px] items-center border-b-2 border-t-2 border-black bg-rose-50 md:h-[920px]">
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
            <Link
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

            <p
              style={{ wordSpacing: "2px" }}
              className="mx-auto mt-2 max-w-3xl text-center font-medium text-gray-500 md:text-lg"
            >
              Lifetime license (and 50% OFF) for the first 100 customers
            </p>
          </div>
        </div>
      </div>
      {/* END HEADLINE / CTA */}

      {/* START MAIN FEATURES */}
      <section id="how-it-works">
        <FeatureHighlight.Root className="bg-rose-100">
          <FeatureHighlight.Description
            title="Stay Driven"
            subtitle="Build momentum with daily streaks."
            description="Keep your streak going with at least one full timer run. Finish full routines for bigger rewards."
          />
          <StayDrivenImage />
        </FeatureHighlight.Root>

        <FeatureHighlight.Root className="bg-rose-200" invertFlex>
          <EarnRewardsImage />
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
          <CompeteAndAdvanceImage />
        </FeatureHighlight.Root>
      </section>
      {/* END MAIN FEATURES */}

      {/* START OTHER FEATURES */}
      <section
        id="other-features"
        className="flex items-center justify-center p-12"
      >
        <OtherFeatures />
      </section>
      {/* END OTHER FEATURES */}

      {/* START FAQ */}
      {/* <section id="faq">
        <FAQ />
      </section> */}
      {/* END FAQ */}
    </main>
  )
}

const FeatureHighlight = {
  Root: FeatureHighlightRoot,
  Description: FeatureHighlightDescription,
}

function FeatureHighlightRoot({
  children,
  className,
  invertFlex = false,
}: ComponentPropsWithoutRef<"div"> & { invertFlex?: boolean }) {
  return (
    <div
      className={cn(
        `border-b-2 border-black px-6 py-8 sm:px-12 sm:py-24`,
        className,
      )}
    >
      <div
        className={`flex ${invertFlex ? "flex-col-reverse" : "flex-col"} items-center justify-center xl:flex-row xl:gap-36`}
      >
        {children}
      </div>
    </div>
  )
}

function FeatureHighlightDescription({
  title,
  subtitle,
  description,
}: {
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="px-0 sm:px-12 md:px-16 lg:px-0">
      <h4
        style={{ wordSpacing: "5px" }}
        className="mx-auto mb-2 max-w-4xl text-left text-3xl font-black uppercase md:text-5xl"
      >
        {title}
      </h4>

      <p className="font-inter mb-6 max-w-xl text-xl font-bold sm:mb-10 md:text-3xl">
        {subtitle}
      </p>

      <p className="font-inter mb-12 max-w-xl text-xl font-medium md:text-2xl">
        {description}
      </p>
    </div>
  )
}

function StayDrivenImage() {
  return (
    <Image
      src="/images/stay-driven.png"
      alt="Stay driven"
      width={600}
      height={400}
    />
  )
}

function EarnRewardsImage() {
  return (
    <Image
      src="/images/earn-rewards.png"
      alt="Earn rewards"
      width={600}
      height={400}
    />
  )
}

function CompeteAndAdvanceImage() {
  return (
    <Image
      src="/images/compete-and-advance.png"
      alt="Compete and advance"
      width={600}
      height={400}
    />
  )
}

const questionsFAQ = [
  {
    question: "What is This thing?",
    answer:
      "This is a platform that allows you to create and manage tasks and rewards.",
  },
  {
    question: "How do I get started?",
    answer:
      "This is a platform that allows you to create and manage tasks and rewards.",
  },
  {
    question: "What is This?",
    answer:
      "This is a platform that allows you to create and manage tasks and rewards.",
  },
]

function FAQ() {
  return (
    <div className="font-inter font-inter relative mt-8 w-full px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Frequenty Asked Questions
          </h2>
          <p className="mt-3 text-neutral-500">
            Have another question? Contact me on{" "}
            <Link
              className="text-neutral-700 underline"
              href="https://x.com/medanielmarques"
              target="_blank"
              title="Twitter"
            >
              Twitter
            </Link>{" "}
            or by{" "}
            <Link
              className="text-neutral-700 underline"
              href="mailto:daniel.marques.contact@gmail.com"
              target="_blank"
              title="email"
            >
              email
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {questionsFAQ.map((q) => (
            <FAQItem key={q.question} question={q.question} answer={q.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <span> {question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
          {answer}
        </p>
      </details>
    </div>
  )
}
