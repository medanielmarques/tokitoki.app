import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-purple-50">
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
      <motion.div
        initial={{ opacity: 0.0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="relative flex h-[920px] items-center">
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
                <span className="rounded-xl bg-rose-300 px-6 py-1 text-8xl font-black uppercase leading-tight text-black">
                  rewards.
                </span>
              </h1>
            </div>

            <div className="mx-auto flex flex-col items-center gap-2 text-2xl font-medium text-gray-500">
              <span>
                Increase your productivity by competing with your best self.
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
                  className="rounded-md border-2 border-black bg-black px-12 py-4 text-lg font-semibold uppercase text-white hover:bg-neutral-950 hover:underline"
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
      </motion.div>

      {/* END HEADLINE / CTA */}
      {/* END HEADLINE / CTA */}
    </main>
  )
}
