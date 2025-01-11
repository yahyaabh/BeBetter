import { useState } from "react"
import { NavBar } from "./components/NavBar"
import bmiPic from "./assets/bmi.jpg";
import { NavLink } from "react-router";

export default function Bmi() {
    let [height, setHeight] = useState(0);
    let [weight, setWeight] = useState(0);
    let [bmi,setBmi] = useState(0);

    let handleHeight = (e) => {
        setHeight(e.target.value);
        
                }

    let handleWeight = (e) => {
        setWeight(e.target.value);
        
                }

    let calculateBmi = (e) => {
            e.preventDefault();
            let x = weight/((height*0.01)*(height*0.01));
            setBmi(x.toFixed(1));
            console.log(bmi);

    }

  return (
    <div>
        <NavBar></NavBar>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="font-medium text-lg">calulate your BMI:</h1>
            <form onSubmit={calculateBmi} className="flex flex-col items-center justify-center">
                <input onChange={handleHeight} type="number" className= "transition-all my-2 border-2 rounded-lg shadow-md border-blue w-full px-4 py-2 focus:py-1 focus:outline-none focus:border-mint " name="height" placeholder="height in cm:"/>
                <input onChange={handleWeight} type="number" className= "transition-all my-2 border-2 rounded-lg shadow-md border-blue w-full px-4 py-2 focus:py-1 focus:outline-none focus:border-mint " name="weight" placeholder="weight in kg:"/>
                <button  type="submit" className="bg-black px-4 py-2 mt-2 rounded-md text-blue hover:text-mint hover:p-2 transition-all  " >calculate</button>
            </form>
            <p className="font-medium mt-2 mb-2  text-xl">your bmi is: <NavLink to="../bmitips"  className=" font-extrabold underline animate-pulse text-mint cursor-pointer    ">{bmi}</NavLink > </p>
            <img className="size-60 w-72 rounded-md mt-5" src={bmiPic}></img>
            
        </div>
    </div>
  )
}

