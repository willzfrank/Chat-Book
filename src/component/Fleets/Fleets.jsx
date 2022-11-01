import React from 'react';
import './FleetsStyles.css';
import profile3 from '../../assets/avatar3.png';

const Fleets = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedWrap">
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">Winna Jane</p>
          </div>
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">Bruce Wayne</p>
          </div>
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">Stark Rema</p>
          </div>
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">kenneth George</p>
          </div>
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">kenneth George</p>
          </div>
          <div className="feedImg">
            <div className="imgfeed">
              <img src={profile3} alt="" />
            </div>
            <p className="name">kenneth George</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleets;
