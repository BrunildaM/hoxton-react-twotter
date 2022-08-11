import SingleTweetCard from "./SingleTweetCard";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type Tweet = {
  id: number;
  text: string;
  user: {
    userId: number
    name: string;
    username: string;
    profileImage: string;
  };
  image: string;
};

export type Props = {
  tweets: Tweet[];
  setTweets: (tweets: Tweet[]) => void;
};

function TweetsList({tweets, setTweets}: Props) {

   

    useEffect(() => {
      fetch("http://localhost:3005/tweets")
        .then((resp) => resp.json())
        .then((tweetsFromServer) => setTweets(tweetsFromServer));
    }, []);
    return (
        
<div >
      {tweets.map((tweet) => 
    <Link to='/singleTweet'><SingleTweetCard key={tweet.id} tweet={tweet}/>
    </Link> 
    )}
    </div>
)}

export default TweetsList