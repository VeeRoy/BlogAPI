const express = require ('express')
const controller = require('../controllers/postController')
const passport = require('passport')

require('../authentication/auth')

const server = express.Router()

server.post('/', passport.authenticate('jwt', { session: false }), controller.createPost)

server.get('/', controller.getPosts) // get posts by other parameters

server.get('/:id', controller.getPostsByID) // get posts by id

// find by id and update state and the blog posts
server.patch('/:id', passport.authenticate('jwt', { session: false }), controller.updateById)

// find by id and delete
server.delete('/:id',passport.authenticate('jwt', { session: false }), controller.deleteById)


module.exports = server

