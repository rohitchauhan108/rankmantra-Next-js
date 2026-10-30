'use client'

import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[#7A6960] mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. It may have been moved or deleted.
          </p>
          <Link href="/">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition">
              Go Back Home
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
