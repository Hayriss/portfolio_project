import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#051033] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#DF622C]">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi, I'm Hayriye Şen, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I graduated from Ankara Yıldırım Beyazıt University in February
              2019. After I graduated, I tried to develop myself in data science
              with python by taking online courses and got a professional
              certificate from IBM. Then, I completed my frontend development
              training with React and the backend training with Django. I want
              to integrate my skills in web development area with React and
              Django.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
