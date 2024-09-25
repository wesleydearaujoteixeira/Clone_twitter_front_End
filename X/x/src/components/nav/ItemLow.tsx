import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";


 
export const ItemLow = () => {

    const navigate = useNavigate();
    const LogOut = () => {
        navigate('/');
    }

  return (
    <div>
        <div onClick={() => LogOut()} className={` cursor-pointer flex items-center gap-4 py-2 opacity-50 hover:opacity-100`}>

            <div className="text-2xl ">
                <FiLogOut />
            </div>
            
            <h1 className="text-2xl"> Sair </h1>
        
        </div>
    </div>
  )
}

export default ItemLow;