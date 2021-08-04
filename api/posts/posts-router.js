// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query)
        res.json(posts)
    } 
    catch (error) {
        res.status(500).json({ message: "The posts information could not be retrieved" })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        if (id) {
            const post = await Posts.findById(id)
            res.json(post)
        } 
        else {
            res.status(404).json({ message: "The post with the specified ID does not exist" })
        }
    } catch (error) {
        res.status(500).json({ message: "The posts information could not be retrieved" })
    }
})

router.post('/', async (req, res) => {
    console.log('post')
    // try {
    //     const post = await Posts.insert(req.body)
    //     res.status(201).json(post)
    // } catch {

    // }
})

router.put('/:id', (req, res) => {
    console.log('put')
})

router.delete('/:id', (req, res) => {
    console.log('delete')
})

router.get('/:id/comments', (req, res) => {
    console.log('get comments')
})


module.exports = router