import { cn } from "@/utils/cn"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { type ComponentPropsWithoutRef } from "react"

export default function Home() {
  return (
    <main>
      {/* START NAV MENU */}
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
      {/* END NAV MENU */}

      {/* START HEADLINE / CTA */}
      {/* START HEADLINE / CTA */}
      <motion.section
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

              <p className="mx-auto mt-2 max-w-3xl text-center text-lg font-medium text-gray-500">
                Lifetime license for the first 100 customers
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* END HEADLINE / CTA */}
      {/* END HEADLINE / CTA */}

      {/* START FEATURES */}
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
      {/* END FEATURES */}
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
