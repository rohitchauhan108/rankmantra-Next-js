'use client'

import React, { useEffect } from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className=" ">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 ">

        {/* Column 1 */}
        <div data-aos="fade-up">
          <Image 
            src="/images/logo.png" 
            alt="logo" 
            width={176} 
            height={44} 
            style={{ height: "auto" }}
            className="w-44 mb-4" 
          />
          <p className="text-sm text-zinc-700 mb-4">
            Starting in 2015 with only one customer, we've expanded into a full-blown digital marketing agency providing outstanding services to thousands of companies.
          </p>

          <p className="font-medium">
            Address:
            <span className="font-normal ml-1">
              Shyam Tower, Shimla Bypass Road, Dehradun 248171
            </span>
          </p>

          <p className="font-medium mt-2">
            Phone:
            <div className="flex flex-col gap-1 mt-1">
              <a href="tel:+918979249912" className="font-normal hover:text-red-600">
                +91 8979249912
              </a>
              <a href="tel:+917500744458" className="font-normal hover:text-red-600">
                +91 7500744458
              </a>
              <a href="tel:+917055596464" className="font-normal hover:text-red-600">
                +91 7055596464
              </a>
            </div>
          </p>

          <p className="font-medium">
            Email:
            <a href="mailto:info@rankmantra.com" className="ml-1 font-normal hover:text-red-600">
              info@rankmantra.com
            </a>
          </p>
        </div>

        {/* Column 2 */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-[#7A6960] font-semibold text-lg mb-4">
            Google Reviews
          </h3>

          <a
            href="https://www.google.com/search?q=RankMantra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-red-600 text-sm"
          >
            View Our Google Reviews
          </a>

          <div className="mt-4 max-w-[200px] text-gray-500">Google Reviews Image</div>
        </div>

        {/* Column 3 */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-[#7A6960] font-semibold text-lg mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm text-zinc-700">
            <li><Link href="/web-develop" onClick={scrollToTop} className="hover:text-red-600">Web Development</Link></li>
            <li><Link href="/website-redesign" onClick={scrollToTop} className="hover:text-red-600">Website Redesigning</Link></li>
            <li><Link href="/ecommerce-develop" onClick={scrollToTop} className="hover:text-red-600">Ecommerce Development</Link></li>
            <li><Link href="/shopify-development" onClick={scrollToTop} className="hover:text-red-600">Shopify Development</Link></li>
            <li><Link href="/wordpress-development" onClick={scrollToTop} className="hover:text-red-600">Wordpress Development</Link></li>
            <li><Link href="/wix-development" onClick={scrollToTop} className="hover:text-red-600">Wix Development</Link></li>
            <li><Link href="/smm" onClick={scrollToTop} className="hover:text-red-600">Social Media Marketing</Link></li>
            <li><Link href="/web-hosting-package" onClick={scrollToTop} className="hover:text-red-600">Web Hosting</Link></li>
            <li><Link href="/seo" onClick={scrollToTop} className="hover:text-red-600">SEO Development</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-[#7A6960] font-semibold text-lg mb-4">
            Follow Us
          </h3>

          <p className="text-sm text-zinc-700 mb-4">
            Follow RankMantra for daily inspiration and expert digital marketing insights.
          </p>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/rankmantra/" target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:border-red-600 hover:text-red-600">
              <IoLogoFacebook size={22} />
            </a>

            <a href="https://www.instagram.com/rank_mantra/" target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:border-red-600 hover:text-red-600">
              <IoLogoInstagram size={22} />
            </a>

            <a href="https://www.linkedin.com/company/rankmantra/" target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:border-red-600 hover:text-red-600">
              <IoLogoLinkedin size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-zinc-600">
          
          <div className="flex gap-4">
            <Link href="/privacy-policy" onClick={scrollToTop} className="hover:text-red-600">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" onClick={scrollToTop} className="hover:text-red-600">
              Terms & Conditions
            </Link>
          </div>

          <div>
            © {new Date().getFullYear()} RankMantra. All rights reserved.
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
