const { count, isOwner, getPostsModel, postPostModel, editPostModel, deletePostModel } = require('../models/postsModel');
require('chai').should();

describe('posts', () => {
    it('should count existing posts', async () => {

        const number = await count()
        number.should.equal(5)
        //här kan man ej testa mer än en gång
    });

    it('should check who is the owner', async () => {
        const id = '2'
        const id2 = '1'

        const owner = await isOwner(id)
        owner.should.equal('patrik')

        const owner2 = await isOwner(id2)
        owner2.should.equal('philip')
    })

    it('should get all the posts', async () => {
        const getPosts = await getPostsModel()
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
            }
        ])
    })

    it('should post a post', async () => {
        const blogPost = {
            title: 'hej',
            content: 'vad gör du?',
            owner: 'philip',
            _id: '6'
        }
        const postPost = await postPostModel(blogPost)
        postPost.should.equal({
            title: 'hej',
            content: 'vad gör du?',
            owner: 'philip',
            _id: '6' //idt ändras varje post så går ej att testa om man ej gör en test databas
        })
    })

    it('should update a post', async () => {
        let id = '5'
        let task = {
            title: 'Alexandre',
            content: 'philip'
        }
        const updatePost = await editPostModel(id, task)
        updatePost.should.equal(1) //1 = true
    })
 
    it('should delete a post', async () => { //funkar endast när man deletar, men då failar alla andra typ
        let id = '6'
        const deletePost = await deletePostModel(id)
        deletePost.should.equal(1) //1 = true
    })
});
