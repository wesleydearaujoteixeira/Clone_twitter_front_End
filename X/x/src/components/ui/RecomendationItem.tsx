import { Link } from "react-router-dom";
import { User } from "../../auth/types/user";
import { Button } from "./Button";
import { useState } from "react";


type Props = {
  user: User;
}


const RecomendationItem = ({user}: Props) => {


  const [following, setFollowing] = useState(false);

  const handleClickFollow = () => {
    alert(`Seguindo fulano`);
    setFollowing(!following);
  }

  return (
    <div className="flex items-center gap-3">
        <div className="size-10 mr-2 rounded-full overflow-hidden">
          <Link to={`/${user.slug}`}>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="size-full"
              />
          </Link>

        </div>

        <div>
          <div className="flex-1 items-center overflow-hidden">
            <Link to={`/${user.slug}`}>
                <div className="text-sm truncate">{user.name}</div>
            </Link>
          </div>
          <div className="truncate text-sm text-gray-400">
            {user.slug}
          </div>
        </div>

        <div className="pl-2 w-20">
          
        <Button
            label={`${following ? 'Seguiu' : 'Seguir'}`}
            size={1}
            onClick={handleClickFollow}
            
            />


        </div>

    </div>
  )
}

export default RecomendationItem;