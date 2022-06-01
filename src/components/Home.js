import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#051033]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center">
        <p className="text-[#DF622C] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#55BDCA]">
          Hayriye Şen
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#98d2da] py-2">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#cff1f7] py-4 max-w-[700px]">
          I am a frontend developer specializing in building ( and occasionally
          designing ) exceptional digital experiences. Currently, I’m focused on
          building responsive frontend web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DF622C] hover:border-[#DF622C]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
