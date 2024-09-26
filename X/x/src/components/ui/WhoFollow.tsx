import RecomendationItem from "./RecomendationItem";
import { user } from "../../auth/data/data";
import { RecomendationSkeleton } from "./Button";

function WhoFollow() {


  return (

    <div className="bg-gray-700 rounded-3xl">
        <h2 className="text-xl p-6"> Quem seguir  </h2>
        <div className="flex flex-col gap-4 p-6 pt-0 ">
            <RecomendationItem user={user} />
            <RecomendationSkeleton />
            <RecomendationSkeleton />

            
        </div>
    </div>
  )
}

export default WhoFollow;