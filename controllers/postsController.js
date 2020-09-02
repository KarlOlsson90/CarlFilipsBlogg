const model = require('../models/postsModel');

console.log('postsController körs')


async function getPostsController(req, res){

    const post = await model.getPostsModel()
    res.json(post)

}
async function getSinglePostController(req, res){

        var id = req.params.id
        result = await model.getSinglePostModel(id)
        res.json(result)
    

}

async function countController (req, res) { //Ger antalet dokument i databasen
    const countedPosts = await model.count()
    res.json(countedPosts)
}

async function ownerController(req, res) { //Ger dokumentet för ägaren av inlägget
    const id = req.body._id
    const owner = await model.isOwner(id)
    res.json(owner)
}

function postPostController(req, res) {
    
        const blogPost = {
            title: req.body.title,
            content: req.body.content,
            owner: req.body.owner
        }
    
        model.postPostModel(blogPost);
        
        res.json("Lade till " + blogPost.title)
    

}
async function deletePostController(req, res){

    try {
        let id = req.params.id;
        await model.deletePostModel(id)
        res.json("Deleted")
    } catch (error) {
        res.json({error: error.message})
    }

}
function editPostController(req, res){

    try {
        var id = req.params.id;
        let task = {
            title: req.body.title,
            content: req.body.content
        }
        const updatedToDo =  model.editPostModel(id, task)
        res.json("Todo uppdaterad: " + task.title + " " + task.content);
    } catch (error) {
        console.log({ error: error.message })
    }

}

module.exports = {
    getPostsController,
    getSinglePostController,
    postPostController,
    deletePostController,
    editPostController,
    countController,
    ownerController
}