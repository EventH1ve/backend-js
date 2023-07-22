const express = require('express')
const eventController = require('./event.controller')
const eventRouter = express.Router()


eventRouter.get('/api/event',eventController.getAllEvents)
eventRouter.post('/api/event/create',eventController.addEvent)

module.exports = eventRouter