'use client'

import React, { useEffect,useRef } from "react";
import emailjs from "@emailjs/browser"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const PayPerClickPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -right-[10%] w-[40rem] h-[40rem] bg-blue-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[35rem] h-[35rem] bg-red-50/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30rem] h-[30rem] bg-blue-50/20 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" 
            alt="PPC Packages Hero" 
            fill
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 text-center" data-aos="fade-up">
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-red-600/10 border border-red-600/20 backdrop-blur-md">
            <span className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase">High ROI Advertising</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[1]">
            PPC <span className="text-red-600 font-light italic">Packages</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed font-medium mb-12 mx-auto drop-shadow-2xl italic">
            Precision-targeted advertising that puts your brand in front of the right audience at the perfect moment.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button 
              suppressHydrationWarning  
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-5 px-14 rounded-full transition-all duration-500 uppercase tracking-[0.2em] text-[11px] hover:shadow-[0_25px_50px_rgba(220,38,38,0.4)] active:scale-95"
            >
              SCHEDULE A CALL
            </button>
            <button
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold py-5 px-14 rounded-full transition-all duration-500 uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-black active:scale-95">
              VIEW PACKAGES
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-24 relative z-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Performance <span className="text-red-600 italic font-light">Driven</span> Ad Spend
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-10"></div>
        </div>

        {/* Google PPC */}
        <div className="max-w-7xl mx-auto mb-32 relative z-10" data-aos="fade-up" id="packages">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-gray-100">
            {/* Label Column */}
            <div className="bg-gray-950 p-12 flex flex-col justify-center text-white">
              <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Platform 01</span>
              <h3 className="text-3xl font-bold mb-2 uppercase tracking-tight">GOOGLE</h3>
              <p className="text-red-600 font-bold text-lg mb-8 italic">Search & Display</p>
              <ul className="space-y-4">
                {[
                  "Strategy Development",
                  "Keyword Research",
                  "Landing Page Optimization",
                  "Adwords Management",
                  "Analytics & Tracking",
                  "Weekly Performance Reports"
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 leading-relaxed">
                    <span className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Silver Plan */}
            <div className="p-12 bg-white border-r border-gray-50 flex flex-col items-center text-center group hover:bg-gray-50 transition-all duration-500">
              <h4 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">SILVER</h4>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$250</span>
                <span className="text-gray-400 text-xs font-bold">/MO</span>
              </div>
              <ul className="space-y-6 mb-12 text-[11px] font-black text-gray-600 flex-grow uppercase tracking-widest italic">
                <li>YES</li>
                <li>YES</li>
                <li>YES</li>
                <li>20 KEYWORDS</li>
                <li>YES</li>
                <li>YES</li>
              </ul>
              <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase text-[10px] tracking-[0.3em] shadow-lg">
                <a href="/contact-us">Get Started</a>
              </button>
            </div>

            {/* Gold Plan */}
            <div className="p-12 bg-white border-r border-gray-50 flex flex-col items-center text-center group hover:bg-gray-50 transition-all duration-500 scale-105 shadow-2xl z-10 border-2 border-red-600/20">
              <div className="bg-red-600 text-white text-[8px] font-black py-1.5 px-4 rounded-full tracking-[0.2em] mb-6 uppercase">Popular Choice</div>
              <h4 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">GOLD</h4>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$350</span>
                <span className="text-gray-400 text-xs font-bold">/MO</span>
              </div>
              <ul className="space-y-6 mb-12 text-[11px] font-black text-gray-600 flex-grow uppercase tracking-widest italic">
                <li>YES</li>
                <li>YES</li>
                <li>YES</li>
                <li>30 KEYWORDS</li>
                <li>YES</li>
                <li>YES</li>
              </ul>
              <button className="w-full py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-gray-900 transition-all uppercase text-[10px] tracking-[0.3em] shadow-xl shadow-red-600/20">
                <a href="/contact-us">Get Started</a>
              </button>
            </div>

            {/* Platinum Plan */}
            <div className="p-12 bg-white flex flex-col items-center text-center group hover:bg-gray-50 transition-all duration-500">
              <h4 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">PLATINUM</h4>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$500</span>
                <span className="text-gray-400 text-xs font-bold">/MO</span>
              </div>
              <ul className="space-y-6 mb-12 text-[11px] font-black text-gray-600 flex-grow uppercase tracking-widest italic">
                <li>YES</li>
                <li>YES</li>
                <li>YES</li>
                <li>50 KEYWORDS</li>
                <li>YES</li>
                <li>YES</li>
              </ul>
              <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase text-[10px] tracking-[0.3em] shadow-lg">
                <a href="/contact-us">Get Started</a>
              </button>
            </div>
          </div>
        </div>

        {/* Facebook PPC */}
        <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-gray-100">
            {/* Label Column */}
            <div className="bg-gray-950 p-12 flex flex-col justify-center text-white">
              <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Platform 02</span>
              <h3 className="text-3xl font-bold mb-2 uppercase tracking-tight">FACEBOOK</h3>
              <p className="text-red-600 font-bold text-lg mb-8 italic">Social Retargeting</p>
              <ul className="space-y-4">
                {[
                  "Facebook Page Promotion",
                  "Audience Micro-Targeting",
                  "Creative Ad Design",
                  "Pixel Implementation",
                  "Conversion Optimization",
                  "Weekly ROI Reports"
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 leading-relaxed">
                    <span className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Silver Plan */}
            <div className="p-12 bg-white border-r border-gray-50 flex flex-col items-center text-center group hover:bg-gray-50 transition-all duration-500">
              <h4 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">SILVER</h4>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$150</span>
                <span className="text-gray-400 text-xs font-bold">/MO</span>
              </div>
              <ul className="space-y-6 mb-12 text-[11px] font-black text-gray-600 flex-grow uppercase tracking-widest italic">
                <li>YES</li>
                <li>YES</li>
                <li>YES</li>
                <li>5 AD SETS</li>
                <li>YES</li>
                <li>YES</li>
              </ul>
              <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase text-[10px] tracking-[0.3em] shadow-lg">
                <a href="/contact-us">Get Started</a>
              </button>
            </div>

            {/* Gold Plan */}
            <div className="p-12 bg-white border-r border-gray-50 flex flex-col items-center text-center group hover:bg-gray-50 transition-all duration-500 scale-105 shadow-2xl z-10 border-2 border-red-600/20">
              <div className="bg-red-600 text-white text-[8px] font-black py-1.5 px-4 rounded-full tracking-[0.2em] mb-6 uppercase">Best Value</div>
              <h4 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">GOLD</h4>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$200</span>
                <span className="text-gray-400 text-xs font-bold">/MO</span>
              </div>
              <ul className="space-y-6 mb-12 text-[11px] font-black text-gray-600 flex-grow uppercase tracking-widest italic">
                <li>YES</li>
                <li>YES</li>
                <li>YES</li>
                <li>8 AD SETS</li>
                <li>YES</li>
                <li>YES</li>
              </ul>
              <button className="w-full py-4 bg-red-600 text-white font-black rounded-2xl hover:bg-gray-900 transition-all uppercase text-[10px] tracking-[0.3em] shadow-xl shadow-red-600/20">
                <a href="/contact-us">Get Started</a>
              </button>
            </div>

            {/* Platinum Plan */}
            <div className="p-12 bg-white flex flex-col items-center text-center group hover:bg-gray-50 transition-all duration-500">
              <h4 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">PLATINUM</h4>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">$250</span>
                <span className="text-gray-400 text-xs font-bold">/MO</span>
              </div>
              <ul className="space-y-6 mb-12 text-[11px] font-black text-gray-600 flex-grow uppercase tracking-widest italic">
                <li>YES</li>
                <li>YES</li>
                <li>YES</li>
                <li>10 AD SETS</li>
                <li>YES</li>
                <li>YES</li>
              </ul>
              <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase text-[10px] tracking-[0.3em] shadow-lg">
                <a href="/contact-us">Get Started</a>
              </button>
            </div>
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

        <div className="relative z-10 max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 uppercase tracking-tight">
            3-STEPS TO MAKE YOUR BUSINESS AN ONLINE POWERHOUSE
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "SCHEDULE A CALL", desc: "Get in touch with us! You're only a phone call away from improving your company's exposure.", img: "/assets/call.jpg", btn: "SCHEDULE NOW" },
              { title: "GET YOUR PLAN", desc: "Browse through everything we have to offer and choose the option that's right for you!", img: "/assets/plan.jpg", btn: "GET PLAN" },
              { title: "WIN ONLINE", desc: "Take charge of all search engines and business listings with our all-in-one marketing solutions!", img: "/assets/win.jpg", btn: "START WINNING" }
            ].map((step, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-sm p-12 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center transition-all duration-700 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="absolute -top-6 bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow-xl group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="w-16 h-16 mb-8 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <Image src={step.img} alt={step.title} width={40} height={40} className="object-contain invert" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-10 flex-grow leading-relaxed font-light italic">{step.desc}</p>
                <a href="/contact-us">
                <button className="bg-transparent border border-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 w-full uppercase text-[10px] tracking-[0.2em] group-hover:bg-red-600 group-hover:border-red-600">
                  {step.btn}
                </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - REIMAGINED */}
      <section className="py-32 px-6 lg:px-20 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 uppercase tracking-tight">Contact</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-10"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
              Have questions or need assistance? Our team is ready to support you. Reach out to us today and let's discuss how we can boost your online presence.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/3 bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col justify-between shadow-sm">
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 bg-white p-4 rounded-2xl shadow-sm"><IoLocationOutline size={22} /></div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Address</h3>
                    <p className="text-gray-700 font-semibold text-sm">Shyam Tower, Shimla Bypass Road, Dehradun 248171</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 bg-white p-4 rounded-2xl shadow-sm"><IoCallOutline size={22} /></div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Call Us</h3>
                    <a href="tel:+918979249912" className="text-gray-700 font-bold text-sm hover:text-red-600 transition-colors">+91 8979249912</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 bg-white p-4 rounded-2xl shadow-sm"><TfiEmail size={22} /></div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Email Us</h3>
                    <a href="mailto:info@rankmantra.com" className="text-gray-700 font-bold text-sm hover:text-red-600 transition-colors">info@rankmantra.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50">
              <form className="space-y-8" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text"name="name" placeholder="Name" className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                  </div>
                  <div className="relative group">
                    <input type="email" name="email" placeholder="Email" className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300" />
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
                    <option value="web-development">Website Development And Hosting</option>
                    <option value="seo">Search Engin Optimization (SEO)</option>
                    <option value="digital-marketing">Social Media Marketing (SMM)</option>
                    <option value="ui-ux-design">Meta Ads/Google Ads</option>
                  </select>

                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <input type="text" name="subject" placeholder="Subject" className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <textarea placeholder="Message" name="message" rows="4" className="w-full pb-4 pt-2 bg-transparent border-b border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-900 placeholder:text-gray-300 resize-none"></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-focus-within:w-full"></span>
                </div>
                <div className="pt-4">
                  <button type="submit" className="bg-gray-900 text-white font-bold py-5 px-14 rounded-full transition-all duration-500 uppercase tracking-[0.3em] text-[10px] hover:bg-red-600 hover:shadow-xl active:scale-95 shadow-md">
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
  )
}

export default PayPerClickPage;
