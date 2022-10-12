import './BirthdayCard.css';
import gift from '../../assets/gift.png';
import ad from '../../assets/avatar4.png';

const ThoughtsCard = () => {
  return (
    <div className="rightside--container">
      <div className="rightside--bd--box">
        <img src={gift} alt="birthday" className="gift--img" />
        <p className="birthdayText">
          <strong>Willz Frank</strong> and <strong>3 other friends</strong> have
          a birthday today.
        </p>
      </div>
      <div className="rightside--ad--box">
        <img src={ad} alt="" className="add-img" />
      </div>
    </div>
  );
};

export default ThoughtsCard;
