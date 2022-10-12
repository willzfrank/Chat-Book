import './RightSidebar.css';
import BirthdayCard from '../../component/BirthdayCard/BirthdayCard';
import OnlineFriends from '../OnlineFriends/OnlineFriends';

const RightSideBar = () => {
  return (
    <div className="RightSidebar--container">
      <BirthdayCard />
      <OnlineFriends />
    </div>
  );
};

export default RightSideBar;
