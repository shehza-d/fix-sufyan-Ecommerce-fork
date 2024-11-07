import { useState } from "react";
import "./App.css";
import { AddToCard } from "./components/AddToCard";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <AddToCard/>
    </>
  );
}

export default App;
