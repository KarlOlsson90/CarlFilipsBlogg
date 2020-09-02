 const express = require('express')
const commentsRoute = require('./commentsRoute.js')
const postsRoute = require('./postsRoute.js')
const userRoute = require('./userRoute.js')

var router = express.Router()


router.use('/', userRoute);
router.use('/', postsRoute); //använd auth
router.use('/', commentsRoute); //använd auth


module.exports = router
