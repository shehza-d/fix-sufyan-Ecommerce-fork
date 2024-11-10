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
      <div className="heroMain center">
        <div className="lefthero   gap-4  border-r-2 border-gray-100 w-[310px]">
          <div className="liHero   pl-12 ml-9 w-[270px] h-[344px]  gap-4   ">
           <div className="  liPadding w-[217px] h-[340px]   mt-12"> 
            {heroLink.map((value, index) => {
              return (
                <li className=" list-none pl-3 w-[217px] h-[24px] gap-[81px] mb-[15px] font-normal text-base " id={index}>
               <a href="#" className="hover:underline">{value.name}</a>   
                </li>
              );
            })}
            </div>
          </div>
        </div>
        <div className="heroright ">
            <div className="heroCan ml-[45px] w-[892px] h-[334px] bg-black mt-12">

            </div>
        </div>
      </div>
    </>
  );
}
