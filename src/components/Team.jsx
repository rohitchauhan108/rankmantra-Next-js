'use client'

import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const teamMembers = [
    {
      name: "Priyanka Anand",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/priyanka-anand-13a359b6/",
      img: "/img/team/ceo.jpeg"
    },
    {
      name: "Abhishek Anand",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/abhishek-anand-47265815/",
      img: "/img/team/founder.jpeg"
    },
    {
      name: "Paras Arora",
      role: "Director",
      linkedin: "https://www.linkedin.com/in/paras-arora-7289253b/",
      img: "/img/team/director.jpg"
    }
  ];

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center uppercase">
        Leadership
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-28 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Custom Web Development Services to Elevate Your Digital Presence with RankMantra
      </p>

      <div className="flex flex-wrap justify-center items-center gap-28 p-5 lg:p-0">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative w-full sm:w-[250px]">
            <Image
              src={member.img}
              alt={member.name}
              width={250}
              height={250}
              className="w-full h-[250px] sm:h-[250px] rounded-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
              <a
                href={member.linkedin}
                className="text-blue-600 text-4xl mx-3 p-2 rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
