const model = require('../models/commentsModel');


function getCommentsController() {
    console.log("testing")
    model.getCommentsModel()
}

function getSingleCommentController() {

}

async function postCommentController(req, res) {
  const postID = req.params.id;
  // const content = {
  //   user: req.body.user,
  //   message: req.body.message
  // }
  const {username, message} = req.body;
  console.log(username + ' ' + message)
  try {
    const comment = await model.postCommentModel(
      username,
      message,
      postID
    );
    console.log(comment)
    res.json(comment).status(200);
  } catch (error) {
    res.json({ error: error.message }).status(500);
  }
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


///////

// const commentModel = require("../models/comments");

exports.insertComment = async (req, res) => {
  const postID = req.params.id;
  const { user, message, timestamp } = req.body;
  try {
    const comment = await commentModel.insertComment(
      user,
      message,
      timestamp,
      postID
    );
    res.json(comment).status(200);
  } catch (error) {
    res.json({ error: error.message }).status(500);
  }
};

exports.updateComment = async (req, res) => {
  const commentId = req.params.id;
  const { user, message, timestamp } = req.body;
  try {
    const comment = await commentModel.updateComment(
      commentId,
      user,
      message,
      timestamp
    );
    res.json({ message: "Number of updated comments: " + comment }).status(200);
  } catch (error) {
    res.json({ error: error.message }).status(500);
  }
};

exports.deleteComment = async (req, res) => {
  const commentId = req.params.id;
  try {
    const post = await commentModel.deleteComment(commentId);
    res.json({ message: "Number of deleted comments: " + post });
  } catch (error) {
    res.json({ error: error.message });
  }
};
