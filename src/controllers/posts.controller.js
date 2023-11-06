const PostModel = require("../models/post.model");

// GET /api/posts
const getAllPostsWithAutores = async (req, res) => {
  try {
    const [result] = await PostModel.selectAllPostsWithAutores();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { getAllPostsWithAutores };
