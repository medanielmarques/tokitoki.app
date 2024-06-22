import "@/styles/globals.css"
import { type AppType } from "next/app"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Head from "next/head"

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

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Toki: Gamified tasks w/ rewards</title>
      </Head>
      <main className={clashDipslay.className}>
        <style jsx global>{`
          .font-inter {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
