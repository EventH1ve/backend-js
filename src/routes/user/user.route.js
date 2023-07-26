const express = require('express')
const userController = require('./user.controller')
const userRouter = express.Router()

userRouter.post('/api/signup', userController.signUp)
userRouter.post('/api/signin', userController.signIn)


module.exports = userRouter
