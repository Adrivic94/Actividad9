const router = require('express').Router();

const PostsController = require("../../controllers/posts.controller");

router.get("/", PostsController.getAllPostsWithAutores);

module.exports = router;
