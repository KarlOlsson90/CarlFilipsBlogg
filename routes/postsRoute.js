const { Router } = require("express");

const controller = require('../controllers/postsController');
const router = new Router()

console.log("postsRoute körs")

//router.get('/posts', controller.getPostsController)
router.get('/posts/:id', controller.getSinglePostController)
router.post('/posts', controller.postPostController)
//router.delete('/posts/:id', controller.deletePostController)
//router.patch('/posts/:id', controller.patchPostController)

module.exports = router