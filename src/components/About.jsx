'use client'

import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import { BsPeople } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    if (video) {
      video.currentTime = 0;
      video.load();
      setShow(true);
    }
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    if (video) {
      video.pause();
      setShow(false);
    }
  };

  return (
    <div className="relative lg:mx-30">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        ABOUT US.
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-12 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-8 lg:py-12 px-6 md:px-0"
        >
          <Image 
            src="/assets/about.png" 
            alt="About Rankmantra" 
            width={800} 
            height={600} 
            className="w-full h-auto rounded-2xl shadow-2xl" 
          />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-6 md:p-0">
          <div data-aos="fade-left">
            <p className="text-base lg:text-lg mt-5 text-gray-600 primary-font leading-relaxed">
              RankMantra is a prominent Digital Marketing Company in Dehradun providing professional Online Growth Solutions to sizable companies. We're specialists in creating a powerful digital footprint for brands via SEO, social media marketing, pay per click marketing, website building, and performance marketing. A reputed company providing digital marketing services in Dehradun, we aim to improve the online visibility of your business to get high leads with our smart tools and data-driven strategies from which you can get high conversions.
            </p>
            <p className="text-base lg:text-lg mt-5 text-gray-600 primary-font leading-relaxed">
              We, as the Best Digital Marketing Agency in Dehradun, are dedicated to providing innovative and effective digital solutions to our clients, with a goal of achieving long-lasting success for their businesses. Each business has its own specific objectives and marketing solutions. Our team works in close partnership with each client to grasp their business objectives and develop custom-made marketing solutions that lead to quantifiable growth. Transparency in all our projects; we have regular performance reports and are very clear in our communication.
            </p>
            <p className="text-base lg:text-lg mt-5 text-gray-600 primary-font leading-relaxed">
              We use creativity, industry knowledge and knowledge derived from data to give you increased visibility on the web, appropriate visitors and more and more conversions. Long-lasting engagement is our goal by consistently providing you with results that enable your business to succeed in the changing digital world. Select RankMantra, the Best Digital Marketing Agency in Dehradun, for sustainable growth and long-term success.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-8"
          >
            <div
              className="bg-red-600 w-fit p-3 lg:p-4 rounded-xl shadow-lg shadow-red-600/20 text-white"
            >
              <BsPeople size={"24px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-lg lg:text-xl font-bold">
                Expert Mentorship:
              </h2>
              <p className="text-sm lg:text-base text-gray-500 primary-font mt-1">
                We offer you mentorship on the highest level featuring customized strategies for this digital era from industry actual specialists. We aim to educate businesses on creating effective digital growth systems and to embed them within the organization.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6"
          >
            <div
              className="bg-red-600 w-fit p-3 lg:p-4 rounded-xl shadow-lg shadow-red-600/20 text-white"
            >
              <BsPeople size={"24px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-lg lg:text-xl font-bold">
                Skill Development:
              </h2>
              <p className="text-sm lg:text-base text-gray-500 primary-font mt-1">
                Practical skill development is an important and integral part in real life scenarios. This helps businesses to not just grow but to comprehend the concept of digital success in today's challenging marketplace.
              </p>
            </div>
          </div>

          <p
            data-aos="zoom-in"
            className="text-base lg:text-lg mt-8 text-gray-600 primary-font italic leading-relaxed"
          >
            Digital marketing company in Dehradun is often tied in to RankMantra objective of working to improve brand visibility, engagement, traffic quality, and conversion rates. RankMantra strategies have formerly helped boost brand visibility, engagement, site visitors, and conversion rates, making it a trusted alternative for Dehradun digital marketing.
          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-6 mt-10">
            <a href="#contact">
              <CtaButton name={"Get Started"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
