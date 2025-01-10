import {NavBar} from "./components/NavBar";
import running from "./assets/running.jpg";
import quotes from "./quotes.json"
import { useEffect, useState } from "react";

function Welcome() {

  let [num,setNum] = useState(1);

  let changeNum = () => {
    let x = Math.floor(Math.random() * 25) ;
    console.log(x);
    setNum(x);
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeNum();
    
    },5000);

    return () => clearInterval(interval);
  },[])

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
        <NavBar ></NavBar>
        <div className=" mt-10 w-2/4 flex flex-row justify-evenly ">
          <div className="w-1/2 flex flex-col items-center justify-evenly">
            <p className="font-medium text-xl">Welcome to <span className="text-blue underline font-bold">BeBetter</span>, your personal guide to better health and wellness. Explore tools, tips, and resources to help you lead a healthier lifestyle.</p>
            <button className="mx-1 p-2 rounded-md bg-blue text-white hover:bg-mint hover:p-1.5  cursor-pointer animate-pulse" >Start now</button>
          </div>
          <img className="rounded-xl size-80" src={running} ></img>
        </div>
        <div className="mt-40 cursor-pointer " onClick={changeNum}>
              <p className="text-md font-extrabold font-serif">&quot;{quotes[num].quote}&quot;</p>
              <p>{quotes[num].author}</p>
        </div>
    </div>
  )
}

export default Welcome;
