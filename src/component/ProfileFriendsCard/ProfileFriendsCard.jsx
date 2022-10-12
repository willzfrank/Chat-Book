import React from 'react';
import image1 from '../../assets/avatar4.png';
import './ProfileFriendsCard.css';

const ProfileFriendsCard = () => {
  return (
    <div className="profilecard--container">
      <h2>User Friends</h2>
      <div className="card--list--box">
        <div className="card--list--container">
          <img src={image1} alt="" className="card--list-image" />
          <p>Cynthia Morgan</p>
        </div>
        <div className="card--list--container">
          <img src={image1} alt="" className="card--list-image" />
          <p>Cynthia Morgan</p>
        </div>
        <div className="card--list--container">
          <img src={image1} alt="" className="card--list-image" />
          <p>Cynthia Morgan</p>
        </div>
        <div className="card--list--container">
          <img src={image1} alt="" className="card--list-image" />
          <p>Cynthia Morgan</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileFriendsCard;
