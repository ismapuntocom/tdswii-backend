const { useIsRTL } = require("react-bootstrap/esm/ThemeProvider")
const User = require("../models/User")
const jwt = require("jsonwebtoken")


async function registerUser (req, res) {
    try {
        const { correo, password } = req.body
        const newUser = await User.create({ correo: correo, password: password, tipo_user: "usuario"})

        res.status(201).json(newUser)
    } 
    catch (error) {
        console.error(error.errors[0].message)
        console.error(error.parent.detail)
        console.error(error.parent.code)
        res.status(400).json({
            error: error.name,
            message: error.message
        })
    }
}

async function loginUser (req, res) {
    try {
        const { correo, password } = req.body
        const user = await User.findOne(
            { where: {
                correo: correo, 
                password: password
            }})
        
            if( user === null ) {
                res.status(201).json({message: "Not found"})
            } else {
                res.status(201).json({message: "Success"})
            }
    } 
    catch (error) {
        console.error(error.errors[0].message)
        console.error(error.parent.detail)
        console.error(error.parent.code)
        res.status(400).json({
            error: error.name,
            message: error.message
        })
    }
}

async function resetUserPasswordRequest(req, res) {
    const { email } = req.body

    try {
        const user = await User.findByPk(email)

        if (user === null) {
            return res.status(404).json({message: "User not found"})
        }

        const token = jwt.sign(
            { id: user.correo }, 
            process.env.JWT_SECRET,
            { expiresIN: "1h" }
        )

        const resetUrl = `http://localhost:3000/reset-password/${token}`
        const mailOptions = {
            from: "your_email@example.com",
            to: email,
            subject: "Recuperación de Contraseña",
            text: "Haz click en el siguiente link para obtener una nueva contraseña"
        }

        await transporter.sendMail(mailOptions)
        
        res.status(200).json({ message: "Pw reset mail sent" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

async function resetUserPasswordResponse(req, res) {
    const { token } = req.params
    const { newPassword } = req.body

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userMail = decoded.id

        const user = await UserfindByPk(userMail)

        if(user === null) {
            return res.status(404).json({ message: "User not found" })
        }

        user.password = newPassword
        await user.save()

        res.status(200).json({ message: "Password updated succesfully"})

    } catch (error) {
        console.error(error)

        if (error instanceof jwt.TokenExpiredError) {
            res.status(400).json( {message: "Password reset token has expired "})
        } else if (error instanceof jwt.JsonWebTokenError) {
            res.status(400).json({ message: "Invalid password reset token" })
        } else {
            res.status(500).json({ message: "Server error" })
        }
    }
}

module.exports = {
    registerUser,
    loginUser,
    resetUserPasswordRequest,
    resetUserPasswordResponse,
}