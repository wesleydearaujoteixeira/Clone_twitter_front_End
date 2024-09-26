import { twitt } from "../../auth/data/user"
import TwitterItem from "./TwitterItem"

export const HomeFeed = () => {
    return (
        <main>
            <TwitterItem twitter={twitt}/>
            <TwitterItem twitter={twitt}/>
            <TwitterItem twitter={twitt}/>
            <TwitterItem twitter={twitt}/>

        </main>
    )
}