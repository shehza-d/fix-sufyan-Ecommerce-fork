import React from 'react'


import apper2 from '../assets/images/apper2.png'
import babycar from '../assets/images/babycar.png'
import dogfood from '../assets/images/dogfood.png'
import laptop from '../assets/images/laptop.png'
import game2 from '../assets/images/game2.png'
import shose from '../assets/images/shose.png'
import pars from '../assets/images/pars.png'
import camera from '../assets/images/camera.png'
import led from '../assets/images/led.png'
import spikerCard from '../assets/images/spikerCard.png'
import keyboard from '../assets/images/keyboard.png'
import chair from '../assets/images/chair.png'
import MyCountBox from '../components/MyCountBox'
import { AddToCard } from '../components/AddToCard'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";


let AddToCardlist = [
    {
      discount: "-40%",
      productName: "HAVIT HV-G92 Gamepad",
      delPrice: "$160",
      newPrice: "$120",
      starRank: "(88)",
      image:dogfood
    },
    {
      discount: "-35%",
      productName: "AK-900 Wired Keyboard",
      delPrice: "$400",
      newPrice: "$370",
      starRank: "(99)",
      image:babycar
    },
    {
      discount: "-30%",
      productName: "IPS LCD Gaming Monitor",
      delPrice: "$400",
      newPrice: "$350",
      starRank: "(77)",
      image:apper2
    },
    {
      discount: "-25%",
      productName: "S-Series Comfort Chair",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:shose
    },
  ];
  let AddToCardlist2 = [
    {
      discount: "-40%",
      productName: "HAVIT HV-G92 Gamepad",
      delPrice: "$160",
      newPrice: "$120",
      starRank: "(88)",
      image:camera
    },
    {
      discount: "-35%",
      productName: "AK-900 Wired Keyboard",
      delPrice: "$400",
      newPrice: "$370",
      starRank: "(99)",
      image:laptop
    },
    {
      discount: "-30%",
      productName: "IPS LCD Gaming Monitor",
      delPrice: "$400",
      newPrice: "$350",
      starRank: "(77)",
      image:game2
    },
    {
      discount: "-25%",
      productName: "S-Series Comfort Chair",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:chair
    },
  ];




  let AddToCardlist3 = [
    {
      discount: "-40%",
      productName: "HAVIT HV-G92 Gamepad",
      delPrice: "$160",
      newPrice: "$120",
      starRank: "(88)",
      image:led
    },
    {
      discount: "-35%",
      productName: "AK-900 Wired Keyboard",
      delPrice: "$400",
      newPrice: "$370",
      starRank: "(99)",
      image:keyboard
    },
    {
      discount: "-30%",
      productName: "IPS LCD Gaming Monitor",
      delPrice: "$400",
      newPrice: "$350",
      starRank: "(77)",
      image:spikerCard
    },
    {
      discount: "-25%",
      productName: "S-Series Comfort Chair",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:pars
    },
  ];
function AllProduct() {
  return (
    // <div>AllProduct</div>
    <>
      <div className="ml-5">
        {/* <MyCountBox name="Explore Our Products" days="" /> */}
      </div>

      <div className="flex justify-center items-center  my-14  flex-row">
        <div id='abc' className=" flex sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
          {AddToCardlist.map((value, index) => {
            return (
              <>
                {" "}
                <AddToCard
                  discount={value.discount}
                  productName={value.productName}
                  delPrice={value.delPrice}
                  newPrice={value.newPrice}
                  image={value.image}
                />
              </>
            );
          })}
          {/* <div ><RiDeleteBin6Line /></div> */}
        </div>
      </div>

      <div className="flex justify-center items-center  my-14  flex-row">
        <div className="flex sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
          {AddToCardlist2.map((value, index) => {
            return (
              <>
                {" "}
                <AddToCard
                  discount={value.discount}
                  productName={value.productName}
                  delPrice={value.delPrice}
                  newPrice={value.newPrice}
                  image={value.image}
                />
              </>
            );
          })}
        </div>
      </div>
      {/* <div className="flex justify-center items-center my-3">
        <div className="">
          <Link  to={"/AllCards"} className="bg-myTheme rounded cursor-pointer active:bg-red-700 text-white w-[234px] h-[56px] flex justify-center items-center">Show More</Link>
        </div>
      </div> */}
      <div className="flex justify-center items-center  my-14  flex-row">
        <div className="flex sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
          {AddToCardlist3.map((value, index) => {
            return (
              <>
                {" "}
                <AddToCard
                  discount={value.discount}
                  productName={value.productName}
                  delPrice={value.delPrice}
                  newPrice={value.newPrice}
                  image={value.image}
                />
              </>
            );
          })}
        </div>
      </div>
      


 


    </>
  )
}

export default AllProduct