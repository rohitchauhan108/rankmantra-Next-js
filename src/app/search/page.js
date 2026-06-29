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
            <span className="text-red-600 font-light italic">Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            SEO offers a visible and effective search presence which leads to a
            considerable increase of sales, profitability and cost efficiency
            for our clients.
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
            Super Visibility in Ranking
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-12"></div>

          <div className="space-y-8 text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            <p>
              At Rank mantra, you'll be fed with identified crowd of visibility
              among the web pages. You'll rank high on pages and come on top
              position in SERP. SEO is a very essential tool that helps to offer
              super visibility in website design and redesigning framework.
            </p>
            <p>
              This solution is meant for letting user find you as quickly as
              possible and make better use of your products and services, Since
              this is built upon frontline skills and knowledge.
            </p>
            <p>
              You will meet your business needs as easily as possible. Above
              all, you can find intrinsically both web design and development
              works and be successful to deliver solution for your client. With
              respect to generic result on SERP, you'll find sure delivery to
              meet expected ends at to surpass visibility.
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
              Rank on 1st Page in SERP
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                When it comes for ranking on 1st page, you'll have to meet your
                competitors and target audience by rigorous SEO strategy
                planning. SEO makes meeting your keyword possible on 1st page
                and leaves you no regret of your business decline.
              </p>
              <p>
                As such, it optimizes your website to progress your ranking.
              </p>
              <p>
                At Rank mantra, our equipment crawls through the entire site and
                recognizes what best can come for your ranking and improve it
                more efficiently.
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
              Improve the ability of web page
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                There are experienced and skilled staffs who can improve the
                ability of your website page that comes after a keyword has been
                input.
              </p>
              <p>
                At Rank mantra, our equipment crawls through the entire site and
                recognizes what best can come for your ranking and improve it
                more efficiently.
              </p>
              <p>
                As such, it optimizes your website to progress your ranking.
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
              Track your keyword
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-10"></div>
            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                You can now be able to track your keyword through Google
                Analytics. You will also enhance the campaign with weekly or
                monthly report and find benefits to your business.
              </p>
              <p>
                In case the keyword ranking fluctuation, you can take care of
                SEO tactics by calling our highly profile SEO experts.
              </p>
              <p>
                Track keywords through Google Analytics, enhance campaigns with
                weekly reports.
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
                You can now set your imperative things and hike the value of
                your business or company in a more smooth way by recognizing key
                business goals and objectives.
              </p>
              <p>
                It's time to bring success to your business by tracking profit
                growth, revenue and customer.
              </p>
              <p>
                Set key goals, streamline processes, and elevate your business
                value.
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
