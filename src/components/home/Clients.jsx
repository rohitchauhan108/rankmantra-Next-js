"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Clients = () => {
  const clients = [
    { name: "Client 1", img: "/client-logo/1.webp" },
    { name: "Client 2", img: "/client-logo/2.webp" },
    { name: "Client 3", img: "/client-logo/3.webp" },
    { name: "Client 4", img: "/client-logo/4.webp" },
    { name: "Client 5", img: "/client-logo/5.webp" },
    { name: "Client 6", img: "/client-logo/6.webp" },
    { name: "Client 7", img: "/client-logo/7.webp" },
    { name: "Client 8", img: "/client-logo/8.webp" },
    { name: "Client 9", img: "/client-logo/9.webp" },
    { name: "Client 10", img: "/client-logo/10.webp" },
    { name: "Client 11", img: "/client-logo/11.webp" },
    { name: "Client 12", img: "/client-logo/12.webp" },
    { name: "Client 13", img: "/client-logo/13.webp" },
    { name: "Client 14", img: "/client-logo/14.webp" },
    { name: "Client 15", img: "/client-logo/15.webp" },
    { name: "Client 16", img: "/client-logo/16.webp" },
    { name: "Client 17", img: "/client-logo/17.webp" },
    { name: "Client 18", img: "/client-logo/18.webp" },
    { name: "Client 19", img: "/client-logo/19.webp" },
  ];

  return (
    <div className="text-[#7A6960] bg-[#fefaf8]">
      <h1 className="text-3xl font-semibold text-center uppercase">
        Collaborating with top brands
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Trusted by over 150+ major companies
      </p>

      {/* First 10 slides: Right to Left (Default direction) */}
      <Marquee pauseOnHover={true} className="flex items-center mb-6">
        {clients.slice(0, 10).map((client, index) => (
          <div
            key={index}
            className="w-28 mr-20 flex items-center justify-center"
          >
            <Image
              src={client.img}
              alt={client.name}
              width={200}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Marquee>

      {/* Rest of the slides: Left to Right (direction="right") */}
      <Marquee
        pauseOnHover={true}
        direction="right"
        className="flex items-center"
      >
        {clients.slice(10).map((client, index) => (
          <div
            key={index}
            className="w-28 mr-20 flex items-center justify-center"
          >
            <Image
              src={client.img}
              alt={client.name}
              width={200}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
