import './Home.css';
import Sidebar from '../../component/Sidebar/Sidebar';
import Feed from '../../component/Feeds/Feed';
import Fleets from '../../component/Fleets/Fleets';
import Navbar from '../../component/NavbarChat/NavbarChat.js';
import Post from '../../component/Post/Post';
import RightSideBar from '../../component/RightSidebar/RightSideBar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="Home_container">
        <div className="Home_top_right">
          <Sidebar />
        </div>
        <div className="Home_top_center">
          <Fleets />
          <Feed />
          <Post />
        </div>
        <div className="Home_top_left">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
