const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 4001

const posts = {}

app.use(express.json())
app.use(cors())

// object key id that posts to an array of comments. Comment will have id and content
const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    res.status(200).send(commentsByPostId[req.params.id] || 'not found')
})

app.post('/posts/:id/comments', (req, res) => {
    // in memory data structure
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPostId[req.params.id] || []

    comments.push({id: commentId, content})

    commentsByPostId[req.params.id] = comments

    res.status(201).json(comments)
})

app.listen(PORT, function() {
    console.log(`Post service listening on port: ${PORT}`)
})