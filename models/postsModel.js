const db = require('../database/database');

console.log('postmodel')

function getPostsModel(req, res){

    console.log("aktiverade getPostsModel")
    
    db.find({}, (err, doc) => {

    });
}

async function getSinglePostModel(id){
    //FUNGERAR!
    console.log("aktiverade getSinglePostModel")
    console.log(id)
    const result = await db.findOne({ _id: id })
    console.log(result)
    return result;
    
}

function postPostModel(blogPost){
    console.log("aktiverade postPostModel")
//FUNGERAR!
        db.insert(blogPost, (err, newDoc) => {
            if(!err) {
                resolve(newDoc);
            } else {
                reject(err);
            }       
        })
    
}

function deletePostModel(){
    console.log("aktiverade deletePostModel")

    db.remove ({_id : _id}, {}, function (err, docs) {
                  
    });
}

function patchPostModel(){
    console.log("aktiverade patchPostModel")

    db.update({_id :_id}, blogPost, {}, function (err, docs) {
            
    });
}

module.exports = {
    getPostsModel,
    getSinglePostModel,
    postPostModel,
    deletePostModel,
    patchPostModel
}