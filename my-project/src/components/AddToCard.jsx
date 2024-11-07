import game from "../assets/images/game.png";

export function AddToCard() {
  return (
    <>
      <div className="main bg-slate-500  w-[270px] h-[350px] m-8 ">
        <div className="img w-[270px] h-[250px] bg-slate-200 relative ">
        <button
            className=" w-[55px] h-[26px] bg-red-500 rounded text-white absolute left-3 right-4 bottom-1 top-3 ;
"
          >
            -40%
          </button>
          <img className=" w-[190px] h-[180px] m-10" src={game} alt="" />
          
        </div>
      </div>
    </>
  );
}
