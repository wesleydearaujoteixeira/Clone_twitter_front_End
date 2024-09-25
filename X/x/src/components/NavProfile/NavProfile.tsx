import { Link } from "react-router-dom";

interface ProfileTypes  {
    img: string;
    username: string;
    slug: string;
    size?: number; 
}

export const NavProfile = ({img, username, slug, size}: ProfileTypes) => {

    return (
        <div className="flex items-center gap-6 mt-5 mt-5">
            <div>
                <img src={img} alt={username} className={`w-${size} rounded-full `} />
            </div>

            <div className="flex flex-col overflow-hidden">
                <Link to={`/${slug}`} className=" block truncate"> {username} </Link>
                <p className="text-gray-400 text-sm truncate"> {slug} </p>
            </div>
        </div>
    )
}