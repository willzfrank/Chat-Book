const Post = require('../models/Posts');
const Users = require('../models/Users');

// CREATE A POST

exports.CreatePost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE A POST

exports.Delete = async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('Post deleted successfully');
    } else {
      res.status(403).json('Access Denied! you can only delete your post');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// LIKE  and DISLIKE A POST

exports.like_dislike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('liked post');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('disliked post');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET A POST

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET TIMELINE POSTS

exports.timeline_post = async (req, res) => {
  try {
    const currentUser = await Users.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    // to return latest post first

    res.status(200).json(
      userPosts.concat(...friendPosts).sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
