"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const WordPressDevelopmentPage = () => {
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
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-red-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[35rem] h-[35rem] bg-blue-50/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[30rem] h-[30rem] bg-red-50/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop"
            alt="WordPress Development Hero"
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
              Expert WP Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[1]">
            WordPress{" "}
            <span className="text-red-600 font-light italic">Development</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed font-medium mb-12 mx-auto drop-shadow-2xl italic">
            Building high-performance, secure, and scalable digital experiences
            powered by the world's most popular CMS.
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
      <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-tight leading-tight">
                Crafting{" "}
                <span className="text-red-600 italic font-light">
                  Custom Digital
                </span>{" "}
                Journeys
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-10"></div>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium italic">
                <p>
                  We specialize in delivering high-quality WordPress development
                  services tailored to meet the unique needs of your business.
                  Whether you're launching a brand-new website or updating an
                  existing one, our team of experts is here to help you build a
                  fully customized, feature-rich site that stands out in the
                  digital world.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-normal">
              <p>
                Our services include custom WordPress theme design, plugin
                integrations, responsive layouts, and SEO optimization, ensuring
                your site is both visually appealing and easy to navigate on any
                device. We also offer e-commerce solutions using WooCommerce,
                enabling you to seamlessly sell products and manage orders
                online.
              </p>
              <p>
                We understand the importance of a user-friendly interface and a
                secure, fast-loading site. That's why we focus on creating
                websites that not only look great but also deliver excellent
                performance and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery & Planning Section */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000"
                alt="Discovery & Planning"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-red-600/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Phase 01
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
              Discovery &{" "}
              <span className="text-red-600 italic font-light text-5xl">
                Planning
              </span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium italic">
              <p>
                The first step in creating a successful WordPress website is
                understanding your business goals and audience. During this
                phase, we work closely with you to identify the key features
                your website needs.
              </p>
              <p className="text-base font-normal not-italic">
                We assess your competitors and target market to ensure your
                website stands out. With a clear strategy in place, we create a
                roadmap to guide the project from start to finish.
              </p>
              <div className="pt-6">
                <button className="group flex items-center gap-4 text-gray-900 font-black text-xs tracking-widest uppercase hover:text-red-600 transition-colors">
                  Learn More
                  <span className="w-12 h-[1px] bg-gray-300 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Theme Design Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Custom Theme Design
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                We believe every business is unique, and your website should
                reflect that. Our team designs custom WordPress themes that are
                visually appealing, on-brand, and optimized for functionality.
              </p>
              <p>
                We focus on creating responsive designs that adapt seamlessly to
                desktop, tablet, and mobile devices. Whether you're looking for
                a clean, minimalist design or a bold, modern look, we tailor the
                theme to fit your business identity.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded transition-all uppercase text-xs tracking-widest hover:bg-red-700 active:scale-95 shadow-lg">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=1000"
                alt="Custom Theme Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Management Setup Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000"
                alt="Content Management Setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Content Management Setup
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Managing content on your website should be simple and intuitive.
                That's why we set up a user-friendly WordPress content
                management system (CMS) that allows you to easily update your
                site without technical knowledge.
              </p>
              <p>
                We upload and organize all essential content, such as text,
                images, and videos, into a streamlined structure, making it easy
                for you to update and maintain your website.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded transition-all uppercase text-xs tracking-widest hover:bg-red-700 active:scale-95 shadow-lg">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plugin Integration Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Plugin Integration
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                WordPress plugins are powerful tools that extend your website's
                functionality. We integrate essential plugins that improve your
                site's performance, security, and user engagement. Whether it's
                adding SEO tools like Yoast, optimizing speed with caching
                plugins, or enhancing security with firewall and backup tools,
                we ensure everything is seamlessly integrated.
              </p>
              <p>
                We also integrate social media plugins, contact forms, and email
                marketing tools to help your website engage visitors and convert
                them into customers.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded transition-all uppercase text-xs tracking-widest hover:bg-red-700 active:scale-95 shadow-lg">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
                alt="Plugin Integration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Integration Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000"
                alt="E-Commerce Integration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              E-Commerce Integration
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                If you're looking to sell products or services online, our
                WordPress development includes seamless e-commerce integration
                with WooCommerce. We help you set up your online store, from
                product listings and inventory management to payment gateways
                and order tracking.
              </p>
              <p>
                With secure payment options and easy-to-use checkout systems, we
                make sure your customers have a smooth shopping experience,
                leading to higher conversion rates and customer satisfaction.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded transition-all uppercase text-xs tracking-widest hover:bg-red-700 active:scale-95 shadow-lg">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization & Launch Section */}
      <section className="py-24 px-6 lg:px-20 bg-white mb-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              SEO Optimization & Launch
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                A beautiful website is only effective if it can be found online.
                We implement best practices for on-page SEO during the
                development phase, ensuring that your website is optimized for
                search engines. This includes optimizing metadata, headings,
                images, and URL structures for better visibility.
              </p>
              <p>
                We also ensure your website is mobile-friendly, as this is a
                crucial factor in search engine rankings. After thorough testing
                for functionality and compatibility, we launch your website,
                ensuring it’s fully responsive and performing optimally.
              </p>
              <div className="pt-8">
                <a href="/contact-us">
                  <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded transition-all uppercase text-xs tracking-widest hover:bg-red-700 active:scale-95 shadow-lg">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
                alt="SEO Optimization & Launch"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
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

export default WordPressDevelopmentPage;
