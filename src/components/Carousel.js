import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import BeginnerTailwindCss from "../assets/beginner_tailwindcss.JPG";
import Universe from "../assets/universe_app.JPG";
import Weather from "../assets/weather_app.JPG";
import Portfolio from "../assets/portfolio_project.JPG";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full mySwiper"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${BeginnerTailwindCss})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Beginner Tailwindcss
              </span>
              <div className="pt-8 text-center">
                <a href="https://rococo-biscochitos-9a4d98.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Hayriss/beginner-tailwind-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Universe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Universe Travel
              </span>
              <div className="pt-8 text-center">
                <a href="https://thriving-swan-cc272d.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Hayriss/universe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Beginner Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="https://funny-belekoy-5b7001.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Hayriss/beginner-weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portfolio Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://mellow-dusk-310dcf.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Hayriss/portfolio_project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
