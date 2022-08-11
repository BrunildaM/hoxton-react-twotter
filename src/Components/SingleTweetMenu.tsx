import SingleTweetCard from "./SingleTweetCard"
import { Tweet } from "./TweetsList"

type Props = {
    tweet: Tweet
}

function SingleTweetMenu({tweet}: Props) {
    
    return (
        <div>
        <SingleTweetCard tweet={tweet}/>
        <form>Comments</form>
        </div>

    )
}

export default SingleTweetMenu