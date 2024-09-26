import { useState } from "react";
import { Logo } from "../ui/Logo";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";



export const HeaderPage = () => {



    const [showMenu, setShowMenu] = useState(true);

    const hiddenMenu = () => {
        setShowMenu(!showMenu);
    
    }




  return (
    
    <header className="flex justify-between p-6 border-b-2 border-gray-900 ">
        <div className="lg:hidden" >
            
            {showMenu && <Logo/>}
            
        </div>
        <div className=" hidden lg:block text-2xl">
            Página Inicial
        </div>
        <div className=" cursor-pointer" onClick={hiddenMenu}>
            
            {showMenu ? <> <BsList size={30}/> </> : <> <IoClose size={30} /> </> }
            

        </div>


    </header>
  )
}
