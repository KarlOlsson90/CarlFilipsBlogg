const db = require('../database/database');

async function getUserModel(username){

    const user = await db.users.findOne({ username: username })
    return user;
    
}

function postUserModel(credentials){
        return new Promise(async (resolve, reject) => {

        try {
            const insert = await db.users.insert(credentials);
            resolve(insert)
        } catch (error) {
            reject(error)
        }
    })
    
}

function createAdminModel () {

}

function clear() {
    db.users.remove({}, {multi: true})
}



module.exports = {
    getUserModel,
    postUserModel,
    clear,
    createAdminModel
}