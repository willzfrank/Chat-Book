import React from 'react';
import './NavbarChatStyles.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import profile1 from '../../assets/avatar1.png';
import profile2 from '../../assets/avatar2.png';
import profile3 from '../../assets/avatar3.png';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const NavbarChat = () => {
  return (
    <div className="navbar">
    <div className="left">
      <Link to="/" style={{ textDecoration: "none" }} className="margin-20">
        <span>Hideas</span>
      </Link>
      <HomeOutlinedIcon className="margin-20"/>
      {/* {darkMode ? (
        <WbSunnyOutlinedIcon onClick={toggle} />
      ) : (
        <DarkModeOutlinedIcon onClick={toggle} />
      )} */}
      <GridViewOutlinedIcon className="margin-20"/>
      <div className="search">
        <SearchOutlinedIcon className="margin-10"/>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    <div className="right">
      <PersonOutlinedIcon className="margin-20"/>
      <EmailOutlinedIcon className="margin-20"/>
      <NotificationsOutlinedIcon className="margin-20"/>
      <div className="user margin-20">
        {/* <img
          src={"/upload/" + currentUser.profilePic}
          alt=""
        /> */}
        {/* <span>{currentUser.name}</span> */}
        <img src={profile3} alt=''/>
      </div>
    </div>
  </div>
  );
};

export default NavbarChat;
