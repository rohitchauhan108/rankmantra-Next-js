'use client'

import React, { useEffect } from "react";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    { id: 'web1', title: 'SSIN', category: 'Web Development', img: '/img/portfolio/ssin.webp' },
    { id: 'web2', title: 'Oliver', category: 'Web Development', img: '/img/portfolio/oliver.webp' },
    { id: 'web3', title: 'DDMR', category: 'Web Development', img: '/img/portfolio/ddmr.webp' },
    { id: 'web4', title: 'Hotel', category: 'E-Commerce', img: '/img/portfolio/hotel.webp' },
    { id: 'web5', title: 'Mahme', category: 'Responsive Design', img: '/img/portfolio/mahme.webp' },
    { id: 'web6', title: 'Tangle', category: 'Web Development', img: '/img/portfolio/tangle.webp' },
  ];

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center uppercase">
        Portfolio
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        View Our Recent Projects and Success Stories
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2"
       
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={`/portfolio/${project.id}`}
            className="group cursor-pointer"
          >
            <div className="relative rounded-lg h-64 overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="w-full h-full object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="font-semibold mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a href="/portfolio/web1" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition">
          View All Projects →
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
