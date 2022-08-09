import LeftMenu from "../Components/LeftMenu";
import RightMenu from "../Components/RightMenu";
import TweetsMenuHome from "../Components/TweetsMenuHome";

function Home() {
  return (
    <div className="HomePage">
      <LeftMenu />

      <TweetsMenuHome />

      <RightMenu />
    </div>
  );
}

export default Home
