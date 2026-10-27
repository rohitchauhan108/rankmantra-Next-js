import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Faquestions from '@/components/Faquestions'

export default function FaqsPage() {
  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen py-16 lg:px-32 pt-24 bg-[#FEFAF8] border-b border-orange-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-center text-[#7A6960] uppercase">
            Frequently Asked Questions
          </h1>
          <div className="flex justify-center items-center mt-2 mb-10">
            <div className="bg-red-600 h-1 w-16 rounded"></div>
          </div>
          <Faquestions />
        </div>
      </main>
      <Footer />
    </>
  )
}
