const User = require("../models/User")

async function registerUser (req, res) {
    try {
        const { correo, password } = req.body
        const newUser = await User.create({ correo: correo, password: password})
        res.status(201).json(newUser)
    } 
    catch (error) {
        res.status(400).json({message: err.message})
    }
}

async function loginUser (req, res) {

}

module.exports = {
    registerUser,
    loginUser
}