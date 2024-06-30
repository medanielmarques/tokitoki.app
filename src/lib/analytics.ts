import posthog, { type Properties } from "posthog-js"
import { useEffect, useState } from "react"

export function captureEvent(event: string, properties?: Properties) {
  posthog.capture(event, properties)
}

export function useUserScrolledTheEntireLandingPage() {
  const [eventTriggered, setEventTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (
        !eventTriggered &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        captureEvent("User scrolled the entire landing page")
        setEventTriggered(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [eventTriggered])
}
