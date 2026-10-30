import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-red-600/30 active:scale-95">
      {name}
    </button>
  );
};

export default CtaButton;
