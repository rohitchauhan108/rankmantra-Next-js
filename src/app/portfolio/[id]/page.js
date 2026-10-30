import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import { portfolioData } from '@/components/portfolio/portfolioData'
import Link from 'next/link'

export function generateStaticParams() {
  return Object.keys(portfolioData).map((id) => ({
    id: id,
  }))
}

export default function PortfolioProjectPage({ params }) {
  const { id } = params
  const project = portfolioData[id]

  if (!project) {
    return (
      <>
        <NavBar />
        <section className="w-full py-16 lg:px-10 overflow-hidden pt-20 text-center">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Project Not Found</h1>
          <Link href="/" className="text-red-600 hover:underline">Return to Home</Link>
        </section>
        <Footer />
      </>
    )
  }
  
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">{project.title}</h1>
          
          {/* Project Hero Image */}
          <div className="w-full h-[500px] relative rounded-lg overflow-hidden mb-8 shadow-xl">
            <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-[#7A6960] mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6 text-lg">
                {project.overview}
              </p>
              
              <h3 className="text-xl font-semibold text-[#7A6960] mb-3">Technologies Used</h3>
              <p className="text-gray-600 mb-6 text-lg">
                {project.technologies}
              </p>

              <h3 className="text-xl font-semibold text-[#7A6960] mb-3">Our Role</h3>
              <p className="text-gray-600 text-lg">
                We provided comprehensive digital solutions including design, development, and strategic consultation to ensure the project's success and alignment with the client's business goals.
              </p>
            </div>

            <div className="bg-[#FEFAF8] p-8 rounded-lg h-fit border border-orange-100 shadow-md">
              <h3 className="text-xl font-semibold text-[#7A6960] mb-6">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Category</p>
                  <p className="text-gray-700 text-lg font-medium">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Client</p>
                  <p className="text-gray-700 text-lg font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-gray-700 text-lg font-medium">Completed</p>
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-800 transition font-bold mt-8 shadow-lg">
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
