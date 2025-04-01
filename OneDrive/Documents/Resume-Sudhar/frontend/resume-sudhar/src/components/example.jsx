import React from "react";
import bear from "../assets/bear.png";
import juan from "../assets/juan.png"
import donna from "../assets/donna.png"

const Example = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-10 px-6 md:px-20">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={bear} alt="Bear Illustration" className="w-60 md:w-80" />
        <img src={juan} alt="" />
        <img src={donna} alt="" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Let your resume do the work.
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Join <span className="font-semibold">6,000,000</span> job seekers
          worldwide and get hired faster with your best resume yet.
        </p>
      </div>
    </div>
  );
};

export default Example;
