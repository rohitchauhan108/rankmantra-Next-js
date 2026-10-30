'use client'

import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'

export default function Web1Page() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Web Development Project #1</h1>
          
          {/* Project Hero Image */}
          <div className="w-full h-96 bg-gradient-to-r from-red-200 to-red-100 rounded-lg flex items-center justify-center mb-8">
            <p className="text-gray-600 text-xl">Project Image</p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-[#7A6960] mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6">
                This web development project showcases modern design principles and cutting-edge technology integration. The website is fully responsive and optimized for all devices.
              </p>
              
              <h3 className="text-xl font-semibold text-[#7A6960] mb-3">Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Responsive design for all devices</li>
                <li>Fast loading times and performance optimization</li>
                <li>SEO optimization for search engines</li>
                <li>User-friendly interface and navigation</li>
                <li>Integration with business systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#7A6960] mb-3">Technologies Used</h3>
              <p className="text-gray-600">
                HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB, Tailwind CSS
              </p>
            </div>

            <div className="bg-[#FEFAF8] p-6 rounded-lg h-fit">
              <h3 className="text-lg font-semibold text-[#7A6960] mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Type</p>
                  <p className="text-gray-700">Web Development</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Timeline</p>
                  <p className="text-gray-700">3 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Status</p>
                  <p className="text-gray-700">Completed</p>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-800 mt-4">
                  View Live Site →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
