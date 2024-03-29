const express = require('express')
const {randomBytes} = require('crypto')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 4000

const posts = {}

app.use(express.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.status(200).json(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body
    
    posts[id] = {
        id: id,
        title: title
    }
    
    res.status(201).json(posts)
})

app.listen(PORT, function() {
    console.log(`Post service listening on port: ${PORT}`)
})