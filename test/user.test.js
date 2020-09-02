const userModel = require('../models/userModel');
require('chai').should();

describe('users', () => {
    beforeEach(() => {
        userModel.clear()
    })

    it('should get one user', async () => {
        await userModel.postUserModel({
            username:"Alexandre",
            password:"philip",
            role:"Admin",
            _id:"1"
        })
        const user = await userModel.getUserModel('Alexandre')
        user.username.should.equal("Alexandre")
    })

    it('should post one user', async () => {
        let credentials = {
            username:"Alexandre",
            password:"philip",
            role:"Admin",
            _id:"1"
        }
        const user = await userModel.postUserModel(credentials)        
        user.should.eql({
            username:"Alexandre",
            password:"philip",
            role:"Admin",
            _id:"1"
        })
    })
})