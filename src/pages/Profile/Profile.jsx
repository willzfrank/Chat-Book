import React from 'react';
// import Navbar from '../../component/Navbar/Navbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import ProfileCenter from '../../component/ProfileCenter/ProfileCenter';
import './Profile.css';
import ProfileMobile from '../../mobile/ProfileMobile';

const Profile = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="Home_container">
        <div className="Profile_top_right">
          <Sidebar />
        </div>
        <div className="Profile_top_center">
          <ProfileCenter />
        </div>
      </div>
      <ProfileMobile />
    </>
  );
};

export default Profile;
