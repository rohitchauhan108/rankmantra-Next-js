import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Faquestions from '@/components/Faquestions'
import { StructuredData, faqsSchema } from '@/components/StructuredData'

export default function FaqsPage() {
  return (
    <>
      <StructuredData id="faqs-structured-data" schema={faqsSchema} />
      <NavBar />
      <main className="relative w-full min-h-screen overflow-hidden bg-white border-b border-orange-100">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
        <div className="pointer-events-none absolute top-[32rem] -left-40 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(228,50,50,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(228,50,50,0.045)_1px,transparent_1px)] [background-size:38px_38px]" />

        <div className="relative max-w-5xl mx-auto px-5 pt-28 pb-20 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl font-semibold text-white shadow-lg shadow-red-600/20">
              ?
            </div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-red-600 uppercase">
              Knowledge centre
            </p>
            <h1 className="secondary-font text-4xl md:text-5xl font-semibold tracking-tight text-[#7A6960]">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-base md:text-lg leading-8 text-[#7A6960]/80">
              Answers to the questions we hear most often about SEO, advertising,
              social media and web development. Cannot find what you are looking
              for? Contact us and we will be happy to help.
            </p>
          </div>
          <Faquestions />
        </div>
      </main>
      <Footer />
    </>
  )
}
