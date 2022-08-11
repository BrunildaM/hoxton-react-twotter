import LeftMenu from "../Components/LeftMenu";
import RightMenu from "../Components/RightMenu";
import SingleTweetMenu from "../Components/SingleTweetMenu";
import { Tweet } from "../Components/TweetsList";

type Props = {
    tweet: Tweet 
}

function SingleTweet ({tweet}: Props) {
    return (
        <>
        <LeftMenu />
        <SingleTweetMenu tweet={tweet}/>
        <RightMenu />
        </>
        
        
    )
}

export default SingleTweet