const User = require('../models/Users');
const bcrypt = require('bcrypt');

// UPDATE USER

exports.update_user = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('Account updated');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json('Access Denied! You can only update your account');
  }
};

// DELETE USER

exports.delete_user = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Account deleted successfully');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json('Access Denied! You can only delete your account');
  }
};

// GET USER

exports.get_user = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    !user && res.status(404).json('No User Exists');
    // wanna remove password and updatedAt from json format at database by using the other variable to display without password and updatedAt
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// FOLLOW USER
exports.follow_user = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({
          $push: { followings: req.body.userId },
        });

        res.status(200).json('user followed');
      } else {
        res.status(403).json('User alredy followed');
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You cant follow yourself');
  }
};

//UNFOLLOW USER

exports.unfollow_user = async (req, res) => {
  // verify userid
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({
          $pull: { followings: req.params.id },
        });
        res.status(200).json('User unfollowed');
      } else {
        res.status(403).json('you not following this user');
      }
      res.status(200).json('Account deleted successfully');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('Action Denied! you cant unfollow yourself');
  }
};
