'use client'

import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const TermsAndConditions = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms & <span className="text-red-600">Conditions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            These terms govern your use of RankMantra's website and services. By accessing our site, you agree to these terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FEFAF8] py-16 lg:px-32 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 lg:p-12 border-t-4 border-red-600">

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Services and Deliverables
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Services are provided according to agreed scopes, timelines, and pricing. Deliverables are considered accepted upon final approval or after a reasonable review period. Changes outside scope may incur additional costs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Client Responsibilities
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Clients must provide accurate information, timely approvals, and necessary access for project completion. Delays due to missing inputs may affect timelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Payments and Refunds
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Payments are due as per invoices and milestones. Due to the nature of digital services, refunds are assessed case-by-case, subject to contractual terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Intellectual Property
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Upon full payment, clients own the deliverables. RankMantra retains rights to pre-existing materials, tools, and methodologies used in the project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                RankMantra is not liable for indirect, incidental, or consequential damages arising from service use or inability to use services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Termination
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Either party may terminate services with written notice. Clients remain responsible for payment of completed work up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Changes to Terms
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of services constitutes acceptance of updated terms.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
