import { useState } from 'react';
import photo from '../../assets/avatar1.png';
import like from '../../assets/like.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import heart from '../../assets/heart.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { style } from '@mui/system';
import MessageIcon from '@mui/icons-material/Message';
import Comments from '../Comments/Comments';


const PostComponent = () => {
  const [likeIncrease, setLikeIncrease] = useState(10);
  const [isLiked, setIsLiked] = useState(false);
  const [style, setStyle] = useState('white')
  const [openComment, setOpenComment] = useState(false)

  const likeIncrement = (e) => {
    if (isLiked) {
      setLikeIncrease(likeIncrease + 1);
      setIsLiked(!isLiked);
      setStyle('red')
    } else {
      setLikeIncrease(likeIncrease - 1);
      setIsLiked(!isLiked);
      setStyle('white')
    }
  };
  return (
    <div className="post--container">
      <div className="post--profile--container">
        <div className="post--date--container">
          <img src={photo} alt="" className= "feed--profile"  />
          <div className='name--container'>
            <span className="profile--name">Jane Doe</span>
            <span className="profile--date">4 hours ago</span>
          </div>
          
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
          <FavoriteIcon className={`feed--profile ${style}`}
            onClick={likeIncrement}/>
          <span className="postLikeCounter">{likeIncrease > 0 ? likeIncrease : " " } {likeIncrease > 1 ? "likes" : " " } </span>
        </div>
        <div className="postBottomRight" onClick={()=>setOpenComment(!openComment)}>
            <MessageIcon/>
          <span className="postCommentText">249 comments</span>
        </div>
      </div>
      {openComment && <Comments/>}
    </div>
  );
};

export default PostComponent;
