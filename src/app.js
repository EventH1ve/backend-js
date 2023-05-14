const express = require('express')
const cors = require ('cors')
const eventRouter = require('./routes/event/event.route')
const app = express()

app.use(cors())
app.use(express.json())

app.use(eventRouter)

app.get('/',(req, res) => {
    res.send('HALLOO')
    
})

module.exports = app


