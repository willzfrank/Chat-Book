import React from "react";
import "./ProfileCenter.css";
import cover from "../../assets/home-img.png";
import image1 from "../../assets/avatar1.png";
import Feed from "../Feeds/Feed";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileFriendsCard from "../ProfileFriendsCard/ProfileFriendsCard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ProfileCenter = () => {
  return (
    <div>
      <div className="profile--image--container">
        <img src={cover} alt="" className="profile--cover--img" />
        <div className="profile--profile--container">
          <img src={image1} alt="" className="profile--profile--img" />
          <h4 className="profile--profile--name">Willz Frank</h4>
          <p className="profile--profile--desc">FullStack Developer</p>
          <div className="followerStatus">
            <hr />
            <div>
              <div className="follow">
                <p>6,890</p>
                <p>Followings</p>
              </div>
              <div className="vl"></div>
              <div className="follow">
                <p>1</p>
                <p>Followers</p>
              </div>
              <div className="vl"></div>
              {/* <div className="follow">
                <p>3</p>
                <p>Posts</p>
              </div> */}
              <div>
                <div className="message--btn button">
                  <ChatBubbleIcon /> Message
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="profile--center--box">
        <div className="profile--left">
          <Feed />
        </div>
        <div className="profile--right">
          <ProfileInfo />
          <ProfileFriendsCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileCenter;
