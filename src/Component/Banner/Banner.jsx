import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import playStore from "../../assets/playstore.png";
import appStore from "../../assets/Appstore.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-4xl">
          <span className="text-[#001931] ">We Build</span> <br />{" "}
          <span className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center text-[#627382] mt-3">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br></br> Our goal is to turn
          your ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 mt-3">
        <a
          className="btn"
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
        >
          <img className="w-[22px] h-[22px]" src={playStore} alt="" />
          Google Play
        </a>
        <a
          className="btn"
          href="https://www.apple.com/app-store/"
          target="_blank"
        >
          <img className="w-[22px] h-[22px]" src={appStore} alt="" />
          App Store
        </a>
      </div>
      <div className="flex justify-center items-center md:w-[700px] mt-8 mx-auto">
        <img src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-12 px-8">
        <h2 className="text-center mb-3 text-white font-bold text-3xl line leading-12">
          Trusted by Millions, Built for You
        </h2>
        <div className=" md:flex justify-between items-center md:max-w-[700px] mx-auto">
          <div className="space-y-3 flex flex-col justify-center items-center">
            <p className="text-[12px] text-gray-400">Total Downloads</p>
            <h3 className="font-bold text-5xl text-white">29.6M</h3>
            <p className="text-[12px] text-gray-400">
              21% more than last month
            </p>
          </div>
          <div className="space-y-3 flex flex-col justify-center items-center">
            <p className="text-[12px] text-gray-400">Total Downloads</p>
            <h3 className="font-bold text-5xl text-white">29.6M</h3>
            <p className="text-[12px] text-gray-400">
              21% more than last month
            </p>
          </div>
          <div className="space-y-3 flex flex-col justify-center items-center">
            <p className="text-[12px] text-gray-400">Total Downloads</p>
            <h3 className="font-bold text-5xl text-white">29.6M</h3>
            <p className="text-[12px] text-gray-400">
              21% more than last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
