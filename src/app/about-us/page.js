'use client'

import React, { useEffect,useRef } from "react";
import NavBar from '@/components/NavBar'
import emailjs from "@emailjs/browser"
import Footer from '@/components/Footer'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdDeveloperMode, MdOutlineDesignServices, MdSettingsSuggest } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const AboutUsPage = () => {
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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084" 
            alt="About Us Hero" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white py-12 lg:py-24" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 tracking-tight">
            About <span className="text-red-600">Us</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 font-medium max-w-3xl mx-auto opacity-90">
            Rank Mantra is a team of experts specializing in website design, development, SEO, SMO, SEM, PPC, traffic optimization, and link building, helping clients grow online presence both locally and globally.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-red-600 text-white hover:bg-red-600 font-bold py-3 px-8 lg:px-10 rounded-full transition-all duration-300 uppercase tracking-widest text-xs lg:text-sm shadow-xl active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Cards Section - Better spacing to avoid overlap issues */}
      <section className="relative -mt-12 lg:-mt-16 z-20 px-4 lg:px-20 mb-16 lg:mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { 
              title: "Development", 
              desc: "Our development team creates scalable, secure, and user-friendly applications tailored to your business needs.",
              icon: <MdDeveloperMode className="text-white text-3xl" /> 
            },
            { 
              title: "Designing", 
              desc: "Our design team creates visually stunning, intuitive, and user-centered designs to enhance your brand's identity.",
              icon: <MdOutlineDesignServices className="text-white text-3xl" /> 
            },
            { 
              title: "CMS Development", 
              desc: "Our CMS development team builds user-friendly, customizable, and scalable systems to manage your content effortlessly.",
              icon: <MdSettingsSuggest className="text-white text-3xl" /> 
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center flex flex-col items-center border border-gray-100" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="w-16 h-16 bg-red-600 rounded-2xl rotate-3 flex items-center justify-center mb-8 shadow-lg shadow-red-600/20">
                <div className="-rotate-3">{card.icon}</div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">{card.title}</h3>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Frontline Solutions Section - Fully Responsive */}
      <section className="py-12 lg:py-24 px-4 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
                alt="Frontline Solutions Team" 
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Frontline Web Design And <span className="text-red-600">Development Solutions</span>
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mb-10 rounded-full"></div>
            <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed font-medium">
              <p className="bg-red-50/50 p-6 rounded-2xl border-l-4 border-red-600 italic">
                We, the Rank Mantra, are a special team of dedicated professionals with frontline competencies in the demanded specializations of Website Design and development.
              </p>
              <p>
                Having worked for a good number of clients in India and abroad, we have developed robust and evident expertise in the segments of SEO, SMO, Search Engine Marketing, Pay Per Click and traffic optimization through dedicated link building and local listing.
              </p>
              <p>
                We, the Rank Mantra, are a special team of dedicated professionals with frontline competencies in the demanded specializations of Website Design and Development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Steps Section - Fully Responsive */}
      <section className="relative py-20 lg:py-32 px-4 lg:px-20 bg-gray-950 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1170" 
            alt="Process Background" 
            fill 
            className="object-cover opacity-10 grayscale" 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight px-4">
            3-STEPS TO MAKE YOUR BUSINESS AN <span className="text-red-600">ONLINE POWERHOUSE</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-16 lg:mb-24 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-left">
            {[
              { title: "SCHEDULE A CALL", desc: "Get in touch with us! You're only a phone call away from improving your company's exposure.", img: "/assets/call.jpg", btn: "SCHEDULE NOW" },
              { title: "GET YOUR PLAN", desc: "Browse through everything we have to offer and choose the option that's right for you!", img: "/assets/plan.jpg", btn: "GET PLAN" },
              { title: "WIN ONLINE", desc: "Take charge of all search engines and business listings with our all-in-one marketing solutions!", img: "/assets/win.jpg", btn: "START WINNING" }
            ].map((step, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-md p-8 lg:p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
                <div className="absolute -top-6 bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-lg shadow-xl shadow-red-600/20 rotate-12 group-hover:rotate-0 transition-transform">
                  {idx + 1}
                </div>
                <div className="w-20 h-20 mb-8 relative rounded-2xl overflow-hidden border-2 border-white/10">
                  <Image src={step.img} alt={step.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-10 flex-grow leading-relaxed font-medium italic">{step.desc}</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-white/20 text-white font-bold py-3 px-8 rounded-full transition-all duration-500 w-full uppercase text-[10px] tracking-widest group-hover:bg-red-600 group-hover:border-red-600 shadow-lg"
                >
                  {step.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Fully Responsive */}
      <section className="py-20 lg:py-32 px-4 lg:px-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-tighter">Contact <span className="text-red-600">Us</span></h2>
            <div className="w-16 h-1.5 bg-red-600 mx-auto rounded-full"></div>
            <p className="mt-8 text-gray-500 max-w-2xl mx-auto italic text-lg lg:text-xl font-medium px-4">
              Have questions or need assistance? Our team is ready to support you. Reach out to us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
            <div className="lg:col-span-1 space-y-10 lg:space-y-12">
              <div className="flex items-center gap-6 group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm"><IoLocationOutline size={30} /></div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Address</h4>
                  <p className="text-gray-600 font-bold">Shyam Tower, Dehradun 248171</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm"><IoCallOutline size={30} /></div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Call Us</h4>
                  <a href="tel:+918979249912" className="text-gray-600 font-black hover:text-red-600 transition-colors">+91 8979249912</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm"><TfiEmail size={30} /></div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Email Us</h4>
                  <a href="mailto:info@rankmantra.com" className="text-gray-600 font-black hover:text-red-600 transition-colors">info@rankmantra.com</a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <form className="bg-gray-50/50 p-8 lg:p-12 rounded-[3rem] border border-gray-100 shadow-inner" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                    <input type="email" name="email" placeholder="Your Email" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2 mb-6 lg:mb-8">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                  <input type="text" name="subject" placeholder="Subject" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm" />
                </div>
                <div className="space-y-2 mb-10 lg:mb-12">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                  <textarea placeholder="Your Message" name="message" rows="5" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm resize-none"></textarea>
                </div>
                <button type="submit" className="bg-red-600 text-white font-black py-4 lg:py-5 px-12 lg:px-16 rounded-full hover:bg-gray-900 transition-all uppercase tracking-[0.3em] text-xs shadow-xl shadow-red-600/20 w-full md:w-fit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
