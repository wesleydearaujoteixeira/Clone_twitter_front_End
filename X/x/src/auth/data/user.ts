import { twitter } from "../types/twitter";
import { user } from "./data";

export const twitt: twitter  = {

    id: 1,
    user: user,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mi in neque viverra tempus. Sed facilisis, est sed dictum condimentum, enim ligula consectetur velit, at ultrices mauris nunc a velit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin id eleifend urna. Nulla facilisi.",
    image: "https://cenapop.uol.com.br/media/uploads/legacy/2019/08/caroldias_rep_inst_02-1.jpg",
    likeCount: 10,
    commentCount: 5,
    retweetCount: 5,
    liked: true,
    retweeted: false,
    dataPost: new Date("2022-02-15T10:00:00")

}