import { useState } from "react";
import "./App.css";
import { AddToCard } from "./components/AddToCard";
import Header from "./components/Header";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
let AddToCardlist = [
  { discount: "-40%", productName: "HAVIT HV-G92 Gamepad", delPrice: "$160",newPrice:"$120",starRank:"(88)" },
  { discount: "-35%", productName: "AK-900 Wired Keyboard", delPrice: "$400",newPrice:"$370",starRank:"(99)" },
  { discount: "-30%", productName: "IPS LCD Gaming Monitor", delPrice: "$400",newPrice:"$350",starRank:"(77)" },
  { discount: "-25%", productName: "S-Series Comfort Chair", delPrice: "$400",newPrice:"$375",starRank:"(99)" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>     
                                {/* Header Start */}
<Header/>
                                 {/* Header End */}

                                {/* Navbar Start */}
<MyNavbar/>
                                {/* Navbar End */}

                                {/* Hero Start */}
                                <Hero/>
                                {/* Hero End */}


                          {/* AddToCard Work Start */}

    <div className="card flex ">
    {
      AddToCardlist.map((value ,index)=>{
        return(
          <AddToCard id={index}  discount={value.discount} productName={value.productName} delPrice={value.delPrice} newPrice={value.newPrice} starRank={value.starRank}/>

        )
      })
    }
    </div>
                                    {/* AddToCard Work End */}

    </>
  );
}

export default App;
