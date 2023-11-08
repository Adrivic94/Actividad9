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

// POST /api/posts
const createPost = async (req, res) => {
    try {
        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId); // Recupero el post para poder verlo cuando lo creo
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

// UPDATE /api/posts/POSTID
const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const [result] = await PostModel.updatePostById(postId, req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

//DELETE /api/posts/POSTID
const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const [result] = await PostModel.deletePostById(postId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};


module.exports = { getAllPostsWithAutores, createPost, updatePost, deletePost };
