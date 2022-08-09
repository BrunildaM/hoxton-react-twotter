import { Tweet } from "./TweetsList"

// to be used at the homepage and single tweet page
type Props=  {
    tweet: Tweet
}

function SingleTweetCard({tweet}: Props) {

  return (
      <div className="tweet-wrapper">
          <img src={tweet.user.profileImage} alt="" />
          <p>{tweet.user.name}</p>
          <p>{tweet.user.username}</p>
          <p>{tweet.text}</p>
          <img src={tweet.image} alt="" />
      </div>
          

       
  )
}

export default SingleTweetCard;
