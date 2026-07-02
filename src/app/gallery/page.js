'use client'

import React, { useEffect, useState, useRef } from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/g1.jpeg",
  "/images/g2.jpeg",
  "/images/g3.jpeg",
  "/images/g4.jpeg",
  "/images/g5.jfif",
  "/images/g5.jpeg",
  "/images/g6.jpeg",
  "/images/g7.jpeg",
  "/images/g8.jpeg",
  "/images/g9.jpeg",
  "/images/g10.jpeg",
];

const videos = [
  "/v1.mp4",
  "/v2.mp4",
  "/v3.mp4",
];

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleVideoPlayPause = (index) => {
    const videoElement = videoRefs.current[index];
    if (!videoElement) return;

    if (playingVideo === index) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo].pause();
      }
      videoElement.play();
      setPlayingVideo(index);
    }
  };

  // Lightbox navigation
  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImageIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />

      {/* Hero Section */}
      <section className="w-full bg-[#0b0d17] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="w-full max-w-4xl mx-auto px-6 text-center text-white" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
            Our <span className="text-[#e22626]">Gallery</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-semibold tracking-wide max-w-2xl mx-auto opacity-85 leading-relaxed">
            Explore our premium collection of moments and work. A visual journey through our achievements and culture.
          </p>
        </div>
      </section>

      {/* Sub-Header Section */}
      <div className="text-center pt-16 pb-16 text-3xl md:text-5xl font-bold tracking-wide flex flex-col items-center">
        <h2 className="uppercase">
          <span className="text-[#1e293b]">Photo</span> <span className="text-[#e22626]">Gallery</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#e22626] mt-3"></div>
      </div>

      {/* Image Gallery Section */}
      <section className="pb-16 lg:pb-24 px-4 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 lg:gap-6 auto-rows-[250px]">
            {images.map((src, idx) => {
              let bentoClass = "col-span-1 row-span-1";

              if (idx === 0 || idx === 8) bentoClass = "sm:col-span-2 sm:row-span-2";
              else if (idx === 1 || idx === 6) bentoClass = "sm:col-span-2 row-span-1";
              else if (idx === 4) bentoClass = "col-span-1 sm:row-span-2";

              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${bentoClass}`}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 4) * 100}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 transform">
                      <span className="bg-red-600 px-6 py-2 rounded-full inline-block font-medium tracking-wide">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 lg:gap-10">
            {videos.map((src, idx) => (
              <div
                key={idx}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group bg-black w-[280px] h-[500px] lg:w-[320px] lg:h-[570px] flex-shrink-0"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[idx] = el;
                  }}
                  src={src}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handleVideoPlayPause(idx)}
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-red-600/90 text-white"
                  >
                    {playingVideo === idx ? (
                      <Pause className="w-10 h-10" />
                    ) : (
                      <Play className="w-10 h-10 ml-2" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-10 text-white bg-white/10 p-3 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-10 text-white bg-white/10 p-3 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video lg:h-[85vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <Image
                src={images[selectedImageIndex]}
                alt="Selected"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}