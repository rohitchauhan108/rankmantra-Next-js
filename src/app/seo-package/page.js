"use client";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import {
  IoLocationOutline,
  IoCallOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoDocumentTextOutline,
  IoHeadsetOutline,
  IoWalletOutline,
  IoCalendarOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const SEOPage = () => {
  // email send part
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Send");
        e.preventDefault(false);
      })
      .catch((error) => {
        alert("message not send");
      });
  };
  const features = [
    {
      icon: IoWalletOutline,
      title: "Plans from $149 a month",
      description: "Start small, then move up as your business grows.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
      imageAlt: "Business owner reviewing a plan",
    },
    {
      icon: IoCalendarOutline,
      title: "No contract, cancel anytime",
      description: "We earn your business every month.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600",
      imageAlt: "Team collaborating around a table",
    },
    {
      icon: IoStatsChartOutline,
      title: "Weekly reports",
      description: "Clear numbers delivered to your inbox, with no guessing.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
      imageAlt: "Analytics dashboard on a laptop",
    },
    {
      icon: IoHeadsetOutline,
      title: "Specialist support",
      description:
        "You get a dedicated team of SEO specialists, and phone support on the Booster plan.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600",
      imageAlt: "Support team working together",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden bg-[#FEFAF8] selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-red-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[35rem] h-[35rem] bg-blue-50/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[30rem] h-[30rem] bg-red-50/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            src="/img/seo.webp"
            alt="SEO Packages Hero"
            fill
            className="object-cover opacity-60 grayscale-[20%] animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950/75"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-gray-950/50 border border-white/30 backdrop-blur-md shadow-lg">
            <span className="text-white text-xs font-bold tracking-[0.4em] uppercase">
              Results Driven SEO
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-lg">
            SEO <span className="text-red-600 font-light italic">Packages</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed font-semibold mb-10 mx-auto drop-shadow-lg">
            RankMantra's SEO packages start at $149 a month with no contract.
            Every plan comes with weekly reports, so you can see what we are
            doing and what it is achieving, and you can cancel anytime.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              suppressHydrationWarning
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gray-900 hover:bg-red-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-500 uppercase tracking-[0.2em] text-xs hover:shadow-2xl active:scale-95"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 lg:px-20 bg-white border-b border-gray-50 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-50"></div>

        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
            Proven{" "}
            <span className="text-red-600 italic font-light">Results</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
            Tailored SEO packages designed to fit your business goals and
            budget.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-10"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {[
            {
              title: "FROM ONLY $99 A MONTH",
              desc: "Premium quality SEO doesn't have to be expensive. Start small, grow big.",
              icon: (
                <IoCheckmarkCircleOutline
                  size={32}
                  className="text-red-600 group-hover:text-white transition-colors duration-700"
                />
              ),
            },
            {
              title: "NO CONTRACT - CANCEL ANYTIME",
              desc: "We earn your business every month. Total flexibility for your peace of mind.",
              icon: (
                <IoCloseCircleOutline
                  size={32}
                  className="text-red-600 group-hover:text-white transition-colors duration-700"
                />
              ),
            },
            {
              title: "WEEKLY REPORTS",
              desc: "Transparent tracking. Get detailed insights delivered straight to your inbox.",
              icon: (
                <IoDocumentTextOutline
                  size={32}
                  className="text-red-600 group-hover:text-white transition-colors duration-700"
                />
              ),
            },
            {
              title: "PROFESSIONAL SUPPORT",
              desc: "Expert guidance from our dedicated team of SEO specialists.",
              icon: (
                <IoHeadsetOutline
                  size={32}
                  className="text-red-600 group-hover:text-white transition-colors duration-700"
                />
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-700"
            >
              <div className="mb-10 bg-red-50 p-6 rounded-3xl group-hover:bg-red-600 group-hover:text-white transition-all duration-700 group-hover:shadow-[0_15px_30px_rgba(220,38,38,0.2)]">
                <div className="group-hover:text-white transition-colors duration-700">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-6 leading-tight uppercase tracking-widest">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
            Transparent{" "}
            <span className="text-red-600 italic font-light">Pricing</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-10"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "SEO BASIC",
              price: "149",
              highlight: false,
              features: [
                "Perfect for Starters",
                "5 Local Keywords",
                "Website Optimization",
                "Search Engine Submission",
                "Weekly Reports",
              ],
            },
            {
              name: "SEO STARTER",
              price: "199",
              highlight: false,
              features: [
                "Medium Competition",
                "10 Keywords",
                "Perfect for Small Businesses",
                "Social Media Shares",
                "Dedicated Support",
              ],
            },
            {
              name: "SEO BOOSTER",
              price: "349",
              highlight: true,
              features: [
                "High Competition",
                "20 Keywords",
                "Advanced Optimization",
                "Perfect for Professionals",
                "Phone Support",
              ],
            },
            {
              name: "SEO SPEED",
              price: "599",
              highlight: false,
              features: [
                "High Competition",
                "40 Keywords",
                "Advanced Optimization",
                "Perfect for Ecommerce",
                "Dedicated Support",
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white p-10 rounded-[3rem] shadow-xl border-2 transition-all duration-700 hover:shadow-2xl flex flex-col ${plan.highlight ? "border-red-600 scale-105 z-10" : "border-transparent"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black py-2 px-6 rounded-full tracking-[0.2em] shadow-xl uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-xs font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">
                {plan.name}
              </h3>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900 leading-none tracking-tighter">
                  ${plan.price}
                </span>
                <span className="text-gray-400 text-sm font-bold tracking-widest">
                  /MO
                </span>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="text-gray-500 text-xs font-bold flex items-center gap-3 italic"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/contact-us">
                <button
                  className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all duration-500 shadow-lg ${plan.highlight ? "bg-red-600 text-white hover:bg-gray-900 shadow-red-600/20" : "bg-gray-900 text-white hover:bg-red-600"}`}
                >
                  Get Started Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* why choose us */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Why choose RankMantra <span className="text-red-600 italic">SEO</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-10"></div>

          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative mt-8 min-h-64 rounded-2xl bg-[#e7ebee] px-7 pb-8 pt-14 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={600}
                    height={400}
                    className="absolute -top-8 right-5 h-32 w-32 rounded-xl object-cover shadow-md sm:right-6 sm:h-36 sm:w-40"
                  />
                  <div className="mb-6 flex h-12 w-12 items-center justify-center text-gray-600">
                    <Icon size={34} />
                  </div>
                  <h3 className="mb-3 max-w-[65%] text-lg font-bold text-red-600 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="max-w-[85%] text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
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

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 uppercase tracking-tight">
            3-STEPS TO MAKE YOUR BUSINESS AN ONLINE POWERHOUSE
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "SCHEDULE A CALL",
                desc: " Tell us about your business and where your customers are.",
                img: "/assets/call.jpg",
                btn: "SCHEDULE NOW",
              },
              {
                title: "GET YOUR PLAN",
                desc: " We recommend the package that fits your goals and budget.",
                img: "/assets/plan.jpg",
                btn: "GET PLAN",
              },
              {
                title: "WIN ONLINE",
                desc: "We optimize your website and listings, and you follow progress in weekly reports.",
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
        <div className="max-w-7xl mx-auto">
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
              <form className="space-y-8" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                  </div>
                </div>
                <div className="relative group">
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                  >
                    <option value="" disabled className="text-gray-300">
                      Select Service
                    </option>
                    <option value="web-development">
                      Website Development And Hosting
                    </option>
                    <option value="seo">Search Engin Optimization (SEO)</option>
                    <option value="digital-marketing">
                      Social Media Marketing (SMM)
                    </option>
                    <option value="ui-ux-design">Meta Ads/Google Ads</option>
                  </select>

                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <textarea
                    placeholder="Message"
                    name="message"
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

export default SEOPage;
