import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import ProfileCenter from "../../component/ProfileCenter/ProfileCenter";
import "./Profile.css";
import ProfileMobile from "../../mobile/ProfileMobile";
import NavbarChat from "../../component/NavbarChat/NavbarChat";
import BasicSpeedDial from "../../component/Speeddial/Speeddial";

const Profile = () => {
  return (
    <>
      <NavbarChat />
      <div className="Home_container">
        <div className="Profile_top_right">
          <Sidebar />
        </div>
        <div className="Profile_top_center">
          <ProfileCenter />
          <div className="speedial">
            <BasicSpeedDial />
          </div>
        </div>
      </div>

      {/* <ProfileMobile /> */}
    </>
  );
};

export default Profile;
