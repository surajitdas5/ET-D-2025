const jwt = require('jsonwebtoken')
const User = require('./../models/user.model.js')

async function allUsers(req, res){
    try {
        let users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getUserById(req, res){
    try {
        // let data = req.params
        let { id } = req.params
        // console.log(id);
        let user = await User.findOne({_id: id})
        res.send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function addUser(req, res){
    try{
        let newUser = req.body
        let user = await User.create(newUser)
        res.status(201).send(user)
    } catch(error){
        res.status(400).send(error.message)
    }
    
}

async function updateUser(req, res){
    try {
        let user = req.body
        let { id } = req.params
        let updatedUser = await User.findOneAndUpdate({_id: id}, user)
        if(updatedUser){
            res.status(200).send(updatedUser)
        } else {
            res.status(404).send(`user not found`)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

async function deleteuser(req, res){
    let { id }= req.params
    try {
        let user = await User.findOneAndDelete({_id: id})
        if(user){
            res.status(200).send(user)
        } else {
            res.status(404).send(`user not found`)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function login(req, res){
    try{
        let { email, password } = req.body
        let user = await User.findOne({email})
        if(user){
            if(user.password === password){
                let token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET)
                res.send({token: token, name: user.name})
            } else {
                res.status(400).send({message: "Invalid Credentials"})
            }
        } else {
            res.status(400).send({message: "Invalid Credentials"})
        }
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    allUsers,
    getUserById,
    addUser,
    updateUser,
    deleteuser,
    login
}