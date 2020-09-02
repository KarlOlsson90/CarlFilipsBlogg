var Datastore = require('nedb-promises');
require('dotenv').config()

let db
switch (process.env.ENVIRONMENT) {
    case 'development':
        console.log('development');
        
        db = new Datastore({ filename: 'PostDatabase', autoload: true });
        break;

    case 'test':
            console.log('test');

        db = new Datastore({ filename: 'test_PostDatabase', autoload: true });
        db.insert([{
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"1"
        },
        {
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            owner:"patrik",
            _id:"2"
        },
        {
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            _id:"3"
        },
        {
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            owner:"philip",
            _id:"4"
        },
        {
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"5"
        }])
        // db.remove({}, {multi: true})
        break;
}


module.exports = db;
