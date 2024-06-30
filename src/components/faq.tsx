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

export function FAQ() {
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
