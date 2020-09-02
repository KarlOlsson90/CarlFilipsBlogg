const { Router } = require("express");
const auth = require('../middlewares/auth')

const controller = require('../controllers/userController');
const router = new Router()

console.log("usersRoute körs")

router.post('/login', controller.getUserController)
router.post('/register',  controller.postUserController)
router.post('/admin', controller.createAdminController )


module.exports = router