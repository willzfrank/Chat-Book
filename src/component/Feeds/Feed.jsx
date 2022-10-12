import './Feed.css';
import React, { useState, useRef } from 'react';
import photo from '../../assets/avatar1.png';
import Post from '../Post/Post';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';
import CollectionsIcon from '@mui/icons-material/Collections';
import CloseIcon from '@mui/icons-material/Close';

const Feed = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <>
      <div className="feed--container">
        <div className="feed--input--container">
          <img src={photo} alt="" className="feed--profile" />
          <input type="text" placeholder="What's on your mind?" />
        </div>
        <hr className="feedhr" />
        <div className="feed--list--container">
          <ul>
            <li
              style={{ color: 'green' }}
              onClick={() => imageRef.current.click()}
            >
              <CollectionsIcon />
              <span>Photo or Video</span>
            </li>
            <li style={{ color: 'purple' }}>
              <LabelIcon />
              <span>Tag</span>
            </li>
            <li style={{ color: 'brown' }}>
              <LocationOnIcon />
              <span>Location</span>
            </li>
            <li>
              <EmojiEmotionsIcon />
              <span>Feelings</span>
            </li>
            <li>
              <input type="button" value="Share" className="feed-btn button" />
            </li>
            <div style={{ display: 'none' }}>
              <input
                type="file"
                name="myImage"
                onChange={imageChange}
                ref={imageRef}
              />
            </div>
          </ul>
        </div>
      </div>
      {image && (
        <div className="preview--image">
          <CloseIcon onClick={() => setImage(null)} />
          <img src={image.image} alt="" className="image" />
        </div>
      )}
      <Post />
    </>
  );
};

export default Feed;
