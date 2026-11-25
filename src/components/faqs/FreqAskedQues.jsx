'use client'

import React, { useEffect } from "react";
import Faquestions from "./Faquestions";
const FreqAskedQues = () => {
  return (
    <div className="text-[#7A6960]">
      <h2 className="mb-10 text-3xl font-semibold text-center uppercase">
        Frequently Asked Questions
      </h2>
      <Faquestions />
    </div>
  );
};

export default FreqAskedQues;
