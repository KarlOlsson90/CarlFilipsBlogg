const userModel = require('../models/userModel');
const userController = require('../controllers/userController')

const chai = require('chai');
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
//require('chai').should();

const { expect, request, should } = chai
const app = require('../app')


// describe('users', () => {
//     beforeEach(() => {
//         userModel.clear()
//     })

//     it('should get one user', async () => {
//         await userModel.postUserModel({
//             username: "Alexandre",
//             password: "philip",
//             role: "Admin",
//             _id: "1"
//         })
//         const user = await userModel.getUserModel('Alexandre')
//         user.username.should.equal("Alexandre")
//     })

//     it('should post one user', async () => {
//         let credentials = {
//             username: "Alexandre",
//             password: "philip",
//             role: "Admin",
//             _id: "1"
//         }
//         const user = await userModel.postUserModel(credentials)
//         user.should.eql({
//             username: "Alexandre",
//             password: "philip",
//             role: "Admin",
//             _id: "1"
//         })
//     })

// })

function create () {
    const credentials = {
        username: 'ydehed',
        password: 'elin',
        role: 'Admin'
    }

    const user = request(app)
        .post('/register')
        .send(credentials)
        .end((err, res) => {
            // console.log(res);
            
        })
        
}

async function login () {
    
    const fields = {
        username: 'ydehed',
        password: 'elin',
    }
     const req =
         await request(app)
            .post('/login')
            .send(fields)
            
            const token = req.body.token

            return token
            // console.log(token);
            
}

describe('chai http test', () => {
    this.currentTest = {}

    beforeEach(async() => {
        // await userModel.clear()
        await create()

        this.currentTest.token = await login()

        console.log(this.currentTest.token);
        
    })
        // this.currentTest.userID = user._id

        // this.currentTest.token = await userController.getUserController('ydehed', 'elin')
        // console.log(this.currentTest.token);

        
        // console.log(token);

    

    it('should create a user', async () => {

        const fields = {
            username: 'philip',
            password: 'hund',
            role: 'Admin'
        }
        request(app)
            .post('/register')
            .set('Authorization', `Bearer ${this.currentTest.token}`)
            .set('Content-Type', `application/json`)
            .send(fields)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body.user).to.have.keys(['_id','username','password','role'])

            })
    })

    it('should create an admin', async () => {
        const fields = {
            username: 'elin',
            password: 'katt',
            role: 'Admin'
        }
        request(app)
            .post('/register')
            .set('Authorization', `Bearer ${this.currentTest.token}`)
            .set('Content-Type', `application/json`)
            .send(fields)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body.user).to.have.keys(['_id','username','password','role'])

            })
    })


})