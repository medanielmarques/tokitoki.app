import "@/styles/globals.css"
import { type AppType } from "next/app"
import localFont from "next/font/local"

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
console.log(clashDipslay.className)

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <head>
        <title>Toki: Gamified tasks w/ rewards</title>
      </head>
      <main className={clashDipslay.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
