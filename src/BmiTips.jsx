import { NavBar } from "./components/NavBar";

import { NavLink } from "react-router";

export default function BmiTips() {
  return (
    <div className=" overflow-x-hidden">
        <NavBar></NavBar>
        <div className="flex flex-row w-screen bg-black border-t border-white h-screen justify-center items-center">
            <div className="bg-black  flex flex-col justify-start items-start">
                
                <div  className="m-2 flex flex-row  items-center w-1/2  border border-blue p-2 rounded-lg  whiteshadow">
                    <div>
                    <h1 className="text-lg text-blue mb-2 underline m-2">If you are underweight:</h1>
                    <p className="text-white">You may have problems like hormonal imbalance, low muscle mass and nutritional deficiency, So you should focus on:</p>
                    <ul className="list-disc list-inside">
                        <li className="text-white">eating more, especially healthy natural foods.</li>
                        <li className="text-white">exercising more often.</li>
                    </ul>
                    </div>
                   
                </div>
                <div  className="m-2 mt-10 flex flex-row  items-center w-1/2 border border-blue p-2 rounded-lg whiteshadow">
                    <div>
                        <h1 className="text-lg text-blue mb-2 underline m-2">If you are overweight:</h1>
                        <p className="text-white">You have increased risk of having diabetes , heart disease and hypertension, So you should focus on:</p>
                        
                        <ul className="list-disc list-inside text-white">
                            <li >eating less food.</li>
                            <li> exercising more and doing more cardio.</li>
                            <li>managing your stress.</li>
                        </ul>
                    </div>  
                    
                </div>
                
            </div>
            <div className=" border border-blue rounded-lg p-6 whiteshadow flex flex-col">
                <h1 className="text-blue text-lg underline m-2">Mental health and wellness tips:</h1>
                <ul className="list-disc list-inside text-white text-md ">
                    <li className="m-2">manage stress by practicing meditation and deep breathing.</li>
                    <li className="m-2">focus on gratitude and write things you are thankful about daily.</li>
                    <li className="m-2">practice journaling by writing about your thoughts, feelings and experiences.</li>
                    <li className="m-2">take breaks from social media and technology.</li>
                    <li className="m-2">hydrate, eat well and take care of yourself and your space.</li>
                </ul>

                <NavLink to="../wellness" className="bg-blue p-2 rounded-lg cursor-pointer m-4 w-1/4 text-center animate-pulse text-white transition-all hover:p-1 ">fix my mood!</NavLink>
            </div>
        </div>
    </div>
  )
}

