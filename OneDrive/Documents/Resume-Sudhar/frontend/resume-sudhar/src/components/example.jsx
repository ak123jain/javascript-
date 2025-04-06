import React from "react";
import bear from "../assets/bear.png";
import juan from "../assets/juan.png";
import donna from "../assets/donna.png";

const Example = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-20">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center gap-6">
        <img src={bear} alt="Bear Illustration" className="w-40 md:w-52" />
        <img src={juan} alt="Juan Illustration" className="w-40 md:w-52" />
        <img src={donna} alt="Donna Illustration" className="w-40 md:w-52" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Let your resume do the work.
        </h1>
        <p className="text-gray-600 mt-6 text-xl">
          Join <span className="font-semibold">6,000,000</span> job seekers
          worldwide and get hired faster with your best resume yet.
        </p>
      </div>
    </div>
  );
};

export default Example;
