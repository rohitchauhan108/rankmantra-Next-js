'use client'

import React, { useEffect } from "react";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            RankMantra is committed to protecting your privacy. This policy explains what data we collect and how we use it.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FEFAF8] py-16 lg:px-32 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 lg:p-12 border-t-4 border-red-600">

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Information We Collect
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We collect personal information you provide directly, such as name, email, phone number, and business details when you contact us, request a quote, or subscribe to newsletters. We also collect usage data like pages visited, time spent, and device information to improve performance and user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We use data to provide and improve services, respond to inquiries, personalize content, send updates with your consent, and analyze performance. We do not sell your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Data Sharing
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We may share data with trusted partners for service delivery under strict confidentiality agreements. We comply with legal obligations when required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Data Security
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                We implement industry-standard security measures to protect your data. However, no method is 100% secure, and we cannot guarantee complete security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Your Rights
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at info@rankmantra.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#7a6960]">
                Contact Us
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                If you have questions about this privacy policy, please contact us at info@rankmantra.com or +91 8979249912.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
