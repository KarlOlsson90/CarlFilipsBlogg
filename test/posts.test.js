const postModel = require('../models/postsModel');
require('chai').should();

describe('posts', () => {
    beforeEach(() => {
        postModel.clear()
    })
    it('should count existing posts', async () => {

        await postModel.postPostModel({
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"1"
        })
        await postModel.postPostModel({
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            owner:"patrik",
            _id:"2"
        })
        await postModel.postPostModel({
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            _id:"3"
        })
        const count = await postModel.count()
        count.should.equal(3)
        //här kan man ej testa mer än en gång
    });

    it('should check who is the owner', async () => {

        await postModel.postPostModel({
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"1"
        })
        await postModel.postPostModel({
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            owner:"patrik",
            _id:"2"
        })

        const id = '2'
        const id2 = '1'

        const owner = await postModel.isOwner(id)
        owner.should.equal('patrik')

        const owner2 = await postModel.isOwner(id2)
        owner2.should.equal('philip')
    })

    it('should get all the posts', async () => {
        await postModel.postPostModel({
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"1"
        })
        await postModel.postPostModel({
            title:"Testa detta med patrik hihi",
            content:"Vi har det så himla kul",
            owner:"patrik",
            _id:"2"
        })
        const getPosts = await postModel.getPostsModel()
        getPosts.should.eql([ //should.EQL eftersom det är arrays!
            {
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
        ])
    })

    it('should post a post', async () => {
        const blogPost = {
            title: 'hej',
            content: 'vad gör du?',
            owner: 'philip',
            _id: '6'
        }
        const postPost = await postModel.postPostModel(blogPost)
        postPost.should.eql({
            title: 'hej',
            content: 'vad gör du?',
            owner: 'philip',
            _id: '6' //idt ändras varje post så går ej att testa om man ej gör en test databas
        })
    })

    it('should update a post', async () => {
        await postModel.postPostModel({
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"1"
        })
        let id = '1'
        let task = {
            title: 'Elin',
            content: 'phip'
        }
        const updatePost = await postModel.editPostModel(id, task)
        updatePost.should.equal(1) //1 = true
    })
 
    it('should delete a post', async () => { //funkar endast när man deletar, men då failar alla andra typ
        await postModel.postPostModel({
            title:"Alexandre",
            content:"philip",
            owner:"philip",
            _id:"1"
        })
        let id = '1'
        const deletePost = await postModel.deletePostModel(id)
        deletePost.should.equal(1) //1 = true
    })
});
