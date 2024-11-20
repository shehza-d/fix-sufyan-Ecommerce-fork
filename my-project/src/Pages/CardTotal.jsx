import React from "react";
import led from "../assets/images/led.png";
import game from "../assets/images/game.png";
import { MdCancel } from "react-icons/md";

function CardTotal() {
  return (
    <>
      <div className="center  flex flex-col items-center my-10 px-4">
        {/* Breadcrumb */}
        <div className="w-full max-w-6xl text-gray-400 text-sm mb-5">
          Home / <span className="text-gray-200">Card</span>
        </div>

        {/* Table Section */}
        <div className="w-full max-w-6xl rounded flex flex-col gap-6 p-6 shadow-md">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-4 gap-4 bg-slate-100 p-4 rounded text-center md:text-left font-semibold text-gray-700">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Table Body */}
          <div className="space-y-4 md:space-y-0 flex flex-col gap-6 ">
            {/* First Product Row */}
            <div className="flex  mobile:items-center flex-col md:grid grid-cols-4 gap-4 bg-slate-100 p-4 rounded">
              <div className="flex sm:justify-center mobile:justify-center items-center md:gap-2 gap-4">
                <img className="w-16 h-12" src={led} alt="LCD Monitor" />
                <p className="text-gray-700 md:text-xs md:font-normal font-medium">LCD Monitor</p>
              </div>
              <div className="text-gray-700 text-center md:text-left flex items-center">$650</div>
              <div className="text-center flex items-center">
                <select className="border border-gray-300 rounded w-20 p-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-gray-700 text-center md:text-left  flex items-center ">$650</div>
            </div>

            {/* Second Product Row */}
            <div className="flex flex-col mobile:items-center md:grid grid-cols-4 gap-4 bg-slate-100 p-4 rounded">
              <div className="flex items-center md:gap-2 gap-4 sm:justify-center mobile:justify-center">
                <img className="w-16 h-12" src={game} alt="Gamepad" />
                <p className="text-gray-700 md:text-xs md:font-normal font-medium">HI Gamepad</p>
              </div>
              <div className="text-gray-700 text-center md:text-left">$650</div>
              <div className="text-center flex items-center ">
                <select className="border border-gray-300 rounded w-20 p-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-gray-700 text-center md:text-left">$650</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-6xl flex justify-between mt-6">
          <button className="px-6 py-3 text-base bg-white active:bg-red-700 active:text-white  text-black font-medium border border-black rounded ">
            Return To Shop
          </button>
          <button className="px-6 py-3 text-base bg-white active:bg-red-700 active:text-white text-black font-medium border border-black rounded ">
            Update Cart
          </button>
        </div>

        {/* Cart Summary */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row mt-10 gap-6">
          {/* Coupon Section */}
          <div className="flex flex-col items-center lg:w-2/3">
            <div className="flex gap-4 mobile:gap-2">
              <input
                className="border border-gray-300 rounded mobile:w-50 w-80 p-3"
                placeholder="Coupon Code"
                type="text"
              />
              <button className=" md:px-6 md:py-3 md:text-sm  mobile:px-4 mobile:py-2 mobile:text-[8px] bg-myTheme text-white rounded active:bg-red-700">
                Apply Coupon
              </button>
            
            </div>
          </div>

          {/* Total Section */}
          <div className="lg:w-1/3 border border-gray-400 p-6 rounded shadow-md bg-white">
            <h2 className="font-bold text-xl mb-4">Cart Total</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span className="font-bold">$1750</span>
              </div>
            </div>
            <button className="mt-6 w-full py-3 bg-myTheme text-white rounded active:bg-red-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTotal;

