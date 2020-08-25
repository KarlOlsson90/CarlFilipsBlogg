const model = require('../models/postsModel');

console.log('postsController körs')


function getPostsController(req, res){

    // model.
    console.log("getPostsController körs")
    model.getPostsModel()
    res.send("getPostsController körs")

}
async function getSinglePostController(req, res){

        var id = req.params.id
        result = await model.getSinglePostModel(id)
        res.json(result)
    

}
function postPostController(req, res) {
    
        const blogPost = {
            title: req.body.title,
            content: req.body.content
        }
    
        model.postPostModel(blogPost);
        
        res.json("Lade till " + blogPost)
    

}
function deletePostController(){

    // model.

}
function patchPostController(){

    // model.

}

module.exports = {
    getPostsController,
    getSinglePostController,
    postPostController,
    deletePostController,
    patchPostController
}