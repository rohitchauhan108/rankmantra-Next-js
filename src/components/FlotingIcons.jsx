import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function FlotingIcons() {
  const phoneNumber = "918979249912"; // Primary support number

  return (
    <div className="fixed bottom-24 right-8 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <div className="relative group flex justify-end">
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default FlotingIcons;