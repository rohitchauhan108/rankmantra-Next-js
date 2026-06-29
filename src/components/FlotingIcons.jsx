import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FlotingIcons() {
  const phoneNumber = "918979249912"; // Replace with your number

  return (
    <div className="fixed bottom-28 right-8 flex flex-col gap-4 z-50">
      {/* Phone */}
      <div className="relative group flex justify-end">
       <a
          href={`tel:+${phoneNumber}`}
          className="bg-blue-600 hover:bg-blue-700 text-white h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaPhoneAlt />
        </a>
      </div>

      {/* WhatsApp */}
      <div className="relative group flex justify-end">
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default FlotingIcons;