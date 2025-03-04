const express = require('express')

const {
    allUsers,
    getUserById,
    addUser,
    updateUser,
    deleteuser
} = require('./../controllers/user.controller.js')

const userRouter = express.Router()

userRouter.get('/users', allUsers)
userRouter.get('/users/:id', getUserById)
userRouter.post('/users', addUser)
userRouter.put("/users/:id", updateUser)
userRouter.delete("/users/:id", deleteuser)



module.exports = userRouter