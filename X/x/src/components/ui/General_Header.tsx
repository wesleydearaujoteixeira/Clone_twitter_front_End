import { ReactNode } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";


type Props = {
    href : string,
    children: ReactNode
}


export const General_Header = ({href, children}: Props) => {

    return (
        <header className="flex gap-4 items-center p-6  ">
           <Link to={href} className="flex justify-center items-center  "> 
                <FiArrowLeftCircle size={40}/>
           </Link>
           <div className="flex-1"> {children} </div>
        </header>
    )

}