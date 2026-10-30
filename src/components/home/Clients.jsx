'use client'

import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Clients = () => {
  const clients = [
    { name: "Client 1", img: "/assets/img1.png" },
    { name: "Client 2", img: "/assets/img2.png" },
    { name: "Client 3", img: "/assets/img3.png" },
    { name: "Client 4", img: "/assets/img4.png" },
    { name: "Client 5", img: "/assets/img5.png" },
    { name: "Client 6", img: "/assets/img6.png" },
    { name: "Client 7", img: "/assets/img7.png" },
    { name: "Client 8", img: "/assets/img8.png" },
    { name: "Client 9", img: "/assets/img9.png" },
  ];

  return (
    <div className="text-[#7A6960]">
      <div className="flex justify-center items-center mt-2">
        
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Trusted by over 150+ major companies
      </p>

      {/* Logo slider */}
      <Marquee pauseOnHover={true} className="flex items-center">
        {clients.map((client, index) => (
          <div key={index} className="w-28 mr-20 flex items-center justify-center">
            <Image 
              src={client.img} 
              alt={client.name} 
              width={112} 
              height={112} 
              className="w-full h-auto object-contain" 
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
