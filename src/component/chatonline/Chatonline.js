import React from 'react';
import { ChatOnlineContainer, ChatOnlineContent } from './ChatonlineStyle.js';
import image1 from '../../assets/avatar4.png';

const Chatonline = () => {
  return (
    <ChatOnlineContainer>
      {/* <input type="text" name="" id="" placeholder="search for friends" /> */}
      <ChatOnlineContent>
        <h2>Chats</h2>
        <div className="chat--content">
          <img src={image1} alt="" />
          <div className="chat--content--box">
            <p>John Doe</p>
            <span>Offline</span>
          </div>
        </div>
        <div className="chat--content">
          <img src={image1} alt="" />
          <div className="chat--content--box">
            <p>John Doe</p>
            <span>Offline</span>
          </div>
        </div>
        <div className="chat--content">
          <img src={image1} alt="" />
          <div className="chat--content--box">
            <p>John Doe</p>
            <span>Offline</span>
          </div>
        </div>
        <div className="chat--content">
          <img src={image1} alt="" />
          <div className="chat--content--box">
            <p>John Doe</p>
            <span>Offline</span>
          </div>
        </div>
      </ChatOnlineContent>
    </ChatOnlineContainer>
  );
};

export default Chatonline;
