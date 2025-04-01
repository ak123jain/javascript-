import React from "react";
import templete from "../assets/templete.png";
import video from "../assets/video.gif";

const Template = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
      {/* Text Section - Left */}
      <div className="max-w-lg text-left space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Resume Templates</h1>
        <h2 className="text-2xl text-gray-600">
          Drop a Resume and Find Your Dream Job
        </h2>
        <p className="text-gray-500">
          Get hired fast with a resume and cover letter that visually stand out from the pile. 
          Browse 40+ ATS-friendly resume templates designed by a team of HR experts and typographers. 
          Customize any template in any way you want. Explore more than a million possible design 
          combinations. Learn more about our resume builder.
        </p>
      </div>

      {/* Image Section - Right */}
      <div className="w-full md:w-[45%] flex justify-center md:justify-end">
        <img
          src={templete}
          alt="Resume Template"
          className="max-w-full md:max-w-lg h-auto rounded-lg shadow-lg"
        />
      </div>

        
    </div>
  );
};

export default Template;
