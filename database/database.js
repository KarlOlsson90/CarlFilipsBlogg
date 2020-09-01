var Datastore = require('nedb-promises'), 

db = new Datastore({ filename: 'PostDatabase', autoload: true });

module.exports = db;
