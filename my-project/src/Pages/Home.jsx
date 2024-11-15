import React from "react";
import Hero from "../components/Hero";
import FlashTimer from "../components/FlashTimer";
// import Slider from '../components/Slider'
import CardListSlider from "../components/Slider";
import MyCountBox from "../components/MyCountBox";
import phone from "../assets/category/phone.png"
import headphone from "../assets/category/headPhone.png"
import computer from "../assets/category/computer.png"
import camera from "../assets/category/camera.png"
import boxgame from "../assets/category/boxgame.png"
import smartWatch from "../assets/category/smartWatch.png"
import Spiker from "../components/Spiker";

function Home() {
  return (
    <div>
      Home
      <Hero />
      <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
        <FlashTimer />
        <CardListSlider />
      </div>
      <div className=" flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0  ">
      <MyCountBox  name='Browse By Category' days='This Month'/>
        {/* <CardListSlider /> */}
        <div className="flex justify-center gap-5 my-10 border-b-gray-100">
          <div className="2xl:w-40 xl:w-40 md:w-28 sm:w-20 mobile:w-16 cursor-none"><img src={phone} alt="" /></div>
          <div className="2xl:w-40 xl:w-40 md:w-28 sm:w-20 mobile:w-16 cursor-none"><img src={computer} alt="" /></div>
          <div className="2xl:w-40 xl:w-40 md:w-28 sm:w-20 mobile:w-16 cursor-none"><img src={smartWatch} alt="" /></div>
          <div className="2xl:w-40 xl:w-40 md:w-28 sm:w-20 mobile:w-16 cursor-none"><img src={camera} alt="" /></div>
          <div className="2xl:w-40 xl:w-40 md:w-28 sm:w-20 mobile:w-16 cursor-none"><img src={headphone} alt="" /></div>
          <div className="2xl:w-40 xl:w-40 md:w-28 sm:w-20 mobile:w-16 cursor-none"><img src={boxgame} alt="" /></div>
        </div>
      </div>
      <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16 ">
      <MyCountBox  name='Best Selling Products' days='This Month'/>
        <CardListSlider />
      </div>
      <Spiker/>
    </div>
  );
}

export default Home;
