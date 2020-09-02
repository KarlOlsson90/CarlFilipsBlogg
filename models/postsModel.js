const db = require('../database/database');


function getPostsModel(req, res) {

    return new Promise(async (resolve, reject) => {
        try {
            const doc = await db.posts.find({});
            // console.log(doc)
            resolve(doc);
        } catch (error) {
            reject(error)
        }
    })
    // db.posts.find({}, (err, doc) => {
    //     if(!err) {

    //     } else {

    //     }

    // });
}

function count() { //Ger antalet dokument i databasen
    return new Promise(async (resolve, reject) => {

        try {
            const countPost = await db.posts.count({})
            // console.log(countPost)
            resolve(countPost)
        } catch (error) {
            console.log(err)
            reject(err)
        }
    })
}

function isOwner(id) { //Ger dokumentet för ägaren av inlägget
    return new Promise(async (resolve, reject) => {

        try {
            const post = await db.posts.findOne({ _id: id })
            // console.log(post)
            resolve(post.owner)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

async function getSinglePostModel(id) {

    //FUNGERAR!
    const result = await db.posts.findOne({ _id: id })
    return result;

}

function postPostModel(blogPost) {
    return new Promise(async (resolve, reject) => {
        try {
            const post = await db.posts.insert(blogPost);
            resolve(post);
        } catch (error) {
            reject(error);
        }
    });
    // db.posts.insert(blogPost, (err, newDoc) => {
    //     if(!err) {
    //         resolve(newDoc);
    //     } else {
    //         reject(err);
    //     }       
    // })

}

function clear() {
    db.posts.remove({}, {multi: true})
}

function deletePostModel(id) {
    return new Promise(async(resolve, reject) => {
        try {
            const deletedPost = await db.posts.remove({ _id: id })
            // console.log(deletedPost)
            resolve(deletedPost)

        } catch (error) {
            reject(error)
        }
        // db.posts.remove({ _id: id }, {}, function (err, docs) {
        //     if (err) {
        //         reject(err)
        //     } else {
        //         resolve(docs)
        //     }
        // });
    });
}

function editPostModel(id, task) {
    return new Promise(async (resolve, reject) => {

        try {
            const post = await db.posts.update({ _id: id }, { $set: task });
            // console.log(post + " post");

            resolve(post);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getPostsModel,
    getSinglePostModel,
    postPostModel,
    deletePostModel,
    editPostModel,
    count,
    isOwner,
    clear
}