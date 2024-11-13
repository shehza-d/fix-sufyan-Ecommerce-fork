import { useState } from "react";
import "./App.css";
import { AddToCard } from "./components/AddToCard";
import Header from "./components/Header";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyFooter from "./components/Footer";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SiginUp from "./Pages/SiginUp";
import Profile from "./Pages/Profile";
import { Navigate } from "react-router-dom";


let AddToCardlist = [
  {
    discount: "-40%",
    productName: "HAVIT HV-G92 Gamepad",
    delPrice: "$160",
    newPrice: "$120",
    starRank: "(88)",
  },
  {
    discount: "-35%",
    productName: "AK-900 Wired Keyboard",
    delPrice: "$400",
    newPrice: "$370",
    starRank: "(99)",
  },
  {
    discount: "-30%",
    productName: "IPS LCD Gaming Monitor",
    delPrice: "$400",
    newPrice: "$350",
    starRank: "(77)",
  },
  {
    discount: "-25%",
    productName: "S-Series Comfort Chair",
    delPrice: "$400",
    newPrice: "$375",
    starRank: "(99)",
  },
];

function App() {
  const [count, setCount] = useState(0);
let logSing=false
  return (
    <>
      <div className="w-[100%]  2xl:center ">
        <Header />
        <MyNavbar />
      

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          
          <Route path="/SiginUp"  element={<SiginUp/>}/>
          {logSing?
        <>
           <Route path="/profile" element={<Profile/>}/>
            <Route path="/Login"  element={<Navigate to='/'/>}/>
            </> 
           :<>
           <Route path="/Login"  element={<Login/>}/>
           <Route path="*"  element={<Navigate to='/Login'/>}/>
           </>
        }
       

        </Routes>
        <MyFooter />
        {/* <div className="card flex ">
    {
      AddToCardlist.map((value ,index)=>{
        return(
          <AddToCard id={index}  discount={value.discount} productName={value.productName} delPrice={value.delPrice} newPrice={value.newPrice} starRank={value.starRank}/>

        )
      })
    }
    </div> */}
      </div>
    </>
  );
}

export default App;
