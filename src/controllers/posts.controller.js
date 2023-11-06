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

const createPost = async (req, res) => {
    try {
        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId); // Recupero el post para poder verlo cuando lo creo
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};


module.exports = { getAllPostsWithAutores, createPost };
