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
      <div id="heroMain" className="bg-slate-500 w-[100%] h-[500px] 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col mobile:flex-col flex ">
        <div className=" bg-lime-400 2xl:w-[30%]  xl:w-[30%] lg:w-[100%] md:w-[100%]  sm:w-[100%] mobile:w-[100%] center">
          <div className=" bg-fuchsia-600 w-[270px] h-[344px] flex flex-col gap-4 2xl:w-[270px] 2xl:h-[344px] xl:w-[270px] xl:h-[344px] lg:items-center lg:w-[100%]  md:items-center md:w-[100%] sm:items-center sm:w-[100%]   mobile:items-center mobile:w-[100%] ">
            {heroLink.map((value, index) => {
              return (
                <li className=" list-none hover:underline font-normal text-base text-black" key={index}>
                  {value.name}
                </li>
              );
            })}
          </div>
        </div>
        <div className=" bg-amber-900 2xl:w-[70%] xl:w-[70%] lg:w-[100%] md:w-[100%] sm:w-[100%] center">
          <div className=" bg-black w-[892px] h-[344px]  gap-4 2xl:w-[892px] 2xl:h-[344px] xl:w-[892px] xl:[344px] lg:w-[100%] md:w-[100%] sm:w-[100%] mobile:w-[100%] ">
            {/* inner first div */}
             <div className="flex justify-evenly "> 
                 {/* mera textarea  */}
              <div className='flex flex-col justify-center   '>
                <div id='firstline' className='flex  items-center gap-[24px]'>
                  <div><img className=' w-10 h-12' src={apple} alt="" /></div>
                  <h5 className='font-normal text-base text-white'>iPhone 14 Series</h5>
                </div>
                <div>
                  <h1 className='font-semibold text-5xl text-white leading-[60px]'>Up to 10% <br />  off Voucher</h1>
                </div>
                <div className='flex font-semibold text-base gap-1 text-white '> Shop Now <span className='text-xl'><FaArrowRight /></span></div>
              </div>
                  {/* apple phone side */}
              <div id='apple phone side' className=''> 
                <img  className='2xl:w-[496px] xl:w-[496px] 2xl:h-[320px] xl:h-[320px] lg:w-[300p]' src={hero} alt="" />
                </div>
            </div>
            <div className='flex justify-center'><img src={dot} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
