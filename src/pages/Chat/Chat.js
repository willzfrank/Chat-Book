import React from 'react';
import Chatonline from '../../component/chatonline/Chatonline';
import {
  ChatContainer,
  ChatLeftContainer,
  ChatRightContainer,
  ChatCenterContainer,
} from './ChatStyles';
import image1 from '../../assets/avatar1.png';

const Chat = () => {
  return (
    <ChatContainer>
      <ChatLeftContainer>
        <Chatonline />
      </ChatLeftContainer>
      <ChatCenterContainer>
        <div className="profile--box">
          <div className="profile--box--content">
            <img src={image1} alt="" />
            <span>Willz Frank</span>
          </div>
          <hr className="profile--line" />
        </div>

        <div className="chatcontent">
          <div className="chatcontent--body">
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
            <div className="chatbody--box">
              <p>Are you coming </p>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
        <div className="text--box">
          <div>icon</div>
          <textarea placeholder="write something"></textarea>
          <div>icon</div>
          <input type="button" value="send" className="button" />
        </div>
      </ChatCenterContainer>
      {/* <ChatRightContainer>
        <div>
          <img src="" alt="" />
          <p>John Doe</p>
        </div>
      </ChatRightContainer> */}
    </ChatContainer>
  );
};

export default Chat;
