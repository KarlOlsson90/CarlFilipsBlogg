var Datastore = require('nedb-promises'), 

Usersdb = new Datastore({ filename: 'userDatabase', autoload: true });

module.exports = Usersdb;
