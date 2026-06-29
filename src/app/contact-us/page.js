'use client'
import { useRef, useEffect } from 'react'
import emailjs from "@emailjs/browser"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function ContactUsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Message not sent. Please try again.");
      });
  };

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074" 
            alt="Contact Us Hero" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white py-12 lg:py-24" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 tracking-tight">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 font-medium max-w-2xl mx-auto opacity-90">
            Have a project in mind or just want to say hello? We'd love to hear from you. Our team is ready to help you grow your digital presence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 px-4 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10 lg:space-y-12" data-aos="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tighter">Get In <span className="text-red-600">Touch</span></h2>
                <div className="w-12 h-1 bg-red-600 rounded-full mb-8"></div>
                <p className="text-gray-500 font-medium italic mb-10">
                  Feel free to reach out to us through any of the following channels. We aim to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <IoLocationOutline size={30} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Office Address</h4>
                  <p className="text-gray-600 font-bold">Shyam Tower, Shimla Bypass Road, Dehradun 248171</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm mt-1">
                  <IoCallOutline size={30} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Call Us</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918979249912" className="text-gray-600 font-black hover:text-red-600 transition-colors">+91 8979249912</a>
                    <a href="tel:+917500744458" className="text-gray-600 font-black hover:text-red-600 transition-colors">+91 7500744458</a>
                    <a href="tel:+917055596464" className="text-gray-600 font-black hover:text-red-600 transition-colors">+91 7055596464</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <TfiEmail size={30} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Email Us</h4>
                  <a href="mailto:info@rankmantra.com" className="text-gray-600 font-black hover:text-red-600 transition-colors">info@rankmantra.com</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <form className="bg-gray-50/50 p-8 lg:p-12 rounded-[3rem] border border-gray-100 shadow-inner" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                    <input type="text" name="name" required placeholder="Your Name" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                    <input type="email" name="email" required placeholder="Your Email" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2 mb-6 lg:mb-8">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                  <input type="text" name="subject" required placeholder="What are you looking for?" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm" />
                </div>
                <div className="space-y-2 mb-10 lg:mb-12">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                  <textarea name="message" required placeholder="Tell us more about your project..." rows="5" className="w-full p-4 lg:p-5 bg-white border border-gray-100 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-gray-900 shadow-sm resize-none"></textarea>
                </div>
                <button type="submit" className="bg-red-600 text-white font-black py-4 lg:py-5 px-12 lg:px-16 rounded-full hover:bg-gray-900 transition-all uppercase tracking-[0.3em] text-xs shadow-xl shadow-red-600/20 w-full md:w-fit active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 lg:pb-32 px-4 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl h-[400px] relative border border-gray-100" data-aos="zoom-in">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.2789476479875!2d77.9935024518577!3d30.301079233132025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929f8421dcd3b%3A0xc98798955cbfeb6d!2sRankMantra%20Web%20Designing%20%26%20SEO%20Company!5e1!3m2!1sen!2sin!4v1782734587565!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  )
}
