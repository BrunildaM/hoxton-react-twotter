import { Tweet } from "./TweetsList";
import './SingleTweetCard.css'
import { Link } from "react-router-dom";

// to be used at the homepage and single tweet page
export type Props = {
  tweet: Tweet;
};

function SingleTweetCard({ tweet }: Props) {
  return (
    <div className="tweet-wrapper">
      <div className="tweet-header">
        <img className="user-pic" src={tweet.user.profileImage} alt="" />
        <span className="username">
        <Link className="usermane-link" to="/user" >{tweet.user.name}</Link> 
        <Link className="usermane-link__tag" to="/user">{tweet.user.username}</Link>
        </span>
        <p className="tweet-description">{tweet.text}</p>
      </div>

      <img className="tweet-image" src={tweet.image} alt="" />
    </div>
  );
}

export default SingleTweetCard;
