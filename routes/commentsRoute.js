const Router = require('express');
const controller = require('../controllers/commentsController');

const router = new Router()

console.log("commentsRoute körs")

router.get('/comments', controller.getCommentsController)
//router.get('/comments/:id', controller.getSingleCommentController)
router.put('/post/:id/comment', controller.postCommentController)
//router.delete('/comments/:id', controller.deleteCommentController)
//router.patch('/comments/:id', controller.patchCommentController)

module.exports = router;