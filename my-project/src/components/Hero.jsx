import hero from '../assets/images/hero.png';
import apple from '../assets/images/apple.png';
import dot from '../assets/images/dot.png';
import { FaArrowRight } from "react-icons/fa6";



let heroLink = [
  { name: "Woman's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & StyleLife" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  return (
    <>
      <div id="heroMain" className=" w-[100%] h-[500px] 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col mobile:flex-col flex ">
        <div className=" 2xl:w-[30%]  xl:w-[30%] lg:w-[100%] md:w-[100%]   sm:w-[100%] mobile:w-[100%] center 2xl:pl-12 xl:pl-12 ">
          <div className=" w-[270px] h-[344px] flex flex-col gap-4 2xl:w-[270px] 2xl:h-[344px] xl:w-[270px] xl:h-[344px] xl:items-start 2xl:items-start lg:items-center lg:w-[100%]  md:items-center md:w-[100%] sm:items-center sm:w-[100%]   mobile:items-center mobile:w-[100%] ">
            {heroLink.map((value, index) => {
              return (
                <li className=" hover:cursor-pointer hover:text-myTheme  list-none hover:underline font-normal text-base text-black" key={index}>
                  {value.name}
                </li>
              );
            })}
          </div>
        </div>
        <div className="  2xl:w-[70%] xl:w-[70%] lg:w-[100%] md:w-[100%] sm:w-[100%] center">
          <div className=" bg-black w-[892px]    gap-4 2xl:w-[892px] 2xl:h-[344px] xl:w-[892px] xl:[344px] lg:w-[100%]  md:w-[100%] sm:w-[100%] mobile:w-[100%] ">
            {/* inner first div */}
             <div className="flex justify-evenly "> 
                 {/* mera textarea  */}
              <div className='flex flex-col justify-center   '>
                <div id='firstline' className='flex  items-center gap-[24px]'>
                  <div><img className=' 2xl:w-10 xl:w-10 lg:w-10 sm:w-6 md:w-6 mobile:w-6 2xl:h-12 xl:h-12 lg:h-12 md:h-7 sm:h-7 mobile:h-7' src={apple} alt="" /></div>
                  <h5 className='font-normal 2xl:text-base  xl:text-base lg:text-base sm:text-xs md:text-xs mobile:text-xs text-white'>iPhone 14 Series</h5>
                </div>
                <div>
                  <h1 className=' 2xl:font-semibold  xl:font-semibold  lg:font-semibold  md:font-normal sm:font-normal mobile:font-normal   text-white leading-[60px] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl mobile:text-xl'>Up to 10% <br />  off Voucher</h1>
                </div>
                <div className='flex font-semibold text-base gap-1 text-white  hover:cursor-pointer hover:text-myTheme'> Shop Now <span className='text-sm pt-1'><FaArrowRight /></span></div>
              </div>
                  {/* apple phone side */}
              <div id='apple phone side' className=''> 
                <img  className='2xl:w-[496px] xl:w-[496px] 2xl:h-[320px] xl:h-[320px] lg:w-[320px] md:w-[300px] sm:w-[300px] mobile:w-[200px]  ' src={hero} alt="" />
                </div>
            </div>
            <div className='flex justify-center '><img className= 'mobile:w-16 sm:w-16  md:w-16 lg:w-20 xl:w-20 2xl:w-20 p-1 ' src={dot} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
