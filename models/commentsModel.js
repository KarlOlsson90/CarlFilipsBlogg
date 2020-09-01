var db = require('../database/database')
function getCommentsModel() {
    console.log("aktiverade getCommentsModel")
    /*
        db.find({}, (err,docs) => {
    
        });*/
}

function getSingleCommentModel() {
    console.log("aktiverade getSingelCommentModel")

    db.find({}, (err, docs) => {

    });
}

function postCommentModel(postID, username, message) {
    return new Promise( (resolve, reject) => {
        try {
            const doc =  db.update(
                {
                    _id: postID
                }, {
                    $set: {
                        "comment.user": username,
                        "comment.message": message
                    }
                }, {})
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })

    // return new Promise((resolve, reject) => {
    //     db.update({_id: postID},{ $set: content }, {returnUpdatedDocs: true }, (err, num, updateDocs) => {
    //         if (err) {
    //             console.log(err)
    //             reject(err)
    //         } else {

    //             console.log(updateDocs)
                
    //             resolve(updateDocs)
    //         }
    //     });
    // });

}

function deleteCommentModel() {
    console.log("aktiverade deleteCommentModel")

    db.remove({ _id: _id }, {}, function (err, docs) {

    });
}

function patchCommentModel() {
    console.log("aktiverade patchCommentModel")

    db.update({ _id: _id }, blogPost, {}, function (err, docs) {

    });
}

module.exports = {
    getCommentsModel,
    getSingleCommentModel,
    postCommentModel,
    deleteCommentModel,
    patchCommentModel
}