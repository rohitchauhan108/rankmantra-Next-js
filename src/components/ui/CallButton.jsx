"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <div className="fixed bottom-6 right-8 z-50">
      <a
        href="tel:+918979249912"
        aria-label="Call RankMantra"
        className="w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-red-700"
      >
        <FaPhoneAlt className="w-5 h-5" />
      </a>
    </div>
  );
};

export default CallButton;