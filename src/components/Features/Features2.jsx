import React from "react";
import { features, features2 } from "../../constants/data";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";

const Features2 = () => {
  return (
    <div className="mt-20 border-b border-neutral-800">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
            Your Codes
          </span>
        </h2>
      </div>
      <div className="video-wrapper flex flex-col gap-2 md:flex-row mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video3} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video4} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features2.map((features2, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <img
              src={features2.image} // 이미지 경로
              alt="샘플 이미지" // 대체 텍스트
              className="rounded-lg w-full md:w-50 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-10 md:mx-2"
            />
            <div className="flex">
              <div className="flex justify-center items-center w-10 h-10 dark:bg-neutral-900 text-indigo-700 rounded-full p-2 mx-6 dark:border-0 light: bg-white light: border light: border-neutral-500">
                <div className="w-full h-full">{features2.icon}</div>
              </div>

              <div>
                <h5 className="mt-1 mb-6 text-xl">{features2.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {features2.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features2;
