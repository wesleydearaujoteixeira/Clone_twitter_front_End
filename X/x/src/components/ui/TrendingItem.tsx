import { Link } from "react-router-dom";


type Props = {
    label?: string;
    count?: number
}


const TrendingItem = ({label, count}: Props) => {
  return (

    <Link to={`/search?q=${ label ?  encodeURIComponent(label) : '' }`}
    
    >

        <div className="hover:underline font-bold">
            {label}
        </div>

        <div className="text-gray-400 text-sm">
            {count} posts
        </div>
        
    </Link>

   
  )
}

export default TrendingItem


export const TrendingItemSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col">
            <div className="bg-gray-600 w-3/4 h-4"></div>
            <div className="bg-gray-600 w-3/4 h-4"></div>
        </div>
    )
}