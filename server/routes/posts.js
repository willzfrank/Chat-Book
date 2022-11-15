const router = require("express").Router();
const PostController = require("../controllers/PostController.js");

// UPDATE or Edit A POST

// router.put('./:id', async (req, res) => {
//   try {
//     const post = Post.findById(req.params.id);

//     if (post.userId === req.body.userId) {
//       await post.updateOne({ $set: req.body });
//       res.status(200).json('post updated ');
//     } else {
//       res.status(403).json('you can update only your post');
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// CREATE A POST

router.post("/", PostController.CreatePost);

// DELETE A POST

router.delete("/:id", PostController.Delete);

// LIKE  and DISLIKE A POST

router.put("/:id/like", PostController.like_dislike);

// GET A POST

router.get("/:id", PostController.getPost);

// GET TIMELINE POSTS

router.get("/timeline/:userId", PostController.timeline_post);
module.exports = router;
