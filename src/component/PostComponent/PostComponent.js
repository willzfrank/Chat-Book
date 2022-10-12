import { useState } from 'react';
import photo from '../../assets/avatar1.png';
import like from '../../assets/like.png';
import heart from '../../assets/heart.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PostComponent = () => {
  const [likeIncrease, setLikeIncrease] = useState(10);
  const [isLiked, setIsLiked] = useState(false);

  const likeIncrement = () => {
    if (isLiked) {
      setLikeIncrease(likeIncrease + 1);
      setIsLiked(!isLiked);
    } else {
      setLikeIncrease(likeIncrease - 1);
      setIsLiked(!isLiked);
    }
  };
  return (
    <div className="post--container">
      <div className="post--profile--container">
        <div className="post--date--container">
          <img src={photo} alt="" className="feed--profile" />
          <span className="profile--name">Jane Doe</span>
          <span className="profile--date">4 hours ago</span>
        </div>
        <div>
          <MoreVertIcon />
        </div>
      </div>
      <div className="postCenter">
        <span className="post--feed--text">Hey its my first post</span>
        <div className="post--img--container">
          <img src={photo} alt="" className="postImg" />
        </div>
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            src={like}
            alt=""
            className="feed--profile"
            onClick={likeIncrement}
          />
          <img
            src={heart}
            alt=""
            className="feed--profile"
            onClick={likeIncrement}
          />
          <span className="postLikeCounter">{likeIncrease} people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">249 comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
