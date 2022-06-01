import React from "react";

import Carousel from "./Carousel";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#051033]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#DF622C]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Carousel with swipperjs */}
        <Carousel />
      </div>
    </div>
  );
}

export default Work;
