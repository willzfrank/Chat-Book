import PostComponent from '../PostComponent/PostComponent';
// import { useEffect, useState } from 'react';
import './Post.css';
// import { Axios } from 'axios';

const Post = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await Axios.get(`/api/posts/timeline/${userId}`);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, []);

  return <PostComponent />;
};

export default Post;
