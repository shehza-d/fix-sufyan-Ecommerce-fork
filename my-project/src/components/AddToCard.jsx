import game from "../assets/images/game.png";
import star from "../assets/images/Five star.png";


export function AddToCard({
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
}) {
  return (
    <>

      <div className="main  bg-white  w-[270px] h-[350px] m-8 ">
        <div className="img w-[270px] h-[250px] bg-[#F5F5F5] relative center ">
          <button
            className=" w-[55px] h-[26px] bg-myTheme rounded text-white absolute left-3 right-4 bottom-1 top-3 ;
"
          >
            {discount}
          </button>
          <img className=" w-[172px] h-[152px] m-10 hover:scale-125" src={game} alt="" />
        </div>
        <div className="myp w-[201px] h-[84px] gap-2 my-3">
          <h2 className="w-[201] h-6 text-base font-medium hover:text-myTheme">{productName}</h2>
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
