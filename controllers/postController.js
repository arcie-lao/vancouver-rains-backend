const Post = require("../models/postModel");

exports.createPost = (req, res) => {
  const { userId, imageUrl } = req.body; // userId must be passed from the client
  Post.createPost(userId, imageUrl, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Post created successfully!", postId: results.insertId });
  });
};

exports.getAllPosts = (req, res) => {
  Post.getAllPosts((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getPostById = (req, res) => {
  const postId = req.params.id;
  Post.getPostById(postId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(results[0]);
  });
}
