import game from "../assets/images/game.png";
import star from "../assets/images/Five star.png";
import { Link } from "react-router-dom";




export function AddToCard({
  key,
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
  image,
  className,
  deleticon,
  hearticon,
  eyeicon
}) {
  return (
    <>

      <div id={key} className="main  bg-white   w-[270px] h-[350px] my-4 rounded mobile:m-auto ">
        <div className="img w-[270px] h-[250px] bg-[#F5F5F5] flex flex-col relative center ">
          <button
            className={` w-[55px] h-[26px] ${className} rounded text-white absolute left-3 right-4 bottom-1 top-3 ;`}
          >
            {discount}
          </button><div className="flex flex-col">
        { hearticon? <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full"> {hearticon}</div>:null}
      { deleticon?   <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full">{deleticon}</div>:null}
        { eyeicon? <div className="absolute top-9 left-[240px] text-base bg-white p-1 rounded-full"> {eyeicon}</div>:null}
          </div>
          <img className=" w-[172px] h-[155px] m-auto hover:scale-125" src={image} alt="" />
          <Link  className="bg-white hover:bg-black h text-white w-[100%] flex  items-end justify-center p-2 rounded-b">Add To Card</Link>
        </div>
        <div className="myp w-[201px] h-[84px] ml-2 gap-2 my-3">
          <h2 className="w-[201]  text-sm font-medium hover:text-myTheme">{productName}</h2>
          <p className="flex gap-4 my-2 w-[100px] h-6  text-base font-medium text-myTheme">
            <ins className="no-underline"> {newPrice}</ins> {"  "}
            <s className="text-slate-400 "> {delPrice}</s>
          </p>
          <div className="star-img flex gap-2">
            <img src={star} alt="" /><span>{starRank}</span>
          </div>
        </div>
      </div>

    </>
  );
}
