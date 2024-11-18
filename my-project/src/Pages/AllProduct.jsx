import React from 'react'


import apper2 from '../assets/images/apper2.png'
import babycar from '../assets/images/babycar.png'
import dogfood from '../assets/images/dogfood.png'
import laptop from '../assets/images/laptop.png'
import game2 from '../assets/images/game2.png'
import shose from '../assets/images/shose.png'
import camera from '../assets/images/camera.png'
import chair from '../assets/images/chair.png'
import MyCountBox from '../components/MyCountBox'
import { AddToCard } from '../components/AddToCard'
import { Link } from 'react-router-dom'


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
function AllProduct() {
  return (
    // <div>AllProduct</div>
    <>
      {/* <div className="ml-5">
        <MyCountBox name="Explore Our Products" days="Our Products" />
      </div>

      <div className="flex justify-center items-center  my-14  flex-row">
        <div className="flex sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
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
      <div className="flex justify-center items-center my-3">
        <div className="">
          <Link  to={"/AllCards"} className="bg-myTheme rounded cursor-pointer active:bg-red-700 text-white w-[234px] h-[56px] flex justify-center items-center">Show More</Link>
        </div>
      </div> */}



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/421x261"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/422x262"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/423x263"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/424x264"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/425x265"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/427x267"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/428x268"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default AllProduct