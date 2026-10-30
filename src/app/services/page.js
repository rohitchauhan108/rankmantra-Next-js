'use client'

import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import Services from '@/components/services/Services'

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden bg-[#FEFAF8] border-b border-orange-100 pt-20">
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>
      <Footer />
    </>
  )
}
