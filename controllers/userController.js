const model = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function getUserController(req, res) {
    const secret = 'hemligt'

    const passwordAttempt = req.body.password;
    const user = await model.getUserModel(req.body.username);
    const success = bcrypt.compareSync(passwordAttempt, user.password)



    console.log(success);
    if (success) {
        const token = jwt.sign(user, secret)

        res.json({ token: token })
    } else {
        res.json('Wrong password or username')
    }


}

async function postUserController(req, res) {

    console.log('hej');

    const username = req.body.username;
    const password = req.body.password;
    console.log(password);
    const hash = bcrypt.hashSync(password, 10)
    console.log(hash);

    const credentials = {
        username: username,
        password: hash,
        role: req.body.role
    }

    const user = await model.postUserModel(credentials);

    res.json({msg: 'Du lade till' + user.username, user: user})
}

function createAdminController () {

}

module.exports = {
    getUserController,
    postUserController,
    createAdminController
}
