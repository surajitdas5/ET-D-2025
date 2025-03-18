const express = require('express')

const {
    allUsers,
    getUserById,
    addUser,
    updateUser,
    deleteuser
} = require('./../controllers/user.controller.js')
const logger = require('./../middleware/logger.middleware.js')

const userRouter = express.Router()

userRouter.post('/', addUser)
userRouter.get('/', logger, allUsers)
userRouter.get('/:id', getUserById)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteuser)



module.exports = userRouter