const express = require('express')
const eventController = require('./event.controller')
const eventRouter = express.Router()


eventRouter.get('/',eventController.getAllEvents)
eventRouter.post('/create',eventController.addEvent)
eventRouter.delete('/:id',eventController.deleteEvent)
eventRouter.put('/:id',eventController.updateEvent)

module.exports = eventRouter