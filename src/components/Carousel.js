import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import BeginnerProject from "../assets/beginner_project.jpg";
import RealEstate from "../assets/realestate.jpg";

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
            style={{ backgroundImage: `url(${BeginnerProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
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
            style={{ backgroundImage: `url(${BeginnerProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
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
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
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
      </Swiper>
    </>
  );
}
