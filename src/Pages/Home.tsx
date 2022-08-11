import LeftMenu from "../Components/LeftMenu";
import RightMenu from "../Components/RightMenu";
import { Props } from "../Components/TweetsList";
import TweetsMenuHome from "../Components/TweetsMenuHome";

function Home({tweets, setTweets} :Props) {
  return (
    <div className="HomePage">
      <LeftMenu />

      <TweetsMenuHome tweets={tweets} setTweets={setTweets} />

      <RightMenu />
    </div>
  );
}

export default Home
