'use client'

import React, { useEffect } from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from "next/image";
export default function AppDevelopmentPage() {
  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <Image 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1170&auto=format&fit=crop" 
            alt="App Development Hero" 
            fill
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-red-600/10 border border-red-600/20 backdrop-blur-md">
            <span className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase">Mobile & Web Apps</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[1]">
            App <span className="text-red-600 font-light italic">Development</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed font-medium mb-12 mx-auto drop-shadow-2xl italic">
            Build powerful mobile and web applications with our expert app development services. We create custom, scalable, and user-friendly apps for iOS, Android, and cross-platform solutions.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button 
              suppressHydrationWarning
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-5 px-14 rounded-full transition-all duration-500 uppercase tracking-[0.2em] text-[11px] hover:shadow-[0_25px_50px_rgba(220,38,38,0.4)] active:scale-95"
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#7A6960] mb-8 uppercase tracking-tight">App Development Services:</h2>
          <div className="text-gray-600 space-y-4">
            <ul className="list-disc list-inside space-y-2 text-lg font-medium italic">
              <li>iPhone/iOS app development</li>
              <li>Android app development</li>
              <li>Cross-platform app development</li>
              <li>Web app development</li>
              <li>API development</li>
              <li>Database design and management</li>
              <li>Testing and deployment</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
