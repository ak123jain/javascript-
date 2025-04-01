import React from 'react'
import video from '../assets/video.gif'

const Video = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">
      {/* ✅ Video Section */}
      <div className="w-full md:w-[45%] flex justify-center md:justify-start">
        <img
          src={video}
          alt="Resume Video"
          className="max-w-full md:max-w-lg h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* ✅ Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold text-grey mb-4">AI Resume Builder</h1>
        <h2 className="text-2xl text-gray-700 mb-2">Let artificial intelligence write your resume</h2>
        <p className="text-gray-500 leading-relaxed">
          Are you struggling to find the right words for your resume? Our AI resume builder can find them in no time! 
          It’s powered by OpenAI’s GPT-4, the world’s most powerful language model, and it can automatically produce 
          text indistinguishable from human writers. Say goodbye to writer’s block. Generate the first draft of your resume 
          in seconds. Learn more about the AI resume builder.
        </p>
      </div>
    </div>
  )
}

export default Video
