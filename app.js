const express = require('express');
const routes = require('./routes/index');
const app = express();


//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Frontend
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

//Routes
app.use('/', routes)

//Server
const port = 5000
app.listen(port);
console.log("Server running on port " + port + ";")