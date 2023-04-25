const User = require("../models/User")

async function registerUser (req, res) {
    
    try {
        const { correo, password } = req.body
        const newUser = await User.create({ correo: correo, password: password, tipo_user: "usuario"})

        res.status(201).json(newUser)
        res.send("pog")
    } 
    catch (error) {
        res.status(400).json({
            error: error.name,
            message: error.message
        })
        res.send("not pog")
    }
}

async function loginUser (req, res) {
}

module.exports = {
    registerUser,
    loginUser
}