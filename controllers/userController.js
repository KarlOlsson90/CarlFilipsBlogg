const model = require('../models/userModel');
const bcrypt = require('bcryptjs')

async function getUserController(req, res) {
    
    const passwordAttempt = req.body.password;
    const user = await model.getUserModel(req.body.username);
    const success = bcrypt.compareSync(passwordAttempt, user.password)
    console.log(passwordAttempt);
    console.log(user);
    
    
    
    console.log(success);
    if (success) {
        res.json('Logged in as ' + user.username)
    } else {
        res.json('Wrong password or username')
    }


}

function postUserController(req, res) {

    
    const username = req.body.username;
    const password = req.body.password;
    console.log(password);
    const hash = bcrypt.hashSync(password, 10)
    console.log(hash);

    const credentials = {
        username: req.body.username,
        password: hash,
        role: req.body.role
    }

    model.postUserModel(credentials);
    
    res.json("Lade till " + username)
}

module.exports = {
    getUserController,
    postUserController
}
