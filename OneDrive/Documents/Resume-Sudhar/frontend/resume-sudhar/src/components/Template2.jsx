import React from 'react'
import er from '../assets/Emma.png' // Ensure the correct file path

const Template2 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center px-6 py-12 gap-10 bg-[#121212]">
      
      {/* ✅ Image Section - Moved to the Right */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-end">
        <img 
          src={er} 
          alt="Resume Template" 
          className="w-full md:w-[500px] h-auto rounded-lg shadow-xl border-2 border-gray-500"
        />
      </div>

      {/* ✅ Text Section - Moved to the Left */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-white mb-6">Resume Templates</h1>
        <h2 className="text-3xl font-bold text-gray-200 mb-3">Pick a resume template. Make it more you.</h2>
        <p className="text-lg text-gray-300 font-medium leading-relaxed">
          Get hired fast with a resume and cover letter that visually stand out from the pile. Browse 
          <span className="font-bold text-white"> 40+ ATS-friendly resume templates</span> designed by a team of HR experts and typographers. 
          Customize any template in any way you want. Explore more than a million possible design combinations. 
          <span className="text-white font-semibold"> Learn more about our resume builder.</span>
        </p>
      </div>

    </div>
  )
}

export default Template2
