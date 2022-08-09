//this is going to be reused bc is the same at every page

import { RiHomeHeartFill } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <img
        className="twitter-logo"
        src="https://www.cbs42.com/wp-content/uploads/sites/81/2020/11/twitter.png"
        alt="twitter-logo"
        width={30}
      />
      <a href="#">
        <RiHomeHeartFill />
        Home
      </a>
      <nav className="leftMenu-nav">
        <ul className="leftMenu-list">
         <a href="#"><li>
            <FaHashtag />
            Explore
          </li></a> 
          <li>
            <IoMdNotificationsOutline />
            Notifications
          </li>
          <li>
            <BiEnvelope />
            Messages
          </li>
          <li>
            <FaRegBookmark />
            Bookmarks
          </li>
          <li>
            <CgPlayListSearch />
            Lists
          </li>
          <li>
            <CgProfile />
            Profile
          </li>
          <li>
            <CgMoreO />
            More
          </li>
        </ul>
      </nav>

      <button className="twitter-button">Tweet</button>

      <footer className="leftMenu-footer">
        <button>
          {" "}
          <p>user logo</p>
          <p>user name</p>
          <p>username</p>
        </button>
      </footer>
    </div>
  );
}

export default LeftMenu;
