 const express = require('express')
const commentsRoute = require('./commentsRoute.js')
const postsRoute = require('./postsRoute.js')
const userRoute = require('./userRoute.js')
const jwt = require('jsonwebtoken');

var router = express.Router()
const secret = "hemlig"


function auth(req, res, next) {
  if (!req.headers.authorization) return res.sendStatus('403');

  const token = req.headers.authorization.replace("Bearer", "");

  try {
    const payload = jwt.verify(token, secret)
    req.user = payload;
    next();
  } catch (error) {
    res.sendStatus(403);
  }

}

router.use('/', userRoute);
router.use('/', postsRoute); //använd auth
router.use('/', commentsRoute); //använd auth


module.exports = router
