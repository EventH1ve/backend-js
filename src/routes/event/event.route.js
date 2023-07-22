const express = require('express')
const eventController = require('./event.controller')
const eventRouter = express.Router()


eventRouter.get('/',eventController.getAllEvents)
eventRouter.post('/create',eventController.addEvent)

module.exports = eventRouter