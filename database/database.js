var Datastore = require('nedb-promises');
require('dotenv').config()

let db = {}
switch (process.env.ENVIRONMENT) {
    case 'development':
        console.log('development');
        
        db.posts = new Datastore({ filename: 'PostDatabase', autoload: true });
        db.users = new Datastore({ filename: 'UserDatabase', autoload: true });

        break;

    case 'test':
            console.log('test');

        db.posts = new Datastore({ filename: 'test_PostDatabase', autoload: true });
        db.users = new Datastore({ filename: 'test_UserDatabase', autoload: true });

        
        break;
}


module.exports = db;
