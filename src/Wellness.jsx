import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";

export default function Wellness() {
    let [text,setText] = useState('');
    let [timer,setTimer] = useState(0);
    const [timeInterval, setTimeInterval] = useState(null);

    useEffect(() => {
        setText(localStorage.getItem('text'));
    },[])

    let textHandler = (e) => {
        setText(e.target.value);
        localStorage.setItem('text',text);
        
    }

    const startTimer = () => {
        //run setimer each second
        //return the id of the interval and put it in TimeInterval
        setTimeInterval(setInterval(() => {
            setTimer((prev) => prev + 1);
          }, 1000));
    }

    const pauseTimer = () => {
        //clear for it to stop continuing
        clearInterval(timeInterval);
      }

  const resetTimer = () => {
    setTimer(0);
    clearInterval(timeInterval);
  }

  return (
    <div className="h-screen bg-black">
        <NavBar></NavBar>
        <div className="border-t border-white flex flex-row justify-around items-start">
            <div>
                <h1 className="text-blue text-xl m-2 underline font-semibold">to help reducing your stress , write here what you are thinking about:</h1>
                <textarea onChange={textHandler}  className=" focus: resize-none font-mono  h-80 focus:outline-none border-2 leading-relaxed border-white p-2 rounded-lg w-full  " value={text}  placeholder="Write here..."></textarea>
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="text-blue text-xl  underline font-semibold m-4">see how much can you practice mindfullness:</h1>
                
                <button onClick={startTimer} className=" bg-green rounded-lg text-white p-2 hover:p-1 transition-all m-1">start</button>
                <button onClick={pauseTimer} className=" bg-red rounded-lg text-white p-2 hover:p-1 transition-all m-1">stop</button>
                <button onClick={resetTimer} className=" bg-blue rounded-lg text-white p-2 hover:p-1 transition-all m-1 ">reset</button>

                <p className="text-white text-3xl font-mono text-center m-4 animate-pulse    ">{Math.floor(timer / 60)}m:{timer%60}s</p>
            </div>
        </div>
    </div>
  )
}
