const db = require('../config/db');

exports.createPost = (userId, imageUrl, callback) => {
  const query = "INSERT INTO posts (user_id, image_url) VALUES (?, ?)";
  db.query(query, [userId, imageUrl], callback);
};

exports.getAllPosts = (callback) => {
  const query = "SELECT * FROM posts";
  db.query(query, callback);
};

exports.getPostById = (postId, callback) => {
  const query = "SELECT * FROM posts WHERE id = ?";
  db.query(query, [postId], callback);
}