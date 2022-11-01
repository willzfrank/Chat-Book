import React from 'react';
import './NavbarChatStyles.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import profile1 from '../../assets/avatar1.png';
import profile2 from '../../assets/avatar2.png';
import profile3 from '../../assets/avatar3.png';

const NavbarChat = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">RokuSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend,posts or any other related"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/IMG_1340.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default NavbarChat;
