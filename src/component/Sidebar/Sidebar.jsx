import './Sidebar.css';
import { Link } from 'react-router-dom';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Sidebar = () => {
  return (
    <div className="Sidebar--container">
      <ul className="Sidebar--container--navigation">
        <li>
          <Link to="/profile/1234"className='link--container'>
            <AccountCircleIcon />
            <span>Willz Page</span>
          </Link>    
        </li>
        <li >
          <Link to="/home"className='link--container'>
            <RssFeedIcon />
              <span>Feed</span>
          </Link>
        </li>
        <li>
          <Link to="/chat"className='link--container'><ChatIcon />
          <span>Chats</span></Link>
        </li>
        <li>
          <GroupsIcon />
          <span>Groups</span>
        </li>
        <li>
          <PersonAddAltIcon />
          <span>Add Friends</span>
        </li>
        <li>
          <PeopleIcon/>
          <span>Friends</span>
        </li>
        <li>
          <QuestionMarkIcon />
          <span>Questions</span>
        </li>
        <li>
          <SettingsIcon />
          <span>Settings</span>
        </li>
        <li>
          <PowerSettingsNewIcon />
          <span>Switch Theme</span>
        </li>
      </ul>
      <div>
        <input type="button" value="Show More" className="Sidebar__btn" />
      </div>
      <hr className="Sidebarhr" />
    </div>
  );
};

export default Sidebar;
