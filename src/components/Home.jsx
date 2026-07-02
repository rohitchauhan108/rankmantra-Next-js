"use client";

import React from 'react'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
// import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import Faquestions from '@/components/Faquestions'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FreqAskedQues from '@/components/FreqAskedQues'
import ChatWidget from '@/components/ChatWidget'
import Newsletter from '@/components/Newsletter'
import FlotingIcons from './FlotingIcons';
const Home = () => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      <ChatWidget />
      
      <section className="w-full min-h-screen lg:px-0 overflow-hidden bg-black relative flex items-center">
        <Hero />
      </section>

      <section id="about" className="w-full lg:px-2 py-20 overflow-hidden bg-[#ffffff] border-b border-orange-100">
        <About />
      </section>

      <section id="services" className="w-full py-20 lg:px-10 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Services />
      </section>

      {/* <section id="portfolio" className="w-full max-h-fit py-20 lg:px-10 overflow-hidden border-b border-orange-100">
        <Portfolio />
      </section> */}

      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <FreqAskedQues />
      </section>

      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Team />
      </section>

      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Clients />
      </section>

      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Contact />
      </section>

      <Newsletter />
      <FlotingIcons/>
      <Footer />
    </div>
  )
}

export default Home
