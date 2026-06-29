"use client";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ShopifyDevelopmentPage = () => {
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
        alert("Message send");
      })
      .catch((error) => {
        alert("Message not send");
      });
  };

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop"
            alt="Shopify Development Hero"
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
              Scale Your Store
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[1]">
            Shopify{" "}
            <span className="text-red-600 font-light italic">Development</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed font-medium mb-12 mx-auto drop-shadow-2xl italic">
            Transform your business with custom Shopify store development,
            ensuring a seamless shopping experience, scalability, and optimized
            performance for growth.
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

      {/* Intro Section */}
      <section className="py-24 px-6 lg:px-20 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <div className="space-y-8 text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed font-normal">
            <p>
              we specialize in delivering custom Shopify development services
              designed to elevate your online store. Whether you’re launching a
              new e-commerce platform or enhancing an existing one, our expert
              team ensures seamless integration, optimized performance, and a
              user-friendly experience.
            </p>
            <p>
              We provide a full range of Shopify services, including store
              design, theme customization, app integration, and payment gateway
              setup. Our developers work closely with you to build a tailor-made
              solution that fits your business goals and customer needs.
            </p>
            <p>
              Our goal is to create a robust, scalable, and secure e-commerce
              platform that drives sales and enhances customer satisfaction.
              From inventory management to mobile responsiveness, we handle
              every detail to ensure your Shopify store performs at its best.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Shopify Theme Design Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000"
                alt="Custom Shopify Theme Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Custom Shopify Theme Design
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                We start by designing a unique, responsive theme tailored to
                your brand’s aesthetic, ensuring it looks great on both desktop
                and mobile.
              </p>
              <p>
                Your website will adapt seamlessly to all devices—smartphones,
                tablets, and desktops. Fast-loading pages to retain visitors and
                improve overall performance.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Inventory Setup Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Product & Inventory Setup
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                We help organize your products with clear categorization,
                high-quality images, and detailed descriptions to ensure an easy
                shopping experience for customers.
              </p>
              <p>
                Important elements like headlines and calls-to-action (CTAs)
                will grab attention.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000"
                alt="Product & Inventory Setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shopify App Integrations Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000"
                alt="Shopify App Integrations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Shopify App Integrations
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                We integrate essential apps that enhance functionality—such as
                email marketing tools, SEO optimizations, and payment
                gateways—to maximize sales potential.
              </p>
              <p>
                We implement measures to protect against hacking and other
                vulnerabilities.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Checkout Optimization Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Payment & Checkout Optimization
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Secure payment gateways and smooth checkout processes are
                integrated for a hassle-free shopping experience, building trust
                with your customers.
              </p>
              <p>
                We test different page versions to ensure the best user
                experience and conversion rates.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1000"
                alt="Payment & Checkout Optimization"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support & Updates Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000"
                alt="Ongoing Support & Updates"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Ongoing Support & Updates
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                We offer ongoing support for maintenance, updates, and future
                enhancements to keep your store running smoothly.
              </p>
              <p>
                We constantly monitor for issues, ensuring a smooth and
                error-free experience for your visitors.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.4em] mb-12">
            What Our Clients Say
          </h2>
          <div className="bg-white p-10 md:p-20 rounded-[2rem] shadow-sm relative border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/img/team/team-1.jpg"
                  alt="Pooja Parkash"
                  width={96}
                  height={96}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-widest">
              Pooja Parkash
            </h3>
            <p className="text-gray-500 italic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
              "Rankmantra stands above the rest in the category of IT companies
              in Dehradun. The team of professionals they have is
              par-excellence, ensuring top-notch service each and every time.
              Highly recommend for all your tech needs!"
            </p>
          </div>
        </div>
      </section>

      {/* 3-Steps Section */}
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
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-transparent border border-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 w-full uppercase text-[10px] tracking-[0.2em] group-hover:bg-red-600 group-hover:border-red-600"
                  >
                    {step.btn}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

export default ShopifyDevelopmentPage;
