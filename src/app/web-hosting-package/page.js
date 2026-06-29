"use client";

import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const WebHostingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Page Title Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 uppercase tracking-wider">
            WEB HOSTING PACKAGES PRICES
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* Table Section */}
      <section className="pb-32 px-4 md:px-6 lg:px-20 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="min-w-[1000px] bg-[#FADADD]/60 rounded-3xl overflow-hidden border border-[#FADADD] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-700">
                  <th className="p-6 font-bold text-lg border-b border-white/50">
                    Web Hosting Packages
                  </th>
                  <th className="p-6 font-bold text-lg border-b border-white/50 text-center">
                    Bronze Plan
                  </th>
                  <th className="p-6 font-bold text-lg border-b border-white/50 text-center">
                    Silver Plan
                  </th>
                  <th className="p-6 font-bold text-lg border-b border-white/50 text-center">
                    Gold Plan
                  </th>
                  <th className="p-6 font-bold text-lg border-b border-white/50 text-center">
                    Diamond Plan
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 font-medium">
                {[
                  {
                    label: "Per Year Cost (USD)",
                    vals: ["20/Y", "30/Y", "50/Y", "100/Y"],
                  },
                  {
                    label: "Per Year Cost (INR)",
                    vals: ["1295/Y", "1995/Y", "3195/Y", "5995/Y"],
                  },
                  {
                    label: "Web Space",
                    vals: ["1GB", "Unlimited", "Unlimited", "Unlimited"],
                  },
                  {
                    label: "Monthly Bandwidth",
                    vals: ["5 GB", "Unlimited", "Unlimited", "Unlimited"],
                  },
                  { label: "Domain Limit", vals: ["1", "1", "3", "Unlimited"] },
                  {
                    label: "Web Site Builder",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "Full Support", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Instant Backups",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "99.9% Uptime", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Free / Instant Setup",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "RAID1 Disk", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Subdomains",
                    vals: ["1", "100", "200", "Unlimited"],
                  },
                  {
                    label: "MySQL Databases",
                    vals: ["1", "Unlimited", "Unlimited", "Unlimited"],
                  },
                  { label: "FTP", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "CGI", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "PHP 4 & 5", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Perl", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "SSI", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Cron", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "FrontPage Extensions",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "Curl", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Flash", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "GD", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Apache Web Server",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "htaccess", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Image Magick", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "POP3 Accounts",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "Web Mail", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "E-mail Alias", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Auto Responders",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Mailing Lists",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "Catch Alls", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Spam Assassin",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Mail Forwarding",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "IMAP Support", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "SMTP", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Fantastico", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Hotlink Protection",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "IP Deny Manager",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Custom Error Pages",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant Blogs",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant Portals",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant PHPnuke",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant Forums",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant Guestbook",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant Counter",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant FormMail",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "Redirect URL", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Web Based File Manager",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Instant Counter",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "PW Protected Directories",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "phpMyAdmin", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "AWStats", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Webalizer", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Raw Log Manager",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Referrer Logs",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  { label: "Error Logs", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Agora Cart", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "osCommerce", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "ZenCart", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  { label: "Cube Cart", vals: ["Yes", "Yes", "Yes", "Yes"] },
                  {
                    label: "Free Web Templates",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Search Engine Submission",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Free SEO Tools",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Free Script Library",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Free Contact Form",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Google Apps Support",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                  {
                    label: "Per Year Cost",
                    vals: ["Yes", "Yes", "Yes", "Yes"],
                  },
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-white/50">
                    <td className="p-4 pl-8 text-sm font-semibold">
                      {row.label}
                    </td>
                    {row.vals.map((v, vIdx) => (
                      <td key={vIdx} className="p-4 text-center text-sm">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Footer Buttons Row */}
                <tr>
                  <td className="p-8"></td>
                  <td className="p-8 text-center">
                    <a href="/contact-us">
                      <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl text-xs hover:bg-red-700 transition-all shadow-md active:scale-95">
                        Contact Us
                      </button>
                    </a>
                  </td>
                  <td className="p-8 text-center">
                    <a href="/contact-us">
                      <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl text-xs hover:bg-red-700 transition-all shadow-md active:scale-95">
                        Contact Us
                      </button>
                    </a>
                  </td>
                  <td className="p-8 text-center">
                    <a href="/contact-us">
                      <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl text-xs hover:bg-red-700 transition-all shadow-md active:scale-95">
                        Contact Us
                      </button>
                    </a>
                  </td>
                  <td className="p-8 text-center">
                    <a href="/contact-us">
                      <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl text-xs hover:bg-red-700 transition-all shadow-md active:scale-95">
                        Contact Us
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-Steps Section - REIMAGINED */}
      <section className="relative py-32 px-6 lg:px-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1170"
            alt="Process Background"
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>

        <div
          className="relative z-10 max-w-7xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 uppercase tracking-tight">
            3-STEPS TO MAKE YOUR BUSINESS AN ONLINE POWERHOUSE
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "SCHEDULE A CALL",
                desc: "Get in touch with us! You're only a phone call away from improving your company's exposure.",
                img: "/assets/call.jpg",
                btn: "SCHEDULE NOW",
              },
              {
                title: "GET YOUR PLAN",
                desc: "Browse through everything we have to offer and choose the option that's right for you!",
                img: "/assets/plan.jpg",
                btn: "GET PLAN",
              },
              {
                title: "WIN ONLINE",
                desc: "Take charge of all search engines and business listings with our all-in-one marketing solutions!",
                img: "/assets/win.jpg",
                btn: "START WINNING",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm p-12 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center transition-all duration-700 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute -top-6 bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow-xl group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="w-16 h-16 mb-8 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="object-contain invert"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm mb-10 flex-grow leading-relaxed font-light italic">
                  {step.desc}
                </p>
                <button className="bg-transparent border border-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 w-full uppercase text-[10px] tracking-[0.2em] group-hover:bg-red-600 group-hover:border-red-600">
                  {step.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - REIMAGINED */}
      <section className="py-32 px-6 lg:px-20 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 uppercase tracking-tight">
              Contact
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-10"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
              Have questions or need assistance? Our team is ready to support
              you. Reach out to us today and let's discuss how we can boost your
              online presence.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/3 bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col justify-between shadow-sm">
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 bg-white p-4 rounded-2xl shadow-sm">
                    <IoLocationOutline size={22} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700 font-semibold text-sm">
                      Shyam Tower, Shimla Bypass Road, Dehradun 248171
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 bg-white p-4 rounded-2xl shadow-sm">
                    <IoCallOutline size={22} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:+918979249912"
                      className="text-gray-700 font-bold text-sm hover:text-red-600 transition-colors"
                    >
                      +91 8979249912
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 bg-white p-4 rounded-2xl shadow-sm">
                    <TfiEmail size={22} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@rankmantra.com"
                      className="text-gray-700 font-bold text-sm hover:text-red-600 transition-colors"
                    >
                      info@rankmantra.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                  </div>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300 resize-none"
                  ></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white font-bold py-5 px-14 rounded-full transition-all duration-500 uppercase tracking-[0.3em] text-[10px] hover:bg-red-600 hover:shadow-xl active:scale-95 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebHostingPage;
