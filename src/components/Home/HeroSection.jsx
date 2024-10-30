import React from "react";
import { heroLinks } from "../../constants/data";
import { Link } from "react-router-dom";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper flex flex-col items-center mt-6">
      <h1 className="slogan lg:text-7xl sm:text-6xl text-4xl text-center tracking-wide dark:text-neutral-300 text-neutral-700">
        AceDot Build Tools
        {/* 이스테이프 문자 참조 : https://taemssssss.tistory.com/23#google_vignette */}
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          &nbsp; for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        rerum itaque unde deleniti pariatur sunt nulla! Ipsam veniam, culpa
        laborum et porro aperiam atque maiores fuga ab aliquam impedit vero.
      </p>
      <div className="sub-links mt-10 flex gap-3">
        {heroLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="py-[0.75rem] px-[1.5rem] border text-neutral-400"
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className="video-wrapper flex flex-col gap-2 md:flex-row mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video1} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2"
        >
          <source src={video2} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
