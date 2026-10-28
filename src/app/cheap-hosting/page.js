'use client'

import React, { useEffect } from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from "next/image";
import { Server, Zap, ShieldCheck, Headphones, Database, Globe, Rocket, CheckCircle2, ShoppingCart } from "lucide-react";
import { SiWordpress, SiJoomla } from "react-icons/si";

const CheapHostingPage = () => {
  const features = [
    {
      title: "1-click Application Installer",
      desc: "Open-source Applications are the easiest way to build fantastic websites at basically no cost. Installing an open-source application has never been that easy! Thanks to our 1-Click Installer, your website will be up in no time!",
      icon: <Rocket className="text-red-600" size={32} />
    },
    {
      title: "Automatic Daily Backups",
      desc: "Backing up your website is quite an easy task, but maintaining healthy daily backups is always a challenge. Our Offsite daily backup solution, our customers will always have a backup one click away!",
      icon: <Database className="text-red-600" size={32} />
    },
    {
      title: "Web Server Cache",
      desc: "With an intuitive caching mechanism, our customers' websites not only load faster, but they also have a minimal resource usage footprint, allowing even more website visitors on smaller and cheaper plans!",
      icon: <Zap className="text-red-600" size={32} />
    },
    {
      title: "Managed Web Hosting service",
      desc: "With our Managed Cloud SSD Shared Hosting packages, our customers will never have to worry about the health and the up-to-date state of our web hosting environment! We will fully take care of that aspect!",
      icon: <Server className="text-red-600" size={32} />
    },
    {
      title: "SSD Cloud Storage",
      desc: "For the storage of our Cloud SSD Shared Hosting packages, we are using best in class, native SSD Drives. Combined with the battery-powered RAID controllers, we ensure the data integrity of our customers!",
      icon: <Database className="text-red-600" size={32} />
    },
    {
      title: "Easy to pilot service with cPanel",
      desc: "What is a web hosting service without a wheel to steer it in the right direction? Over the years, cPanel became an industry standard when it comes to reliable, native, and easy to use web hosting control panel!",
      icon: <Globe className="text-red-600" size={32} />
    },
    {
      title: "24/7 Technical Support",
      desc: "Our Technical support team is always online for our customers! From migrating websites to installing Themes, Plugins, SSL certificates, we are here to help you 24/7!",
      icon: <Headphones className="text-red-600" size={32} />
    },
    {
      title: "Tight Website Security",
      desc: "Innovative, AI-based security technologies are taking care of every website on our Cloud SSD Shared Hosting plans, providing an optimal environment for your online mission!",
      icon: <ShieldCheck className="text-red-600" size={32} />
    },
    {
      title: "Cloud SSD Technology for 99.99% Uptime",
      desc: "Cloud-powered Shared hosting servers for optimal uptime and no hardware failures! SSD storage for lightning-fast website performance!",
      icon: <Zap className="text-red-600" size={32} />
    }
  ];

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Cheapest Hosting
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            Start Your Own Web Hosting Business Today..
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircle2 className="text-red-600" size={20} />
              <span>10x Faster Then SSD Hosting</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircle2 className="text-red-600" size={20} />
              <span>7 Days Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircle2 className="text-red-600" size={20} />
              <span>FREE cPanel Control Panel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
            {/* Placeholder for other plans if needed, but showing Basic as requested */}
            <div className="hidden md:block"></div> 
            <div className="bg-white border-2 border-red-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">
                Save 30%
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold text-red-600">Rs 35.00</span>
                <span className="text-gray-500 text-sm ml-2">INR/mo</span>
                <p className="text-gray-400 line-through text-sm">Rs 50.00 INR/mo</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "1 Website",
                  "2 GB NVMe SSD Storage",
                  "Unlimited Bandwidth",
                  "Free SSL (worth ₹950/yr)",
                  "Free Weekly Backup (worth ₹999/yr)",
                  "Website Builder",
                  "WordPress Optimized",
                  "1 Email Accounts",
                  "1 MySQL Database"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium border-b border-gray-100 pb-2 last:border-0">
                    <CheckCircle2 className="text-red-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg active:scale-95">
                Click Here To Buy
              </button>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 uppercase">
              What makes our Managed cPanel Web Hosting awesome?
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Optimization */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
            cPanel SSD Web Hosting specially optimized for the most used Opensource scripts!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "WordPress", icon: <SiWordpress size={64} className="text-[#21759b]" />, desc: "At its core, WordPress is the simplest, most popular way to create your own website or blog. In fact, WordPress powers over 43.3% of all the websites on the Internet." },
              { name: "Joomla", icon: <SiJoomla size={64} className="text-[#f47321]" />, desc: "Joomla is an open-source content management system used for creating Web content. It is written in PHP and makes use of a MySQL database for storing data." },
              { name: "Opencart", icon: <ShoppingCart size={64} className="text-[#2396d8]" />, desc: "The OpenCart marketplace features 13000+ modules and themes to jump-start, grow and expand your business. You can find beautiful themes for just about any sector." }
            ].map((cms, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-6 p-4 rounded-full bg-gray-50">{cms.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cms.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CheapHostingPage;
