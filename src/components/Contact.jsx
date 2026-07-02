'use client'

import React, { useEffect } from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3_4nAOlIG-4K60p8Mo6sBV5AK2S-uXRJh22cw0fMFZS7X2w/formResponse";

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("entry.2074220001", data.name);
    formData.append("entry.171639726", data.email);
    formData.append("entry.1770208340", data.subject);
    formData.append("entry.26073056", data.message); 
  
    try {
      await fetch(googleFormUrl, {
        method: "POST",
        body: formData,
        mode:"no-cors"
      });
  
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Toaster />
      <div className="text-[#7A6960]">
        <h1 data-aos="fade-right" className="text-3xl font-semibold text-center uppercase">
          Contact
        </h1>
        <div className="flex justify-center items-center mt-2 mb-10">
          <div className="bg-red-600 h-1 w-16 rounded"></div>
        </div>
        <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
          RankMantra is the best digital marketing agency in Dehradun and ensures businesses have a robust online presence and thrive in the long run. Our team has a proven track record of assisting clients to grasp the objectives they are hoping to achieve and developing strategies that will best suit each individual's requirements, thereby achieving tangible results. From SEO to PPC, from social media marketing to web development, and on to digital marketing all the way up to success – we are here to help you out with professional Digital Marketing Services in Dehradun.
        </p>

        <div className="lg:flex gap-6">
          <div
            data-aos="fade-up"
            className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0"
          >
            <div className="flex gap-3 mt-3 mb-12">
              <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-2xl">
                <IoLocationOutline size={28} />
              </div>
              <div>
                <h2 className="lg:text-xl text-[#7A6960] font-semibold">Address</h2>
                <p className="text-sm text-slate-800">Shyam Tower, Shimla Bypass Road, Dehradun 248171</p>
              </div>
            </div>

            <div className="flex gap-3 mb-12">
              <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-2xl">
                <IoCallOutline size={28} />
              </div>
              <div>
                <h2 className="lg:text-xl text-[#7A6960] font-semibold">Call Us</h2>
                <div className="flex flex-col">
                  <a href="tel:+918979249912" className="text-sm text-slate-800 hover:text-red-600">+91 8979249912</a>
                  <a href="tel:+917500744458" className="text-sm text-slate-800 hover:text-red-600">+91 7500744458</a>
                  <a href="tel:+917055596464" className="text-sm text-slate-800 hover:text-red-600">+91 7055596464</a>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mb-12">
              <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-2xl">
                <TfiEmail size={28} />
              </div>
              <div>
                <h2 className="lg:text-xl text-[#7A6960] font-semibold">Email Us</h2>
                <a href="mailto:info@rankmantra.com" className="text-sm text-slate-800 hover:text-red-600">info@rankmantra.com</a>
              </div>
            </div>
          </div>

          <form
            data-aos="fade-up"
            className="lg:w-[60%] px-10 py-8 shadow-lg bg-white rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-5">
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="mb-5">
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="mb-5">
              <input
                {...register("subject", { required: "Subject is required" })}
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="mb-5">
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
