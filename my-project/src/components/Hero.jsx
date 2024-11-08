
let heroLink=[
    {name:"Woman's Fashion"},
    {name:"Men's Fashion"},
    {name:"Electronics"},
    {name:"Home & StyleLife"},
    {name:"Medicine"},
    {name:"Sports & Outdoor"},
    {name:"Baby's & Toys"},
    {name:"Groceries & Pets"},
    {name:"Health & Beauty"},

]

export default function Hero() {
 return (<>
 
 <div className="heroMain">
    <div className="lefthero bg-orange-700 border-r-4 border-black"><div className="liHero w-[270px] h-[344px] pl-[135px] gap-4 bg-slate-400 ">
        {heroLink.map((value , index)=>{
            return(
<li className="list-none" id={index}>{value.name}</li>
            )
        })}
        </div>
    </div>
 </div>
 
 
 </>)
}
