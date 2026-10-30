"use client";

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/contact/Contact";
import Image from "next/image";
import {
  IoLocationOutline,
  IoCallOutline,
  IoCreateOutline,
  IoCalendarOutline,
  IoSettingsOutline,
  IoChatbubblesOutline,
  IoBarChartOutline,
} from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const SocialMediaPage = () => {
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

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: IoCreateOutline,
      title: "Content created for you",
      description:
        "Posts are written and designed by our team, so you do not need to find the time.",
    },
    {
      icon: IoCalendarOutline,
      title: "Regular posting",
      description:
        "Get three or five posts a week on each network, depending on your plan.",
    },
    {
      icon: IoSettingsOutline,
      title: "Accounts set up and optimised",
      description:
        "We create or tidy your business pages so they look professional and are easy to find.",
    },
    {
      icon: IoChatbubblesOutline,
      title: "Active account management",
      description:
        "We manage your pages day to day, with comment and spam monitoring on the Gold plan.",
    },
    {
      icon: IoBarChartOutline,
      title: "Monthly progress report",
      description:
        "Get a clear summary of what was published and how your accounts are growing.",
    },
  ];

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070"
            alt="Social Media Strategy Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Social Media <span className="text-red-600">Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium mb-10 drop-shadow-lg">
            RankMantra's social media marketing packages start at $150 a month.
            We set up and optimise your accounts, create your content, post on a
            regular schedule and manage your pages, and send you a progress
            report every month.
          </p>
          <button
            onClick={handleScrollToContact}
            className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-4 px-10 rounded transition-all duration-300 uppercase tracking-widest text-sm shadow-xl active:scale-95"
          >
            SCHEDULE A CALL
          </button>
        </div>
      </section>

      {/* Social Media Made Easy Section */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Social Media Made Easy
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto">
            <p>
              Results driven social media services attracts your audience and
              make them tick. Now, engage your audience and let them want to see
              intriguing and relevant posts that appeal to their desire. Thus,
              grow your audience.
            </p>
            <p>
              Our social media marketing experience spans all the major social
              networks including Twitter, Facebook, Tumblr, Instgram, Pinterest
              and YouTube. We focus on social media tactics that develops long
              term value in your brand.
            </p>
            <p>
              Our service aims to help you listen in to what people are talking
              about, when and how you can chime, direct and manage those
              conversation. These tactics also work best on each and every
              social media network that is appropriate for your business or
              brand.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              What you get with RankMantra
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group rounded-2xl border border-red-300 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl ${
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  }`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-gray-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frontline Solutions Section */}
      <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
                alt="Frontline Solutions Team"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              The Frontline Web Design And Development Solutions
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mb-10 rounded-full"></div>
            <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-medium">
              <p className="italic border-l-4 border-red-600 pl-6 py-2 bg-gray-50 rounded-r-xl">
                We, the Rank Mantra, are a special team of dedicated
                professionals with frontline competencies in the demanded
                specializations of Website Design and development.
              </p>
              <p>
                Having worked for a good number of clients in India and abroad,
                we have developed robust and evident expertise in the segments
                of SEO, SMO, Search Engine Marketing, Pay Per Click and traffic
                optimization through dedicated link building and local listing.
              </p>
              <p>
                We, the Rank Mantra, are a special team of dedicated
                professionals with frontline competencies in the demanded
                specializations of Website Design and Development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintain a consistent schedule calendar Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000"
              alt="Calendar Schedule"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
              Maintain a consistent schedule calendar
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-red-600"></span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mt-10">
              <p>
                It's time to make the move from paper calendar to a web-based
                schedule.
              </p>
              <p>
                Now, schedule and create and stick to to-do-list which will be
                easy to use.
              </p>
              <p>
                A content calendar is a great way to plan and organize your
                content well in advance. It helps you to maintain a consistent
                content production schedule and other assets to tell your brand
                story, drive SEO and win sales.
              </p>
            </div>
            <button
              onClick={handleScrollToContact}
              className="mt-10 bg-red-600 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-all duration-300 uppercase tracking-widest text-sm"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </section>

      {/* Specialized Content Management System Section */}
      <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
              alt="Content Management System"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
              Specialized Content Management System
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-red-600"></span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mt-10">
              <p>
                With limited resources and time, creating a unique post for each
                social media channel can be a challenging, but it is well worth
                the effort.
              </p>
              <p>
                Under these conditions, specialized content management systems
                have developed into central technologies.
              </p>
              <p>
                Expand your reach on social media sites by getting more likes on
                your posts. Create compelling, unique and insightful content
                that people want to know.
              </p>
            </div>
            <button
              onClick={handleScrollToContact}
              className="mt-10 bg-red-600 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-all duration-300 uppercase tracking-widest text-sm"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </section>

      {/* SEO Expert Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000"
              alt="SEO Expert analyzing website performance with team"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
              SEO Expert Can Help Your Website Get Noticed
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-red-600"></span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mt-10">
              <p>
                Let your face to be seen everywhere across several platforms. We
                conduct keyword research and know how to use it.
              </p>
              <p>
                SEO begins with keyword research and so we develop content to
                target the best keyword.
              </p>
              <p>
                We also distribute content through various marketing channels
                which will quickly turn customers inward.
              </p>
            </div>
            <button
              onClick={handleScrollToContact}
              className="mt-10 bg-red-600 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-all duration-300 uppercase tracking-widest text-sm"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </section>

      {/* Plans & Signup Section */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Plans & Signup – Post Planner
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto mb-12">
            <p>
              Use post planner to find, plan and post better content to boost
              your reach and social media marketing.
            </p>
            <p>
              Plan and bring clarity to your chaos and also eliminate guess work
              with a custom plan.
            </p>
            <p>
              Now, view, daily, weekly and monthly planned post in a smart
              calendar and make beautiful custom images to help your post stand
              out.
            </p>
          </div>
          <button
            onClick={handleScrollToContact}
            className="bg-red-600 hover:bg-gray-800 text-white font-bold py-4 px-12 rounded transition-all duration-300 uppercase tracking-widest text-sm"
          >
            SCHEDULE A CALL
          </button>
        </div>
      </section>

      {/* Premium 3-Steps Section */}
      <section className="relative py-32 px-6 lg:px-20 bg-gray-950 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1170"
            alt="Process Background"
            fill
            className="object-cover opacity-10 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-transparent to-gray-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
            How <span className="text-red-600">it works</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mb-24 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "SCHEDULE A CALL",
                desc: "Tell us about your business, your audience and which networks matter to you.",
                img: "/assets/call.jpg",
                btn: "SCHEDULE NOW",
              },
              {
                title: "GET YOUR PLAN",
                desc: "We recommend the package that fits your goals and budget.",
                img: "/assets/plan.jpg",
                btn: "GET PLAN",
              },
              {
                title: "GROW YOUR AUDIENCE",
                desc: "We create and publish your content, manage your accounts and report on progress every month.",
                img: "/assets/win.jpg",
                btn: "GET STARTED",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/[0.03] backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 flex flex-col items-center text-center transition-all duration-700 hover:bg-white/[0.08] hover:border-red-600/30 hover:-translate-y-4"
              >
                <div className="absolute -top-6 bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(220,38,38,0.5)] rotate-12 group-hover:rotate-0 transition-all duration-500">
                  0{idx + 1}
                </div>
                <div className="w-24 h-24 mb-10 relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover rounded-full border-2 border-white/20 p-1 group-hover:border-red-600/50 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm mb-12 flex-grow leading-relaxed font-medium">
                  {step.desc}
                </p>
                <button
                  onClick={handleScrollToContact}
                  className="bg-white/10 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-500 w-full uppercase text-[10px] tracking-[0.3em] border border-white/10 hover:border-red-600 hover:shadow-[0_15px_30px_rgba(220,38,38,0.3)]"
                >
                  {step.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-32 px-6 lg:px-20 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-red-600/10 border border-red-600/20">
              <span className="text-red-600 text-xs font-black tracking-[0.3em] uppercase">
                Connect With Us
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
               Ready to Grow Your Brand on <span className="text-red-600 italic">Social Media?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
              Tell us about your business and we will recommend the right plan.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            {/* Info Column */}
            <div className="lg:w-1/3 bg-gray-900 p-12 rounded-[3.5rem] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="space-y-12 relative z-10">
                <div className="flex gap-8 items-center group">
                  <div className="text-white bg-red-600 p-5 rounded-3xl shadow-[0_10px_20px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform duration-500">
                    <IoLocationOutline size={28} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">
                      Address
                    </h3>
                    <p className="text-white font-bold text-sm leading-relaxed">
                      Shyam Tower, Shimla Bypass Road, Dehradun 248171
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-center group">
                  <div className="text-white bg-white/10 p-5 rounded-3xl group-hover:bg-red-600 transition-all duration-500">
                    <IoCallOutline size={28} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+918979249912"
                      className="text-white font-black text-lg hover:text-red-600 transition-colors tracking-tight"
                    >
                      +91 8979249912
                    </a>
                  </div>
                </div>

                <div className="flex gap-8 items-center group">
                  <div className="text-white bg-white/10 p-5 rounded-3xl group-hover:bg-red-600 transition-all duration-500">
                    <TfiEmail size={28} />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@rankmantra.com"
                      className="text-white font-black text-lg hover:text-red-600 transition-colors tracking-tight"
                    >
                      info@rankmantra.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center lg:text-left">
                  Follow Our Journey
                </p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all cursor-pointer"
                    >
                      <span className="text-[10px] font-bold">SM</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-2/3">
              <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-gray-50">
                <form className="space-y-10" ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full pb-5 pt-2 bg-transparent border-b-2 border-gray-100 outline-none focus:border-red-600 transition-all font-bold text-gray-900 placeholder:text-gray-300 text-lg"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-700 group-focus-within:w-full"></span>
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full pb-5 pt-2 bg-transparent border-b-2 border-gray-100 outline-none focus:border-red-600 transition-all font-bold text-gray-900 placeholder:text-gray-300 text-lg"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-700 group-focus-within:w-full"></span>
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
                      <option value="seo">
                        Search Engin Optimization (SEO)
                      </option>
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
                      className="w-full pb-5 pt-2 bg-transparent border-b-2 border-gray-100 outline-none focus:border-red-600 transition-all font-bold text-gray-900 placeholder:text-gray-300 text-lg"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-700 group-focus-within:w-full"></span>
                  </div>
                  <div className="relative group">
                    <textarea
                      placeholder="Message"
                      name="message"
                      rows="4"
                      className="w-full pb-5 pt-2 bg-transparent border-b-2 border-gray-100 outline-none focus:border-red-600 transition-all font-bold text-gray-900 placeholder:text-gray-300 resize-none text-lg"
                    ></textarea>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-700 group-focus-within:w-full"></span>
                  </div>
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group bg-red-600 text-white font-black py-6 px-16 rounded-[2rem] transition-all duration-500 uppercase tracking-[0.4em] text-xs hover:bg-gray-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 flex items-center gap-4"
                    >
                      Send Message
                      <svg
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaPage;
