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

export function OtherFeatures() {
  return (
    <section className="font-inter pb-6">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto p-6 px-6">
          <div className="mb-16 text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              And much more...
            </p>
          </div>

          <div className="my-12 flex flex-wrap">
            <div className="w-full border-b p-8 md:w-1/2 md:border-r lg:w-1/3">
              <div className="mb-6 flex items-center">
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
                <div className="ml-4 text-xl">{otherFeatures[0].title}</div>
              </div>
              <p className="leading-loose text-gray-500">
                {otherFeatures[0].description}
              </p>
            </div>

            <div className="w-full border-b p-8 md:w-1/2 lg:w-1/3 lg:border-r">
              <div className="mb-6 flex items-center">
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
                <div className="ml-4 text-xl">{otherFeatures[1].title}</div>
              </div>
              <p className="leading-loose text-gray-500">
                {otherFeatures[1].description}
              </p>
            </div>

            <div className="w-full border-b p-8 md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
              <div className="mb-6 flex items-center">
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
                <div className="ml-4 text-xl">{otherFeatures[2].title}</div>
              </div>
              <p className="leading-loose text-gray-500">
                {otherFeatures[2].description}
              </p>
            </div>

            <div className="w-full border-b p-8 md:w-1/2 lg:w-1/3 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center">
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
                <div className="ml-4 text-xl">{otherFeatures[3].title}</div>
              </div>
              <p className="leading-loose text-gray-500">
                {otherFeatures[3].description}
              </p>
            </div>

            <div className="w-full border-b p-8 md:w-1/2 md:border-b-0 md:border-r lg:w-1/3 lg:border-b-0">
              <div className="mb-6 flex items-center">
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
                <div className="ml-4 text-xl">{otherFeatures[4].title}</div>
              </div>
              <p className="leading-loose text-gray-500">
                {otherFeatures[4].description}
              </p>
            </div>

            <div className="w-full p-8 md:w-1/2 lg:w-1/3 lg:border-b-0">
              <div className="mb-6 flex items-center">
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
                <div className="ml-4 text-xl">{otherFeatures[5].title}</div>
              </div>
              <p className="leading-loose text-gray-500">
                {otherFeatures[5].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
