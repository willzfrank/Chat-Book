import PostComponent from "../PostComponent/PostComponent";
import { useEffect, useState } from "react";
import "./Post.css";
import { axios } from "axios";

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      try {
        const response = await axios.get("/api/posts/timeline/userid");
        console.log(response.data);
        const postRes = response.data;
        setPost(postRes);
      } catch (error) {
        console.error(error);
      }
    }
    getPost();
  }, []);

  return (
    <>
      {post.map((posts) => (
        <PostComponent key={posts._id} post={posts} />
      ))}
    </>
  );
};

export default Post;
