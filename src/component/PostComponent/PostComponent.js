import { useState } from "react";
import photo from "../../assets/avatar1.png";
import like from "../../assets/like.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import heart from "../../assets/heart.png";
import { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { style } from "@mui/system";
import MessageIcon from "@mui/icons-material/Message";
import Comments from "../Comments/Comments";
import axios from "axios";

const PostComponent = ({ posts }) => {
  const [likeIncrease, setLikeIncrease] = useState(posts.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [style, setStyle] = useState("white");
  const [openComment, setOpenComment] = useState(false);
  const [user, setUser] = useState({});

  const likeIncrement = (e) => {
    if (isLiked) {
      setLikeIncrease(likeIncrease + 1);
      setIsLiked(!isLiked);
      setStyle("red");
    } else {
      setLikeIncrease(likeIncrease - 1);
      setIsLiked(!isLiked);
      setStyle("white");
    }
  };

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`/api/posts/timeline/${posts.userId}`);
        console.log(response.data);
        const userRes = response.data;
        setUser(userRes);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [posts.userId]);

  return (
    <div className="post--container">
      {user.map((users) => (
        <div key={user.id}>
          <div className="post--profile--container">
            <div className="post--date--container">
              <img
                src={users.profilePicture}
                alt=""
                className="feed--profile"
              />
              <div className="name--container">
                <span className="profile--name">{users.Username}</span>
                <span className="profile--date">{posts.date}</span>
              </div>
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
          <div className="postCenter">
            <span className="post--feed--text">{posts?.desc}</span>
            <div className="post--img--container">
              <img src={posts.img} alt="" className="postImg" />
            </div>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <FavoriteIcon
                className={`feed--profile ${style}`}
                onClick={likeIncrement}
              />
              <span className="postLikeCounter">
                {likeIncrease > 0 ? likeIncrease : " "}{" "}
                {likeIncrease > 1 ? "likes" : " "}{" "}
              </span>
            </div>
            <div
              className="postBottomRight"
              onClick={() => setOpenComment(!openComment)}
            >
              <MessageIcon />
              <span className="postCommentText">249 comments</span>
            </div>
          </div>
        </div>
      ))}
      {openComment && <Comments />}
    </div>
  );
};

export default PostComponent;
