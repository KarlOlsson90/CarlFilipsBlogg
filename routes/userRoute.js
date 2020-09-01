const { Router } = require("express");

const controller = require('../controllers/userController');
const router = new Router()

console.log("usersRoute körs")

router.get('/login', controller.getUserController)
router.post('/register', controller.postUserController)


module.exports = router