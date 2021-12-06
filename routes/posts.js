const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get list of post
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

// get specific post
router.get("/:postId", async (req, res) => {
	try {
		const postId = req.params.postId;
		const post = await Post.findById(postId);
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

// Add post
router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	const savedPost = await post.save();
	try {
		res.json(savedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete post
router.delete("/:postId", async (req, res) => {
	const postId = req.params.postId;
	try {
		const removedPost = await Post.remove({ _id: postId });
		res.json(removedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

// Update post  
router.patch("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const updatedPost = await Post.updateOne(
    { _id: postId },
    { $set: { title: req.body.title, description: req.body.description } }
  );
  try {
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});



module.exports = router;
