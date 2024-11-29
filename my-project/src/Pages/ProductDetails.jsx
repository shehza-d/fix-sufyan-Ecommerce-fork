import axios from "axios";
import React from "react";
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


        <div className="w-[] flex justify-center items-center h-auto bg-fuchsia-600">
<div className="bg-black flex w-[60%] h-auto">

  <div className="bg-red-500 w-[170px] h-auto">
    {product?.images.map((image)=>{
      return(
        <img  src={image} alt="" />
      )
    }

    )}
  </div>
  <div className="flex justify-center items-center bg-amber-900 w-[500px] h-auto">
    <img src={product?.thumbnail} alt="" />
  </div>
</div>
<div className="bg-amber-300 w-[40%] h-[600px]">
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
