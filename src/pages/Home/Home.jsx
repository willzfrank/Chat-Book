import './Home.css';
import Sidebar from '../../component/Sidebar/Sidebar';
import Feed from '../../component/Feeds/Feed';
import Post from '../../component/Post/Post';
import RightSideBar from '../../component/RightSidebar/RightSideBar';
const Home = () => {
  return (
    <div>
      <div className="Home_container">
        <div className="Home_top_right">
          <Sidebar />
        </div>
        <div className="Home_top_center">
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
