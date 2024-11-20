// import React from "react";
// import led from "../assets/images/led.png";
// import game from "../assets/images/game.png";
// import { MdCancel } from "react-icons/md";
// function CardTotal() {
//   return (
//     // <div>CardTotal</div>
//     <>
//       <div className=" center bg-slate-600 flex-col my-28 ">
//         <div className="w-[1170px] h-[323px] bg-lime-400 flex flex-col gap-10 font-normal text-base ">
//           <div className=" flex-row justify-start  w-[100%] items-start  ">
//             <span className="text-gray-400">Home</span> / <span>Card</span>
//           </div>

//           <table className="flex 2xl:flex-col xl:flex-row lg:flex-row md:flex-col gap-[84px] justify-between p-2 bg-slate-500">
//             <tr className="flex flex-col gap-10 bg-slate-100">
//               <th className="font-normal text-base">Product</th>
//               <td className="flex gap-2 justify-center items-center">
//                 <div>
//                   <img className="w-[50px] h-[39px]" src={led} alt="" />
//                 </div>{" "}
//                 <div>
//                   <p className="font-normal text-base">LCD Monitor</p>
//                 </div>
//               </td>
//               <td className="flex gap-2">
//                 <div>
//                   <img className="w-[50px] h-[39px]" src={game} alt="" />
//                 </div>{" "}
//                 <div>
//                   <p className="font-normal text-base">HI Gamepad</p>
//                 </div>
//               </td>
//             </tr>
//             <tr className="flex flex-col gap-10 bg-slate-100">
//               <th className="font-normal text-base">Price</th>
//               <td>$650</td>
//               <td>$650</td>
//             </tr>
//             <tr className="flex flex-col gap-10 bg-slate-100">
//               <th className="font-normal text-base">Quantity</th>
//               <td>
//                 <div>
//                   <select className="w-[72px] h-[44px]" name="" id="">
//                     <option value="01">01</option>
//                     <option value="02">02</option>
//                     <option value="03">03</option>
//                     <option value="04">04</option>
//                   </select>
//                 </div>
//               </td>
//               <td>
//                 <div>
//                   <select className="w-[72px] h-[44px]" name="" id="">
//                     <option value="01">01</option>
//                     <option value="02">02</option>
//                     <option value="03">03</option>
//                     <option value="04">04</option>
//                   </select>
//                 </div>
//               </td>              

//             </tr>
//             <tr className="flex flex-col gap-10 bg-slate-100">
//               <th className="font-normal text-base">Subtotal</th>
//               <td>$650</td>
//               <td>$650</td>
//             </tr>
//           </table>
//         </div>
//         <div className="w-[1170px] h-[56px] my-10 flex bg-orange-700  justify-between">
//           <div>
//             <button className="py-3 font-medium text-base px-8 border-solid border-2 rounded border-black ">
//               Return To Shop
//             </button>
//           </div>
//           <div>
//             <button className="py-3 font-medium text-base px-8 border-solid border-2 rounded border-black ">
//               Update Cart
//             </button>
//           </div>
//         </div>

//         <div className=" flex md:gap-5 sm:gap-5 mobile:gap-5  my-20  2xl:w-[1170px] xl:w-[1170px] lg:w-[1170px] md:w-auto md:h-auto sm:w-auto sm:h-auto mobile:w-auto mobile:h-auto h-[350px] p-1 justify-center   2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm flex-col mobile:flex-col bg-slate-400">
//           <div className="2xl:w-[60%] xl:w-[60%] lg:w-[60%]  md:w-[100%]  sm:w-[100%] mobile:w-[100%]">
//             <div className="flex gap-4 items-center 2xl:justify-start xl:justify-start lg:justify-start  md:justify-center sm:justify-center mobile:justify-center">
//               <div>
//                 <input
//                   className="w-[300px] h-[56px] border-solid border-2 border-gray-200 rounded placeholder:p-6"
//                   placeholder="Coupon Code"
//                   type="text"
//                   name=""
//                   id=""
//                 />
//               </div>
//               <div>
//                 <button className="w-[211px] h-[56] bg-myTheme text-white py-[17px] px-5 rounded ">
//                   Apply Coupon
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] flex justify-center items-center md:w-[100%] sm:w-[100%] mobile:w-[100%] ">
//             <div className="w-[470px] h-[324px] border-solid border-4 p-5 border-black rounded">
//               <h1 className="ml-6 mt-8 my-3 font-medium text-xl">Cart Total</h1>
//               <div className="font-normal text-base">
//                 <div className="flex my-5 justify-between border-solid border-b-2 ">
//                   <h1>Subtotal:</h1> <h2>$1750</h2>
//                 </div>
//                 <div className="flex my-5 justify-between border-solid border-b-2 ">
//                   <h1>Shipping:</h1> <h2>Free</h2>
//                 </div>
//                 <div className="flex my-5 justify-between  ">
//                   <h1>Total:</h1> <h2>$1750</h2>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center">
//                 <button className="w-[260px] h-[56] bg-myTheme text-white py-[17px] px-5 rounded ">
//                   Procees to checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CardTotal;



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

