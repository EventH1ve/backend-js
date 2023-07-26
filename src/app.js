const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const eventRouter = require('./routes/event/event.route')
const userRouter = require('./routes/user/user.route')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(userRouter)
app.use('/api/event', eventRouter)


app.get('/', (req, res) => {
    res.send('HALLOO')

})

module.exports = app


