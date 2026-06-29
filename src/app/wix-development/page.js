"use client";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const WixDevelopmentPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // form submit part
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
      })
      .catch((error) => {
        alert("message not Send");
      });
  };

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] -right-[10%] w-[40rem] h-[40rem] bg-blue-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[45%] -left-[10%] w-[35rem] h-[35rem] bg-red-50/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[15%] -right-[5%] w-[30rem] h-[30rem] bg-blue-50/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
            alt="Wix Development Hero"
            fill
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 text-center"
          data-aos="fade-up"
        >
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-red-600/10 border border-red-600/20 backdrop-blur-md">
            <span className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase">
              Premium Wix Design
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[1]">
            Wix{" "}
            <span className="text-red-600 font-light italic">Development</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed font-medium mb-12 mx-auto drop-shadow-2xl italic">
            Empowering your business with stunning, high-performance Wix
            websites that convert visitors into customers.
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
          </div>
        </div>
      </section>

      {/* Initial Consultation Section */}
      <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
                alt="Consultation & Planning"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Step 01
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              Initial{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Consultation
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                We start by understanding your business needs and goals,
                creating a plan for a website that aligns with your vision.
              </p>
              <p className="text-base font-normal not-italic">
                During this phase, we identify key features such as contact
                forms, blog sections, and e-commerce capabilities to ensure a
                comprehensive digital strategy.
              </p>
              <div className="pt-6">
                <a href="/contact-us">
                  <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                    Get Started
                    <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Design & Layout Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Step 02
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              Custom{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Design
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                We craft a unique, visually appealing design tailored to your
                brand. Wix offers flexibility in design, and we ensure your site
                is mobile-friendly and responsive.
              </p>
              <p className="text-base font-normal not-italic">
                Whether you're looking for a clean, minimalist design or a bold,
                modern look, we tailor every element to fit your business
                identity and user expectations.
              </p>
              <div className="pt-6">
                <a href="/contact-us">
                  <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                    Contact Us
                    <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000"
                alt="Custom Design & Layout"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Integration Section */}
      <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000"
                alt="Content Integration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Step 03
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              Content{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Setup
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                We upload and organize your content, including text, images, and
                videos, to create a seamless user journey.
              </p>
              <p className="text-base font-normal not-italic">
                Our focus is on presenting your content in an organized,
                easy-to-navigate structure that enhances user experience and
                drives engagement across all devices.
              </p>
              <div className="pt-6">
                <a href="/contact-us">
                  <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                    Contact Us
                    <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Integration Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Step 04
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              App{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Integration
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                We enhance your website with essential Wix apps for SEO, social
                media integration, and e-commerce functionality.
              </p>
              <p className="text-base font-normal not-italic">
                Whether you need a booking system, contact forms, or email
                marketing tools, we seamlessly integrate these features to boost
                your site's utility.
              </p>
              <div className="pt-6">
                <a href="/contact-us">
                  <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                    Contact Us
                    <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
                alt="App Integration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization Section */}
      <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
                alt="SEO Optimization"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Step 05
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              SEO{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Optimization
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                We optimize your Wix website for search engines by setting up
                meta tags, alt text, and URLs that improve visibility.
              </p>
              <p className="text-base font-normal not-italic">
                We also ensure your site is structured to rank well, helping it
                appear higher in search results and drive organic traffic.
              </p>
              <div className="pt-6">
                <a href="/contact-us">
                  <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                    Contact Us
                    <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Launch Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50/50 relative overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Step 06
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              Launch &{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Support
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                After thorough testing for functionality and design
                responsiveness, we launch your website and provide post-launch
                support.
              </p>
              <p className="text-base font-normal not-italic">
                We ensure that all features work smoothly, and your site is
                ready to attract visitors, with ongoing support to ensure
                optimal performance.
              </p>
              <div className="pt-6">
                <a href="/contact-us">
                  <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                    Contact Us
                    <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000"
                alt="Testing & Launch"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-700"></div>
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
                    <option value="web-development">Website Development And Hosting</option>
                    <option value="seo">Search Engin Optimization (SEO)</option>
                    <option value="digital-marketing">Social Media Marketing (SMM)</option>
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

export default WixDevelopmentPage;
