
import TweetsList, { Props } from "./TweetsList";
import {BsImage} from "react-icons/bs"
import {AiOutlineGif}  from "react-icons/ai"
import {BiPoll}  from "react-icons/bi"


 
function TweetsMenuHome({tweets, setTweets} :Props) {
    return (
        <main>
        <h2>Home</h2>
           
        <form onSubmit={(event) => {
          event.preventDefault();


          fetch("http://localhost:3005/tweets", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    text: event.target.tweet.value,
                    user: {
                      name: '',
                      username: "",
                      profileImage:
                        "",
                    },
                    image: "",
                  }),
                })
                  .then((res) => res.json())
                  .then((tweet) => {
                    setTweets([...tweets, tweet]);
                  });

                event.target.tweet.value = "";
                location.reload();
              }}
            >
       

          <textarea name="newTweet" placeholder="What's happening?"/>
          <div>
          <a href="#"> <BsImage /> </a>  
          <a href="#"> <AiOutlineGif /> </a>
          <a href="#"> <BiPoll /> </a>
          </div>

          <button className="twitter-button"  onClick={() => {}}>Tweet</button>
          
        </form>
      
      <TweetsList tweets={tweets} setTweets={setTweets}/>

      </main>
    )
}

export default TweetsMenuHome