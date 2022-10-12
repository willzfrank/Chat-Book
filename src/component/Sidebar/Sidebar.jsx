import './Sidebar.css';
import profile1 from '../../assets/avatar1.png';
import profile2 from '../../assets/avatar2.png';
import profile3 from '../../assets/avatar3.png';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  return (
    <div className="Sidebar--container">
      <ul className="Sidebar--container--navigation">
        <li>
          <RssFeedIcon />
          <span>Feed</span>
        </li>
        <li>
          <ChatIcon />
          <span>Chats</span>
        </li>
        <li>
          <PlayCircleIcon />
          <span>Videos</span>
        </li>
        <li>
          <GroupsIcon />
          <span>Groups</span>
        </li>
        <li>
          <BookmarkIcon />
          <span>Bookmarks</span>
        </li>
        <li>
          <QuestionMarkIcon />
          <span>Questions</span>
        </li>
        <li>
          <WorkIcon />
          <span>Jobs</span>
        </li>
        <li>
          <EventIcon />
          <span>Events</span>
        </li>
        <li>
          <SchoolIcon />
          <span>Courses</span>
        </li>
      </ul>
      <div>
        <input type="button" value="Show More" className="Sidebar__btn" />
      </div>
      <hr className="Sidebarhr" />

      <ul className="Sidebar--container--contact">
        <h2 className="following--header">Who is following you</h2>
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
    </div>
  );
};

export default Sidebar;
