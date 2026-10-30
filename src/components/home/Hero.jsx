"use client";

import React, { useEffect } from "react";
import CtaButton from "../ui/CtaButton";
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dxfuimb1a/video/upload/v1793345968/3255386-uhd_3840_2160_25fps_vkneny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Digital Marketing Agency in Dehradun That Turns Clicks Into Customers
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
          SEO, PPC, social media and web development, built around one goal:
          more qualified leads for your business. Trusted by brands in Dehradun,
          across India and overseas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="w-full sm:w-auto">
            <CtaButton name=" Get a Free Audit" />
          </a>
          <a href="/services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide">
              Explore Services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
