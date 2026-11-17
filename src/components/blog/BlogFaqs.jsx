export default function BlogFaqs({ faqs, title = 'Frequently Asked Questions' }) {
  return (
    <section className="mt-14">
      <h2 className="mb-6 text-3xl font-bold text-black">{title}</h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <details
            key={question}
            name="blog-faqs"
            open={index === 0}
            className="group rounded-[2rem] border border-transparent bg-white px-6 transition-colors open:border-[#ff9a61] sm:px-9"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-lg font-semibold text-[#36566f] transition-colors group-open:text-[#dc2626] sm:text-xl [&::-webkit-details-marker]:hidden">
              <span>{question}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 shrink-0"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                  className="group-open:hidden"
                />
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                  className="hidden group-open:block"
                />
              </svg>
            </summary>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-open:grid-rows-[1fr] motion-reduce:transition-none">
              <div className="min-h-0 overflow-hidden">
                <p className="pb-6 text-lg leading-8 text-[#4c6578]">{answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
