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
            <h1 className="text-xl font-semibold">Toki</h1>
          </Link>

          <div className="flex items-center gap-4 font-medium text-gray-700">
            <Link
              style={{ wordSpacing: "3px" }}
              className="rounded-lg px-4 py-3 hover:underline"
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
      <div className="relative flex h-[920px] items-center border-b-2 border-t-2 border-black bg-rose-50">
        <div className="mx-auto flex flex-col items-center justify-center gap-12">
          <div>
            <h1
              style={{ wordSpacing: "15px" }}
              className="w-full text-center text-8xl font-black uppercase leading-tight"
            >
              Gamify your tasks.
            </h1>

            <h1
              style={{ wordSpacing: "15px" }}
              className="w-full text-center text-8xl font-black uppercase leading-tight"
            >
              <span>Get</span>{" "}
              <span className="bg-rose-300 px-6 py-1 text-8xl font-black uppercase leading-tight text-black">
                rewards.
              </span>
            </h1>
          </div>

          <div className="font-inter mx-auto flex flex-col items-center gap-2 text-2xl font-medium text-gray-500">
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
                className="rounded-md bg-black px-12 py-4 text-lg font-semibold uppercase text-white hover:bg-neutral-950 hover:underline"
              >
                Join our waitlist
              </button>
            </Link>

            <p
              style={{ wordSpacing: "2px" }}
              className="mx-auto mt-2 max-w-3xl text-center text-lg font-medium text-gray-500"
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

        <FeatureHighlight.Root className="bg-rose-200">
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

function FeatureHighlightRoot({
  children,
  className,
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        `border-b-2 border-black px-6 py-8 sm:px-12 sm:py-24 lg:max-w-none`,
        className,
      )}
    >
      <div className="flex items-center justify-center gap-36">{children}</div>
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
      width={800}
      height={400}
    />
  )
}

function EarnRewardsImage() {
  return (
    <Image
      src="/images/earn-rewards.png"
      alt="Earn rewards"
      width={800}
      height={400}
    />
  )
}

function CompeteAndAdvanceImage() {
  return (
    <Image
      src="/images/compete-and-advance.png"
      alt="Compete and advance"
      width={800}
      height={400}
    />
  )
}

const FeatureHighlight = {
  Root: FeatureHighlightRoot,
  Description: FeatureHighlightDescription,
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

const otherFeatures = [
  {
    title: "Notifications",
    description: "Get notified when the timer ends on your phone or desktop.",
  },
  {
    title: "Throwaway Timer",
    description: "One-time timer for single tasks without changing settings.",
  },
  {
    title: "Collaborative Sessions",
    description: "Share sessions to work together faster.",
  },
  {
    title: "Command Center",
    description: "Manage the app with a command center (CTRL+K) and shortcuts.",
  },
  {
    title: "Timer adjustments",
    description: "Timers adjust based on your average overtime.",
  },
  {
    title: "Built-in white noise",
    description: "Ambient sounds to help you focus.",
  },
]

function OtherFeatures() {
  return (
    <div className="font-inter pb-6">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto p-6 px-6">
          <div className="mb-16 text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              And much more...
            </p>
          </div>

          <div className="my-12 flex flex-wrap">
            {otherFeatures.map(({ title, description }, index) => (
              <div
                key={index}
                className={`w-full ${index < 3 ? "md:border-b" : ""} p-8 md:w-1/2 lg:w-1/3 ${index === 2 || index === 5 ? "md:border-r-0" : "md:border-r"}`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="text-xl">{title}</div>
                </div>
                <p className="leading-loose text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
