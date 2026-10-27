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

const SearchPage = () => {
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
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1332&auto=format&fit=crop"
            alt="SEO Hero Background"
            fill
            className="object-cover opacity-60 grayscale-[20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
        </div>

        <div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Search Engine Optimization &{" "}
            <span className="text-red-600 font-light italic">Marketing</span> | SEO Company in Dehradun
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We offer SEO services in dehradun that will help your business in sustainable online growth, boost your search visibility, and draw in targeted traffic, hence leading to your business improvement.
          </p>
          <div className="mt-12">
            <button
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

      {/* Super Visibility Section */}
      <section className="py-24 px-6 lg:px-20 bg-white border-b border-gray-50">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-8 uppercase tracking-tight">
            Super Visibility in Rankings
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-12"></div>

          <div className="space-y-8 text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            <p>
              At RankMantra, we have a dedicated team of highly skilled SEO experts who can help you increase exposure in the online world using effective and tested strategies that can help you rank better on the search engine results page (SERP). Here, as a trusted SEO company in Dehradun, our job is that we want our wanted viewers on our site for the required time. We take a holistic strategy to ensure that your business is visible and strong on the internet, combining technical capabilities, quality content and strategic optimization to have a constructive effect on the sustainable growth of your business.
            </p>
            <p>
              Using SEO services in Dehradun, you can make your products and services easily accessible to your intended audience within a lot less time.Whether it's building a new website, or realigning an existing website, we adjust every part, every element of your website to work best, so that it can generate more traffic, better experiences and more conversions on search engines. Using industry best practices and data-driven techniques, we create SEO solutions that align with your business objectives.
            </p>
            <p>
              RankMantra is seen as one of the leading SEO company in Dehradun due to their tailor-made strategies, which not only improve businesses' ranking but also provide them with sustainable solutions to achieve their goals. Your business needs to stand out from the competition to be successful, and our experienced team is dedicated to ensuring you get that advantage through a strong, reliable agence seo.
            </p>
          </div>
        </div>
      </section>

      {/* Rank on 1st Page Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1562577308-2c31685ad4e7?q=80&w=1074"
                alt="Rank on 1st Page"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Rank on the 1st Page of SERPs
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Optimizing your website to appear on the first page of search engines is never going to be something that you can do simply by strewing a handful of keywords on your site. A well-planned SEO strategy, continuous optimization, and understanding of the search engine algorithms, come into play here. RankMantra is a prominent SEO company in Dehradun that creates personalized SEO strategies to boost your business to an effective level, connect you with the intended audience, and enhance the concentration on the search engine results page (SERP).
              </p>
              <p>
                From user experience to keyword strategy, on page optimization to technical optimization, we offer everything involved in a website's SEO. We do in-depth website analysis, competitive analysis, and discover how to raise ranking for the keywords related to your site.
              </p>
              <p>
                When businesses search for the best SEO company in Dehradun, RankMantra utilizes state-of-the-art SEO instruments and techniques to examine your website, recognize its strengths and weaknesses, and apply data-driven optimizations that will ensure your website develops sustainably. From a local SEO expert to an expert agence seo, we will work our magic to boost our visitors to your site, ensure you're placed higher among search listings, and produce real-world business outcomes. We offer our SEO services in dehradun with the focus that the website is optimized for search engines, user-friendly, and will be lightning fast.
              </p>
              <div className="pt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase"
                >
                  SCHEDULE A CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improve Ability Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Improve the Performance of Your Web Pages
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Our SEO experts at RankMantra have the experience needed to optimize your website pages, making them search engine friendly and user-friendly. As a trusted SEO company in Dehradun, we examine the performance of your website on the keywords that you are interested in and come up with ideas to improve visibility, traffic and engagement.
              </p>
              <p>
                Our SEO experts perform a detailed audit of your website using sophisticated tools to identify technical problems, missing content, and optimization opportunities that could impact your website's ranking. Then we make effective changes to your site, such as on page optimization, site structure optimization, and performance optimization to ensure that your website appears higher in search results.
              </p>
              <p>
                We offer our seo services focusing on getting a website search engine friendly, user-friendly and incredibly fast.
              </p>
              <div className="pt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase"
                >
                  SCHEDULE A CALL
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1678690832311-bb6e361989ca?q=80&w=1224"
                alt="Improve Web Page"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Track your keyword Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1597392582469-a697322d5c16?q=80&w=1170"
                alt="Track your keyword"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Track Your Keywords
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Monitoring keyword ranking and usage would be essential to judge how effective your SEO approach is. Google Analytics and other advanced SEO tools will allow you to track your target keywords so you can see how your site performs in search results. As a reliable agence seo service, we offer you useful ideas and information that can assist you make informed choices and continually boost your web presence.
              </p>
              <p>
                We also provide comprehensive weekly/monthly performance reports, which include information on keyword rankings, organic traffic, and campaign performance. As your website's rankings change with algorithm updates by the search engines or heavy competition, our SEO experts roll out swift and effective changes to your website's optimization plan to ensure that you hit the right targets. This dedication towards continuous improvement is one of the reasons why businesses are choosing RankMantra as the best SEO company in Dehradun for sustainable digital growth.
              </p>
              <div className="pt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase"
                >
                  SCHEDULE A CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of APIs Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#7A6960] mb-6 uppercase tracking-tight">
              Importance of APIs
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                APIs serve as crucial connectors, helping to integrate various digital devices, optimize business processes, and facilitate data transfer between platforms. RankMantra is a reliable agence seo that enables businesses to get the best out of APIs, automate processes, and understand customer behavior and performance better.These seamless integrations enables sharp decision-making and digital growth over time.
              </p>
              <p>
                In addition to complete SEO services in Dehradun, we also use campaign analytics data and third party integration to monitor website performance and measure the effectiveness of campaigns. This information can help businesses track key objectives, identify growth opportunities, and regularly optimize their digital strategy. RankMantra's focus on innovation and results has made it a trusted name in the industry for businesses looking for the best SEO company in Dehradun.
              </p>
              <div className="pt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-b-2 border-red-600 text-gray-900 font-semibold py-2 text-xs tracking-widest hover:text-red-600 transition-all uppercase"
                >
                  SCHEDULE A CALL
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm border-[12px] border-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1170"
                alt="Importance of APIs"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
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

export default SearchPage;
