import game from '../assets/images/game.png'
import chair from '../assets/images/chair.png'
import led from '../assets/images/led.png'
import pars from '../assets/images/pars.png'
import wood from '../assets/images/wood.png'
import spikerCard from '../assets/images/spikerCard.png'
import keyboard from '../assets/images/keyboard.png'
import apper from '../assets/images/apper.png'
import { SlHeart } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";






  let AddToCardlist2 = [
    {
      // discount: "-40%",
      // className:'bg-myTheme',
      productName: "HAVIT HV-G92 Gamepad",
      delPrice: "$160",
      newPrice: "$120",
      starRank: "(88)",
      image:game,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />
    },
    {
      // discount: "-35%",
      // className:'bg-myTheme',
      productName: "AK-900 Wired Keyboard",
      delPrice: "$400",
      newPrice: "$370",
      starRank: "(99)",
      image:chair,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />
    },
    {
      // discount: "-30%",
      // className:'bg-myTheme',
      productName: "IPS LCD Gaming Monitor",
      delPrice: "$400",
      newPrice: "$350",
      starRank: "(77)",
      image:led,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
    {
      // discount: "-25%",
      // className:'bg-myTheme',
      productName: "S-Series Comfort Chair",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:pars,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
    {
      // discount: "-35%",
      // className:'bg-myTheme',
      productName: "AK-900 Wired Keyboard",
      delPrice: "$400",
      newPrice: "$370",
      starRank: "(99)",
      image:chair,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />
    },
    {
      // discount: "-30%",
      // className:'bg-myTheme',
      productName: "IPS LCD Gaming WallStan",
      delPrice: "$400",
      newPrice: "$350",
      starRank: "(77)",
      image:wood,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
    {
      // discount: "-25%",
      // className:'bg-myTheme',
      productName: "S-Series Comfort Spiker",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:spikerCard,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
     {
      // discount: "-15%",
      // className:'bg-myTheme',
      productName: "S-Series Comfort KeyBoard",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:keyboard,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
    {
      // discount: "-20%",
      // className:'bg-myTheme',
      productName: "S-Series Comfort KeyBoard",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:wood,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
    {
      // discount: "-35%",
      // className:'bg-myTheme',
      productName: "AK-900 Wired Keyboard",
      delPrice: "$400",
      newPrice: "$370",
      starRank: "(99)",
      image:chair,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />
    },
    {
      // discount: "-15%",
      // className:'bg-myTheme',
      productName: "S-Series Comfort KeyBoard",
      delPrice: "$400",
      newPrice: "$375",
      starRank: "(99)",
      image:apper,
      hearticon:<SlHeart />,
      eyeicon:<FiEye />

    },
  ];

import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AddToCard } from './AddToCard';

export function CardListSlider2 ()  {
  return (
   <>
   <div>
   <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      breakpoints={{
        1920: {
          slidesPerView: 6,spaceBetween:10
        },
        1440: {
          slidesPerView: 5,spaceBetween:40
        },
        1100: {
          slidesPerView: 4,spaceBetween:50
        }, 800: {
          slidesPerView: 3,spaceBetween:50
        },
        500: {
          slidesPerView: 1,spaceBetween:40
        },
        350: {
          slidesPerView: 1,spaceBetween:0
        },
        320: {
          slidesPerView: 1,spaceBetween:0
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
      onSlideChange={() => console.log('slide change')}
    >

    
      <div className="flex  ">


        {
          AddToCardlist2.map((value,index)=>{
        return    <SwiperSlide key={index}><AddToCard id={index} hearticon={value.hearticon} eyeicon={value.eyeicon} className={value.className}  image={value.image} discount={value.discount} productName={value.productName} delPrice={value.delPrice} newPrice={value.newPrice} starRank={value.starRank}/></SwiperSlide>

          })
        }
      </div>
      
    </Swiper>
   </div>
   
   
   </>
  );
};




// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { AddToCard } from './AddToCard';

// export default ()=> {
//   return (
//     <>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={4}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {/* <SwiperSlide><AddToCard/></SwiperSlide>
//         <SwiperSlide><AddToCard/></SwiperSlide>
//         <SwiperSlide><AddToCard/></SwiperSlide> */}
     
//         <div className="card flex ">
//     {
//       AddToCardlist.map((value ,index)=>{
//         return(
//           <SwiperSlide>  <AddToCard id={index}  discount={value.discount} productName={value.productName} delPrice={value.delPrice} newPrice={value.newPrice} starRank={value.starRank}/></SwiperSlide>

//         )
//       })
//     }
//     </div>
//       </Swiper>
//     </>
//   );
// }