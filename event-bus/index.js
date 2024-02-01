
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 4002

app.post('/events', async (req, res) => {
    try {
        res.send('hit post in query')
    } catch (error) {
        console.error(error.message).status(500)
    }
})

app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`)
})
