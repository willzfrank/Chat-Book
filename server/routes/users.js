const router = require("express").Router();
const UserController = require("../controllers/UserController");

// UPDATE USER

router.put("/:id", UserController.update_user);

// DELETE USER

router.delete("/:id", UserController.delete_user);

// GET USER

router.get("/:id", UserController.get_user);

// FOLLOW USER

router.put("/:id/follow", UserController.follow_user);

// UNFOLLOW USER

router.put("/:id/unfollow", UserController.unfollow_user);
module.exports = router;
