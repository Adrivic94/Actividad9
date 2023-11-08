const router = require('express').Router();

const PostsController = require("../../controllers/posts.controller");

router.get('/', PostsController.getAllPostsWithAutores);
router.get('/:autorId', PostsController.getAllPostsWithAutorId); //Recuperación de posts de un autor en concreto
router.post('/', PostsController.createPost);
router.put('/:postId', PostsController.updatePost);
router.delete('/:postId', PostsController.deletePost);

module.exports = router;
