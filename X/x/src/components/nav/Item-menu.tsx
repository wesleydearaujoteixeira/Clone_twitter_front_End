import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";


type Props = {
    label: string,
    active?: boolean,
    href: string,
    iconHome?: boolean,
    iconPerfil?: boolean,

}


const Item_menu = ({label, active, href, iconHome, iconPerfil}: Props) => {

  return (
    <div>
        <Link to={`${href}`} className={`flex items-center gap-4 py-2 ${active ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>

            <div className="text-2xl">
               {iconHome && <IoHomeSharp />}
                {iconPerfil && <FaUserCircle/>}
            </div>
            
            <div className="text-2xl"> {label} </div>
        </Link>
    </div>
  )
}

export default Item_menu;