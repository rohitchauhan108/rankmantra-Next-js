'use client'

import React from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { MdContentPasteSearch, MdCampaign } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { RiBaseStationLine } from "react-icons/ri";
import { SiHostinger } from "react-icons/si";

const servicesData = [
  {
    href: "/web-develop",
    icon: <CgWebsite className="text-3xl text-red-600" />,
    title: "Web Development",
    desc: "We build responsive websites, eCommerce solutions, and custom web applications tailored for performance, scalability, and seamless user experience.",
  },
  {
    href: "/seo",
    icon: <MdContentPasteSearch className="text-3xl text-red-600" />,
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your organic visibility and secure top search rankings with our targeted keywords, technical SEO, and data-driven content strategies.",
  },
  {
    href: "/pay-per-click",
    icon: <MdCampaign className="text-3xl text-red-600" />,
    title: "Campaign Creation",
    desc: "Targeted strategy development, creative ad copy, and high-converting campaign execution engineered to maximize brand engagement.",
  },
  {
    href: "/pay-per-click",
    icon: <FaAmazonPay className="text-3xl text-red-600" />,
    title: "PPC Management",
    desc: "Maximize returns on paid search and display networks with optimized bidding strategies, precision targeting, and high-ROI conversion ad funnels.",
  },
  {
    href: "/social-media",
    icon: <IoShareSocialSharp className="text-3xl text-red-600" />,
    title: "Social Media Marketing (SMM)",
    desc: "Elevate your brand presence across platforms with compelling creative content, audience engagement strategies, and targeted social campaigns.",
  },
  {
    href: "/online-reputation",
    icon: <RiBaseStationLine className="text-3xl text-red-600" />,
    title: "Online Reputation Management (ORM)",
    desc: "Protect and elevate your brand's digital presence by managing reviews, neutralizing negative coverage, and building online authority.",
  },
  {
    href: "/web-hosting-package",
    icon: <SiHostinger className="text-3xl text-red-600" />,
    title: "Web Hosting & Infrastructure",
    desc: "High-speed, secure, and ultra-reliable hosting solutions featuring maximum uptime, full scalability, and dedicated technical support.",
  },
];

const Services = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-[#7A6960]">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-3">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900">
          Our Services
        </h2>
        <div className="flex justify-center items-center mt-3">
          <div className="bg-red-600 h-1 w-16 rounded-full"></div>
        </div>
        <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
          We offer Digital Marketing Services in Dehradun that empower businesses with a strong online presence, reaching target audiences, and efficiently generating maximum returns from their online endeavors. From innovative campaign ideas to cutting-edge technology and data analysis, our custom-made approaches are designed to enhance your brand presence, boost lead quality, and ensure sustained business growth.
        </p>
      </div>

      {/* Services Grid 1 (Top 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {servicesData.slice(0, 4).map((service) => (
          <Link
            href={service.href}
            key={service.href + service.title}
            aria-label={`Learn more about ${service.title}`}
            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            {/* Top accent glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Arrow: Visible on mobile, hidden on desktop until hover */}
            <GoArrowUpRight
              aria-hidden="true"
              className="absolute top-4 right-4 text-xl text-gray-400 opacity-100 md:opacity-0 md:-translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-red-600"
            />

            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon, {
                  className: "text-2xl transition-colors duration-300 group-hover:text-white text-red-600"
                })}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200 pr-4">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Services Grid 2 (Bottom 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10">
        {servicesData.slice(4, 8).map((service) => (
          <Link
            href={service.href}
            key={service.href + service.title}
            aria-label={`Learn more about ${service.title}`}
            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            {/* Top accent glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Arrow: Visible on mobile, hidden on desktop until hover */}
            <GoArrowUpRight
              aria-hidden="true"
              className="absolute top-4 right-4 text-xl text-gray-400 opacity-100 md:opacity-0 md:-translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-red-600"
            />

            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon, {
                  className: "text-2xl transition-colors duration-300 group-hover:text-white text-red-600"
                })}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200 pr-4">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;