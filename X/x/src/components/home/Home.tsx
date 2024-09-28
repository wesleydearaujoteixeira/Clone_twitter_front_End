import { HeaderPage } from "../header/HeaderPage"
import { HomeFeed } from "../homeFeed/HomeFeed"
import { Twitter_post } from "../twitter/Twitter_post"
import SearchInput from "../ui/SearchInput"

export const Home = () => {
    return (
        <div>
            <HeaderPage/>
            <SearchInput/>
            <Twitter_post/>
            <HomeFeed/>
        </div>
    )
}