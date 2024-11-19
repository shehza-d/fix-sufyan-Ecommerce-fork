import React from "react";
import led from "../assets/images/led.png";
import game from "../assets/images/game.png";
import { MdCancel } from "react-icons/md";
function CardTotal() {
  return (
    // <div>CardTotal</div>
    <>
     
      <div className=" center  flex-col my-28 ">
      <div className=" flex-row justify-start  w-[100%] items-start ml-48  my-20  ">
        <span className="text-gray-400">Home</span> / <span>Card</span>
      </div>
        <div className="w-[1170px] h-[323px] flex flex-col gap-10 font-normal text-base ">
          <div className="flex justify-evenly items-center gap-[284px] bg-slate-100 rounded">
            <div className="my-5">Product</div>
            <div className="my-5">Price</div>
            <div className="my-5">Quantity</div>
            <div className="my-5">Subtotal</div>
          </div>
          <div className="flex justify-evenly  items-center gap-[284px] bg-slate-100 rounded ">
            <div className="flex  gap-4  items-center ">
              <div className="relative   my-5">
                <img className="w-[50px] h-[39px]" src={led} alt="" />
                <div className="absolute bottom-8 text-myTheme bg-white rounded-full font-semibold"><MdCancel /></div>
              </div>{" "}
              <div className="my-5">
                <h1 className="w-[103px] h-6">LCD Monitor</h1>
              </div>
            </div>
            <div className="my-5">
              <h1>$650</h1>
            </div>
            <div className="my-5">
              <div>
                <select className="w-[72px] h-[44px]" name="" id="">
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                  <option value="">07</option>
                </select>
              </div>
            </div>
            <div className="my-5">$650</div>
          </div>
          <div className="flex justify-evenly gap-[284px] items-center bg-slate-100 rounded">
            <div className="flex gap-4 items-center">
              <div className="my-5">
                <img className="w-[50px] h-[39px]" src={game} alt="" />
              </div>{" "}
              <div className="my-5">
                <h1 className="w-[103px] h-6"> HI Gamepad</h1>
              </div>
            </div>
            <div className="my-5">
              <h1>$650</h1>
            </div>
            <div>
              <div>
                <select className="w-[72px] h-[44px]" name="" id="">
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                  <option value="">07</option>
                </select>
              </div>
            </div>
            <div className="my-5">
              <h1>$650</h1>
            </div>
          </div>
        </div>
        <div className="w-[1170px] h-[56px] flex justify-between">
          <div>
            <button className="py-3 font-medium text-base px-8 border-solid border-2 rounded border-black ">
              Return To Shop
            </button>
          </div>
          <div>
            <button className="py-3 font-medium text-base px-8 border-solid border-2 rounded border-black ">
              Update Cart
            </button>
          </div>
        </div>

        <div className="flex  my-20">
          <div className="w-[60%]">
            <div className="flex gap-4 items-center">
              <div>
                <input
                  className="w-[300px] h-[56px] placeholder:p-6"
                  placeholder="Coupon Code"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div>
                <button className="w-[211px] h-[56] bg-myTheme text-white py-[17px] px-5 rounded ">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
          <div className="w-[40%] ">
            <div className="w-[470px] h-[324px] border-solid border-4 p-5 border-black rounded">
              <h1 className="ml-6 mt-8 my-3 font-medium text-xl">Cart Total</h1>
              <div className="font-normal text-base">
                <div className="flex my-5 justify-between border-solid border-b-2 ">
                  <h1>Subtotal:</h1> <h2>$1750</h2>
                </div>
                <div className="flex my-5 justify-between border-solid border-b-2 ">
                  <h1>Shipping:</h1> <h2>Free</h2>
                </div>
                <div className="flex my-5 justify-between  ">
                  <h1>Total:</h1> <h2>$1750</h2>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="w-[260px] h-[56] bg-myTheme text-white py-[17px] px-5 rounded ">
                Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTotal;
