import LeftMenu from "../Components/LeftMenu";
import RightMenu from "../Components/RightMenu";
import { Props } from "../Components/SingleTweetCard";
import SingleTweetMenu from "../Components/SingleTweetMenu";

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