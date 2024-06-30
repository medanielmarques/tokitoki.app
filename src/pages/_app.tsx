import "@/styles/globals.css"
import { type AppType } from "next/app"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Head from "next/head"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

const clashDipslay = localFont({
  src: [
    {
      path: "../../public/fonts/clashDisplay/ClashDisplay-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/clashDisplay/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/clashDisplay/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/clashDisplay/ClashDisplay-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/clashDisplay/ClashDisplay-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const isProduction = process.env.NODE_ENV === "production"
const shouldTrackAnalytics = isProduction && typeof window !== "undefined"

if (shouldTrackAnalytics) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
  })
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PostHogProvider>
      <Head>
        <title>Toki: Gamified tasks w/ rewards</title>
      </Head>
      <main className={clashDipslay.className}>
        <style jsx global>{`
          .font-inter {
            font-family: ${inter.style.fontFamily};
          }

          .headline-word-spacing {
            @media (min-width: 768px) {
              word-spacing: 15px;
            }
          }
        `}</style>
        <Component {...pageProps} />
      </main>
    </PostHogProvider>
  )
}

export default MyApp
