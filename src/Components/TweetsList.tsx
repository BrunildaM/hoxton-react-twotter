import SingleTweetCard from "./SingleTweetCard";

import { useEffect, useState } from "react";

export type Tweet = {
  id: number;
  text: string;
  user: {
    name: string;
    username: string;
    profileImage: string;
  };
  image: string;
};

function TweetsList() {

    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
      fetch("http://localhost:3005/tweets")
        .then((resp) => resp.json())
        .then((tweetsFromServer) => setTweets(tweetsFromServer));
    }, []);
    return (
        
<div >
      {tweets.map((tweet) => 
      <SingleTweetCard key={tweet.id} tweet={tweet}/>

    )}
    </div>
)}

export default TweetsList