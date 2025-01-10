import bblogo from "../assets/bblogo.png"

export function NavBar() {
  return (
    <div className= " w-full bg-black h-1/6 flex flex-row justify-between">
       <img className="size-20" src={bblogo}></img>

       <div className="flex flex-row items-center">
            <a className="mx-1 p-2 rounded-md bg-blue text-white hover:bg-mint hover:p-1.5  cursor-pointer  ">bmi</a>
            <a className="mx-1 p-2 rounded-md bg-blue text-white hover:bg-mint hover:p-1.5  cursor-pointer  ">about</a>
            <a className="mx-1 p-2 rounded-md bg-blue text-white hover:bg-mint hover:p-1.5 cursor-pointer   ">contact</a>
       </div>
    </div>
  )
}

