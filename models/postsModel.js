const db = require('../database/database');

console.log('postmodel')

function getPostsModel(req, res){

    console.log("aktiverade getPostsModel")
    return new Promise(async(resolve, reject) => {
        try {
            const doc = await db.find({});
            resolve(doc);
        } catch(error) {
            reject(error)
        }
    })
    // db.find({}, (err, doc) => {
    //     if(!err) {
            
    //     } else {

    //     }

    // });
}

function count() { //Ger antalet dokument i databasen
    return new Promise(async(resolve, reject) => {

        try {
            const countPost = await db.count({})
            console.log(countPost)
            resolve(countPost)
        } catch (error) {
            console.log(err)
                reject(err)
        }
    })
}

function isOwner(id) { //Ger dokumentet för ägaren av inlägget
    return new Promise(async(resolve, reject) => {

        try {
            const post = await db.findOne({_id : id})
            // console.log(post)
            resolve(post.owner)
        } catch (error) {
            console.log(error)
                reject(error)
        }
    })
}

async function getSinglePostModel(id){
    
    //FUNGERAR!
    const result = await db.findOne({ _id: id })
    return result;
    
}

function postPostModel(blogPost){
    console.log("aktiverade postPostModel")
        return new Promise(async(resolve, reject) => {
            try {
                const post = await db.insert(blogPost);
                resolve(post);
            } catch (error) {
                reject(error);
            }
        });
        // db.insert(blogPost, (err, newDoc) => {
        //     if(!err) {
        //         resolve(newDoc);
        //     } else {
        //         reject(err);
        //     }       
        // })
    
}

function deletePostModel(id){
    console.log("aktiverade deletePostModel")
    return new Promise((resolve, reject) => {
        db.remove ({_id : id}, {}, function (err, docs) {
            if (err) {
                reject(err)
            } else {
                resolve(docs)
            }            
        });
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
    patchPostModel,
    count,
    isOwner
}