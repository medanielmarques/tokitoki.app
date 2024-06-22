import { cn } from "@/utils/cn"
import { motion } from "framer-motion"
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
      <motion.section
        id="headline-cta"
        initial={{ opacity: 0.0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
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
              <span style={{ wordSpacing: "2px" }} className="text-center">
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
                  className="rounded-md border-2 bg-black px-12 py-4 text-lg font-semibold uppercase text-white hover:bg-neutral-950 hover:underline"
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
      </motion.section>
      {/* END HEADLINE / CTA */}

      {/* START FEATURES */}
      <section id="how-it-works">
        <FeatureHighlight.Root className="bg-rose-100">
          <FeatureHighlight.Description
            title="TASK"
            subtitle="The most amazing subtitle ever."
            description="The most incredible description of a landing page ever conceived of all times."
          />
          <FeatureHighlight.Image imageUrl="/test.png" />
        </FeatureHighlight.Root>

        <FeatureHighlight.Root className="bg-rose-200">
          <FeatureHighlight.Image imageUrl="/test.png" />
          <FeatureHighlight.Description
            title="TASK"
            subtitle="The most amazing subtitle ever."
            description="The most incredible description of a landing page ever conceived of all times."
          />
        </FeatureHighlight.Root>

        <FeatureHighlight.Root className="bg-blue-100">
          <FeatureHighlight.Description
            title="TASK"
            subtitle="The most amazing subtitle ever."
            description="The most incredible description of a landing page ever conceived of all times."
          />
          <FeatureHighlight.Image imageUrl="/test.png" />
        </FeatureHighlight.Root>

        <FeatureHighlight.Root className="bg-blue-200">
          <FeatureHighlight.Image imageUrl="/test.png" />
          <FeatureHighlight.Description
            title="TASK"
            subtitle="The most amazing subtitle ever."
            description="The most incredible description of a landing page ever conceived of all times."
          />
        </FeatureHighlight.Root>
      </section>
      {/* END FEATURES */}

      {/* START FAQ */}
      <section id="faq">
        <FAQ />
      </section>
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
      <div className="flex items-center justify-center gap-12">{children}</div>
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
      <h4 className="mx-auto mb-2 max-w-4xl text-left text-3xl font-black uppercase md:text-5xl">
        {title}
      </h4>

      <p className="font-inter mb-6 max-w-lg text-xl font-bold sm:mb-10 md:text-3xl">
        {subtitle}
      </p>

      <p className="font-inter mb-12 max-w-lg text-xl font-medium md:text-2xl">
        {description}
      </p>

      <Link href="https://tally.so/r/meAv8x" target="_blank" title="Waitlist">
        <button className="font-inter rounded-md border-2 border-black bg-white px-12 py-4 text-lg font-semibold hover:bg-neutral-50 hover:underline">
          Join our waitlist
        </button>
      </Link>
    </div>
  )
}

function FeatureHighlightImage({ imageUrl }: { imageUrl: string }) {
  return <Image src={imageUrl} alt="" width={500} height={500} />
}

const FeatureHighlight = {
  Root: FeatureHighlightRoot,
  Description: FeatureHighlightDescription,
  Image: FeatureHighlightImage,
}

const questions = [
  {
    question: "What is This?",
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
    <div className="font-inter relative mt-8 w-full bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
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
          {questions.map((q) => (
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
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
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
