'use client'

import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { MdContentPasteSearch } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiBaseStationLine } from "react-icons/ri";
import { SiHostinger } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Services = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center uppercase">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-start mt-7 mb-10 text-lg p-2">
        We offer Digital Marketing Services in Dehradun that empower businesses with a strong online presence, reaching target audiences, and efficiently generating maximum returns from their online endeavors. From innovative campaign ideas to cutting-edge technology, and data analysis, our custom-made approaches are designed to enhance your brand presence and reach, boost the quality of leads you bring in and ensure your business maintains a steady, graduate growth curve.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2"
        data-aos="fade-up"
      >
        <div>
          <Card
            img={<HiOutlineChartPie />}
            title={"Apps Development"}
            desc={
              "We develop customised, scalable and secure user-friendly mobile applications for Android, iOS and cross platform."
            }
          />
        </div>

        <div>
          <Card
            img={<CgWebsite />}
            title={"Web Development"}
            desc={
              "We build responsive web sites, eCommerce solutions and custom web solutions for performance and user experience."
            }
          />
        </div>

        <div>
          <Card
            img={<MdContentPasteSearch />}
            title={"Optimization for Search Engines (SEO)"}
            desc={
              "Get your website noticed online, improve where your website shows up and have long term success, on the internet with our great Search Engine Optimization strategies."
            }
          />
        </div>

        <div>
          <Card
            img={<MdCampaign />}
            title={"Campaign-Creation"}
            desc={
              "Specialists in the creation of campaigns, target-oriented strategy development, engagement, conversions and results maximisation."
            }
          />
        </div>

        <div>
          <Card
            img={<FaAmazonPay />}
            title={"PPC Packages"}
            desc={
              "Targeted ads, optimized bidding strategies and ROI with effective paid campaigns are the main aspects our PPC services cater on."
            }
          />
        </div>
        <div>
          <Card
            img={<IoShareSocialSharp />}
            title={"SMM Packages"}
            desc={
              "We handle social media with interesting content strategies, and we increase the number of followers, the visibility of the brand and get conversions."
            }
          />
        </div>
        <div>
          <Card
            img={<RiBaseStationLine />}
            title={"ORM Packages"}
            desc={
              "We safeguard and improve your online records, eliminate negativity and construct reliability."
            }
          />
        </div>
        <div>
          <Card
            img={<SiHostinger />}
            title={"Web Hosting Packages"}
            desc={
              "We offer high quality secure, fast and reliable hosting solutions which come with consistent uptime, scalability and technical support."
            }
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
