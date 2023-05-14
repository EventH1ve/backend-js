const express = require('express')
const eventController = require('./event.controller')
const eventRouter = express.Router()


eventRouter.get('/api/event',eventController.getAllEvents)

module.exports = eventRouter