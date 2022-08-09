import SingleTweetCard, { Props } from "./SingleTweetCard"

function SingleTweetMenu({tweet}: Props) {
    return (
        <div>
        <SingleTweetCard tweet={tweet}/>
        <form>Comments</form>
        </div>

    )
}

export default SingleTweetMenu