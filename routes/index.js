console.log("routeIndex körs")
 
const express = require('express')
const commentsRoute = require('./commentsRoute.js')
const postsRoute = require('./postsRoute.js')
var router = express.Router()
router.use('/', postsRoute);
router.use('/', commentsRoute);

module.exports = router
