import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
// ../assets/logo/'
let Mylink = [{ name: "Home" }, { name: "Contact" }, { name: "About" }, { name: "Sign Up" }];
let login = false;
export default function MyNavbar() {
  return (
    <>
      <nav className="center p-6  border-b-2 border-gray-100 ">
        <div className="navIn w-[1170px] h-[38px] flex gap-[130px] ">
          <div className="leftSide flex gap-40">
            <div className="logoImg">
              <img className="w-28 h-6" src={logo} alt="" />
            </div>
            <div className="li flex gap-12  font-normal text-base">
              {Mylink.map((value, index) => {
                return (
                  <li
                    id={index}
                    className="list-none text-black hover:underline "
                  >
                    <a href="#">{value.name}</a>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="rigthSide flex  w-[395px] h-[38px] gap-6">
            <div className=" bg flex w-[243px] h-[38px] gap-2 justify-center items-center bg-[#F5F5F5]">
              <div className="search w-[211px] h-6 flex justify-center ">
                <input
                  className="outline-none bg-[#F5F5F5] placeholder:font-normal text-xs text-gray-300"
                  placeholder="What are looking for"
                  type="search"
                  name=""
                  id=""
                />
                <span>
                  <CiSearch className="text-2xl cursor-pointer font-semibold" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
