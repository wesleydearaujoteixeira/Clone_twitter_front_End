import { useState } from "react";
import { Logo } from "../ui/Logo";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Item_menu from "../nav/Item-menu";



export const HeaderPage = () => {



    const [showMenu, setShowMenu] = useState(false);

    const hiddenMenu = () => {
        setShowMenu(!showMenu);
    
    }




  return (
    
    <header className="flex justify-between p-6 gap-4  border-b-2 border-gray-900 ">
        <div className="lg:hidden flex flex-col items-center ">
            
            <div>
                <Logo/>
            </div>

            <div>

                {showMenu && <Item_menu
                    label="home"
                    href="#"
                    iconHome={true}
                />}

                {showMenu && <Item_menu
                    label="perfil"
                    href="/slug"
                    iconPerfil={true}
                />}
                
            </div>
            
        </div>
        <div className=" hidden lg:block text-2xl">
            Página Inicial
        </div>
        <div className=" cursor-pointer" onClick={hiddenMenu}>
            
            {showMenu ? <IoClose size={30 }/>  :  <BsList size={30}/>   }
            

        </div>


    </header>
  )
}
