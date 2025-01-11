import { NavBar } from "./components/NavBar";
import broccoli from "./assets/under.jpg"
import cat from "./assets/cat.jpg"
import { NavLink } from "react-router";

export default function BmiTips() {
  return (
    <div className=" overflow-x-hidden">
        <NavBar></NavBar>
        <div className="flex flex-row w-screen bg-black border-t border-white h-screen justify-center items-center">
            <div className="bg-black  flex flex-col justify-start items-start">
                
                <div className="m-4 flex flex-row  items-center w-1/2    ">
                    <div>
                    <h1 className="text-lg text-blue mb-2">If you are underweight:</h1>
                    <p className="text-white">You may have problems like hormonal imbalance, low muscle mass and nutritional deficiency.</p>
                    <p className="text-white">So you should focus on eating more, especially healthy natural foods and exercising more often.</p>
                    </div>
                    <img className="size-52 rounded-full  ml-2" src={broccoli}></img>
                </div>
                <div  className="m-4 mt-10 flex flex-row  items-center w-1/2">
                    <div>
                        <h1 className="text-lg text-blue mb-2">If you are overweight:</h1>
                        <p className="text-white">You have increased risk of having diabetes , heart disease and hypertension.</p>
                        <p className="text-white">So you should focus on eating less food in general, exercising more and doing more cardio and managing your stress levels.</p>
                    </div>  
                    <img className="size-52 rounded-full  ml-2 hover:animate-spin" src={cat}></img>
                </div>
                
            </div>
            <div className="">
                <NavLink className="bg-aqua text-black animate-pulse p-2 rounded-md">tips for your wellness and mental health.</NavLink>
            </div>
        </div>
    </div>
  )
}

