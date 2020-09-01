const db = require('../database/userDatabase');

async function getUserModel(username){
    console.log('getUserModel');

    const user = await db.findOne({ username: username })
    return user;
    
}

function postUserModel(credentials){
    console.log("postUserModel")
        
        db.insert(credentials, (err, newDoc) => {
            if(!err) {
                resolve(newDoc);
            } else {
                reject(err);
            }       
        })
    
}



module.exports = {
    getUserModel,
    postUserModel
}