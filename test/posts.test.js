const { count, isOwner } = require('../models/postsModel');
require('chai').should();

describe('posts', () => {
    it('should count existing posts', async () => {

        const number = await count()
            number.should.equal(4)
            //här kan man ej testa mer än en gång
    });

    it('should check who is the owner', async () => {
        const id = '3zDWg5uFOv9m1DaS'
        const id2 = 'ZTG59A6FtLzPKqDi'
        
        const owner = await isOwner(id)
        owner.should.equal('patrik')

        const owner2 = await isOwner(id2)
        owner2.should.equal('philip')
    })
});
