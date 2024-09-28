//import { useParams } from "react-router-dom";
import { General_Header } from "../ui/General_Header";
import TwitterItem from "../homeFeed/TwitterItem";
import { Twitter_post } from "../twitter/Twitter_post";
import { twitt } from "../../auth/data/user";


const CommentPost = () => {

    //const { id } = useParams();
    
    return (
        <div>
            <General_Header href='/layout'>
                    <div> Voltar </div>
            </General_Header>
                <div className="border-t-2 border-gray-900">
                <TwitterItem twitter={twitt} hideComments/>
                <Twitter_post />
                <TwitterItem twitter={twitt} />


                </div>
        </div>
  )
}

export default CommentPost;