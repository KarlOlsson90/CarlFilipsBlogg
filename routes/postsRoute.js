const { Router } = require("express");

const controller = require('../controllers/postsController');
const router = new Router()


router.get('/posts', controller.getPostsController)
//router.get('/posts/:id', controller.getSinglePostController)
router.post('/posts', controller.postPostController)
router.delete('/posts/:id', controller.deletePostController)
router.get('/countposts', controller.countController)
router.get('/owner', controller.ownerController)

router.put('/posts/:id', controller.editPostController)

module.exports = router