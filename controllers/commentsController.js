const model = require('../models/commentsModel');

console.log('commentsController läses')

function getCommentsController() {
    console.log("testing")
    model.getCommentsModel()
}

function getSingleCommentController() {

}

function postCommentController() {

}

function deleteCommentController() {

}

function patchCommentController() {

}

module.exports = {
    getCommentsController,
    getSingleCommentController,
    postCommentController,
    deleteCommentController,
    patchCommentController
}