import { useEffect } from "react";
import TweetsByUser from "../Components/TweetsByUser";
import { Tweet } from "../Components/TweetsList";

export type User = {
  userId: number;
  name: string;
  username: string;
  profileImage: string;
  tweets: {
    id: number;
    text: string;
    image: string;
  };
};

type Props = {
    users: User[]
  setUsers: (users: User[]) => void;
  tweets: Tweet[]
  setTweets: (tweets: Tweet[]) => void;
};

function UserProfile({users, setUsers, tweets, setTweets }: Props) {

  useEffect(() => {
    fetch("http://localhost:3005/user")
      .then((resp) => resp.json())
      .then((usersFormServer) => setUsers(usersFormServer));
  }, []);

  return (
      <div>
          {users.map((user) => 
          <ul key={user.userId}>
              <img src={user.profileImage} alt="" width={50}/>
              <h2>{user.name}</h2>
              <h3>{user.username}</h3>
              <p>some more info about user</p>
              <TweetsByUser tweets={tweets} setTweets={setTweets}/>

          </ul>

    )}
      </div>
  
  )
}

export default UserProfile;
