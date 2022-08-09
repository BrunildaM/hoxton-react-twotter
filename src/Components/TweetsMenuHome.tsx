
import TweetsList from "./TweetsList";
import {BsImage} from "react-icons/bs"
import {AiOutlineGif}  from "react-icons/ai"
import {BiPoll}  from "react-icons/bi"

 
function TweetsMenuHome() {
    return (
        <main>
        <h2>Home</h2>
        <form onSubmit={(event) => {
          event.preventDefault()

        }}>

          <textarea name="newTweet" placeholder="What's happening?"/>
          <div>
          <a href="#"> <BsImage /> </a>  
          <a href="#"> <AiOutlineGif /> </a>
          <a href="#"> <BiPoll /> </a>
          </div>

          <button className="twitter-button">Tweet</button>
          
        </form>
      
      <TweetsList />

      </main>
    )
}

export default TweetsMenuHome