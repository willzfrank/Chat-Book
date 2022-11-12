import './RightSidebar.css';
import profile1 from '../../assets/avatar1.png';
import profile2 from '../../assets/avatar2.png';
import profile3 from '../../assets/avatar3.png';
import OnlineFriends from '../OnlineFriends/OnlineFriends';

const RightSideBar = () => {
  return (
    <div className="RightSidebar--container">
      <ul className="Sidebar--container--contact">
        <h2 className="following--header">Suggestions for you</h2>
        <li>
          <div className="following--top">
            <img src={profile1} alt="" />
            <span>Jane Doe</span>
          </div>
          <div>
            <button className="button fc-button">Follow</button>
          </div>
        </li>
        <li>
          <div className="following--top">
            <img src={profile2} alt="" />
            <span>Jane Doe</span>
          </div>
          <div>
            <button className="button fc-button">Follow</button>
          </div>
        </li>
        <li>
          <div className="following--top">
            <img src={profile3} alt="" />
            <span>Jane Doe</span>
          </div>
          <div>
            <button className="button fc-button">Follow</button>
          </div>
        </li>
      </ul>
      <OnlineFriends />
    </div>
  );
};

export default RightSideBar;
