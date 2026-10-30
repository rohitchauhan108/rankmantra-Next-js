'use client'

import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'

export default function Page() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Portfolio Project</h1>
          <div className="w-full h-96 bg-gradient-to-r from-red-200 to-red-100 rounded-lg flex items-center justify-center mb-8">
            <p className="text-gray-600 text-xl">Project Image</p>
          </div>
          <div className="text-gray-600 space-y-4">
            <p>This is a showcase of our professional work and expertise.</p>
            <p>Click back to view more portfolio projects or contact us to start your project.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
