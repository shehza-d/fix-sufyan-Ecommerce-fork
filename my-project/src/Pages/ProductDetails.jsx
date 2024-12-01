import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import useSWR from "swr";
import MyCountBox from "../components/MyCountBox";
import CardListSlider from "../components/Slider";
import { GoHeart } from "react-icons/go";

function ProductDetails() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
  console.log("products data", data?.data);
  let product = data?.data;
  const [selectImg, setSelectImg] = useState(product?.image);
  let discountPrice = Math.ceil(
    product?.price - product?.discountPercentage * (product?.price / 100)
  ).toFixed(2);
  const [count,setCount]= useState(1)

  return (
    <>
      Product Details {}
      {params.id}
      <div className="main flex flex-col justify-center  ">
        <div className="flex justify-center items-start">
          <div className="w-full max-w-6xl  text-gray-400 text-sm mb-5">
            Home / <span className="text-gray-200">Card </span>
            <span className="text-black">
              {" "}
              <span className="text-gray-400"> /</span> Havic HV G-92 Gamepad
            </span>
          </div>
        </div>

        <div className="w-[] gap-7  2xl:flex-row xl:flex-row lg:flex-row flex md:flex-col sm:flex-col mobile:flex-col  justify-center items-center 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-auto sm:h-auto mobile:h-auto  bg-fuchsia">
          <div className="bg- flex  gap-6  md:w-[50%] h-auto">
          {product?.images.length===1?null:  <div className="bg-red- w-[170px] h-[600px] flex-col flex gap-3 justify-start items-center ">
              {product?.images.map((image) => {
                return (
                  <img
                    className="w-[121px] h-[114px] cursor-pointer bg-[#F5F5F5]"
                    src={image}
                    alt=""
                    onMouseOver={() => setSelectImg(image)}
                  />
                );
              })}
            </div>}
            <div className="flex justify-center   items-center bg-[#F5F5F5] w-[500px] h-[600px]">
              {selectImg ? (
                <img src={selectImg} alt="" />
              ) : (
                <img
                  className="w-[px] h-[315px] "
                  src={product?.images[0]}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="bg-amb flex flex-col  gap-5 pl-3 w-[500px]  h-[600px] ">
            <div>
              <h1 className="font-semibold text-2xl text-black">{product?.title}</h1>
            </div>
            <div className="star-img w-[290px] h-[21px] flex items-center gap-3">
              <span>
                {
                  <ReactStars
                    count={5}
                    value={product?.rating ? product.rating : 3}
                    // onChange={ratingChanged}
                    size={24}
                    edit={false}
                    color2={"#ffd700"}
                  />
                }
              </span>
              <span className="font-normal text-sm text-gray-400">
                {" "}
                ({product?.reviews.length} {}Reviews)
              </span>
              <span className="text-gray-400" >|</span>
              <span className=" font-normal text-sm text-[#00FF66]"> Stock: {product?.stock}</span>
            </div>
            <div className="price font-normal text-2xl">${discountPrice}</div>
            <div className="border-b-gray-400 border-b-2 pb-6">
              <p className=" font-normal text-sm text-black">
                {product?.description}
              </p>
            </div>
            <div className="minus-plus-btn-buy-btn-heart    flex gap-5 items-center">
            <div className=" countbtn w-[159px]  flex  border-2 rounded">
              <button onClick={()=>setCount(count<2?1:count-1)} className="w-10 h-11 bg-white rounded  text-2xl">-</button><div  className="w-20 h-11  border-x-2 flex justify-center items-center "> {count}</div> <button onClick={()=>setCount(count<product?.minimumOrderQuantity?count+1:product?.minimumOrderQuantity)} className="w-10 h-11 bg-myTheme text-white rounded  text-2xl">+</button>
            </div>
            <div><button className="w-[165px] h-11 bg-myTheme text-white rounded">Buy Now</button></div>
            <div className="border-2 hover:bg-myTheme hover:text-white w-10 h-10 flex items-center justify-center rounded text-2xl"><GoHeart className="" /></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start my-3">
          {" "}
          <Link
            className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white"
            to={"/"}
          >
            Go To Home
          </Link>
        </div>
        
        <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
        <MyCountBox name={""} days={"Related Item"} />
                <CardListSlider />
      </div>

      </div>
      
      <div className="flex">

      </div>
    </>
  );
}

export default ProductDetails;
