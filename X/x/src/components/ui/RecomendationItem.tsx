import { User } from "../../auth/types/user";



const RecomendationItem = (user: User) => {
  return (
    <div>
        {user.name}
    </div>
  )
}

export default RecomendationItem;