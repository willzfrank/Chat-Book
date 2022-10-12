import './OnlineFriends.css';
import image1 from '../../assets/avatar2.png';

const OnlineFriends = () => {
  return (
    <>
      <h3 className="Friends--text">Online Friends</h3>
      <div className="onlinefriends--container">
        <span></span>
        <img src={image1} alt="" />
        <p className="onlinefriends--name">Willz Frank</p>
      </div>
    </>
  );
};

export default OnlineFriends;
