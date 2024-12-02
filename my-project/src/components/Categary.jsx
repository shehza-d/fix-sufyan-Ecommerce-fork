import axios from "axios";
import React, { useEffect, useState } from "react";

import { AddToCard } from "./AddToCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { useParams } from "react-router-dom";

function Categary({ category }) {

 // Function 1
//  const [products2, setProducts2] = useState(null);
//  const params=useParams()
//  const [isLoading2, setIsLoading2] = useState(false);
//  const [error2, SetError2] = useState(null);
//  const API_KEY2 = `https://dummyjson.com/products/${params.id}`

//  let getProductData2 = async (event) => {
//    try {
//      setIsLoading2(true);
//      SetError2(null);
//      let response2 = await axios(API_KEY2);
//      let data2 = response2.data.category;
//      console.log( 'AS',data2);
//      console.log(params.id);
     
     
//      // console.log(data);
//      setIsLoading2(false);
//      return setProducts2(data2);
//    } catch (error) {
//      setIsLoading2(false);
//      SetError2(error);
//      setProducts2(null);
//      console.log(error.response2.statusText);
//    } finally {
//      setIsLoading2(false);
//    }
//  };
//  useEffect(() => {
//    getProductData2();
//  }, []);

  // Function 2
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);
  const API_KEY = `https://dummyjson.com/products/category/${category}`;


  let getProductData = async (event) => {
    try {
      setIsLoading(true);
      SetError(null);
      let response = await axios(API_KEY);
      let data = response.data.products;
      // console.log(data);
      setIsLoading(false);
      return setProducts(data);
    } catch (error) {
      setIsLoading(false);
      SetError(error.response.statusText);
      setProducts(null);
      console.log(error.response.statusText);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
 

  return (
    // <div>Categary</div>
    <>
      <div className="ml-12 mr-12   p-5 rounded ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            1920: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            350: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="flex  justify-center items-center ">
            {isLoading ? (
              <div className="font-extrabold text-4xl">Loading...</div>
            ) : null}
            {error}
            {products?.map((value, index) => {
              let discountPrice = Math.ceil(
                value.price - value.discountPercentage * (value.price / 100)
              ).toFixed(2);

              return (
                <SwiperSlide key={value.id}>
                  <AddToCard
                    id={value.id}
                    className="bg-myTheme"
                    discount={`${Math.round(value.discountPercentage)}%`}
                    productName={value.title}
                    delPrice={`$${value.price.toFixed(2)}`}
                    newPrice={`$${discountPrice}`}
                    image={value.thumbnail}
                    rating={value.rating}
                  />{" "}
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Categary;
