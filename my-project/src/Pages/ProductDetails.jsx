import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useSWR from "swr";

function ProductDetails() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
  console.log("products data", data?.data);
  let product = data?.data;
  const [selectImg, setSelectImg] = useState(product?.image);

  return (
    <>
      Product Details {}
      {params.id}
      <div className="main flex flex-col ">
        <div>
          <div className="w-full max-w-6xl text-gray-400 text-sm mb-5">
            Home / <span className="text-gray-200">Card </span>
            <span className="text-black">
              {" "}
              <span className="text-gray-400"> /</span> Havic HV G-92 Gamepad
            </span>
          </div>
        </div>

        <div className="w-[] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col  sm:flex-col mobile:flex-col md:h-auto justify-center items-center h-[600px]  bg-fuchsia-600">
          <div className="bg-black flex   md:w-[60%] h-auto">
            <div className="bg-red-500 w-[170px] h-[600px] md:w-[100%] sm:w-[100%] mobile:w-[100%] 2xl:flex-col xl:flex-col lg:flex-col md:flex-row  sm:flex-row mobile:flex-row md:h-auto flex gap-2 justify-center items-center ">
              {product?.images.map((image) => {
                return (
                  <img
                    className="w-[121px] h-[114px] cursor-pointer bg-[#F5F5F5]"
                    src={image}
                    alt=""
                    onClick={() => setSelectImg(image)}
                  />
                );
              })}
            </div>
            <div className="flex justify-center md:h-auto md:w-auto  items-center bg-[#F5F5F5] w-[500px] h-[600px]">
              {selectImg ? (
                <img src={selectImg} alt="" />
              ) : (
                <img
                  className="w-[446px] h-[315px] "
                  src={product?.images[0]}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="bg-amber-300 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] mobile:w-[100%]  h-[600px] ">
            products details
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
      </div>
    </>
  );
}

export default ProductDetails;
