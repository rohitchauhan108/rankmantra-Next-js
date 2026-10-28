'use client'

import React, { useEffect } from "react";
import Faquestions from "./Faquestions";
const FreqAskedQues = () => {
  return (
    <div className="text-[#7A6960]">
      <h2 className="text-3xl font-semibold text-center uppercase">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>
      <Faquestions />
    </div>
  );
};

export default FreqAskedQues;
