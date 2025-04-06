 

// import React from "react";
// import imgage from "../assets/resume.png";
// import { Link } from "react-router-dom";

// export const AuroraBackground = ({ className, children }) => {
//   return (
//     <div className="relative w-full bg-[#121212] text-white overflow-hidden pt-[140px] md:pt-[160px]">
//       {/* Aurora Effect */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-32 left-20 w-[600px] h-[600px] bg-gradient-to-br from-gray-400 via-gray-700 to-transparent opacity-60 rounded-full blur-[120px] animate-aurora"></div>
//         <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-gray-900 via-black to-transparent opacity-50 rounded-full blur-[140px] animate-aurora"></div>
//         <div className="absolute top-40 right-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-gray-500 via-gray-700 to-transparent opacity-40 rounded-full blur-[150px] animate-aurora"></div>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-start justify-between px-10 md:px-20 min-h-[100vh] md:min-h-[110vh] gap-15">
//         {/* Text Section */}
//         <div className="max-w-2xl space-y-15 mt-11">
//           <p className="text-lg text-gray-300 mb-4">Best AI Resume Builder</p>
//           <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-lg mb-4">
//             RESUME SUDHAR
//           </h1>
//           <p className="text-gray-400 text-lg max-w-xl mb-6">
//             Create a beautiful resume quickly with the help of artificial intelligence and our customizable templates. Impress your future employer with a perfect resume created in minutes.
//           </p>
//           {children}
//           <Link to='/resume'>
//           <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-white/50 hover:shadow-lg">
//             RESUME SUDHAR
//           </button>
//           </Link>
//         </div>

//         {/* Image Section */}
//         <div className="mt-8 md:mt-0">
//           <img
//             src={imgage}
//             alt="Resume Illustration"
//             className="w-[350px] h-auto rounded-2xl shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };


 

import React from "react";
import imgage from "../assets/resume.png";
import { Link } from "react-router-dom";

export const AuroraBackground = ({ className, children }) => {
  return (
    <div className="relative w-full bg-[#121212] text-white overflow-hidden pt-[140px] md:pt-[160px]">
      {/* Aurora Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-20 w-[600px] h-[600px] bg-gradient-to-br from-gray-400 via-gray-700 to-transparent opacity-60 rounded-full blur-[120px] animate-aurora"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-gray-900 via-black to-transparent opacity-50 rounded-full blur-[140px] animate-aurora"></div>
        <div className="absolute top-40 right-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-gray-500 via-gray-700 to-transparent opacity-40 rounded-full blur-[150px] animate-aurora"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between px-10 md:px-20 min-h-[100vh] md:min-h-[110vh] gap-15">
        {/* Text Section */}
        <div className="max-w-2xl space-y-15 mt-11">
          <p className="text-lg text-gray-300 mb-4">Best AI Resume Builder</p>
          <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-lg mb-4">
            RESUME SUDHAR
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-6">
            Create a beautiful resume quickly with the help of artificial intelligence and our customizable templates. Impress your future employer with a perfect resume created in minutes.
          </p>
          {children}
          <Link to='/resume'>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-white/50 hover:shadow-lg">
            RESUME SUDHAR
          </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0">
          <img
            src={imgage}
            alt="Resume Illustration"
            className="w-[350px] h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
